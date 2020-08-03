#python ./bin/find_recomb_rate.py --snp ./data/SNP03.txt --out ./result/locus.js --bfile ./data/1000G_genotypes_2012-03/EUR/chr19 --ld-snp chr19:46172278[rs12345]  --ld-window-kb 1000 --ld-window 99999 --ld-window-r2 0.8 --recombRate ./data/hapmap3_2008-03_rel22_B36/genetic_map_chr19_b36.txt --filter --gene_annotation ./data/2019-05-29-gencodeV30annotation/gencode.v30.annotation.gff3.gz

import sys
import os
import math
import gzip

fileSNP=" "
fileOutput="./locus.js"
addressPed=" "
ldsnp=" "
ldwindowkb="1000"
ldwindow="10"
ldwindowr2="0"
addressRecombRate=" "
filterMark=False
fileGeneAnno=" "

for i in range(len(sys.argv)):
	if(sys.argv[i] == "--snp"):
		fileSNP=sys.argv[i+1]
	if(sys.argv[i] == "--out"):
		fileOutput=sys.argv[i+1]
	if(sys.argv[i] == "--bfile"):
		addressPed=sys.argv[i+1]
	if(sys.argv[i] == "--ld-snp"):
		ldsnp=sys.argv[i+1]
	if(sys.argv[i] == "--ld-window-kb"):
		ldwindowkb=sys.argv[i+1]
	if(sys.argv[i] == "--ld-window"):
		ldwindow=sys.argv[i+1]
	if(sys.argv[i] == "--ld-window-r2"):
		ldwindowr2=sys.argv[i+1]
	if(sys.argv[i] == "--recombRate"):
		addressRecombRate=sys.argv[i+1]
	if(sys.argv[i] == "--filter"):
		filterMark=True
	if(sys.argv[i] == "--gene_annotation"):
		fileGeneAnno=sys.argv[i+1]

if fileSNP == " ":
	sys.exit(" --snp [FILE] is required!")

if addressPed == " ":
	sys.exit(" --bfile [Same as plink --bfile] is required!")
	
if ldsnp == " ":
	sys.exit(" --ld-snp [Same as plink --ld-snp] is required!")

if addressRecombRate == " ":
	sys.exit(" --recombRate [FILE] is required!")
	
if not ldsnp.startswith("chr"):
	sys.exit("Please input the snp with chr1:100000 format!")
	
print("Start plink")
print("-----------")
addressOutput=os.path.dirname(fileOutput)
plinkCommand="plink --bfile "+addressPed+" --r2 --ld-snp "+ldsnp+" --ld-window-kb "+ldwindowkb+" --ld-window "+ldwindow+"  --ld-window-r2 "+ldwindowr2+" --out "+addressOutput+"/temp"
os.system(plinkCommand)
print("-----------")
print("end plink")

chrName=ldsnp.split(":")[0]

filer2_open=open(addressOutput+"/temp.ld","r")
filer2_read=filer2_open.readlines()

locals()[chrName+"r2"]={}
for j in range(1,len(filer2_read)):
	line_read=filer2_read[j]
	markName=line_read.split()[5]
	r2=line_read.split()[6]
	locals()[chrName+"r2"][markName]=r2

filer2_open.close()

print("---------------------")
print("Start matching...")

snpPosition=int(ldsnp.split(":")[1])
maxPosition=snpPosition+int(ldwindowkb)*1000
minPosition=snpPosition-int(ldwindowkb)*1000

fileOutput_open=open(fileOutput,"w")

#Genome start
fileOutput_open.write("var BioCircosGenome = [[\n")
fileOutput_open.write("	[\""+chrName+"\","+str(int(ldwindowkb)*2*1000)+"],\n")
fileOutput_open.write("]];\n")
#Genome end

TagSNPPosition=""
TagSNPValue=""
TagSNPDes=""

#SNP module start]
fileOutput_open.write("var SNP01 = [ \"SNP01\" , {\n")
fileOutput_open.write("  maxRadius: 205,\n")
fileOutput_open.write("  minRadius: 100,\n")
fileOutput_open.write("  SNPFillColorType: \"r2\",\n")
fileOutput_open.write("  SNPFillColor: \"#9400D3\",\n")
fileOutput_open.write("  SNPFillr2MaxColor: [\"darkblue\",\"lightblue\",\"green\",\"orange\",\"red\"],\n")
fileOutput_open.write("  ValueAxisManualScale: true,\n")
fileOutput_open.write("  ValueAxisMaxScale: 10,\n")
fileOutput_open.write("  ValueAxisMinScale: 0,\n")
fileOutput_open.write("  PointType: \"circle\",\n")
fileOutput_open.write("  circleSize: 2,\n")
fileOutput_open.write("  SNPAnimationDisplay: true,\n")
fileOutput_open.write("  SNPAnimationType: \"linear\",\n")
fileOutput_open.write("  SNPAnimationTime: 800,\n")
fileOutput_open.write("  SNPAnimationDelay: 2,\n")
fileOutput_open.write("} , [\n")

