#!/bin/sh

#SNP data from CbioPortal(SNP module)
awk -F "\t" '{print $5"\t"$6"\t"$7"\t"$1"\t"$38}' ./CbioPortal/nsclc_pd1_msk_2018/data_mutations_extended.txt | sed '1d' | sort | uniq -c | sort | sed 's/^ *//' | awk -F " " '$1>0{print $2"\t"$3"\t"$1"\t"$5"|"$6}' > ./CbioPortal/SNP01.txt
#prepare SNP js file
python3 NGCircos_PrepareData.py SNP ./CbioPortal/SNP01.txt > ./CbioPortal/SNP01.js

#CNV data from CbioPortal(CNV module)
awk -F "\t" '(2^$6*2)>3{print $2"\t"$3"\t"$4"\t"(2^$6*2)}' ./CbioPortal/nsclc_pd1_msk_2018/data_cna_hg19.seg | sort -k1,1 -k2,2n > ./CbioPortal/CNV.txt
bedtools merge -i cnv.txt -c 4 -o count > ./CbioPortal/CNV01.txt
#prepare CNV js file
python3 NGCircos_PrepareData.py CNV ./CbioPortal/CNV01.txt > ./CbioPortal/CNV01.js

#gene fusion data from CbioPortal(LINK module)
grep "::" ./CbioPortal/nsclc_pd1_msk_2018/data_fusions.txt | awk -F "\t" '{print $10}' | awk -F ":" '{print $1"\t"$2"\t"$3"\t"$4"\t"$5"\t"$6}' | awk -F "\)" '{print $1"\t"$2"\t"$5"\t"$6}' | sed 's/Note//g'| sed 's/(NM_002944//g'| sed 's/(NM_001025159//g'| sed 's/(NM_013956//g' | sed 's/(NM_000321//g' | sed 's/(NM_006424//g' | sed 's/(//g' | grep -v "rearrangement" | uniq | sed 's/g\.//g' | sed 's/chr//g' | sed 's/ //g' | sed 's/-//g' | sed 's/ROS1$//g' | sed 's/5q32;6q22.1//g' | gsed 's/\t/@/g' | sed 's/@@/@/g' | sed 's/@$//' | awk -F "@" '{print $1"--"$2"\t"$3"\t"$4"\t"$4"\t"$1"\t"$5"\t"$6"\t"$6"\t"$2}' > ./CbioPortal/LINK01.txt
#prepare LINK js file
python3 NGCircos_PrepareData.py LINK ./CbioPortal/LINK01.txt > ./CbioPortal/LINK01.js