fh = open(fileSNP)
colorDict={0:"rgb(153,102,0)", 1:"rgb(102,102,0)", 2:"rgb(153,153,30)", 3:"rgb(204,0,0)", 4:"rgb(255,0,0)", 5:"rgb(255,0,204)", 6:"rgb(255,204,204)", 7:"rgb(255,153,0)", 8:"rgb(255,204,0)", 9:"rgb(255,255,0)", 10:"rgb(204,255,0)", 11:"rgb(0,255,0)", 12:"rgb(53,128,0)", 13:"rgb(0,0,204)", 14:"rgb(102,153,255)", 15:"rgb(153,204,255)", 16:"rgb(0,255,255)", 17:"rgb(204,255,255)", 18:"rgb(153,0,204)", 19:"rgb(204,51,255)", 20:"rgb(204,153,255)", 21:"rgb(102,102,102)", 22:"rgb(153,153,153)", 23:"rgb(204,204,204)"}
chrList=[]
for line in fh:
	line=line.rstrip(os.linesep)
	if line[0]!="#":#Title line started with "#"
		line=line.split("\t")
		if line[0] in chrList :
			pass
		else:
			chrList.append(line[0])
		
		if line[0] != chrName:
			continue
		
		if int(line[1])<minPosition or int(line[1])>maxPosition:
			continue
		
		if int(line[1])==snpPosition:
			#if it is the tag snp
			TagSNPPosition = str(int(line[1])-minPosition)
			TagSNPValue = str(math.log10(float(line[2])) * -1)
			TagSNPDes = line[3]
			continue
		
		markName=line[3]
		if markName in locals()[chrName+"r2"]:
			fileOutput_open.write("  {chr: \""+line[0]+"\", pos: \""+str(int(line[1])-minPosition)+"\", value: \""+str(math.log10(float(line[2])) * -1)+"\", des: \""+line[3]+"\", r2value: \""+locals()[chrName+"r2"][markName]+"\"},\n")
		else:
			if filterMark==True :
				pass
			else:
				fileOutput_open.write("  {chr: \""+line[0]+"\", pos: \""+str(int(line[1])-minPosition)+"\", value: \""+str(math.log10(float(line[2])) * -1)+"\", des: \""+line[3]+"\", r2value: \"0\"},\n")
				
fileOutput_open.write("]];\n")
fh.close()
#SNP module end

#Tag SNP module Start
if TagSNPPosition != "" and TagSNPDes != "" and TagSNPValue != "":
	fileOutput_open.write("var SNP02 = [ \"SNP02\" , {\n")
	fileOutput_open.write("  maxRadius: 205,\n")
	fileOutput_open.write("  minRadius: 100,\n")
	fileOutput_open.write("  SNPFillColorType: \"specific\",\n")
	fileOutput_open.write("  SNPFillColor: \"#991ecc\",\n")
	fileOutput_open.write("  ValueAxisManualScale: true,\n")
	fileOutput_open.write("  ValueAxisMaxScale: 10,\n")
	fileOutput_open.write("  ValueAxisMinScale: 0,\n")
	fileOutput_open.write("  PointType: \"rect\",\n")
	fileOutput_open.write("  rectWidth: 8,\n")
	fileOutput_open.write("  rectHeight: 8,\n")
	fileOutput_open.write("} , [\n")
	fileOutput_open.write("  {chr: \""+chrName+"\", pos: \""+TagSNPPosition+"\", value: \""+TagSNPValue+"\", des: \""+TagSNPDes+"\"},\n")
	fileOutput_open.write("]];\n")
#Tag SNP module End

#LINE module start
fileOutput_open.write("var LINE01 = [ \"LINE01\" , {\n")
fileOutput_open.write("  maxRadius: 205,\n")
fileOutput_open.write("  minRadius: 100,\n")
fileOutput_open.write("  ValueAxisManualScale: true,\n")
fileOutput_open.write("  ValueAxisMaxScale: 100,\n")
fileOutput_open.write("  ValueAxisMinScale: 0,\n")
fileOutput_open.write("  LineColor: \"#EEAD0E\",\n")
fileOutput_open.write("  LineWidth: 2,\n")
fileOutput_open.write("  LineType:\"linear\",\n")
fileOutput_open.write("} , [\n")

file_open=open(addressRecombRate,"r")
file_read=file_open.readlines()

for j in range(1,len(file_read)):
	line_read=file_read[j]
	position=line_read.split(" ")[0]
	recomb_rate=line_read.split(" ")[1]

	if int(position)>=minPosition and int(position)<=maxPosition:
		fileOutput_open.write("  {chr: \""+chrName+"\", pos: \""+str(int(position)-minPosition)+"\", value: \""+recomb_rate+"\"},\n")

fileOutput_open.write("]];\n")
file_open.close()
#LINE module end

print("End matching......")

#BACKGROUND module start
fileOutput_open.write("var BACKGROUND01 = [ \"BACKGROUND01\" , {\n")
fileOutput_open.write("	BginnerRadius: 90,\n")
fileOutput_open.write("	BgouterRadius: 215,\n")
fileOutput_open.write("	BgFillColor: \"#F2F2F2\",\n")
fileOutput_open.write("	BgborderColor : \"#000\",\n")
fileOutput_open.write("	BgborderSize : 0.3,\n")
fileOutput_open.write("	axisShow: \"true\",\n")
fileOutput_open.write("	axisWidth: 0.3,\n")
fileOutput_open.write("	axisColor: \"#000\",\n")
fileOutput_open.write("	axisOpacity: 0.5,\n")
fileOutput_open.write("	axisNum: 8,\n")
fileOutput_open.write("}];\n")
#BACKGROUND module end

print("Start finding gene......")

#GENE module start
if fileGeneAnno == " ":
	#if no gene annotation file input, then don't generate a gene module
	pass
else:

	geneListF=[]  #forward gene
	geneListR=[]  #reverse gene
	
	fileGeneAnno_open=gzip.open(fileGeneAnno)
	fileGeneAnno_read=fileGeneAnno_open.readlines()
	
	for i in range(len(fileGeneAnno_read)):
		if fileGeneAnno_read[i][0] == "#":
			#Annotation line
			pass
		else:
			line_read=fileGeneAnno_read[i].split("\t")
			if line_read[0] != chrName:
				continue
			if line_read[2] == "gene":
				if int(line_read[4])< minPosition or int(line_read[3])>maxPosition:
					continue
				else:
					if line_read[6]=="+" :
						geneListF.append("chr: \""+chrName+"\", strand: \"+\", start: \""+str(max(minPosition,int(line_read[3]))-minPosition)+"\", end: \""+str(min(int(line_read[4]),maxPosition)-minPosition)+"\", type:\"gene\", name:\""+line_read[8].split(";")[3].split("=")[1]+"\"")
					elif line_read[6]=="-":
						geneListR.append("chr: \""+chrName+"\", strand: \"-\", start: \""+str(max(minPosition,int(line_read[3]))-minPosition)+"\", end: \""+str(min(int(line_read[4]),maxPosition)-minPosition)+"\", type:\"gene\", name:\""+line_read[8].split(";")[3].split("=")[1]+"\"")
			if line_read[2] == "CDS":
				if int(line_read[4])< minPosition or int(line_read[3])>maxPosition:
					continue
				else:
					if line_read[6]=="+" :
						geneListF.append("chr: \""+chrName+"\", strand: \"+\", start: \""+str(max(minPosition,int(line_read[3]))-minPosition)+"\", end: \""+str(min(int(line_read[4]),maxPosition)-minPosition)+"\", type:\"cds\", name:\""+"CDS:"+line_read[8].split(";")[5].split("=")[1]+"\"")
					elif line_read[6]=="-":
						geneListR.append("chr: \""+chrName+"\", strand: \"-\", start: \""+str(max(minPosition,int(line_read[3]))-minPosition)+"\", end: \""+str(min(int(line_read[4]),maxPosition)-minPosition)+"\", type:\"cds\", name:\""+"CDS:"+line_read[8].split(";")[5].split("=")[1]+"\"")
			if line_read[2] == "five_prime_UTR" :
				if int(line_read[4])< minPosition or int(line_read[3])>maxPosition:
					continue
				else:
					if line_read[6]=="+" :
						geneListF.append("chr: \""+chrName+"\", strand: \"+\", start: \""+str(max(minPosition,int(line_read[3]))-minPosition)+"\", end: \""+str(min(int(line_read[4]),maxPosition)-minPosition)+"\", type:\"utr\", name:\""+"UTR5:"+line_read[8].split(";")[5].split("=")[1]+"\"")
					elif line_read[6]=="-":
						geneListR.append("chr: \""+chrName+"\", strand: \"-\", start: \""+str(max(minPosition,int(line_read[3]))-minPosition)+"\", end: \""+str(min(int(line_read[4]),maxPosition)-minPosition)+"\", type:\"utr\", name:\""+"UTR5:"+line_read[8].split(";")[5].split("=")[1]+"\"")

			if line_read[2] == "three_prime_UTR":
				if int(line_read[4])< minPosition or int(line_read[3])>maxPosition:
					continue
				else:
					if line_read[6]=="+" :
						geneListF.append("chr: \""+chrName+"\", strand: \"+\", start: \""+str(max(minPosition,int(line_read[3]))-minPosition)+"\", end: \""+str(min(int(line_read[4]),maxPosition)-minPosition)+"\", type:\"utr\", name:\""+"UTR3:"+line_read[8].split(";")[5].split("=")[1]+"\"")
					elif line_read[6]=="-":
						geneListR.append("chr: \""+chrName+"\", strand: \"-\", start: \""+str(max(minPosition,int(line_read[3]))-minPosition)+"\", end: \""+str(min(int(line_read[4]),maxPosition)-minPosition)+"\", type:\"utr\", name:\""+"UTR3:"+line_read[8].split(";")[5].split("=")[1]+"\"")
	
	fileOutput_open.write("var GENE01 = [ \"GENE01\" , {\n")
	fileOutput_open.write("  outerRadius: -10,\n")
	fileOutput_open.write("  innerRadius: -20,\n")
	fileOutput_open.write("  pathColor: \"black\",\n")
	fileOutput_open.write("  pathWidth:1,\n")
	fileOutput_open.write("  arrow:false,\n")
	fileOutput_open.write("  arrowGap: 15,\n")
	fileOutput_open.write("  arrowColor: \"black\",\n")
	fileOutput_open.write("  arrowSize: \"12px\",\n")
	fileOutput_open.write("  cdsColor: \"blue\",\n")
	fileOutput_open.write("  cdsStrokeColor: \"blue\",\n")
	fileOutput_open.write("  cdsStrokeWidth: 2,\n")
	fileOutput_open.write("  utrWidth: 3,\n")
	fileOutput_open.write("  utrColor: \"blue\",\n")
	fileOutput_open.write("  utrStrokeColor: \"blue\",\n")
	fileOutput_open.write("  utrStrokeWidth: 2,\n")
	fileOutput_open.write("} , [\n")

	noDuplicate_genelistF=list(set(geneListF))
	
	for i in range(len(noDuplicate_genelistF)):
		fileOutput_open.write("  {"+noDuplicate_genelistF[i]+"},\n")
		
	fileOutput_open.write("]];\n")	
	
	fileOutput_open.write("var GENE02 = [ \"GENE02\" , {\n")
	fileOutput_open.write("  outerRadius: -30,\n")
	fileOutput_open.write("  innerRadius: -40,\n")
	fileOutput_open.write("  pathColor: \"black\",\n")
	fileOutput_open.write("  pathWidth:1,\n")
	fileOutput_open.write("  arrow:false,\n")
	fileOutput_open.write("  arrowGap: 2,\n")
	fileOutput_open.write("  arrowColor: \"black\",\n")
	fileOutput_open.write("  arrowSize: \"12px\",\n")
	fileOutput_open.write("  cdsColor: \"blue\",\n")
	fileOutput_open.write("  cdsStrokeColor: \"blue\",\n")
	fileOutput_open.write("  cdsStrokeWidth: 2,\n")
	fileOutput_open.write("  utrWidth: 3,\n")
	fileOutput_open.write("  utrColor: \"blue\",\n")
	fileOutput_open.write("  utrStrokeColor: \"blue\",\n")
	fileOutput_open.write("  utrStrokeWidth: 2,\n")
	fileOutput_open.write("} , [\n")

	noDuplicate_genelistR=list(set(geneListR))

	for i in range(len(noDuplicate_genelistR)):
		fileOutput_open.write("  {"+noDuplicate_genelistR[i]+"},\n")
		
	fileOutput_open.write("]];\n")	
#GENE module end
print("End finding gene......")

fileOutput_open.close()

print("Everything is done!!!!")
			
