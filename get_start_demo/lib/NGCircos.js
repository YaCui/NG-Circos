/**
* NGCircos.js is an open source interactive Javascript library which 
* provides an easy way to interactive display biological data on the web.
* It implements a raster-based SVG visualization using the open source 
* Javascript framework jquery.js. NGCircos.js is multiplatform and works 
* in all major internet browsers (Internet Explorer, Mozilla Firefox, 
* Google Chrome, Safari, Opera). Its speed is determined by the client's 
* hardware and internet browser. For smoothest user experience, we recommend 
* Google Chrome.
*
* Source code, tutorial, documentation, and example data are freely available
* from NGCircos.js website "http://bioinfo.ibp.ac.cn/NGCircos/".
* 
* @author <a href="cui_ya@163.com">Ya Cui</a>, <a href="cuizhe@hit.edu.cn">Zhe Cui</a>
* @version 2.0.0
*
* @example 
*      var NGCircosGenome = [
*         ["chr1" , 249250621],
*         ["chr2" , 243199373]
*      ];
*      NGCircos01 = new NGCircos(NGCircosGenome,{
*         target : "NGCircos",
*         svgWidth : 900,
*         svgHeight : 600
*      });
*      NGCircos01.draw_genome(NGCircos01.genomeLength);
*
**/

var NGCircos;

(function($){

  NGCircos = function(){
      var self = this;

      if(arguments.length >= 2){
            self.argumentsNGCircosSettings=arguments[arguments.length-1];
            self.argumentsNGCircosGenome=arguments[arguments.length-2];

            self.CNV = new Array();
            self.CNVConfig = new Array();
            for (var n=0; n< arguments.length; n++){
                var reg=/^CNV/;
                if(reg.test(arguments[n][0])){
                    self.CNVConfig.push(arguments[n][1]);
                    self.CNV.push(arguments[n][2]);
                }
            }

            self.HEATMAP = new Array();
            self.HEATMAPConfig = new Array();
            for (var n=0; n< arguments.length; n++){
                var reg=/^HEATMAP/;
                if(reg.test(arguments[n][0])){
                    self.HEATMAPConfig.push(arguments[n][1]);
                    self.HEATMAP.push(arguments[n][2]);
                }
            }
            
            self.BUBBLE = new Array();
            self.BUBBLEConfig = new Array();
            for (var n=0; n< arguments.length; n++){
              var reg=/^BUBBLE/;
              if(reg.test(arguments[n][0])){
                self.BUBBLEConfig.push(arguments[n][1]);
                self.BUBBLE.push(arguments[n][2]);
              }
            }
            
            self.GENE = new Array();
            self.GENEConfig = new Array();
            for (var n=0; n< arguments.length; n++){
              var reg=/^GENE/;
              if(reg.test(arguments[n][0])){
                self.GENEConfig.push(arguments[n][1]);
                self.GENE.push(arguments[n][2]);
              }
            }

            self.SNP = new Array();
            self.SNPConfig = new Array();
            self.SNPGraphData = new Array();
            for (var n=0; n< arguments.length; n++){
                var reg=/^SNP/;
                if(reg.test(arguments[n][0])){
                    self.SNPConfig.push(arguments[n][1]);
                    self.SNP.push(arguments[n][2]);
                    if( arguments[n][3] != undefined){
                      self.SNPGraphData.push(arguments[n][3])
                    }
                }
            }
            
            self.LABEL = new Array();
            self.LABELConfig = new Array();
            for (var n=0; n< arguments.length; n++){
              var reg=/^LABEL/;
              if(reg.test(arguments[n][0])){
                self.LABELConfig.push(arguments[n][1]);
                self.LABEL.push(arguments[n][2]);
              }
            }

            self.LINK = new Array();
            self.LINKConfig = new Array();
            for (var n=0; n< arguments.length; n++){
                var reg=/^LINK/;
                if(reg.test(arguments[n][0])){
                    self.LINKConfig.push(arguments[n][1]);
                    self.LINK.push(arguments[n][2]);
                }
            }
            
            self.CHORD = new Array();
            self.CHORDConfig = new Array();
            for (var n=0; n< arguments.length; n++){
              var reg=/^CHORD/;
              if(reg.test(arguments[n][0])){
                self.CHORDConfig.push(arguments[n][1]);
                self.CHORD.push(arguments[n][2]);
              }
            }

//            self.COMPARE = new Array();
//            self.COMPAREConfig = new Array();
//            for (var n=0; n< arguments.length; n++){
//              var reg=/^COMPARE/;
//              if(reg.test(arguments[n][0])){
//                self.COMPAREConfig.push(arguments[n][1]);
//                self.COMPARE.push(arguments[n][2]);
//              }
//            }


            self.HISTOGRAM = new Array();
            self.HISTOGRAMConfig = new Array();
            for (var n=0; n< arguments.length; n++){
                var reg=/^HISTOGRAM/;
                if(reg.test(arguments[n][0])){
                    self.HISTOGRAMConfig.push(arguments[n][1]);
                    self.HISTOGRAM.push(arguments[n][2]);
                }
            }
            
            self.LINE = new Array();
            self.LINEConfig = new Array();
            for (var n=0; n< arguments.length; n++){
                var reg=/^LINE/;
                if(reg.test(arguments[n][0])){
                    self.LINEConfig.push(arguments[n][1]);
                    self.LINE.push(arguments[n][2]);
                }
            }
            
            self.WIG = new Array();
            self.WIGConfig = new Array();
            for (var n=0; n< arguments.length; n++){
              var reg=/^WIG/;
              if(reg.test(arguments[n][0])){
                self.WIGConfig.push(arguments[n][1]);
                self.WIG.push(arguments[n][2]);
              }
            }

            self.SCATTER = new Array();
            self.SCATTERConfig = new Array();
            for (var n=0; n< arguments.length; n++){
                var reg=/^SCATTER/;
                if(reg.test(arguments[n][0])){
                    self.SCATTERConfig.push(arguments[n][1]);
                    self.SCATTER.push(arguments[n][2]);
                }
            }

            self.BACKGROUND = new Array();
            self.BACKGROUNDConfig = new Array();
            for (var n=0; n< arguments.length; n++){
                var reg=/^BACKGROUND/;
                if(reg.test(arguments[n][0])){
                    self.BACKGROUNDConfig.push(arguments[n][1]);
                    self.BACKGROUND.push(arguments[n][2]);
                }
            }

            self.TEXT = new Array();
            self.TEXTConfig = new Array();
            for (var n=0; n< arguments.length; n++){
                var reg=/^TEXT/;
                if(reg.test(arguments[n][0])){
                    self.TEXTConfig.push(arguments[n][1]);
                    self.TEXT.push(arguments[n][2]);
                }
            }
            
            self.LEGEND = new Array();
            self.LEGENDConfig = new Array();
            for (var n=0; n< arguments.length; n++){
              var reg=/^LEGEND/;
              if(reg.test(arguments[n][0])){
                self.LEGENDConfig.push(arguments[n][1]);
                self.LEGEND.push(arguments[n][2]);
              }
            }
            
            self.AUXILIARYLINE = new Array();
            self.AUXILIARYLINEConfig = new Array();
            for (var n=0; n< arguments.length; n++){
              var reg=/^AUXILIARYLINE/;
              if(reg.test(arguments[n][0])){
                self.AUXILIARYLINEConfig.push(arguments[n][1]);
                self.AUXILIARYLINE.push(arguments[n][2]);
              }
            }

            self.ARC = new Array();
            self.ARCConfig = new Array();
            for (var n=0; n< arguments.length; n++){
                var reg=/^ARC/;
                if(reg.test(arguments[n][0])){
                    self.ARCConfig.push(arguments[n][1]);
                    self.ARC.push(arguments[n][2]);
                }
            }
            
                       
            //zhec3
            self.LOLLIPOP = new Array();
            self.LOLLIPOPConfig = new Array()
            for (var n=0; n< arguments.length; n++){
              var reg=/^LOLLIPOP/;
              if(reg.test(arguments[n][0])){
                self.LOLLIPOPConfig.push(arguments[n][1]); //New, store the configuration of LOLLIPOP point
                self.LOLLIPOP.push(arguments[n][2]);   //New, store the information of each LOLLIPOP
                }
                
            }
          
            //zhec3
            

      }else{
            document.getElementById(self.settings.target).innerHTML='Arguments Error: at least two arguments must supplied.<br>example: new NGCircos([FUSION01,CNV01,SNP01,]NGCircosGenome,{target : "NGCircos",zoom : true})';
      }

      self.settings = {
          "target" : "NGCircos",
          "svgWidth" : 900,
          "svgHeight" : 600,
          //zhec
          "svgClassName":"NGCircos",
          //zhec
          "chrPad" : 0.04,
          "innerRadius" : 246,
          "outerRadius" : 270,
          "zoom" : false,
          "compareEvent":false,
          "compareEventGroupGapRate":0.1,
          "compareEventGroupDistance":0,
          "genomeFillColor" : ["rgb(153,102,0)", "rgb(102,102,0)", "rgb(153,153,30)", "rgb(204,0,0)","rgb(255,0,0)", "rgb(255,0,204)", "rgb(255,204,204)", "rgb(255,153,0)", "rgb(255,204,0)", "rgb(255,255,0)", "rgb(204,255,0)", "rgb(0,255,0)","rgb(53,128,0)", "rgb(0,0,204)", "rgb(102,153,255)", "rgb(153,204,255)", "rgb(0,255,255)", "rgb(204,255,255)", "rgb(153,0,204)", "rgb(204,51,255)","rgb(204,153,255)", "rgb(102,102,102)", "rgb(153,153,153)", "rgb(204,204,204)"],
          //zhec 20190411
          "CNVxlink":false,
          //zhec 20190411
          "CNVMouseEvent" : true,
//          "CNVMouseCombinationEvent":false,
          "CNVMouseClickDisplay" : false,
          "CNVMouseClickColor" : "red",
          "CNVMouseClickArcOpacity" : 1.0,
          "CNVMouseClickArcStrokeColor" : "#F26223",
          "CNVMouseClickArcStrokeWidth" : 0,
          "CNVMouseClickTextFromData" : "fourth",   //first,second,third,fourth column
          "CNVMouseClickTextOpacity" : 1,
          "CNVMouseClickTextColor" : "red",
          "CNVMouseClickTextSize" : 8,
          "CNVMouseClickTextPostionX" : 0,
          "CNVMouseClickTextPostionY" : 0,
          "CNVMouseClickTextDrag" : true,
          "CNVMouseDownDisplay" : false,
          "CNVMouseDownColor" : "green",
          "CNVMouseDownArcOpacity" : 1.0,
          "CNVMouseDownArcStrokeColor" : "#F26223",
          "CNVMouseDownArcStrokeWidth" : 0,
          "CNVMouseEnterDisplay" : false,
          "CNVMouseEnterColor" : "yellow",
          "CNVMouseEnterArcOpacity" : 1.0,
          "CNVMouseEnterArcStrokeColor" : "#F26223",
          "CNVMouseEnterArcStrokeWidth" : 0,
          "CNVMouseLeaveDisplay" : false,
          "CNVMouseLeaveColor" : "pink",
          "CNVMouseLeaveArcOpacity" : 1.0,
          "CNVMouseLeaveArcStrokeColor" : "#F26223",
          "CNVMouseLeaveArcStrokeWidth" : 0,
          "CNVMouseMoveDisplay" : false,
          "CNVMouseMoveColor" : "red",
          "CNVMouseMoveArcOpacity" : 1.0,
          "CNVMouseMoveArcStrokeColor" : "#F26223",
          "CNVMouseMoveArcStrokeWidth" : 0,
          "CNVMouseOutDisplay" : false,
          "CNVMouseOutAnimationTime" : 500,
          "CNVMouseOutColor" : "red",
          "CNVMouseOutArcOpacity" : 1.0,
          "CNVMouseOutArcStrokeColor" : "red",
          "CNVMouseOutArcStrokeWidth" : 0,
          "CNVMouseUpDisplay" : false,
          "CNVMouseUpColor" : "grey",
          "CNVMouseUpArcOpacity" : 1.0,
          "CNVMouseUpArcStrokeColor" : "#F26223",
          "CNVMouseUpArcStrokeWidth" : 0,
          "CNVMouseOverDisplay" : false,
          "CNVMouseOverColor" : "red",
          "CNVMouseOverArcOpacity" : 1.0,
          "CNVMouseOverArcStrokeColor" : "#F26223",
          "CNVMouseOverArcStrokeWidth" : 3,
          "CNVMouseOverTooltipsSetting" : "style1", //custom, style1
          "CNVMouseOverTooltipsHtml" : " ",
          // "CNVMouseOverTooltipsHtml01" : "chr : ",
          // "CNVMouseOverTooltipsHtml02" : "<br>start : ",
          // "CNVMouseOverTooltipsHtml03" : "<br>end : ",
          // "CNVMouseOverTooltipsHtml04" : "<br>value : ",
          // "CNVMouseOverTooltipsHtml05" : "",
          "CNVMouseOverTooltipsPosition" : "absolute",
          "CNVMouseOverTooltipsBackgroundColor" : "white",
          "CNVMouseOverTooltipsBorderStyle" : "solid",
          "CNVMouseOverTooltipsBorderWidth" : 0,
          "CNVMouseOverTooltipsPadding" : "3px",
          "CNVMouseOverTooltipsBorderRadius" : "3px",
          "CNVMouseOverTooltipsOpacity" : 0.8,
          "HEATMAPMouseEvent" : true,
          "HEATMAPMouseClickDisplay" : false,
          "HEATMAPMouseClickColor" : "green",            //"none","red"
          "HEATMAPMouseClickOpacity" : 1.0,            //"none",1.0
          "HEATMAPMouseClickStrokeColor" : "none",  //"none","#F26223"
          "HEATMAPMouseClickStrokeWidth" : "none",          //"none",3
          "HEATMAPMouseDownDisplay" : false,
          "HEATMAPMouseDownColor" : "green",            //"none","red"
          "HEATMAPMouseDownOpacity" : 1.0,            //"none",1.0
          "HEATMAPMouseDownStrokeColor" : "none",  //"none","#F26223"
          "HEATMAPMouseDownStrokeWidth" : "none",          //"none",3
          "HEATMAPMouseEnterDisplay" : false,
          "HEATMAPMouseEnterColor" : "green",            //"none","red"
          "HEATMAPMouseEnterOpacity" : 1.0,            //"none",1.0
          "HEATMAPMouseEnterStrokeColor" : "none",  //"none","#F26223"
          "HEATMAPMouseEnterStrokeWidth" : "none",          //"none",3
          "HEATMAPMouseLeaveDisplay" : false,
          "HEATMAPMouseLeaveColor" : "green",            //"none","red"
          "HEATMAPMouseLeaveOpacity" : 1.0,            //"none",1.0
          "HEATMAPMouseLeaveStrokeColor" : "none",  //"none","#F26223"
          "HEATMAPMouseLeaveStrokeWidth" : "none",          //"none",3
          "HEATMAPMouseMoveDisplay" : false,
          "HEATMAPMouseMoveColor" : "green",            //"none","red"
          "HEATMAPMouseMoveOpacity" : 1.0,            //"none",1.0
          "HEATMAPMouseMoveStrokeColor" : "none",  //"none","#F26223"
          "HEATMAPMouseMoveStrokeWidth" : "none",          //"none",3
          "HEATMAPMouseOutDisplay" : false,
          "HEATMAPMouseOutAnimationTime" : 500,
          "HEATMAPMouseOutColor" : "green",            //"none","red"
          "HEATMAPMouseOutOpacity" : 1.0,            //"none",1.0
          "HEATMAPMouseOutStrokeColor" : "none",  //"none","#F26223"
          "HEATMAPMouseOutStrokeWidth" : "none",          //"none",3
          "HEATMAPMouseUpDisplay" : false,
          "HEATMAPMouseUpColor" : "green",            //"none","red"
          "HEATMAPMouseUpOpacity" : 1.0,            //"none",1.0
          "HEATMAPMouseUpStrokeColor" : "none",  //"none","#F26223"
          "HEATMAPMouseUpStrokeWidth" : "none",          //"none",3
          "HEATMAPMouseOverDisplay" : false,
          "HEATMAPMouseOverColor" : "none",            //"none","red"
          "HEATMAPMouseOverOpacity" : 1.0,            //"none",1.0
          "HEATMAPMouseOverStrokeColor" : "none",  //"none","#F26223"
          "HEATMAPMouseOverStrokeWidth" : "none",          //"none",3
          "HEATMAPMouseOverTooltipsSetting" : "style1", //custom, style1
          "HEATMAPMouseOverTooltipsHtml" : " ",
          // "HEATMAPMouseOverTooltipsHtml01" : "chr : ",
          // "HEATMAPMouseOverTooltipsHtml02" : "<br>position: ",
          // "HEATMAPMouseOverTooltipsHtml03" : "-",
          // "HEATMAPMouseOverTooltipsHtml04" : "<br>name : ",
          // "HEATMAPMouseOverTooltipsHtml05" : "<br>value : ",
          // "HEATMAPMouseOverTooltipsHtml06" : "",
          "HEATMAPMouseOverTooltipsPosition" : "absolute",
          "HEATMAPMouseOverTooltipsBackgroundColor" : "white",
          "HEATMAPMouseOverTooltipsBorderStyle" : "solid",
          "HEATMAPMouseOverTooltipsBorderWidth" : 0,
          "HEATMAPMouseOverTooltipsPadding" : "3px",
          "HEATMAPMouseOverTooltipsBorderRadius" : "3px",
          "HEATMAPMouseOverTooltipsOpacity" : 0.8,
          //zhec 20190509
          "BUBBLExlink":false,
          "BUBBLEMouseEvent" : true,
          "BUBBLEMouseClickDisplay" : false,
          "BUBBLEMouseClickColor" : "green",            //"none","red"
          "BUBBLEMouseClickOpacity" : 1.0,            //"none",1.0
          "BUBBLEMouseClickStrokeColor" : "none",  //"none","#F26223"
          "BUBBLEMouseClickStrokeWidth" : "none",          //"none",3
          "BUBBLEMouseDownDisplay" : false,
          "BUBBLEMouseDownColor" : "green",            //"none","red"
          "BUBBLEMouseDownOpacity" : 1.0,            //"none",1.0
          "BUBBLEMouseDownStrokeColor" : "none",  //"none","#F26223"
          "BUBBLEMouseDownStrokeWidth" : "none",          //"none",3
          "BUBBLEMouseEnterDisplay" : false,
          "BUBBLEMouseEnterColor" : "green",            //"none","red"
          "BUBBLEMouseEnterOpacity" : 1.0,            //"none",1.0
          "BUBBLEMouseEnterStrokeColor" : "none",  //"none","#F26223"
          "BUBBLEMouseEnterStrokeWidth" : "none",          //"none",3
          "BUBBLEMouseLeaveDisplay" : false,
          "BUBBLEMouseLeaveColor" : "green",            //"none","red"
          "BUBBLEMouseLeaveOpacity" : 1.0,            //"none",1.0
          "BUBBLEMouseLeaveStrokeColor" : "none",  //"none","#F26223"
          "BUBBLEMouseLeaveStrokeWidth" : "none",          //"none",3
          "BUBBLEMouseMoveDisplay" : false,
          "BUBBLEMouseMoveColor" : "green",            //"none","red"
          "BUBBLEMouseMoveOpacity" : 1.0,            //"none",1.0
          "BUBBLEMouseMoveStrokeColor" : "none",  //"none","#F26223"
          "BUBBLEMouseMoveStrokeWidth" : "none",          //"none",3
          "BUBBLEMouseOutDisplay" : false,
          "BUBBLEMouseOutAnimationTime" : 500,
          "BUBBLEMouseOutColor" : "green",            //"none","red"
          "BUBBLEMouseOutOpacity" : 1.0,            //"none",1.0
          "BUBBLEMouseOutStrokeColor" : "none",  //"none","#F26223"
          "BUBBLEMouseOutStrokeWidth" : "none",          //"none",3
          "BUBBLEMouseUpDisplay" : false,
          "BUBBLEMouseUpColor" : "green",            //"none","red"
          "BUBBLEMouseUpOpacity" : 1.0,            //"none",1.0
          "BUBBLEMouseUpStrokeColor" : "none",  //"none","#F26223"
          "BUBBLEMouseUpStrokeWidth" : "none",          //"none",3
          "BUBBLEMouseOverDisplay" : false,
          "BUBBLEMouseOverColor" : "none",            //"none","red"
          "BUBBLEMouseOverOpacity" : 1.0,            //"none",1.0
          "BUBBLEMouseOverStrokeColor" : "none",  //"none","#F26223"
          "BUBBLEMouseOverStrokeWidth" : "none",          //"none",3
          "BUBBLEMouseOverTooltipsSetting" : "style1", //custom, style1
          "BUBBLEMouseOverTooltipsHtml" : " ",
          // "BUBBLEMouseOverTooltipsHtml01" : "chr : ",
          // "BUBBLEMouseOverTooltipsHtml02" : "<br>position: ",
          // "BUBBLEMouseOverTooltipsHtml03" : "-",
          // "BUBBLEMouseOverTooltipsHtml04" : "<br>name : ",
          // "BUBBLEMouseOverTooltipsHtml05" : "<br>value : ",
          // "BUBBLEMouseOverTooltipsHtml06" : "",
          "BUBBLEMouseOverTooltipsPosition" : "absolute",
          "BUBBLEMouseOverTooltipsBackgroundColor" : "white",
          "BUBBLEMouseOverTooltipsBorderStyle" : "solid",
          "BUBBLEMouseOverTooltipsBorderWidth" : 0,
          "BUBBLEMouseOverTooltipsPadding" : "3px",
          "BUBBLEMouseOverTooltipsBorderRadius" : "3px",
          "BUBBLEMouseOverTooltipsOpacity" : 0.8,
          //zhec 20190509
          //zhec 20190411
          "SNPxlink":false,
          //zhec 20190411
          "SNPMouseEvent" : true,
          "SNPMouseCombinationEvent":false,
          "SNPMouseCombinationImageDisplay":false,
          "SNPMouseCombinationImageTitle":"This is image",
          "SNPMouseCombinationImageTitleSize":5,
          "SNPMouseCombinationImageTitleWeight":"bold",
          "SNPMouseCombinationImageTitleColor":"black",
          "SNPMouseCombinationImagePositionX":0,
          "SNPMouseCombinationImagePositionY":0,
          "SNPMouseCombinationImageHeight":200,
          "SNPMouseCombinationImageWidth":300,
          "SNPMouseCombinationGraphDisplay":false,
          "SNPMouseCombinationGraphTitle":"This is graph",
          "SNPMouseCombinationGraphTitleSize":5,
          "SNPMouseCombinationGraphTitleWeight":"bold",
          "SNPMouseCombinationGraphTitleColor":"black",
          "SNPMouseCombinationGraphType":"histogram",   //histogram, pie, line
          "SNPMouseCombinationGraphPositionX":0,
          "SNPMouseCombinationGraphPositionY":0,
          "SNPMouseCombinationGraphHeight":200,
          "SNPMouseCombinationGraphWidth":300,
          "SNPMouseCombinationGraphHistogramBarColor":"blue",
          "SNPMouseCombinationGraphHistogramPadding":30,
          "SNPMouseCombinationGraphHistogramPositionCorrectX":0,
          "SNPMouseCombinationGraphPieAutoColor":true,
          "SNPMouseCombinationGraphPieColor":["black","blue","orange","red","green"],
          "SNPMouseCombinationGraphPieSize":50,
          "SNPMouseCombinationGraphPieStroke":true,
          "SNPMouseCombinationGraphPieStrokeColor":"black",
          "SNPMouseCombinationGraphPieStrokeWidth":1,
          "SNPMouseCombinationGraphPieOpacity":1.0,
          "SNPMouseCombinationGraphLineType":"linear",
          "SNPMouseCombinationGraphLineColor":"black",
          "SNPMouseCombinationGraphLineWidth":1,
          "SNPMouseCombinationGraphLinePoint":false,
          "SNPMouseCombinationGraphLinePointSize":5,
          "SNPMouseCombinationGraphLinePointAutoColor":true,
          "SNPMouseCombinationGraphLinePointColor":["black","blue","orange","red","green"],
          "SNPMouseCombinationGraphLinePointStroke":true,
          "SNPMouseCombinationGraphLinePointStrokeColor":"black",
          "SNPMouseCombinationGraphLinePointStrokeWidth":1,
          "SNPMouseCombinationGraphLinePointOpacity":1,
          "SNPMouseCombinationGraphLinePositionCorrectX":0,
          "SNPMouseCombinationTextDisplay":false,
          "SNPMouseCombinationTextColor":"red",
          "SNPMouseCombinationTextSize":3,
          "SNPMouseCombinationTextWeight":"bold",
          "SNPMouseCombinationTextPositionCorrectX":0,
          "SNPMouseCombinationTextPositionCorrectY":0,
          "SNPMouseClickDisplay" : false,
          "SNPMouseClickColor" : "red",
          "SNPMouseClickCircleSize" : 4,
          "SNPMouseClickCircleOpacity" : 1.0,
          "SNPMouseClickCircleStrokeColor" : "#F26223",
          "SNPMouseClickCircleStrokeWidth" : 0,
          "SNPMouseClickTextFromData" : "fourth",   //first,second,third,fourth column
          "SNPMouseClickTextOpacity" : 1.0,
          "SNPMouseClickTextColor" : "red",
          "SNPMouseClickTextSize" : 8,
          "SNPMouseClickTextPostionX" : 1.0,
          "SNPMouseClickTextPostionY" : 10.0,
          "SNPMouseClickTextDrag" : true,
          "SNPMouseDownDisplay" : false,
          "SNPMouseDownColor" : "green",
          "SNPMouseDownCircleSize" : 4,
          "SNPMouseDownCircleOpacity" : 1.0,
          "SNPMouseDownCircleStrokeColor" : "#F26223",
          "SNPMouseDownCircleStrokeWidth" : 0,
          "SNPMouseEnterDisplay" : false,
          "SNPMouseEnterColor" : "yellow",
          "SNPMouseEnterCircleSize" : 4,
          "SNPMouseEnterCircleOpacity" : 1.0,
          "SNPMouseEnterCircleStrokeColor" : "#F26223",
          "SNPMouseEnterCircleStrokeWidth" : 0,
          "SNPMouseLeaveDisplay" : false,
          "SNPMouseLeaveColor" : "pink",
          "SNPMouseLeaveCircleSize" : 4,
          "SNPMouseLeaveCircleOpacity" : 1.0,
          "SNPMouseLeaveCircleStrokeColor" : "#F26223",
          "SNPMouseLeaveCircleStrokeWidth" : 0,
          "SNPMouseMoveDisplay" : false,
          "SNPMouseMoveColor" : "red",
          "SNPMouseMoveCircleSize" : 2,
          "SNPMouseMoveCircleOpacity" : 1.0,
          "SNPMouseMoveCircleStrokeColor" : "#F26223",
          "SNPMouseMoveCircleStrokeWidth" : 0,
          "SNPMouseOutDisplay" : false,
          "SNPMouseOutAnimationTime" : 500,
          "SNPMouseOutColor" : "red",
          "SNPMouseOutCircleSize" : 2,
          "SNPMouseOutCircleOpacity" : 1.0,
          "SNPMouseOutCircleStrokeColor" : "red",
          "SNPMouseOutCircleStrokeWidth" : 0,
          "SNPMouseUpDisplay" : false,
          "SNPMouseUpColor" : "grey",
          "SNPMouseUpCircleSize" : 4,
          "SNPMouseUpCircleOpacity" : 1.0,
          "SNPMouseUpCircleStrokeColor" : "#F26223",
          "SNPMouseUpCircleStrokeWidth" : 0,
          "SNPMouseOverDisplay" : false,
          "SNPMouseOverColor" : "red",
          "SNPMouseOverCircleSize" : 2,
          "SNPMouseOverCircleOpacity" : 1.0,
          "SNPMouseOverCircleStrokeColor" : "#F26223",
          "SNPMouseOverCircleStrokeWidth" : 3,
          "SNPMouseOverTooltipsSetting" : "style1", //custom, style1
          "SNPMouseOverTooltipsHtml" : " ",
          "SNPMouseOverTooltipsPosition" : "absolute",
          "SNPMouseOverTooltipsBackgroundColor" : "white",
          "SNPMouseOverTooltipsBorderStyle" : "solid",
          "SNPMouseOverTooltipsBorderWidth" : 0,
          "SNPMouseOverTooltipsPadding" : "3px",
          "SNPMouseOverTooltipsBorderRadius" : "3px",
          "SNPMouseOverTooltipsOpacity" : 0.8,
          "TEXTModuleDragEvent" : true,
          "LINKxlink":false,
          "LINKMouseEvent" : true,
          "LINKMouseClickDisplay" : false,
          "LINKMouseClickOpacity" : 1.0,
          "LINKMouseClickStrokeColor" : "green",
          "LINKMouseClickStrokeWidth" : 4,
          "LINKMouseDownDisplay" : false,
          "LINKMouseDownOpacity" : 1.0,
          "LINKMouseDownStrokeColor" : "#F26223",
          "LINKMouseDownStrokeWidth" : 4,
          "LINKMouseEnterDisplay" : false,
          "LINKMouseEnterOpacity" : 1.0,
          "LINKMouseEnterStrokeColor" : "#F26223",
          "LINKMouseEnterStrokeWidth" : 4,
          "LINKMouseLeaveDisplay" : false,
          "LINKMouseLeaveOpacity" : 1.0,
          "LINKMouseLeaveStrokeColor" : "#F26223",
          "LINKMouseLeaveStrokeWidth" : 4,
          "LINKMouseMoveDisplay" : false,
          "LINKMouseMoveOpacity" : 1.0,
          "LINKMouseMoveStrokeColor" : "#F26223",
          "LINKMouseMoveStrokeWidth" : 4,
          "LINKMouseOutDisplay" : false,
          "LINKMouseOutAnimationTime" : 500,
          "LINKMouseOutOpacity" : 1.0,
          "LINKMouseOutStrokeColor" : "red",
          "LINKMouseOutStrokeWidth" : 4,
          "LINKMouseUpDisplay" : false,
          "LINKMouseUpOpacity" : 1.0,
          "LINKMouseUpStrokeColor" : "#F26223",
          "LINKMouseUpStrokeWidth" : 4,
          "LINKMouseOverDisplay" : false,
          "LINKMouseOverOpacity" : 1.0,
          "LINKMouseOverStrokeColor" : "#F26223",
          "LINKMouseOverStrokeWidth" : 3,
          "LINKMouseOverTooltipsSetting" : "style1",  //custom, style1
          "LINKMouseOverTooltipsHtml" : " ",
          "LINKMouseOverTooltipsPosition" : "absolute",
          "LINKMouseOverTooltipsBackgroundColor" : "white",
          "LINKMouseOverTooltipsBorderStyle" : "solid",
          "LINKMouseOverTooltipsBorderWidth" : 0,
          "LINKMouseOverTooltipsPadding" : "3px",
          "LINKMouseOverTooltipsBorderRadius" : "3px",
          "LINKMouseOverTooltipsOpacity" : 0.8,
          "LINKLabelDragEvent" : false,
          //chord
          "CHORDMouseEvent" : true,
          "CHORDMouseFillColorExcluded":"#FFFFFF",
          "CHORDMouseClickDisplay" : false,
          "CHORDMouseClickOpacity" : 1.0,
          "CHORDMouseClickStrokeColor" : "green",
          "CHORDMouseClickStrokeWidth" : 4,
          "CHORDMouseDownDisplay" : false,
          "CHORDMouseDownOpacity" : 1.0,
          "CHORDMouseDownStrokeColor" : "#F26223",
          "CHORDMouseDownStrokeWidth" : 4,
          "CHORDMouseEnterDisplay" : false,
          "CHORDMouseEnterOpacity" : 1.0,
          "CHORDMouseEnterStrokeColor" : "#F26223",
          "CHORDMouseEnterStrokeWidth" : 4,
          "CHORDMouseLeaveDisplay" : false,
          "CHORDMouseLeaveOpacity" : 1.0,
          "CHORDMouseLeaveStrokeColor" : "#F26223",
          "CHORDMouseLeaveStrokeWidth" : 4,
          "CHORDMouseMoveDisplay" : false,
          "CHORDMouseMoveOpacity" : 1.0,
          "CHORDMouseMoveStrokeColor" : "#F26223",
          "CHORDMouseMoveStrokeWidth" : 4,
          "CHORDMouseOutDisplay" : false,
          "CHORDMouseOutAnimationTime" : 500,
          "CHORDMouseOutOpacity" : 1.0,
          "CHORDMouseOutStrokeColor" : "red",
          "CHORDMouseOutStrokeWidth" : 4,
          "CHORDMouseUpDisplay" : false,
          "CHORDMouseUpOpacity" : 1.0,
          "CHORDMouseUpStrokeColor" : "#F26223",
          "CHORDMouseUpStrokeWidth" : 4,
          "CHORDMouseOverDisplay" : false,
          "CHORDMouseOverOpacity" : 1.0,
          "CHORDMouseOverStrokeColor" : "#F26223",
          "CHORDMouseOverStrokeWidth" : 3,
//          "CHORDMouseOverTooltipsHtml01" : "CHORD : ",
//          "CHORDMouseOverTooltipsHtml02" : "",
//          "CHORDMouseOverTooltipsPosition" : "absolute",
//          "CHORDMouseOverTooltipsBackgroundColor" : "white",
//          "CHORDMouseOverTooltipsBorderStyle" : "solid",
//          "CHORDMouseOverTooltipsBorderWidth" : 0,
//          "CHORDMouseOverTooltipsPadding" : "3px",
//          "CHORDMouseOverTooltipsBorderRadius" : "3px",
//          "CHORDMouseOverTooltipsOpacity" : 0.8,
          //chord
          
          //COMPARE
//          "COMPAREMouseEvent" : true,
//          "COMPAREMouseClickDisplay" : false,
//          "COMPAREMouseClickOpacity" : 1.0,
//          "COMPAREMouseClickStrokeColor" : "green",
//          "COMPAREMouseClickStrokeWidth" : 4,
//          "COMPAREMouseDownDisplay" : false,
//          "COMPAREMouseDownOpacity" : 1.0,
//          "COMPAREMouseDownStrokeColor" : "#F26223",
//          "COMPAREMouseDownStrokeWidth" : 4,
//          "COMPAREMouseEnterDisplay" : false,
//          "COMPAREMouseEnterOpacity" : 1.0,
//          "COMPAREMouseEnterStrokeColor" : "#F26223",
//          "COMPAREMouseEnterStrokeWidth" : 4,
//          "COMPAREMouseLeaveDisplay" : false,
//          "COMPAREMouseLeaveOpacity" : 1.0,
//          "COMPAREMouseLeaveStrokeColor" : "#F26223",
//          "COMPAREMouseLeaveStrokeWidth" : 4,
//          "COMPAREMouseMoveDisplay" : false,
//          "COMPAREMouseMoveOpacity" : 1.0,
//          "COMPAREMouseMoveStrokeColor" : "#F26223",
//          "COMPAREMouseMoveStrokeWidth" : 4,
//          "COMPAREMouseOutDisplay" : false,
//          "COMPAREMouseOutAnimationTime" : 500,
//          "COMPAREMouseOutOpacity" : 1.0,
//          "COMPAREMouseOutStrokeColor" : "red",
//          "COMPAREMouseOutStrokeWidth" : 4,
//          "COMPAREMouseUpDisplay" : false,
//          "COMPAREMouseUpOpacity" : 1.0,
//          "COMPAREMouseUpStrokeColor" : "#F26223",
//          "COMPAREMouseUpStrokeWidth" : 4,
//          "COMPAREMouseOverDisplay" : false,
//          "COMPAREMouseOverOpacity" : 1.0,
//          "COMPAREMouseOverStrokeColor" : "#F26223",
//          "COMPAREMouseOverStrokeWidth" : 3,
          //COMPARE
          
          //zhec 20190411
          "HISTOGRAMxlink":false,
          //zhec 20190411
          "HISTOGRAMMouseEvent" : true,
          "HISTOGRAMMouseClickDisplay" : false,
          "HISTOGRAMMouseClickColor" : "red",            //"none","red"
          "HISTOGRAMMouseClickOpacity" : 1.0,            //"none",1.0
          "HISTOGRAMMouseClickStrokeColor" : "none",  //"none","#F26223"
          "HISTOGRAMMouseClickStrokeWidth" : "none",          //"none",3
          "HISTOGRAMMouseDownDisplay" : false,
          "HISTOGRAMMouseDownColor" : "red",            //"none","red"
          "HISTOGRAMMouseDownOpacity" : 1.0,            //"none",1.0
          "HISTOGRAMMouseDownStrokeColor" : "none",  //"none","#F26223"
          "HISTOGRAMMouseDownStrokeWidth" : "none",          //"none",3
          "HISTOGRAMMouseEnterDisplay" : false,
          "HISTOGRAMMouseEnterColor" : "red",            //"none","red"
          "HISTOGRAMMouseEnterOpacity" : 1.0,            //"none",1.0
          "HISTOGRAMMouseEnterStrokeColor" : "none",  //"none","#F26223"
          "HISTOGRAMMouseEnterStrokeWidth" : "none",          //"none",3
          "HISTOGRAMMouseLeaveDisplay" : false,
          "HISTOGRAMMouseLeaveColor" : "red",            //"none","red"
          "HISTOGRAMMouseLeaveOpacity" : 1.0,            //"none",1.0
          "HISTOGRAMMouseLeaveStrokeColor" : "none",  //"none","#F26223"
          "HISTOGRAMMouseLeaveStrokeWidth" : "none",          //"none",3
          "HISTOGRAMMouseMoveDisplay" : false,
          "HISTOGRAMMouseMoveColor" : "red",            //"none","red"
          "HISTOGRAMMouseMoveOpacity" : 1.0,            //"none",1.0
          "HISTOGRAMMouseMoveStrokeColor" : "none",  //"none","#F26223"
          "HISTOGRAMMouseMoveStrokeWidth" : "none",          //"none",3
          "HISTOGRAMMouseOutDisplay" : false,
          "HISTOGRAMMouseOutAnimationTime" : 500,
          "HISTOGRAMMouseOutColor" : "red",            //"none","red"
          "HISTOGRAMMouseOutOpacity" : 1.0,            //"none",1.0
          "HISTOGRAMMouseOutStrokeColor" : "none",  //"none","#F26223"
          "HISTOGRAMMouseOutStrokeWidth" : "none",          //"none",3
          "HISTOGRAMMouseUpDisplay" : false,
          "HISTOGRAMMouseUpColor" : "red",            //"none","red"
          "HISTOGRAMMouseUpOpacity" : 1.0,            //"none",1.0
          "HISTOGRAMMouseUpStrokeColor" : "none",  //"none","#F26223"
          "HISTOGRAMMouseUpStrokeWidth" : "none",          //"none",3
          "HISTOGRAMMouseOverDisplay" : false,
          "HISTOGRAMMouseOverColor" : "red",            //"none","red"
          "HISTOGRAMMouseOverOpacity" : 1.0,            //"none",1.0
          "HISTOGRAMMouseOverStrokeColor" : "none",  //"none","#F26223"
          "HISTOGRAMMouseOverStrokeWidth" : "none",          //"none",3
          "HISTOGRAMMouseOverTooltipsSetting" : "style1", //custom, style1
          "HISTOGRAMMouseOverTooltipsHtml" : " ",
          // "HISTOGRAMMouseOverTooltipsHtml01" : "chr :",
          // "HISTOGRAMMouseOverTooltipsHtml02" : "<br>position: ",
          // "HISTOGRAMMouseOverTooltipsHtml03" : "-",
          // "HISTOGRAMMouseOverTooltipsHtml04" : "<br>name : ",
          // "HISTOGRAMMouseOverTooltipsHtml05" : "<br>value : ",
          // "HISTOGRAMMouseOverTooltipsHtml06" : "",
          "HISTOGRAMMouseOverTooltipsPosition" : "absolute",
          "HISTOGRAMMouseOverTooltipsBackgroundColor" : "white",
          "HISTOGRAMMouseOverTooltipsBorderStyle" : "solid",
          "HISTOGRAMMouseOverTooltipsBorderWidth" : 0,
          "HISTOGRAMMouseOverTooltipsPadding" : "3px",
          "HISTOGRAMMouseOverTooltipsBorderRadius" : "3px",
          "HISTOGRAMMouseOverTooltipsOpacity" : 0.8,
          "LINEMouseEvent" : true,
          "LINEMouseClickDisplay" : false,
          "LINEMouseClickLineOpacity" : 1,           //"none"
          "LINEMouseClickLineStrokeColor" : "red",   //"none"
          "LINEMouseClickLineStrokeWidth" : "none",  //"none"
          "LINEMouseDownDisplay" : false,
          "LINEMouseDownLineOpacity" : 1,           //"none"
          "LINEMouseDownLineStrokeColor" : "red",   //"none"
          "LINEMouseDownLineStrokeWidth" : "none",  //"none"
          "LINEMouseEnterDisplay" : false,
          "LINEMouseEnterLineOpacity" : 1,           //"none"
          "LINEMouseEnterLineStrokeColor" : "red",   //"none"
          "LINEMouseEnterLineStrokeWidth" : "none",  //"none"
          "LINEMouseLeaveDisplay" : false,
          "LINEMouseLeaveLineOpacity" : 1,           //"none"
          "LINEMouseLeaveLineStrokeColor" : "red",   //"none"
          "LINEMouseLeaveLineStrokeWidth" : "none",  //"none"
          "LINEMouseMoveDisplay" : false,
          "LINEMouseMoveLineOpacity" : 1,           //"none"
          "LINEMouseMoveLineStrokeColor" : "red",   //"none"
          "LINEMouseMoveLineStrokeWidth" : "none",  //"none"
          "LINEMouseOutDisplay" : false,
          "LINEMouseOutAnimationTime" : 500,
          "LINEMouseOutLineOpacity" : 1.0,   //"none"
          "LINEMouseOutLineStrokeColor" : "red",    //"none"
          "LINEMouseOutLineStrokeWidth" : "none",    //"none"
          "LINEMouseUpDisplay" : false,
          "LINEMouseUpLineOpacity" : 1,           //"none"
          "LINEMouseUpLineStrokeColor" : "red",   //"none"
          "LINEMouseUpLineStrokeWidth" : "none",  //"none"
          "LINEMouseOverDisplay" : false,
          "LINEMouseOverLineOpacity" : 1,           //"none"
          "LINEMouseOverLineStrokeColor" : "red",   //"none"
          "LINEMouseOverLineStrokeWidth" : "none",  //"none"
          "LINEMouseOverTooltipsSetting" : "style1", //custom, style1
          "LINEMouseOverTooltipsHtml" : " ",
          // "LINEMouseOverTooltipsHtml01" : "Line",
          "LINEMouseOverTooltipsPosition" : "absolute",
          "LINEMouseOverTooltipsBackgroundColor" : "white",
          "LINEMouseOverTooltipsBorderStyle" : "solid",
          "LINEMouseOverTooltipsBorderWidth" : 0,
          "LINEMouseOverTooltipsPadding" : "3px",
          "LINEMouseOverTooltipsBorderRadius" : "3px",
          "LINEMouseOverTooltipsOpacity" : 0.8,
          //WIG
          "WIGMouseEvent" : true,
          "WIGMouseClickDisplay" : false,
          "WIGMouseClickLineOpacity" : 1,           //"none"
          "WIGMouseClickLineStrokeColor" : "red",   //"none"
          "WIGMouseClickLineStrokeWidth" : "none",  //"none"
          "WIGMouseClickFillColor":"none",
          "WIGMouseDownDisplay" : false,
          "WIGMouseDownLineOpacity" : 1,           //"none"
          "WIGMouseDownLineStrokeColor" : "red",   //"none"
          "WIGMouseDownLineStrokeWidth" : "none",  //"none"
          "WIGMouseDownFillColor":"none",
          "WIGMouseEnterDisplay" : false,
          "WIGMouseEnterLineOpacity" : 1,           //"none"
          "WIGMouseEnterLineStrokeColor" : "red",   //"none"
          "WIGMouseEnterLineStrokeWidth" : "none",  //"none"
          "WIGMouseEnterFillColor":"none",
          "WIGMouseLeaveDisplay" : false,
          "WIGMouseLeaveLineOpacity" : 1,           //"none"
          "WIGMouseLeaveLineStrokeColor" : "red",   //"none"
          "WIGMouseLeaveLineStrokeWidth" : "none",  //"none"
          "WIGMouseLeaveFillColor":"none",
          "WIGMouseMoveDisplay" : false,
          "WIGMouseMoveLineOpacity" : 1,           //"none"
          "WIGMouseMoveLineStrokeColor" : "red",   //"none"
          "WIGMouseMoveLineStrokeWidth" : "none",  //"none"
          "WIGMouseMoveFillColor":"none",
          "WIGMouseOutDisplay" : false,
          "WIGMouseOutAnimationTime" : 500,
          "WIGMouseOutLineOpacity" : 1.0,   //"none"
          "WIGMouseOutLineStrokeColor" : "red",    //"none"
          "WIGMouseOutLineStrokeWidth" : "none",    //"none"
          "WIGMouseOutFillColor":"none",
          "WIGMouseUpDisplay" : false,
          "WIGMouseUpLineOpacity" : 1,           //"none"
          "WIGMouseUpLineStrokeColor" : "red",   //"none"
          "WIGMouseUpLineStrokeWidth" : "none",  //"none"
          "WIGMouseUpFillColor":"none",
          "WIGMouseOverDisplay" : false,
          "WIGMouseOverLineOpacity" : 1,           //"none"
          "WIGMouseOverLineStrokeColor" : "red",   //"none"
          "WIGMouseOverLineStrokeWidth" : "none",  //"none"
          "WIGMouseOverFillColor":"none",
          "WIGMouseOverTooltipsSetting" : "style1", //custom, style1
          "WIGMouseOverTooltipsHtml" : " ",
          // "WIGMouseOverTooltipsHtml01" : "Line",
          "WIGMouseOverTooltipsPosition" : "absolute",
          "WIGMouseOverTooltipsBackgroundColor" : "white",
          "WIGMouseOverTooltipsBorderStyle" : "solid",
          "WIGMouseOverTooltipsBorderWidth" : 0,
          "WIGMouseOverTooltipsPadding" : "3px",
          "WIGMouseOverTooltipsBorderRadius" : "3px",
          "WIGMouseOverTooltipsOpacity" : 0.8,
          //WIG
          //zhec 20190411
          "SCATTERxlink":false,
          //zhec 20190411
          "SCATTERMouseEvent" : true,
          "SCATTERMouseClickDisplay" : false,
          "SCATTERMouseClickColor" : "red",
          "SCATTERMouseClickCircleSize" : 4,
          "SCATTERMouseClickCircleOpacity" : 1.0,
          "SCATTERMouseClickCircleStrokeColor" : "#F26223",
          "SCATTERMouseClickCircleStrokeWidth" : 0,
          "SCATTERMouseClickTextFromData" : "fourth",   //first,second,third,fourth column
          "SCATTERMouseClickTextOpacity" : 1,
          "SCATTERMouseClickTextColor" : "red",
          "SCATTERMouseClickTextSize" : 8,
          "SCATTERMouseClickTextPostionX" : 1.0,
          "SCATTERMouseClickTextPostionY" : 10.0,
          "SCATTERMouseClickTextDrag" : true,
          "SCATTERMouseDownDisplay" : false,
          "SCATTERMouseDownColor" : "green",
          "SCATTERMouseDownCircleSize" : 4,
          "SCATTERMouseDownCircleOpacity" : 1.0,
          "SCATTERMouseDownCircleStrokeColor" : "#F26223",
          "SCATTERMouseDownCircleStrokeWidth" : 0,
          "SCATTERMouseEnterDisplay" : false,
          "SCATTERMouseEnterColor" : "yellow",
          "SCATTERMouseEnterCircleSize" : 4,
          "SCATTERMouseEnterCircleOpacity" : 1.0,
          "SCATTERMouseEnterCircleStrokeColor" : "#F26223",
          "SCATTERMouseEnterCircleStrokeWidth" : 0,
          "SCATTERMouseLeaveDisplay" : false,
          "SCATTERMouseLeaveColor" : "pink",
          "SCATTERMouseLeaveCircleSize" : 4,
          "SCATTERMouseLeaveCircleOpacity" : 1.0,
          "SCATTERMouseLeaveCircleStrokeColor" : "#F26223",
          "SCATTERMouseLeaveCircleStrokeWidth" : 0,
          "SCATTERMouseMoveDisplay" : false,
          "SCATTERMouseMoveColor" : "red",
          "SCATTERMouseMoveCircleSize" : 2,
          "SCATTERMouseMoveCircleOpacity" : 1.0,
          "SCATTERMouseMoveCircleStrokeColor" : "#F26223",
          "SCATTERMouseMoveCircleStrokeWidth" : 0,
          "SCATTERMouseOutDisplay" : false,
          "SCATTERMouseOutAnimationTime" : 500,
          "SCATTERMouseOutColor" : "red",
          "SCATTERMouseOutCircleSize" : 2,
          "SCATTERMouseOutCircleOpacity" : 1.0,
          "SCATTERMouseOutCircleStrokeColor" : "red",
          "SCATTERMouseOutCircleStrokeWidth" : 0,
          "SCATTERMouseUpDisplay" : false,
          "SCATTERMouseUpColor" : "grey",
          "SCATTERMouseUpCircleSize" : 4,
          "SCATTERMouseUpCircleOpacity" : 1.0,
          "SCATTERMouseUpCircleStrokeColor" : "#F26223",
          "SCATTERMouseUpCircleStrokeWidth" : 0,
          "SCATTERMouseOverDisplay" : false,
          "SCATTERMouseOverColor" : "red",
          "SCATTERMouseOverCircleSize" : 2,
          "SCATTERMouseOverCircleOpacity" : 1.0,
          "SCATTERMouseOverCircleStrokeColor" : "#F26223",
          "SCATTERMouseOverCircleStrokeWidth" : 3,
          "SCATTERMouseOverTooltipsSetting" : "style1", //custom, style1
          "SCATTERMouseOverTooltipsHtml" : " ",
          // "SCATTERMouseOverTooltipsHtml01" : "item : ",
          // "SCATTERMouseOverTooltipsHtml02" : "<br>start : ",
          // "SCATTERMouseOverTooltipsHtml03" : "<br>end : ",
          // "SCATTERMouseOverTooltipsHtml04" : "<br>name : ",
          // "SCATTERMouseOverTooltipsHtml05" : "<br>des : ",
          // "SCATTERMouseOverTooltipsHtml06" : "",
          "SCATTERMouseOverTooltipsPosition" : "absolute",
          "SCATTERMouseOverTooltipsBackgroundColor" : "white",
          "SCATTERMouseOverTooltipsBorderStyle" : "solid",
          "SCATTERMouseOverTooltipsBorderWidth" : 0,
          "SCATTERMouseOverTooltipsPadding" : "3px",
          "SCATTERMouseOverTooltipsBorderRadius" : "3px",
          "SCATTERMouseOverTooltipsOpacity" : 0.8,
          //zhec 20190411
          "ARCxlink":false,
          //zhec 20190411
          "ARCMouseEvent" : true,
          "ARCMouseClickDisplay" : false,
          "ARCMouseClickColor" : "red",
          "ARCMouseClickArcOpacity" : 1.0,
          "ARCMouseClickArcStrokeColor" : "#F26223",
          "ARCMouseClickArcStrokeWidth" : 1,
          "ARCMouseClickTextFromData" : "fourth",   //first,second,third,fourth column
          "ARCMouseClickTextOpacity" : 1,
          "ARCMouseClickTextColor" : "red",
          "ARCMouseClickTextSize" : 8,
          "ARCMouseClickTextPostionX" : 0,
          "ARCMouseClickTextPostionY" : 0,
          "ARCMouseClickTextDrag" : true,
          "ARCMouseDownDisplay" : false,
          "ARCMouseDownColor" : "green",
          "ARCMouseDownArcOpacity" : 1.0,
          "ARCMouseDownArcStrokeColor" : "#F26223",
          "ARCMouseDownArcStrokeWidth" : 0,
          "ARCMouseEnterDisplay" : false,
          "ARCMouseEnterColor" : "yellow",
          "ARCMouseEnterArcOpacity" : 1.0,
          "ARCMouseEnterArcStrokeColor" : "#F26223",
          "ARCMouseEnterArcStrokeWidth" : 0,
          "ARCMouseLeaveDisplay" : false,
          "ARCMouseLeaveColor" : "pink",
          "ARCMouseLeaveArcOpacity" : 1.0,
          "ARCMouseLeaveArcStrokeColor" : "#F26223",
          "ARCMouseLeaveArcStrokeWidth" : 0,
          "ARCMouseMoveDisplay" : false,
          "ARCMouseMoveColor" : "red",
          "ARCMouseMoveArcOpacity" : 1.0,
          "ARCMouseMoveArcStrokeColor" : "#F26223",
          "ARCMouseMoveArcStrokeWidth" : 0,
          "ARCMouseOutDisplay" : false,
          "ARCMouseOutAnimationTime" : 500,
          "ARCMouseOutColor" : "red",
          "ARCMouseOutArcOpacity" : 1.0,
          "ARCMouseOutArcStrokeColor" : "red",
          "ARCMouseOutArcStrokeWidth" : 0,
          "ARCMouseUpDisplay" : false,
          "ARCMouseUpColor" : "grey",
          "ARCMouseUpArcOpacity" : 1.0,
          "ARCMouseUpArcStrokeColor" : "#F26223",
          "ARCMouseUpArcStrokeWidth" : 0,
          "ARCMouseOverDisplay" : false,
          "ARCMouseOverColor" : "red",
          "ARCMouseOverArcOpacity" : 1.0,
          "ARCMouseOverArcStrokeColor" : "#F26223",
          "ARCMouseOverArcStrokeWidth" : 3,
          "ARCMouseOverTooltipsSetting" : "style1", //custom, style1
          "ARCMouseOverTooltipsHtml" : " ",
          // "ARCMouseOverTooltipsHtml01" : "item : ",
          // "ARCMouseOverTooltipsHtml02" : "<br>start : ",
          // "ARCMouseOverTooltipsHtml03" : "<br>end : ",
          // "ARCMouseOverTooltipsHtml04" : "<br>des : ",
          // "ARCMouseOverTooltipsHtml05" : "",
          "ARCMouseOverTooltipsPosition" : "absolute",
          "ARCMouseOverTooltipsBackgroundColor" : "white",
          "ARCMouseOverTooltipsBorderStyle" : "solid",
          "ARCMouseOverTooltipsBorderWidth" : 0,
          "ARCMouseOverTooltipsPadding" : "3px",
          "ARCMouseOverTooltipsBorderRadius" : "3px",
          "ARCMouseOverTooltipsOpacity" : 0.8,
          //zhec 0401
          "GENExlink":false,
          "GENEMouseEvent" : true,
          "GENEMouseClickDisplay" : false,
          "GENEMouseClickColor" : "red",
          "GENEMouseClickArcOpacity" : 1.0,
          "GENEMouseClickArcStrokeColor" : "#F26223",
          "GENEMouseClickArcStrokeWidth" : 1,
          "GENEMouseClickTextFromData" : "fourth",   //first,second,third,fourth column
          "GENEMouseClickTextOpacity" : 1,
          "GENEMouseClickTextColor" : "red",
          "GENEMouseClickTextSize" : 8,
          "GENEMouseClickTextPostionX" : 0,
          "GENEMouseClickTextPostionY" : 0,
          "GENEMouseClickTextDrag" : true,
          "GENEMouseDownDisplay" : false,
          "GENEMouseDownColor" : "green",
          "GENEMouseDownArcOpacity" : 1.0,
          "GENEMouseDownArcStrokeColor" : "#F26223",
          "GENEMouseDownArcStrokeWidth" : 0,
          "GENEMouseEnterDisplay" : false,
          "GENEMouseEnterColor" : "yellow",
          "GENEMouseEnterArcOpacity" : 1.0,
          "GENEMouseEnterArcStrokeColor" : "#F26223",
          "GENEMouseEnterArcStrokeWidth" : 0,
          "GENEMouseLeaveDisplay" : false,
          "GENEMouseLeaveColor" : "pink",
          "GENEMouseLeaveArcOpacity" : 1.0,
          "GENEMouseLeaveArcStrokeColor" : "#F26223",
          "GENEMouseLeaveArcStrokeWidth" : 0,
          "GENEMouseMoveDisplay" : false,
          "GENEMouseMoveColor" : "red",
          "GENEMouseMoveArcOpacity" : 1.0,
          "GENEMouseMoveArcStrokeColor" : "#F26223",
          "GENEMouseMoveArcStrokeWidth" : 0,
          "GENEMouseOutDisplay" : false,
          "GENEMouseOutAnimationTime" : 500,
          "GENEMouseOutColor" : "red",
          "GENEMouseOutArcOpacity" : 1.0,
          "GENEMouseOutArcStrokeColor" : "red",
          "GENEMouseOutArcStrokeWidth" : 0,
          "GENEMouseUpDisplay" : false,
          "GENEMouseUpColor" : "grey",
          "GENEMouseUpArcOpacity" : 1.0,
          "GENEMouseUpArcStrokeColor" : "#F26223",
          "GENEMouseUpArcStrokeWidth" : 0,
          "GENEMouseOverDisplay" : false,
          "GENEMouseOverColor" : "red",
          "GENEMouseOverArcOpacity" : 1.0,
          "GENEMouseOverArcStrokeColor" : "#F26223",
          "GENEMouseOverArcStrokeWidth" : 3,
          "GENEMouseOverTooltipsSetting" : "style1", //custom, style1
          "GENEMouseOverTooltipsHtml" : " ",
          // "GENEMouseOverTooltipsHtml01" : "gene : ",
          // "GENEMouseOverTooltipsHtml02" : "<br>start : ",
          // "GENEMouseOverTooltipsHtml03" : "<br>end : ",
          // "GENEMouseOverTooltipsHtml04" : "<br>name : ",
          // "GENEMouseOverTooltipsHtml05" : "<br>strand : ",
          // "GENEMouseOverTooltipsHtml06" : "<br>type : ",
          // "GENEMouseOverTooltipsHtml07" : "",
          "GENEMouseOverTooltipsPosition" : "absolute",
          "GENEMouseOverTooltipsBackgroundColor" : "white",
          "GENEMouseOverTooltipsBorderStyle" : "solid",
          "GENEMouseOverTooltipsBorderWidth" : 0,
          "GENEMouseOverTooltipsPadding" : "3px",
          "GENEMouseOverTooltipsBorderRadius" : "3px",
          "GENEMouseOverTooltipsOpacity" : 0.8,
          //zhec 0401
          
          //zhec3
          "LOLLIPOPxlink":false,
          "LOLLIPOPMouseEvent" : true,
          "LOLLIPOPMouseClickDisplay" : false,
          "LOLLIPOPMouseClickColor" : "red",
          "LOLLIPOPMouseClickCircleSize" : 4,
          "LOLLIPOPMouseClickCircleOpacity" : 1.0,
          "LOLLIPOPMouseClickCircleStrokeColor" : "#F26223",
          "LOLLIPOPMouseClickCircleStrokeWidth" : 0,
          "LOLLIPOPMouseClickTextFromData" : "fourth",  
          "LOLLIPOPMouseClickTextOpacity" : 1.0,
          "LOLLIPOPMouseClickTextColor" : "red",
          "LOLLIPOPMouseClickTextSize" : 8,
          "LOLLIPOPMouseClickTextPostionX" : 1.0,
          "LOLLIPOPMouseClickTextPostionY" : 10.0,
          "LOLLIPOPMouseClickTextDrag" : true,
          "LOLLIPOPMouseDownDisplay" : false,
          "LOLLIPOPMouseDownColor" : "green",
          "LOLLIPOPMouseDownCircleSize" : 4,
          "LOLLIPOPMouseDownCircleOpacity" : 1.0,
          "LOLLIPOPMouseDownCircleStrokeColor" : "#F26223",
          "LOLLIPOPMouseDownCircleStrokeWidth" : 0,
          "LOLLIPOPMouseEnterDisplay" : false,
          "LOLLIPOPMouseEnterColor" : "yellow",
          "LOLLIPOPMouseEnterCircleSize" : 4,
          "LOLLIPOPMouseEnterCircleOpacity" : 1.0,
          "LOLLIPOPMouseEnterCircleStrokeColor" : "#F26223",
          "LOLLIPOPMouseEnterCircleStrokeWidth" : 0,
          "LOLLIPOPMouseLeaveDisplay" : false,
          "LOLLIPOPMouseLeaveColor" : "pink",
          "LOLLIPOPMouseLeaveCircleSize" : 4,
          "LOLLIPOPMouseLeaveCircleOpacity" : 1.0,
          "LOLLIPOPMouseLeaveCircleStrokeColor" : "#F26223",
          "LOLLIPOPMouseLeaveCircleStrokeWidth" : 0,
          "LOLLIPOPMouseMoveDisplay" : false,
          "LOLLIPOPMouseMoveColor" : "red",
          "LOLLIPOPMouseMoveCircleSize" : 2,
          "LOLLIPOPMouseMoveCircleOpacity" : 1.0,
          "LOLLIPOPMouseMoveCircleStrokeColor" : "#F26223",
          "LOLLIPOPMouseMoveCircleStrokeWidth" : 0,
          "LOLLIPOPMouseOutDisplay" : false,
          "LOLLIPOPMouseOutAnimationTime" : 500,
          "LOLLIPOPMouseOutColor" : "red",
          "LOLLIPOPMouseOutCircleSize" : 2,
          "LOLLIPOPMouseOutCircleOpacity" : 1.0,
          "LOLLIPOPMouseOutCircleStrokeColor" : "red",
          "LOLLIPOPMouseOutCircleStrokeWidth" : 0,
          "LOLLIPOPMouseUpDisplay" : false,
          "LOLLIPOPMouseUpColor" : "grey",
          "LOLLIPOPMouseUpCircleSize" : 4,
          "LOLLIPOPMouseUpCircleOpacity" : 1.0,
          "LOLLIPOPMouseUpCircleStrokeColor" : "#F26223",
          "LOLLIPOPMouseUpCircleStrokeWidth" : 0,
          "LOLLIPOPMouseOverDisplay" : false,
          "LOLLIPOPMouseOverColor" : "red",
          "LOLLIPOPMouseOverCircleSize" : 2,
          "LOLLIPOPMouseOverCircleOpacity" : 1.0,
          "LOLLIPOPMouseOverCircleStrokeColor" : "#F26223",
          "LOLLIPOPMouseOverCircleStrokeWidth" : 3,
          "LOLLIPOPMouseOverTooltipsSetting" : "style1", //custom, style1
          "LOLLIPOPMouseOverTooltipsHtml" : " ",
          // "LOLLIPOPMouseOverTooltipsHtml01" : "protein : ",
          // "LOLLIPOPMouseOverTooltipsHtml02" : "<br>chr : ",
          // "LOLLIPOPMouseOverTooltipsHtml03" : "<br>pos : ",
          // "LOLLIPOPMouseOverTooltipsHtml04" : "<br>strand : ",
          // "LOLLIPOPMouseOverTooltipsHtml05" : "<br>CancerTypeNumber : ",
          // "LOLLIPOPMouseOverTooltipsHtml06" : "<br>AA_pos : ",
          // "LOLLIPOPMouseOverTooltipsHtml07" : "<br>AA_change : ",
          // "LOLLIPOPMouseOverTooltipsHtml08" : "<br>Consequence : ",
          // "LOLLIPOPMouseOverTooltipsHtml09" : "",
          "LOLLIPOPMouseOverTooltipsPosition" : "absolute",
          "LOLLIPOPMouseOverTooltipsBackgroundColor" : "white",
          "LOLLIPOPMouseOverTooltipsBorderStyle" : "solid",
          "LOLLIPOPMouseOverTooltipsBorderWidth" : 0,
          "LOLLIPOPMouseOverTooltipsPadding" : "3px",
          "LOLLIPOPMouseOverTooltipsBorderRadius" : "3px",
          "LOLLIPOPMouseOverTooltipsOpacity" : 0.8,

          //zhec3          
          
          "genomeBorder" : {
             "display" : true,
             "borderColor" : "#000",
             "borderSize" : 0.5
          },
          "ticks" : {
             "display" : true,
             "len" : 5,
             "color" : "#000",
             "textSize" : 10,
             "textColor" : "#000",
             "scale" : 30000000,
            //zhec2
             "realLength" : false,
            //zhec2
            //offset from realLength
             "offset": 0 ,
            //offset from realLength
          },
          "genomeLabel" : {
             "display" : true,
             "textSize" : 15,
             "textColor" : "#000",
             "dx" : 0.028,
             "dy" : "-0.55em"
          }
      };

      self.CNVsettings = {
          "compareGroup":1,
          "maxRadius": 200,
          "minRadius": 190,
          "CNVwidth": 10,
          "CNVColor": "#CAE1FF",
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "strokeColor":"black",
          "strokeWidth":1,
          "opacity":1,
          "CNVAnimationDisplay": false,
          "CNVAnimationTime": 2000,
          "CNVAnimationDelay": 20,
          "CNVAnimationType": "bounce",  //linear,circle,elastic,bounce
      };

      self.HEATMAPsettings = {
          "compareGroup":1,
          "innerRadius": -100,
          "outerRadius": -100,
          "maxColor": "red",
          "minColor": "green",
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "totalLayer":1,
          "HEATMAPAnimationDisplay": false,
          "HEATMAPAnimationDirection":"O2I", //O2I,I2O  [out to in/in to out]
          "HEATMAPAnimationColorDirection":"L2C", //L2C,H2C [lowest to customized/highest to customized]
          "HEATMAPAnimationTime": 2000,
          "HEATMAPAnimationDelay": 20,
          "HEATMAPAnimationType": "bounce",  //linear,circle,elastic,bounce
      };
      
      self.BUBBLEsettings = {
          "compareGroup":1,
          "minRadius": 100,
          "maxRadius": 105,
          "blockStroke":true,
          "blockStrokeColor":"black",
          "blockStrokeWidth":1,
          "blockFill":false,
          "blockFillColor":"white",
          "bubbleMaxSize":5,
          "bubbleMinSize":2,
          "maxColor": "red",
          "minColor": "green",
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "totalLayer":3,
          "BUBBLEAnimationDisplay": false,
          "BUBBLEAnimationTime": 2000,
          "BUBBLEAnimationDelay": 20,
          "BUBBLEAnimationType": "bounce",  //linear,circle,elastic,bounce

      };
      
      self.GENEsettings = {
          "compareGroup":1,
          "innerRadius": -30,
          "outerRadius": -10,
          "pathColor":"black",
          "pathWidth":1,
          "arrow":true,
          "arrowGap": 2,
          "arrowColor": "blue",
          "arrowSize": "12px",
          "cdsColor": "blue",
          "cdsStrokeColor": "blue",
          "cdsStrokeWidth": 1,
          "utrWidth": -5,
          "utrColor": "blue",
          "utrStrokeColor": "blue",
          "utrStrokeWidth": 1,
          "GENEAnimationDisplay": false,
//          "GENEAnimationDirection":"S2E", //S2E,E2S  [start to end/end to start]
          "GENEAnimationTime": 2000,
          "GENEAnimationDelay": 20,
          "GENEAnimationType": "bounce",  //linear,circle,elastic,bounce
      };

      self.SNPsettings = {
          "compareGroup":1,
          "maxRadius": 200,
          "minRadius": 190,
          "SNPFillColorType":"specific", //specific,r2
          "SNPFillColor": "red",
          "SNPFillr2Color":["13#ff0031","#ff0031","#ff0031","#ff0031","#ff0031"],
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "PointType": "circle", //circle,rect
          "circleSize": 2,
          "rectWidth": 2,
          "rectHeight": 2,
          "SNPAnimationDisplay": false,
          "SNPAnimationInitialPositionX":0,
          "SNPAnimationInitialPositionY":0,
          "SNPAnimationTime": 2000,
          "SNPAnimationDelay": 20,
          "SNPAnimationType": "bounce",  //linear,circle,elastic,bounce
      };
      
      // self.LABELsettings = {
      //     "compareGroup":1,
      //     "LABELSize": 10,
      //     "LABELWeight": "normal", //normal,bold,bolder,lighter,100,200,300,400,500,600,700,800,900
      //     "LABELColor": "#000",
      //     "LABELOpacity": 1.0
      // };

      self.LINKsettings = {
          "compareGroup":1,
          "LinkRadius": 108,
          "LinkFillColor": "red",
          "LinkWidth": 3,
          "LinkType":"Q", //Q,S,T
          "displayLinkAxis": true,
          "LinkAxisColor": "#B8B8B8",
          "LinkAxisWidth": 0.5,
          "LinkAxisPad": 3,
          "displayLinkLabel": true,
          "LinkLabelColor": "red",
          "LinkLabelSize": 13,
          "LinkLabelPad": 8,
          "LINKAnimationDisplay": false,
          "LINKAnimationDirection":"1to2", //1to2,2to1  [side1 to side2/side2 to side1]
          "LINKAnimationTime": 2000,
          "LINKAnimationDelay": 20,
          "LINKAnimationType": "bounce",  //linear,circle,elastic,bounce
      };
      
      //chord
      self.CHORDsettings = {
          "CHORDinnerRadius": 108,
          "CHORDouterRadius": 110,
          "CHORDFillOpacity":0.67,
          "CHORDFillStrokeWidth": "0.5px",
          "CHORDPadding":0.01,
          "CHORDAutoFillColor": true,
          "CHORDFillColor":["red"],
          "CHORDFillStrokeColor":["black"],
          "CHORDouterARC":true,
          "CHORDouterARCAutoColor":true,
          "CHORDouterARCColor":["red"],
          "CHORDouterARCStrokeColor":["black"],
          "CHORDouterARCText":true,
      };
      //chord
      
      //COMPARE
//      self.COMPAREsettings = {
//          "COMPAREinnerRadius": 108,
//          "COMPAREouterRadius": 110,
//          "COMPAREFillOpacity":0.67,
//          "COMPAREStrokeColor":"#000",
//          "COMPAREStrokeWidth": "0.5px",
//          "COMPAREAutoFillColor": true,
//          "COMPAREFillColor":"red",
//          "COMPAREouterARC":true,
//          "COMPAREouterARCText":true,
//      };
      //COMPARE

      self.HISTOGRAMsettings = {
          "compareGroup":1,
          "maxRadius": 108,
          "minRadius": 95,
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "histogramFillColor": "red",
          "HISTOGRAMAnimationDisplay": false,
          "HISTOGRAMAnimationDirection":"O2I", //O2I,I2O  [out to in/in to out]
          "HISTOGRAMAnimationTime": 2000,
          "HISTOGRAMAnimationDelay": 20,
//          "HISTOGRAMAnimationType": "bounce",  //linear,circle,elastic,bounce
          
      };

      self.LINEsettings = {
          "compareGroup":1,
          "maxRadius": 108,
          "minRadius": 95,
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "LineColor": "red",
          "LineWidth": 0.5,
          "LineType":"cardinal", //linear,cardinal,basis,monotone
          "LINEAnimationDisplay": false,
          "LINEAnimationDirection":"S2E", //S2E,E2S  [start to end/end to start]
          "LINEAnimationTime": 2000,
          "LINEAnimationDelay": 20,
          "LINEAnimationType": "bounce",  //linear,circle,elastic,bounce
      };
      
      self.WIGsettings = {
          "compareGroup":1,
          "maxRadius": 108,
          "minRadius": 95,
          "direction":"out", //in,out
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "WIGStrokeColor": "black",
          "WIGColor": "red",
          "WIGStrokeWidth":1,
          "WIGOpacity":1,
          "WIGStrokeType":"cardinal", //linear,cardinal,basis,monotone
          "WIGAnimationDisplay": false,
          "WIGAnimationTime": 2000,
          "WIGAnimationDelay": 20,
          "WIGAnimationType": "bounce",  //linear,circle,elastic,bounce
      };

      self.SCATTERsettings = {
          "compareGroup":1,
          "SCATTERRadius": 140,
          "innerCircleSize": 1,
          "outerCircleSize": 5,
          "innerCircleColor": "#F26223",
          "outerCircleColor": "#F26223",
          "innerPointType": "circle", //circle,rect
          "outerPointType": "circle", //circle,rect
          "innerrectWidth": 2,
          "innerrectHeight": 2,
          "outerrectWidth": 2,
          "outerrectHeight": 2,
          "outerCircleOpacity": 1,
          "random_data": 0,
          "SCATTERAnimationDisplay": false,
          "SCATTERAnimationInitialPositionX":0,
          "SCATTERAnimationInitialPositionY":0,
          "SCATTERAnimationTime": 2000,
          "SCATTERAnimationDelay": 20,
          "SCATTERAnimationType": "bounce",  //linear,circle,elastic,bounce
      };

      self.BACKGROUNDsettings = {
          "compareGroup":1,
          "BginnerRadius": 180,
          "BgouterRadius": 230,
          "BgFillColor": "none",
          "BgborderColor": "#000",
          "BgborderSize" : 0.5,
          "axisShow": "false", 
          "axisWidth": 0.3,
          "axisColor": "#000",
          "axisOpacity": 0.5,
          "axisNum": 4,
          "BACKGROUNDAnimationDisplay": false,
          "BACKGROUNDAnimationTime": 2000,
          "BACKGROUNDAnimationDelay": 20,
          "BACKGROUNDAnimationType": "bounce",  //linear,circle,elastic,bounce    };
      };

      self.TEXTsettings = {
          "x": 20,
          "y": 20,
          "textSize": 10,
          "textWeight": "normal", //normal,bold,bolder,lighter,100,200,300,400,500,600,700,800,900
          "textColor": "#000",
          "textOpacity": 1.0,
          "rotateRate":0,
          "text": " ",
          "TEXTAnimationDisplay":false,
          "TEXTAnimationInitialSize":20,
          "TEXTAnimationInitialWeight":"bold",
          "TEXTAnimationInitialColor":"black",
          "TEXTAnimationInitialOpacity":1,
          "TEXTAnimationInitialPositionX":0,
          "TEXTAnimationInitialPositionY":0,
          "TEXTAnimationInitialRotate":0,
          "TEXTAnimationDelay":50,
          "TEXTAnimationTime":1000,
          "TEXTAnimationType":"linear",
      };
      
      self.LEGENDsettings = {
          "x": 20,
          "y": 20,
          "title": "legend",
          "titleSize": 6,
          "titleWeight": "normal",
          "GapBetweenGraphicText":5,
          "GapBetweenLines":15
      };

      self.AUXILIARYLINEsettings = {
          "startX": 20,
          "startY": 20,
          "endX": 120,
          "endY": 120,
          "AUXILIARYLINEColor": "red",
          "AUXILIARYLINEWidth": 0.5,
          "AUXILIARYLINEType":"straight", //straight, curve, broken
          "AUXILIARYLINELineType":"solid", //solid, dot
          "AUXILIARYLINEControlPointX":0,
          "AUXILIARYLINEControlPointY":0,
          "AUXILIARYLINEDashArray" : 3,
          "AUXILIARYLINEMarker": false,
          "AUXILIARYLINEMarkerType":"circle", // circle,square.arrow,stub
          "AUXILIARYLINEMarkerColor":"blue",
          "AUXILIARYLINEMarkerHeight":5,
          "AUXILIARYLINEMarkerWidth":5,
          "AUXILIARYLINEMarkerPosition":2,// 0/1 start, 0/2 end, 1 means only start, 3 means all.
          "AUXILIARYLINEAnimationDispaly":false,
          "AUXILIARYLINEAnimationDelay":50,
          "AUXILIARYLINEAnimationTime":1000,
          "AUXILIARYLINEAnimationType":"linear",

      };

      self.ARCsettings = {
          "compareGroup":1,
          "innerRadius": -30,
          "outerRadius": -30,
          "ARCOpacity":1,
          "ARCAnimationDisplay": false,
          "ARCAnimationTime": 2000,
          "ARCAnimationDelay": 20,
          "ARCAnimationType": "bounce",  //linear,circle,elastic,bounce
      };

      //zhec3
      self.LOLLIPOPsettings = {
          "compareGroup":1,
          "LOLLIPOPFillColor": "red",
          "LOLLIPOPSecondColor": "white",
          "PointType": "circle", //circle,rect,diamond
          "circleSize": 2,
          "diamondWidth":10,
          "diamondHeight":5,
          "rectWidth": 2,
          "rectHeight": 2,
          "stroke":true,
          "strokeColor":"#000000",
          "strokeWidth":"0.5px",
          "lineAutoHeight":true,
          "lineAutoMaximumHeightZoomRate":1,
          "lineHeightRate":0.75,
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "LOLLIPOPAnimationDisplay": false,
          "LOLLIPOPAnimationTime": 2000,
          "LOLLIPOPAnimationDelay": 20,
          "LOLLIPOPAnimationType": "bounce",  //linear,circle,elastic,bounce
          "LOLLIPOPLineWidth": 2,
          "LOLLIPOPLineColor": "#000000",
          "realStart": 0,
      };
      //zhec3
      

      self.update_settings(self.argumentsNGCircosSettings)

      self.target = "#" + self.settings.target;
      self.svgWidth = self.settings.svgWidth;
      self.svgHeight = self.settings.svgHeight;
      //zhec
      self.svgClassName=self.settings.svgClassName;
      //zhec
      self.chrPad = self.settings.chrPad;
      self.innerRadius = self.settings.innerRadius;
      self.outerRadius = self.settings.outerRadius;
      self.zoom = self.settings.zoom;
      self.testTip = self.settings.testTip;
      self.compareEvent = self.settings.compareEvent;
      self.genomeFillColor = self.settings.genomeFillColor;
      self.genomeBorderDisplay=self.settings.genomeBorder.display;
      self.genomeBorderColor=self.settings.genomeBorder.borderColor;
      self.genomeBorderSize=self.settings.genomeBorder.borderSize;
      if(self.compareEvent == false){
        self.genome = self.argumentsNGCircosGenome[0];
        self.genome_matrix(self.argumentsNGCircosGenome[0]);
        self.genome2 = 0;
        self.genome_matrix2(0);
      }else{
        self.genome = self.argumentsNGCircosGenome[0];
        self.genome_matrix(self.argumentsNGCircosGenome[0]);
        self.genome2 = self.argumentsNGCircosGenome[1];
        self.genome_matrix2(self.argumentsNGCircosGenome[1]);
      }
      self.ticksDisplay=self.settings.ticks.display;
      self.ticksLength=self.settings.ticks.len;
      self.ticksColor=self.settings.ticks.color;
      self.ticksTextSize=self.settings.ticks.textSize;
      self.ticksTextColor=self.settings.ticks.textColor;
      self.ticksScale=self.settings.ticks.scale;
      //zhec2
      self.ticksRealLength=self.settings.ticks.realLength
      //zhec2
      //offset
      self.ticksOffset=self.settings.ticks.offset
      //offset
      self.genomeTextDisplay=self.settings.genomeLabel.display;
      self.genomeTextSize=self.settings.genomeLabel.textSize;
      self.genomeTextColor=self.settings.genomeLabel.textColor;
      self.genomeTextDx=self.settings.genomeLabel.dx;
      self.genomeTextDy=self.settings.genomeLabel.dy;

      var labeli= self.genomeLabel.length;
      var initGenome = new Object();
      var initGenome2 = new Object();
      for(var labelk=0;labelk<labeli;labelk++){
          var labelInit=self.genomeLabel[labelk];
          initGenome[labelInit]=labelk;
      }
      for(var labelk=0;labelk<labeli;labelk++){
          var labelInit=self.genomeLabel2[labelk];
          initGenome2[labelInit]=labelk;
      }
      self.initGenome = initGenome;
      self.initGenome2 = initGenome2;

  }

  NGCircos.prototype.update_settings = function(settings_object){
    var self = this;
    $.extend(self.settings, settings_object);
  }

  NGCircos.prototype.update_CNVsettings = function(settings_object){
    var self = this;
    $.extend(self.CNVsettings, settings_object);
  }

  NGCircos.prototype.update_HEATMAPsettings = function(settings_object){
    var self = this;
    $.extend(self.HEATMAPsettings, settings_object);
  }
  
  NGCircos.prototype.update_BUBBLEsettings = function(settings_object){
    var self = this;
    $.extend(self.BUBBLEsettings, settings_object);
  }
  
  NGCircos.prototype.update_GENEsettings = function(settings_object){
    var self = this;
    $.extend(self.GENEsettings, settings_object);
  }

  NGCircos.prototype.update_SNPsettings = function(settings_object){
    var self = this;
    $.extend(self.SNPsettings, settings_object);
  }
  
  // NGCircos.prototype.update_LABELsettings = function(settings_object){
  //   var self = this;
  //   $.extend(self.LABELsettings, settings_object);
  // }

  NGCircos.prototype.update_LINKsettings = function(settings_object){
    var self = this;
    $.extend(self.LINKsettings, settings_object);
  }
  
  NGCircos.prototype.update_CHORDsettings = function(settings_object){
    var self = this;
    $.extend(self.CHORDsettings, settings_object);
  }
  
//  NGCircos.prototype.update_COMPAREsettings = function(settings_object){
//    var self = this;
//    $.extend(self.COMPAREsettings, settings_object);
//  }

  NGCircos.prototype.update_HISTOGRAMsettings = function(settings_object){
    var self = this;
    $.extend(self.HISTOGRAMsettings, settings_object);
  }

  NGCircos.prototype.update_LINEsettings = function(settings_object){
    var self = this;
    $.extend(self.LINEsettings, settings_object);
  }
  
  NGCircos.prototype.update_WIGsettings = function(settings_object){
    var self = this;
    $.extend(self.WIGsettings, settings_object);
  }

  NGCircos.prototype.update_SCATTERsettings = function(settings_object){
    var self = this;
    $.extend(self.SCATTERsettings, settings_object);
  }

  NGCircos.prototype.update_BACKGROUNDsettings = function(settings_object){
    var self = this;
    $.extend(self.BACKGROUNDsettings, settings_object);
  }

  NGCircos.prototype.update_TEXTsettings = function(settings_object){
    var self = this;
    $.extend(self.TEXTsettings, settings_object);
  }
  
  //legend
  NGCircos.prototype.update_LEGENDsettings = function(settings_object){
    var self = this;
    $.extend(self.LEGENDsettings, settings_object);
  }
  //legend

  NGCircos.prototype.update_AUXILIARYLINEsettings = function(settings_object){
    var self = this;
    $.extend(self.AUXILIARYLINEsettings, settings_object);
  }

  NGCircos.prototype.update_ARCsettings = function(settings_object){
    var self = this;
    $.extend(self.ARCsettings, settings_object);
  }
  
  //zhec3
  NGCircos.prototype.update_LOLLIPOPsettings = function(settings_object){
    var self = this;
    $.extend(self.LOLLIPOPsettings, settings_object);
  }
  //zhec3

  NGCircos.prototype.init_CNVsettings = function(){
    var self = this;
    self.CNVsettings = {
          "compareGroup":1,
          "maxRadius": 200,
          "minRadius": 190,
          "CNVwidth": 10,
          "CNVColor": "#CAE1FF",
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "strokeColor":"black",
          "strokeWidth":1,
          "opacity":1,
          "CNVAnimationDisplay": false,
          "CNVAnimationTime": 2000,
          "CNVAnimationDelay": 20,
          "CNVAnimationType": "bounce",  //linear,circle,elastic,bounce
    };
  }

  NGCircos.prototype.init_HEATMAPsettings = function(){
    var self = this;
    self.HEATMAPsettings = {
          "compareGroup":1,
          "innerRadius": -100,
          "outerRadius": -100,
          "maxColor": "red",
          "minColor": "green",
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "totalLayer":1,
          "HEATMAPAnimationDisplay": false,
          "HEATMAPAnimationDirection":"O2I", //O2I,I2O  [out to in/in to out]
          "HEATMAPAnimationColorDirection":"L2C", //L2C,H2C [lowest to customized/highest to customized]
          "HEATMAPAnimationTime": 2000,
          "HEATMAPAnimationDelay": 20,
          "HEATMAPAnimationType": "bounce",  //linear,circle,elastic,bounce
    };
  }
  
  NGCircos.prototype.init_BUBBLEsettings = function(){
    var self = this;
    self.BUBBLEsettings = {
          "compareGroup":1,
          "minRadius": 100,
          "maxRadius": 105,
          "blockStroke":true,
          "blockStrokeColor":"black",
          "blockStrokeWidth":1,
          "blockFill":false,
          "blockFillColor":"white",
          "bubbleMaxSize":5,
          "bubbleMinSize":2,
          "maxColor": "red",
          "minColor": "green",
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "totalLayer":3,
          "BUBBLEAnimationDisplay": false,
          "BUBBLEAnimationTime": 2000,
          "BUBBLEAnimationDelay": 20,
          "BUBBLEAnimationType": "bounce",  //linear,circle,elastic,bounce
    };
  }
  
  NGCircos.prototype.init_GENEsettings = function(){
    var self = this;
    self.GENEsettings = {
          "compareGroup":1,
          "innerRadius": -30,
          "outerRadius": -10,
          "pathColor":"black",
          "pathWidth":1,
          "arrow":true,
          "arrowGap": 2,
          "arrowColor": "blue",
          "arrowSize": "12px",
          "cdsColor": "blue",
          "cdsStrokeColor": "blue",
          "cdsStrokeWidth": 1,
          "utrWidth": -5,
          "utrColor": "blue",
          "utrStrokeColor": "blue",
          "utrStrokeWidth": 1,
          "GENEAnimationDisplay": false,
//          "GENEAnimationDirection":"S2E", //S2E,E2S  [start to end/end to start]
          "GENEAnimationTime": 2000,
          "GENEAnimationDelay": 20,
          "GENEAnimationType": "bounce",  //linear,circle,elastic,bounce
    };
  }

  NGCircos.prototype.init_SNPsettings = function(){
    var self = this;
    self.SNPsettings = {
          "compareGroup":1,
          "maxRadius": 200,
          "minRadius": 190,
          "SNPFillColorType":"specific", //specific,r2
          "SNPFillColor": "red",
          "SNPFillr2Color":["#ff0031","#ff0031","#ff0031","#ff0031","#ff0031"],
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "PointType": "circle",
          "circleSize": 2,
          "rectWidth": 2,
          "rectHeight": 2,
          "SNPAnimationDisplay": false,
          "SNPAnimationInitialPositionX":0,
          "SNPAnimationInitialPositionY":0,
          "SNPAnimationTime": 2000,
          "SNPAnimationDelay": 20,
          "SNPAnimationType": "bounce",  //linear,circle,elastic,bounce
    };
  }
  
  // NGCircos.prototype.init_LABELsettings = function(){
  //   var self = this;
  //   self.LABELsettings = {
  //         "compareGroup":1,
  //         "LABELSize": 10,
  //         "LABELWeight": "normal", //normal,bold,bolder,lighter,100,200,300,400,500,600,700,800,900
  //         "LABELColor": "#000",
  //         "LABELOpacity": 1.0
  //   };
  // }

  NGCircos.prototype.init_LINKsettings = function(){
    var self = this;
    self.LINKsettings = {
          "compareGroup":1,
          "LinkRadius": 108,
          "LinkFillColor": "red",
          "LinkWidth": 3,
          "LinkType":"Q", //Q,S,T
          "displayLinkAxis": true,
          "LinkAxisColor": "#B8B8B8",
          "LinkAxisWidth": 0.5,
          "LinkAxisPad": 3,
          "displayLinkLabel": true,
          "LinkLabelColor": "red",
          "LinkLabelSize": 13,
          "LinkLabelPad": 8,
          "LINKAnimationDisplay": false,
          "LINKAnimationDirection":"1to2", //1to2,2to1  [side1 to side2/side2 to side1]
          "LINKAnimationTime": 2000,
          "LINKAnimationDelay": 20,
          "LINKAnimationType": "bounce",  //linear,circle,elastic,bounce
    };
  }
  
  NGCircos.prototype.init_CHORDsettings = function(){
    var self = this;
    self.CHORDsettings = {
        "CHORDinnerRadius": 108,
        "CHORDouterRadius": 110,
        "CHORDFillOpacity":0.67,
        "CHORDFillStrokeWidth": "0.5px",
        "CHORDPadding":0.01,
        "CHORDAutoFillColor": true,
        "CHORDFillColor":["red"],
        "CHORDFillStrokeColor":["black"],
        "CHORDouterARC":true,
        "CHORDouterARCAutoColor":true,
        "CHORDouterARCColor":["red"],
        "CHORDouterARCStrokeColor":["black"],
        "CHORDouterARCText":true,
    };
  }
  
//  NGCircos.prototype.init_COMPAREsettings = function(){
//    var self = this;
//    self.COMPAREsettings = {
//        "COMPAREinnerRadius": 108,
//        "COMPAREouterRadius": 110,
//        "COMPAREFillOpacity":0.67,
//        "COMPAREStrokeColor":"#000",
//        "COMPAREStrokeWidth": "0.5px",
//        "COMPAREAutoFillColor": true,
//        "COMPAREFillColor":"red",
//        "COMPAREouterARC":true,
//        "COMPAREouterARCText":true,
//    };
//  }

  NGCircos.prototype.init_HISTOGRAMsettings = function(){
    var self = this;
    self.HISTOGRAMsettings = {
          "compareGroup":1,
          "maxRadius": 108,
          "minRadius": 95,
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "histogramFillColor": "red",
          "HISTOGRAMAnimationDisplay": false,
          "HISTOGRAMAnimationDirection":"O2I", //O2I,I2O  [out to in/in to out]
          "HISTOGRAMAnimationTime": 2000,
          "HISTOGRAMAnimationDelay": 20,
//          "HISTOGRAMAnimationType": "bounce",  //linear,circle,elastic,bounce
    };
  }

  NGCircos.prototype.init_LINEsettings = function(){
    var self = this;
    self.LINEsettings = {
          "compareGroup":1,
          "maxRadius": 108,
          "minRadius": 95,
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "LineColor": "red",
          "LineWidth": 0.5,
          "LineType":"cardinal", //linear,cardinal,basis,monotone
          "LINEAnimationDisplay": false,
          "LINEAnimationDirection":"S2E", //S2E,E2S  [start to end/end to start]
          "LINEAnimationTime": 2000,
          "LINEAnimationDelay": 20,
          "LINEAnimationType": "bounce",  //linear,circle,elastic,bounce
    };
  }
  
  NGCircos.prototype.init_WIGsettings = function(){
    var self = this;
    self.WIGsettings = {
          "compareGroup":1,
          "maxRadius": 108,
          "minRadius": 95,
          "direction":"out", //in,out
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "WIGStrokeColor": "black",
          "WIGColor": "red",
          "WIGStrokeWidth":1,
          "WIGOpacity":1,
          "WIGStrokeType":"cardinal", //linear,cardinal,basis,monotone
          "WIGAnimationDisplay": false,
          "WIGAnimationTime": 2000,
          "WIGAnimationDelay": 20,
          "WIGAnimationType": "bounce",  //linear,circle,elastic,bounce

    };
  }

  NGCircos.prototype.init_SCATTERsettings = function(){
    var self = this;
    self.SCATTERsettings = {
          "compareGroup":1,
          "SCATTERRadius": 140,
          "innerCircleSize": 1,
          "outerCircleSize": 5,
          "innerCircleColor": "#F26223",
          "outerCircleColor": "#F26223",
          "innerPointType": "circle", //circle,rect
          "outerPointType": "circle", //circle,rect
          "innerrectWidth": 2,
          "innerrectHeight": 2,
          "outerrectWidth": 2,
          "outerrectHeight": 2,
          "outerCircleOpacity": 1,
          "random_data": 0,
          "SCATTERAnimationDisplay": false,
          "SCATTERAnimationInitialPositionX":0,
          "SCATTERAnimationInitialPositionY":0,
          "SCATTERAnimationTime": 2000,
          "SCATTERAnimationDelay": 20,
          "SCATTERAnimationType": "bounce",  //linear,circle,elastic,bounce
      };
  }

  NGCircos.prototype.init_BACKGROUNDsettings = function(){
    var self = this;
    self.BACKGROUNDsettings = {
          "compareGroup":1,
          "BginnerRadius": 180,
          "BgouterRadius": 230,
          "BgFillColor": "none",
          "BgborderColor": "#000",
          "BgborderSize" : 0.5,
          "axisShow": "false",
          "axisWidth": 0.3,
          "axisColor": "#000",
          "axisOpacity": 0.5,
          "axisNum": 4,
          "BACKGROUNDAnimationDisplay": false,
          "BACKGROUNDAnimationTime": 2000,
          "BACKGROUNDAnimationDelay": 20,
          "BACKGROUNDAnimationType": "bounce",  //linear,circle,elastic,bounce    
        };
  }


  NGCircos.prototype.init_TEXTsettings = function(){
    var self = this;
    self.TEXTsettings = {
          "x": 20,
          "y": 20,
          "textSize": 10,
          "textColor": "#000",
          "textWeight": "normal", //normal,bold,bolder,lighter,100,200,300,400,500,600,700,800,900
          "textOpacity": 1.0,
          "rotateRate":0,
          "text": " ",
          "TEXTAnimationDisplay":false,
          "TEXTAnimationInitialSize":20,
          "TEXTAnimationInitialWeight":"bold",
          "TEXTAnimationInitialColor":"black",
          "TEXTAnimationInitialOpacity":1,
          "TEXTAnimationInitialPositionX":0,
          "TEXTAnimationInitialPositionY":0,
          "TEXTAnimationInitialRotate":0,
          "TEXTAnimationDelay":50,
          "TEXTAnimationTime":1000,
          "TEXTAnimationType":"linear",
    };
  }
  
  //legend
  NGCircos.prototype.init_LEGENDsettings = function(){
    var self = this;
    self.LEGENDsettings = {
          "x": 20,
          "y": 20,
          "title": "legend",
          "titleSize": 6,
          "titleWeight": "normal",
          "GapBetweenGraphicText":5,
          "GapBetweenLines":15
    };
  }

  //legend

  NGCircos.prototype.init_AUXILIARYLINEsettings = function(){
    var self = this;
    self.AUXILIARYLINEsettings = {
          "startX": 20,
          "startY": 20,
          "endX": 120,
          "endY": 120,
          "AUXILIARYLINEColor": "red",
          "AUXILIARYLINEWidth": 0.5,
          "AUXILIARYLINEType":"straight", //straight, curve, broken
          "AUXILIARYLINEControlPointX":0,
          "AUXILIARYLINEControlPointY":0,
          "AUXILIARYLINELineType":"solid", //solid, dot
          "AUXILIARYLINEDashArray" : 3,
          "AUXILIARYLINEMarker": false,
          "AUXILIARYLINEMarkerType":"circle", // circle,square.arrow,stub
          "AUXILIARYLINEMarkerColor":"blue",
          "AUXILIARYLINEMarkerHeight":5,
          "AUXILIARYLINEMarkerWidth":5,
          "AUXILIARYLINEMarkerPosition":4,// 0/1 start, 0/2 mid, 0/4 end, 1 means only start, 3 means start and mid , 7 means all.
          "AUXILIARYLINEAnimationDispaly":false,
          "AUXILIARYLINEAnimationDelay":50,
          "AUXILIARYLINEAnimationTime":1000,
          "AUXILIARYLINEAnimationType":"linear",
    };
  }

  NGCircos.prototype.init_ARCsettings = function(){
    var self = this;
    self.ARCsettings = {
          "compareGroup":1,
          "innerRadius": -100,
          "outerRadius": -100,
          "ARCOpacity":1,
          "ARCAnimationDisplay": false,
          "ARCAnimationTime": 2000,
          "ARCAnimationDelay": 20,
          "ARCAnimationType": "bounce",  //linear,circle,elastic,bounce
    };
  }
  
  //zhec3
  NGCircos.prototype.init_LOLLIPOPsettings = function(){
    var self = this;
    self.LOLLIPOPsettings = {
          "compareGroup":1,
          "LOLLIPOPFillColor": "red",
          "LOLLIPOPSecondColor": "white",
          "PointType": "circle",
          "diamondWidth":10,
          "diamondHeight":5,
          "circleSize": 2,
          "rectWidth": 2,
          "rectHeight": 2,
          "stroke":true,
          "strokeColor":"#000000",
          "strokeWidth":"0.5px",
          "lineAutoHeight":true,
          "lineAutoMaximumHeightZoomRate":1,
          "lineHeightRate":0.75,
          "ValueAxisManualScale":false,
          "ValueAxisMaxScale":10,
          "ValueAxisMinScale":0,
          "LOLLIPOPAnimationDisplay": false,
          "LOLLIPOPAnimationTime": 2000,
          "LOLLIPOPAnimationDelay": 20,
          "LOLLIPOPAnimationType": "bounce",  //linear,circle,elastic,bounce
          "LOLLIPOPLineWidth": 2,
          "LOLLIPOPLineColor": "#000000",
          "realStart": 0,
    };
  }
  //zhec3

  NGCircos.prototype.genome_matrix = function(genome){
      var self = this;
      var i=self.genome.length;
      var genomeLabel = new Array();
      var genomeLength = new Array();
      if(self.compareEvent == true){
        genomeLabel[0]="fake1Gap1";
        for(var k=0;k<i;k++){
            genomeLabel[k+1]=self.genome[k][0];
        }
        genomeLabel[i+1]="fake1Gap2";
        var genomeGap = 0;
        for(var k=0;k<i;k++){
            genomeGap += self.genome[k][1]
        }
        genomeGap=genomeGap*self.settings.compareEventGroupGapRate
        genomeLength[0]=genomeGap;
        for(var k=0;k<i;k++){
            genomeLength[k+1]=self.genome[k][1];
        }
        genomeLength[i+1]=genomeGap;
        genomeLabel[i+2]="fake1Gap3";
        for(var k=i;k<2*i;k++){
            genomeLabel[k+3]="fake1"+self.genome[2*i-1-k][0];
        }
        genomeLabel[2*i+3]="fake1Gap4";
        genomeLength[i+2]=genomeGap;
        for(var k=i;k<2*i;k++){
            genomeLength[k+3]=self.genome[2*i-1-k][1];
        }
        genomeLength[2*i+3]=genomeGap;
      }else{
        for(var k=0;k<i;k++){
          genomeLabel[k]=self.genome[k][0];
        }
        for(var k=0;k<i;k++){
          genomeLength[k]=self.genome[k][1];
        }
      }
      
      var i=genomeLength.length;
      var p=genomeLength.length;
      var genome = new Array();
      for(var k=0;k<i;k++){ 
         genome[k]=new Array();
           for(var j=0;j<p;j++){
              genome[k][j]=0;
           }
      }
      for(var k=0;k<i;k++){
         genome[k][0]=genomeLength[k];
      }
      self.genomeLabel = genomeLabel;
      self.genomeLength = genome;
      //console.log(self.genomeLabel)
//      console.log(self.genomeLength)
  }
  
  //compare
  NGCircos.prototype.genome_matrix2 = function(genome){
      var self = this;
      if(genome == 0){
        self.genomeLabel2 = 0;
        self.genomeLength2 = 0;
      }else{
        var i=self.genome2.length;
        var genomeLabel2 = new Array();
        var genomeLength2 = new Array();
        var genomeGap = 0;
        for(var k=0;k<i;k++){
            genomeGap += self.genome[k][1]
        }
        genomeGap=genomeGap*self.settings.compareEventGroupGapRate

        genomeLabel2[0]="fake2Gap1";
        genomeLabel2[i+1]="fake2Gap2";
        genomeLabel2[i+2]="fake2Gap3";
        genomeLabel2[2*i+3]="fake2Gap4";
        genomeLength2[0]=genomeGap;
        genomeLength2[i+1]=genomeGap;
        genomeLength2[i+2]=genomeGap;
        genomeLength2[2*i+3]=genomeGap;
        for(var k=i;k<2*i;k++){
          genomeLabel2[k+3]=self.genome2[2*i-1-k][0];
        }
        for(var k=0;k<i;k++){
           genomeLabel2[k+1]="fake2"+self.genome2[k][0];
        }
        for(var k=0;k<i;k++){
           genomeLength2[k+1]=self.genome2[k][1];
        }
        for(var k=i;k<2*i;k++){
            genomeLength2[k+3]=self.genome2[2*i-1-k][1];
        }
        var i=genomeLength2.length;
        var p=genomeLength2.length;
        var genome = new Array();
        for(var k=0;k<i;k++){ 
          genome[k]=new Array();
            for(var j=0;j<p;j++){
              genome[k][j]=0;
            }
        }
        for(var k=0;k<i;k++){
          genome[k][0]=genomeLength2[k];
        }
        self.genomeLabel2 = genomeLabel2;
        self.genomeLength2 = genome;
      }
     // console.log(self.genomeLabel2)
  }
  //compare

  NGCircos.prototype.heatmap_value_maxmin = function(heatmapIn){
      var self = this;
      var i=heatmapIn.length;
      var heatmapValueList = new Array();
      for(var k=0;k<i;k++){
          heatmapValueList[k]=heatmapIn[k].value;
      }
      
      if(self.HEATMAPsettings.ValueAxisManualScale == true){
        heatmapValueList[i]=self.HEATMAPsettings.ValueAxisMaxScale
        heatmapValueList[i+1]=self.HEATMAPsettings.ValueAxisMinScale
      }
      
      Array.max=function(array){
          return Math.max.apply(Math,array);
      }
      Array.min=function(array){
         return Math.min.apply(Math,array);
      }
      var heatmapValueMax = Array.max(heatmapValueList);
      var heatmapValueMin = Array.min(heatmapValueList);
      var heatmapValueMaxmin = new Array();
      heatmapValueMaxmin[0]=heatmapValueMax;
      heatmapValueMaxmin[1]=heatmapValueMin;
      return heatmapValueMaxmin;
  }
  
  NGCircos.prototype.BUBBLE_value_maxmin = function(BUBBLEIn){
      var self = this;
      var i=BUBBLEIn.length;
      var BUBBLEValueList = new Array();
      for(var k=0;k<i;k++){
          BUBBLEValueList[k]=BUBBLEIn[k].value;
      }
      
      if(self.BUBBLEsettings.ValueAxisManualScale == true){
        BUBBLEValueList[i]=self.BUBBLEsettings.ValueAxisMaxScale
        BUBBLEValueList[i+1]=self.BUBBLEsettings.ValueAxisMinScale
      }
      
      Array.max=function(array){
          return Math.max.apply(Math,array);
      }
      Array.min=function(array){
         return Math.min.apply(Math,array);
      }
      var BUBBLEValueMax = Array.max(BUBBLEValueList);
      var BUBBLEValueMin = Array.min(BUBBLEValueList);
      var BUBBLEValueMaxmin = new Array();
      BUBBLEValueMaxmin[0]=BUBBLEValueMax;
      BUBBLEValueMaxmin[1]=BUBBLEValueMin;
      return BUBBLEValueMaxmin;
  }

  NGCircos.prototype.snp_value_maxmin = function(snpIn){
      var self = this;
      var i=snpIn.length;
      var snpValueList = new Array();
      for(var k=0;k<i;k++){
          snpValueList[k]=snpIn[k].value;
      }
      
      if(self.SNPsettings.ValueAxisManualScale == true){
        snpValueList[i]=self.SNPsettings.ValueAxisMaxScale
        snpValueList[i+1]=self.SNPsettings.ValueAxisMinScale
      }
      
      Array.max=function(array){
          return Math.max.apply(Math,array);
      }
      Array.min=function(array){
         return Math.min.apply(Math,array);
      }
      var snpValueMax = Array.max(snpValueList);
      var snpValueMin = Array.min(snpValueList);
      var snpValueMaxmin = new Array();
      snpValueMaxmin[0]=snpValueMax;
      snpValueMaxmin[1]=snpValueMin;
      return snpValueMaxmin;
  }

  //zhec3
  NGCircos.prototype.LOLLIPOP_value_maxmin = function(LOLLIPOPIn){
      var self = this;
      var i=LOLLIPOPIn.length;
      var LOLLIPOPValueList = new Array();
      for(var k=0;k<i;k++){
          LOLLIPOPValueList[k]=LOLLIPOPIn[k].CancerTypeNumber ;
      }
      
      if(self.LOLLIPOPsettings.ValueAxisManualScale == true){
        LOLLIPOPValueList[i]=self.LOLLIPOPsettings.ValueAxisMaxScale
        LOLLIPOPValueList[i+1]=self.LOLLIPOPsettings.ValueAxisMinScale
      }
      
      Array.max=function(array){
          return Math.max.apply(Math,array);
      }
      Array.min=function(array){
         return Math.min.apply(Math,array);
      }
      var LOLLIPOPValueMax = Array.max(LOLLIPOPValueList);
      var LOLLIPOPValueMin = Array.min(LOLLIPOPValueList);
      var LOLLIPOPValueMaxmin = new Array();
      LOLLIPOPValueMaxmin[0]=LOLLIPOPValueMax;
      LOLLIPOPValueMaxmin[1]=LOLLIPOPValueMin;
      return LOLLIPOPValueMaxmin;
  }
  //zhec3

  NGCircos.prototype.cnv_value_maxmin = function(cnvIn){
      var self = this;
      var i=cnvIn.length;
      var cnvValueList = new Array();
      for(var k=0;k<i;k++){
          cnvValueList[k]=cnvIn[k].value;
      }
      
      if(self.CNVsettings.ValueAxisManualScale == true){
        cnvValueList[i]=self.CNVsettings.ValueAxisMaxScale
        cnvValueList[i+1]=self.CNVsettings.ValueAxisMinScale
      }
      
      Array.max=function(array){
          return Math.max.apply(Math,array);
      }
      Array.min=function(array){
         return Math.min.apply(Math,array);
      }
      var cnvValueMax = Array.max(cnvValueList);
      var cnvValueMin = Array.min(cnvValueList);
      var cnvValueMaxmin = new Array();
      cnvValueMaxmin[0]=cnvValueMax;
      cnvValueMaxmin[1]=cnvValueMin;
      return cnvValueMaxmin;
  }

  NGCircos.prototype.histogram_value_maxmin = function(histogramIn){
      var self = this;
      var i=histogramIn.length;
      var histogramValueList = new Array();
      for(var k=0;k<i;k++){
          histogramValueList[k]=histogramIn[k].value;
      }
      
      if(self.HISTOGRAMsettings.ValueAxisManualScale == true){
        histogramValueList[i]=self.HISTOGRAMsettings.ValueAxisMaxScale
        histogramValueList[i+1]=self.HISTOGRAMsettings.ValueAxisMinScale
      }
      
      Array.max=function(array){
          return Math.max.apply(Math,array);
      }
      Array.min=function(array){
         return Math.min.apply(Math,array);
      }
      var histogramValueMax = Array.max(histogramValueList);
      var histogramValueMin = Array.min(histogramValueList);
      var histogramValueMaxmin = new Array();
      histogramValueMaxmin[0]=histogramValueMax;
      histogramValueMaxmin[1]=histogramValueMin;
      return histogramValueMaxmin;
  }

  NGCircos.prototype.line_value_maxmin = function(lineIn){
      var self = this;
      var i=lineIn.length;
      var lineValueList = new Array();
      for(var k=0;k<i;k++){
          lineValueList[k]=lineIn[k].value;
      }
      
      if(self.LINEsettings.ValueAxisManualScale == true){
        lineValueList[i]=self.LINEsettings.ValueAxisMaxScale
        lineValueList[i+1]=self.LINEsettings.ValueAxisMinScale
      }
      
      Array.max=function(array){
          return Math.max.apply(Math,array);
      }
      Array.min=function(array){
         return Math.min.apply(Math,array);
      }
      var lineValueMax = Array.max(lineValueList);
      var lineValueMin = Array.min(lineValueList);
      var lineValueMaxmin = new Array();
      lineValueMaxmin[0]=lineValueMax;
      lineValueMaxmin[1]=lineValueMin;
      return lineValueMaxmin;
  }
  //WIG
  NGCircos.prototype.WIG_value_maxmin = function(WIGIn){
      var self = this;
      var i=WIGIn.length;
      var WIGValueList = new Array();
      for(var k=0;k<i;k++){
          WIGValueList[k]=WIGIn[k].value;
      }
      
      if(self.WIGsettings.ValueAxisManualScale == true){
        WIGValueList[i]=self.WIGsettings.ValueAxisMaxScale
        WIGValueList[i+1]=self.WIGsettings.ValueAxisMinScale
      }
      
      Array.max=function(array){
          return Math.max.apply(Math,array);
      }
      Array.min=function(array){
         return Math.min.apply(Math,array);
      }
      var WIGValueMax = Array.max(WIGValueList);
      var WIGValueMin = Array.min(WIGValueList);
      var WIGValueMaxmin = new Array();
      WIGValueMaxmin[0]=WIGValueMax;
      WIGValueMaxmin[1]=WIGValueMin;
      return WIGValueMaxmin;
  }
  //WIG
  
  //SNPr2class
  NGCircos.prototype.snp_r2Value_color = function(r2Value){
      var self = this;
      if(parseFloat(r2Value) < 0.2){
        return self.SNPsettings.SNPFillr2Color[0]
      }else if(parseFloat(r2Value) < 0.4){
        return self.SNPsettings.SNPFillr2Color[1]
      }else if(parseFloat(r2Value) < 0.6){
        return self.SNPsettings.SNPFillr2Color[2]
      }else if(parseFloat(r2Value) < 0.8){
        return self.SNPsettings.SNPFillr2Color[3]
      }else{
        return self.SNPsettings.SNPFillr2Color[4]
      }
  }
  //SNPr2class
  
  var drawTime=0
  NGCircos.prototype.draw_genome = function(genome){
    //console.log(genome)
    drawTime += 1
    if(genome == 0 ){
      return;
    }
    var self = this;
    if(drawTime == 2){
      self.genomeLabel=self.genomeLabel2
      self.initGenome=self.initGenome2
    }
    //console.log(self.initGenome)
    //console.log(self.genomeLabel)
    var chord = d3.layout.chord()
      .padding(self.chrPad)
      .sortSubgroups(d3.descending)
      .matrix(genome);
    
    var width = self.svgWidth,
      height = self.svgHeight,
      svgClassName=self.svgClassName,
      innerRadius = self.innerRadius,
      outerRadius = self.outerRadius;
    var circleCenter=width/2
    var compareMoveDistance = 0
    if(self.settings.compareEvent == true){
      if(drawTime == 1){
        compareMoveDistance = self.settings.compareEventGroupDistance/2
      }
      if(drawTime == 2){
        compareMoveDistance = -1*self.settings.compareEventGroupDistance/2
      }
    }
    //console.log(compareMoveDistance)

//    if(self.settings.CNVMouseCombinationEvent == true || self.settings.SNPMouseCombinationEvent == true){
//      width = 2*width
//      circleCenter= width/4
//    }
      
      if(self.settings.SNPMouseCombinationEvent == true){
        width = 2*width
        circleCenter= width/4
      }
      
    var fill = d3.scale.ordinal()
        .domain(d3.range(4))
        .range(self.genomeFillColor);

    if(drawTime == 1){
      if(self.zoom == true){
          function zoom() {
              a=d3.event.translate[0]+circleCenter / 2
              b=d3.event.translate[1]+height / 2
              svg.attr("transform", "translate(" 
                  + a +","+ b 
                  + ")scale(" + d3.event.scale + ")");
          }
          var svg = d3.select(self.target).append("svg")
              .attr("width", width)
              .attr("height", height)
              .attr("class",svgClassName)
              .attr("id",svgClassName)
              .call(
                   d3.behavior.zoom()
                   .scaleExtent([0.9, 10])
                   .on("zoom", zoom)
              )
            .append("g")
//              .attr("transform", "translate(" + (circleCenter + compareMoveDistance) + "," + height / 2 + ")");
              .attr("transform", "translate(" + circleCenter + "," + height / 2 + ")");

      }else{
          var svg = d3.select(self.target).append("svg")
              .attr("width", width)
              .attr("height", height)
              .attr("class",svgClassName)
              .attr("id",svgClassName)
            .append("g")
//              .attr("transform", "translate(" + (circleCenter + compareMoveDistance) + "," + height / 2 + ")");
              .attr("transform", "translate(" + circleCenter + "," + height / 2 + ")");
      }
    }else{
//      var svg = d3.select(self.target).select("svg").select("g").attr("transform", "translate(" + (circleCenter + compareMoveDistance) + "," + height / 2 + ")");
      var svg = d3.select(self.target).select("svg").select("g").attr("transform", "translate(" + circleCenter + "," + height / 2 + ")");
//      if(self.zoom == true){
//          function zoom() {
//              a=d3.event.translate[0]+circleCenter / 2
//              b=d3.event.translate[1]+height / 2
//              svg.attr("transform", "translate(" 
//                  + a +","+ b 
//                  + ")scale(" + d3.event.scale + ")");
//          }
//          var svg = d3.select(self.target).select("svg")
//              .attr("width", width)
//              .attr("height", height)
//              .call(
//                    d3.behavior.zoom()
//                    .scaleExtent([0.9, 10])
//                    .on("zoom", zoom)
//              )
//              .append("g")
//              .attr("transform", "translate(" + (circleCenter + compareMoveDistance) + "," + height / 2 + ")");
//
//      }else{
//          var svg = d3.select(self.target).select("svg")
//              .attr("width", width)
//              .attr("height", height)
//              .append("g")
//              .attr("transform", "translate(" + (circleCenter + compareMoveDistance) + "," + height / 2 + ")");
//      }
      
    }
    
    //console.log(self.genomeLabel)
    if(self.genomeBorderDisplay == true){
        svg.append("g").selectAll("path")
            .data(chord.groups)
          .enter().append("path")
            .style("fill", function(d) { return fill(d.index); })
            .style("stroke", self.genomeBorderColor)
            .style("stroke-width", self.genomeBorderSize)
            .style("fill-opacity",function (d) {
                var reg=/^fake/;
                if(reg.test(self.genomeLabel[d.index])){
                  return 0;
                }else{
                  return 1;
                }
            })
            .style("stroke-opacity",function (d) {
                var reg=/^fake/;
                if(reg.test(self.genomeLabel[d.index])){
                  return 0;
                }else{
                  return 1;
                }
            })
            .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
            .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")
            .attr("name", function(d) { return d.index+1; });
    }else{
        svg.append("g").selectAll("path")
            .data(chord.groups)
          .enter().append("path")
            .style("fill", function(d) { return fill(d.index); })
            .style("stroke", function(d) { return fill(d.index); })
            .style("fill-opacity",function (d) {
                var reg=/^fake/;
                if(reg.test(self.genomeLabel[d.index])){
                  return 0;
                }else{
                  return 1;
                }
            })
            .style("stroke-opacity",function (d) {
                var reg=/^fake/;
                if(reg.test(self.genomeLabel[d.index])){
                  return 0;
                }else{
                  return 1;
                }
            })
            .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
            .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")
            .attr("name", function(d) { return d.index+1; });
    }

    if(self.genomeTextDisplay == true){
        svg.append("g").selectAll("text")
            .data(chord.groups)
          .enter().append("text")
            .style("fill", self.genomeTextColor)
            .style("font-size", self.genomeTextSize)
            .style("fill-opacity",function (d) {
                var reg=/^fake/;
                if(reg.test(self.genomeLabel[d.index])){
                  return 0;
                }else{
                  return 1;
                }
            })
	    .each( function(d,i) { 
               d.angle = (d.startAngle + d.endAngle) / 2 - self.genomeTextDx;
               d.name = self.genomeLabel[i];
            })
	    .attr("dy",self.genomeTextDy)
	    .attr("transform", function(d){
          if(drawTime == 1){
            return "rotate(" + ( d.angle * 180 / Math.PI ) + ")" +
            	       "translate(0,"+ (-1.0*(outerRadius+10)-compareMoveDistance) +")" +
            	       ( ( d.angle > Math.PI*2 && d.angle < Math.PI*0 ) ? "rotate(180)" : "");
          }
          if(drawTime == 2){
            return "rotate(" + ( d.angle * 180 / Math.PI ) + ")" +
            	       "translate(0,"+ (-1.0*(outerRadius+10)+compareMoveDistance) +")" +
            	       ( ( d.angle > Math.PI*2 && d.angle < Math.PI*0 ) ? "rotate(180)" : "");
          }
	       
	    })
	    .text(function(d){
	       return d.name;
	    });
    }

    if(self.ticksDisplay == true){
        function groupTicks(d) {
          var k = (d.endAngle - d.startAngle) / d.value;
          return d3.range(0, d.value, self.ticksScale).map(function(v, i) {
            return {
              angle: v * k + d.startAngle,
    
              label: v / self.ticksScale + "",
              index: d.index
              
            };
          });
        }

        var ticks = svg.append("g").selectAll("g")
            .data(chord.groups)
          .enter().append("g").selectAll("g")
            .data(groupTicks)
          .enter().append("g")
            .attr("transform", function(d) {
//              return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
//                  + "translate(" + (outerRadius - 0) + ",0)";
              return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
                  + "translate(" + (outerRadius - 0+Math.sin(d.angle)*compareMoveDistance) + ","+Math.cos(d.angle)*compareMoveDistance+")";
//              return "translate(" + (Math.sin(d.angle)*(outerRadius - 0)+compareMoveDistance) + ","+-1*Math.cos(d.angle)*(outerRadius-0)+")";
            });

        ticks.append("line")
            .attr("x1", 1)
            .attr("y1", 0)
            .attr("x2", self.ticksLength)
            .attr("y2", 0)
            .style("stroke", self.ticksColor)
            .style("stroke-opacity",function (d) {
//                console.log(d)
                var reg=/^fake/;
                if(reg.test(self.genomeLabel[d.index])){
                  return 0;
                }else{
                  return 1;
                }
            });

        ticks.append("text")
            .attr("x", 8)
            .attr("dy", ".35em")
            .style("font-size", self.ticksTextSize)
            .style("fill", self.ticksTextColor)
            .style("fill-opacity",function (d) {
                var reg=/^fake/;
                if(reg.test(self.genomeLabel[d.index])){
                  return 0;
                }else{
                  return 1;
                }
            })
            .attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
            .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
            .text(function(d) { 
              if(self.ticksRealLength == true){
                if(self.ticksOffset != undefined){
                  return (d.label*self.ticksScale + self.ticksOffset);
                }else{
                  return d.label*self.ticksScale;
                }
              }else {
                if(self.ticksOffset != undefined){
                  return (d.label + self.ticksOffset);
                }else{
                  return d.label;
                }
              }
               });

    }

    var drag = d3.behavior.drag()
              .on("drag", dragmove);

    function dragmove(d) {
        d3.select(this)
          .attr("x", d3.event.x )
          .attr("y", d3.event.y );
    }

    //var draglinklabel = d3.behavior.drag()
    //          .on("drag", draglinkmove);

    //function draglinkmove(d) {
    //    d3.select(this)
    //      .attr("x", d3.event.x )
    //      .attr("y", d3.event.y );
    //}

    if(self.BACKGROUND.length > 0){
        for(var backgroundi=0; backgroundi<self.BACKGROUND.length; backgroundi++){
            self.update_BACKGROUNDsettings(self.BACKGROUNDConfig[backgroundi]);
            if(drawTime == self.BACKGROUNDsettings.compareGroup){
              if(self.BACKGROUNDsettings.BACKGROUNDAnimationDisplay == false){
                svg.append("g").selectAll("path")
                  .data(chord.groups)
                  .enter()
                  .append("path")
                  .filter(function (d,i) {
                    if(self.settings.compareEvent == true){
                      if(self.BACKGROUNDsettings.compareGroup == 1){
                        return (i>0 && i<(self.genome.length+1));
                      }
                      if(self.BACKGROUNDsettings.compareGroup == 2){
                        return (i>(self.genome.length+2) && i<(self.genome.length*2+3));
                      }
                    }else{
                      return true;
                    }
                  })
                  .style("fill", self.BACKGROUNDsettings.BgFillColor)
                  .style("stroke", self.BACKGROUNDsettings.BgborderColor)
                  .style("stroke-width", self.BACKGROUNDsettings.BgborderSize)
                  .attr("d", d3.svg.arc().innerRadius(self.BACKGROUNDsettings.BginnerRadius).outerRadius(self.BACKGROUNDsettings.BgouterRadius))
                  .attr("transform", function (d,i) {
                    return "translate(" + compareMoveDistance + "," + 0 + ")";
                  })

                if(self.BACKGROUNDsettings.axisShow=="true"){
                    for(i=1;i<=self.BACKGROUNDsettings.axisNum;i++){
                        svg.append("g").selectAll("path")
                            .data(chord.groups)
                          .enter().append("path")
                          .filter(function (d,i) {
                            if(self.settings.compareEvent == true){
                              if(self.BACKGROUNDsettings.compareGroup == 1){
                                return (i>0 && i<(self.genome.length+1));
                              }
                              if(self.BACKGROUNDsettings.compareGroup == 2){
                                return (i>(self.genome.length+2) && i<(self.genome.length*2+3));
                              }
                            }else{
                              return true;
                            }
                            })
                            .style("fill", "none")
                            .style("opacity",self.BACKGROUNDsettings.axisOpacity)
                            .style("stroke", self.BACKGROUNDsettings.axisColor)
                            .style("stroke-width", self.BACKGROUNDsettings.axisWidth)
                            .attr("d", d3.svg.arc().innerRadius(self.BACKGROUNDsettings.BginnerRadius+(self.BACKGROUNDsettings.BgouterRadius-self.BACKGROUNDsettings.BginnerRadius)/(self.BACKGROUNDsettings.axisNum+1)*i).outerRadius(self.BACKGROUNDsettings.BginnerRadius+(self.BACKGROUNDsettings.BgouterRadius-self.BACKGROUNDsettings.BginnerRadius)/(self.BACKGROUNDsettings.axisNum+1)*i+self.BACKGROUNDsettings.axisWidth))
                            .attr("transform", function (d,i) {
                                return "translate(" + compareMoveDistance + "," + 0 + ")";
                            })
                    }
                }
              }
              if(self.BACKGROUNDsettings.BACKGROUNDAnimationDisplay == true){
                svg.append("g").selectAll("path")
                  .data(chord.groups)
                  .enter()
                  .append("path")
                  .filter(function (d,i) {
                    if(self.settings.compareEvent == true){
                      if(self.BACKGROUNDsettings.compareGroup == 1){
                        return (i>0 && i<(self.genome.length+1));
                      }
                      if(self.BACKGROUNDsettings.compareGroup == 2){
                        return (i>(self.genome.length+2) && i<(self.genome.length*2+3));
                      }
                    }else{
                      return true;
                    }
                  })
                  .style("fill", self.BACKGROUNDsettings.BgFillColor)
                  .style("stroke", self.BACKGROUNDsettings.BgborderColor)
                  .style("stroke-width", self.BACKGROUNDsettings.BgborderSize)
                  .attr("d", d3.svg.arc().innerRadius(self.BACKGROUNDsettings.BginnerRadius).outerRadius(self.BACKGROUNDsettings.BginnerRadius))
                  .attr("transform", function (d,i) {
                    return "translate(" + compareMoveDistance + "," + 0 + ")"
                  })
                  .transition()
                  .delay(function (d,i) {
                    return (i+1) *self.BACKGROUNDsettings.BACKGROUNDAnimationDelay;
                  })
                  .duration(self.BACKGROUNDsettings.BACKGROUNDAnimationTime)
                  .ease(self.BACKGROUNDsettings.BACKGROUNDAnimationType)
                  .attr("d", d3.svg.arc().innerRadius(self.BACKGROUNDsettings.BginnerRadius).outerRadius(self.BACKGROUNDsettings.BgouterRadius));

                if(self.BACKGROUNDsettings.axisShow=="true"){
                    for(i=1;i<=self.BACKGROUNDsettings.axisNum;i++){
                        svg.append("g").selectAll("path")
                            .data(chord.groups)
                          .enter().append("path")
                          .filter(function (d,i) {
                            if(self.settings.compareEvent == true){
                              if(self.BACKGROUNDsettings.compareGroup == 1){
                                return (i>0 && i<(self.genome.length+1));
                              }
                              if(self.BACKGROUNDsettings.compareGroup == 2){
                                return (i>(self.genome.length+2) && i<(self.genome.length*2+3));
                              }
                            }else{
                              return true;
                            }
                            })
                            .style("fill", "none")
                            .style("opacity",self.BACKGROUNDsettings.axisOpacity)
                            .style("stroke", self.BACKGROUNDsettings.axisColor)
                            .style("stroke-width", self.BACKGROUNDsettings.axisWidth)
                            .attr("d", d3.svg.arc().innerRadius(self.BACKGROUNDsettings.BginnerRadius).outerRadius(self.BACKGROUNDsettings.BginnerRadius))
                            .attr("transform", function (d,i) {
                                return "translate(" + compareMoveDistance + "," + 0 + ")";
                            })
                            .transition()
                            .delay(function (d,i) {
                              return (i+1) *self.BACKGROUNDsettings.BACKGROUNDAnimationDelay;
                            })
                            .duration(self.BACKGROUNDsettings.BACKGROUNDAnimationTime)
                            .ease(self.BACKGROUNDsettings.BACKGROUNDAnimationType)
                            .attr("d", d3.svg.arc().innerRadius(self.BACKGROUNDsettings.BginnerRadius+(self.BACKGROUNDsettings.BgouterRadius-self.BACKGROUNDsettings.BginnerRadius)/(self.BACKGROUNDsettings.axisNum+1)*i).outerRadius(self.BACKGROUNDsettings.BginnerRadius+(self.BACKGROUNDsettings.BgouterRadius-self.BACKGROUNDsettings.BginnerRadius)/(self.BACKGROUNDsettings.axisNum+1)*i+self.BACKGROUNDsettings.axisWidth))
                    }
                }
              }

              
            }
            self.init_BACKGROUNDsettings();

        }
    }

       
    if(self.GENE.length > 0){
            function NGCircosGene(d) {
              return self.GENE[genei].map(function(v, i) {
                var gene_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                var start_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                var end_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  startAngle: v.start * gene_k + d[self.initGenome[v.chr]].startAngle,
                  endAngle: v.end * gene_k + d[self.initGenome[v.chr]].startAngle,
                  //link_angle1: (v.start/2+v.end/2) * start_k + d[self.initGenome[v.chr]].startAngle,
                  //link_angle2: (v.start/2+v.end/2) * end_k + d[self.initGenome[v.chr]].startAngle,
                  //d3.svg.arc().innerRadius(innerRadius+self.GENEsettings.innerRadius).outerRadius(outerRadius+self.GENEsettings.outerRadius)
                  //link_X1: (0 + Math.sin((v.start) * start_k + d[self.initGenome[v.chr]].startAngle) * ((self.GENEsettings.outerRadius -self.GENEsettings.innerRadius)/2+ outerRadius)),
                  //link_Y1: (0 - Math.cos((v.start) * start_k + d[self.initGenome[v.chr]].startAngle) * ((self.GENEsettings.outerRadius -self.GENEsettings.innerRadius)/2 + outerRadius)),
                  //link_X2: (0 + Math.sin((v.end) * end_k + d[self.initGenome[v.chr]].startAngle) * ((self.GENEsettings.outerRadius -self.GENEsettings.innerRadius)/2 + outerRadius)),
                  //link_Y2: (0 - Math.cos((v.end) * end_k + d[self.initGenome[v.chr]].startAngle) * ((self.GENEsettings.outerRadius -self.GENEsettings.innerRadius)/2 + outerRadius)),
                  //gene_r: ((self.GENEsettings.outerRadius -self.GENEsettings.innerRadius)/2 + outerRadius),
                  link_X1: (0 + Math.sin((v.start) * start_k + d[self.initGenome[v.chr]].startAngle) * (-(self.GENEsettings.outerRadius - self.GENEsettings.innerRadius)/2 + innerRadius + self.GENEsettings.outerRadius)),
                  link_Y1: (0 - Math.cos((v.start) * start_k + d[self.initGenome[v.chr]].startAngle) * (-(self.GENEsettings.outerRadius - self.GENEsettings.innerRadius)/2 + innerRadius + self.GENEsettings.outerRadius)),
                  link_X2: (0 + Math.sin((v.end) * end_k + d[self.initGenome[v.chr]].startAngle) * (-(self.GENEsettings.outerRadius - self.GENEsettings.innerRadius)/2 + innerRadius + self.GENEsettings.outerRadius)),
                  link_Y2: (0 - Math.cos((v.end) * end_k + d[self.initGenome[v.chr]].startAngle) * (-(self.GENEsettings.outerRadius - self.GENEsettings.innerRadius)/2 + innerRadius + self.GENEsettings.outerRadius)),
                  gene_r: (-(self.GENEsettings.outerRadius - self.GENEsettings.innerRadius)/2 + innerRadius + self.GENEsettings.outerRadius),
                  gene_chr: v.chr,
                  gene_strand: v.strand,
                  gene_start: v.start,
                  gene_end: v.end,
                  gene_type: v.type,
                  gene_name: v.name,
                  gene_link:v.link,
                  gene_click_label: "gene"+genei+"_"+i,
                  cds_outerRadius:innerRadius+self.GENEsettings.outerRadius,
                  cds_innerRadius:innerRadius+self.GENEsettings.innerRadius,
                  utr_outerRadius:innerRadius+self.GENEsettings.innerRadius+self.GENEsettings.utrWidth,
                  utr_innerRadius:innerRadius+self.GENEsettings.outerRadius-self.GENEsettings.utrWidth,
                  gene_html:v.html,
                };
              });
            }
            
            function NGCircosGene2(d) {
              return self.GENE[genei].map(function(v, i) {
                var gene_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                var start_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                var end_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  startAngle: 3*Math.PI-(v.start * gene_k + d[self.initGenome[v.chr]].startAngle),
                  endAngle: 3*Math.PI-(v.end * gene_k + d[self.initGenome[v.chr]].startAngle),
                  //link_angle1: (v.start/2+v.end/2) * start_k + d[self.initGenome[v.chr]].startAngle,
                  //link_angle2: (v.start/2+v.end/2) * end_k + d[self.initGenome[v.chr]].startAngle,
                  //d3.svg.arc().innerRadius(innerRadius+self.GENEsettings.innerRadius).outerRadius(outerRadius+self.GENEsettings.outerRadius)
                  //link_X1: (0 + Math.sin((v.start) * start_k + d[self.initGenome[v.chr]].startAngle) * ((self.GENEsettings.outerRadius -self.GENEsettings.innerRadius)/2+ outerRadius)),
                  //link_Y1: (0 - Math.cos((v.start) * start_k + d[self.initGenome[v.chr]].startAngle) * ((self.GENEsettings.outerRadius -self.GENEsettings.innerRadius)/2 + outerRadius)),
                  //link_X2: (0 + Math.sin((v.end) * end_k + d[self.initGenome[v.chr]].startAngle) * ((self.GENEsettings.outerRadius -self.GENEsettings.innerRadius)/2 + outerRadius)),
                  //link_Y2: (0 - Math.cos((v.end) * end_k + d[self.initGenome[v.chr]].startAngle) * ((self.GENEsettings.outerRadius -self.GENEsettings.innerRadius)/2 + outerRadius)),
                  //gene_r: ((self.GENEsettings.outerRadius -self.GENEsettings.innerRadius)/2 + outerRadius),
                  link_X1: (0 + Math.sin(3*Math.PI-((v.start) * start_k + d[self.initGenome[v.chr]].startAngle)) * (-(self.GENEsettings.outerRadius - self.GENEsettings.innerRadius)/2 + innerRadius + self.GENEsettings.outerRadius)),
                  link_Y1: (0 - Math.cos(3*Math.PI-((v.start) * start_k + d[self.initGenome[v.chr]].startAngle)) * (-(self.GENEsettings.outerRadius - self.GENEsettings.innerRadius)/2 + innerRadius + self.GENEsettings.outerRadius)),
                  link_X2: (0 + Math.sin(3*Math.PI-((v.end) * end_k + d[self.initGenome[v.chr]].startAngle)) * (-(self.GENEsettings.outerRadius - self.GENEsettings.innerRadius)/2 + innerRadius + self.GENEsettings.outerRadius)),
                  link_Y2: (0 - Math.cos(3*Math.PI-((v.end) * end_k + d[self.initGenome[v.chr]].startAngle)) * (-(self.GENEsettings.outerRadius - self.GENEsettings.innerRadius)/2 + innerRadius + self.GENEsettings.outerRadius)),
                  gene_r: (-(self.GENEsettings.outerRadius - self.GENEsettings.innerRadius)/2 + innerRadius + self.GENEsettings.outerRadius),
                  gene_chr: v.chr,
                  gene_strand: v.strand,
                  gene_start: v.start,
                  gene_end: v.end,
                  gene_type: v.type,
                  gene_name: v.name,
                  gene_link:v.link,
                  gene_click_label: "gene"+genei+"_"+i,
                  cds_outerRadius:innerRadius+self.GENEsettings.outerRadius,
                  cds_innerRadius:innerRadius+self.GENEsettings.innerRadius,
                  utr_outerRadius:innerRadius+self.GENEsettings.innerRadius+self.GENEsettings.utrWidth,
                  utr_innerRadius:innerRadius+self.GENEsettings.outerRadius-self.GENEsettings.utrWidth,
                  gene_html:v.html,
                };
              });
            }
            
        for(var genei=0; genei<self.GENE.length; genei++){
            self.update_GENEsettings(self.GENEConfig[genei]);
//            console.log("drawTime",drawTime)
//            console.log("genesettings",self.GENEsettings)
            if(drawTime == self.GENEsettings.compareGroup){
                if(self.GENEsettings.compareGroup == 1){
                  var gene_objects = NGCircosGene(chord.groups())
                }else{
                  var gene_objects = NGCircosGene2(chord.groups())
                }

              //draw gene
              //    var gene = d3.svg.arc().innerRadius(innerRadius+self.GENEsettings.innerRadius-5).outerRadius(outerRadius+self.GENEsettings.outerRadius+5);
              //    svg.append("g")
              //        .attr("class", "NGCircosGENE")
              //        .selectAll("path.NGCircosGENE")
              //          .data(gene_objects)
              //          .enter()
              //        .append("path")
              //        .attr("class", "NGCircosGENE")
              //        .attr("fill", "gray")
              //        .attr("d", function(d,i) { if(d.gene_type=="gene"){return gene(d,i); }});

                           //arrow
                            if(self.GENEsettings.arrow == true){
//                              var defs = svg.append("defs");
//                              var arrowMarker = defs.append("marker")
//                              						.attr("id","arrow")
//                              						.attr("markerUnits","strokeWidth")
//                            					    .attr("markerWidth","6")
//                                          .attr("markerHeight","12")
//                                          .attr("viewBox","0 0 12 12")
//                                          .attr("refX","6")
//                                          .attr("refY","6")
//                                          .attr("orient","auto");
//
//                              var arrow_path = "M2,2 L10,6 L2,10 L6,6 L2,2";
//                              arrowMarker.append("path")
//                              			.attr("d",arrow_path)
//                              			.attr("fill","blue");
//
                              //var curve_path = "m10,10 a150,150 0 0 1 10,300";
                              var curve = svg.append("g")
                                        .attr("class", "NGCircosGENEarrow")
                                        .selectAll("path.NGCircosGENEarrow")
                                          .data(gene_objects)
                                          .enter()
                                        .append("path")
                                        .attr("fill","none")
                                        //.attr("id","pathArrow")
                                        .attr("id",function(d) {return (d.gene_name+genei);})
                                        //.attr("id","pathArrow")
                                        .attr("stroke",self.GENEsettings.pathColor)
                                        .attr("stroke-width",self.GENEsettings.pathWidth)
                                        //.attr("marker-start","url(#arrow)")
                                        //.attr("marker-mid","url(#arrow)")
                                        //.attr("marker-end","url(#arrow)")
                                        .attr("d", function(d) {
                                         // console.log(d.endAngle - d.startAngle)
                                          if(self.GENEsettings.compareGroup == 1){
                                            if((d.endAngle - d.startAngle) >= Math.PI){
                                              if(d.gene_type=="gene" && d.gene_strand=="+")
                                                {return "M"+d.link_X1+","+d.link_Y1+" "+"a"+d.gene_r+","+d.gene_r+" 0 1 1 "+(d.link_X2-d.link_X1)+","+(d.link_Y2-d.link_Y1)+""; }
                                              else if(d.gene_type=="gene" && d.gene_strand=="-")
                                                {return "M"+d.link_X2+","+d.link_Y2+" "+"a"+d.gene_r+","+d.gene_r+" 0 1 0 "+(d.link_X1-d.link_X2)+","+(d.link_Y1-d.link_Y2)+""; }
                                            } else {
                                              if(d.gene_type=="gene" && d.gene_strand=="+")
                                                {return "M"+d.link_X1+","+d.link_Y1+" "+"a"+d.gene_r+","+d.gene_r+" 0 0 1 "+(d.link_X2-d.link_X1)+","+(d.link_Y2-d.link_Y1)+""; }
                                              else if(d.gene_type=="gene" && d.gene_strand=="-")
                                                {return "M"+d.link_X2+","+d.link_Y2+" "+"a"+d.gene_r+","+d.gene_r+" 0 0 0 "+(d.link_X1-d.link_X2)+","+(d.link_Y1-d.link_Y2)+""; }
                                            }
                                          }
                                          if(self.GENEsettings.compareGroup == 2){
                                            if((d.endAngle - d.startAngle) >= Math.PI){
                                              if(d.gene_type=="gene" && d.gene_strand=="+")
                                                {return "M"+d.link_X1+","+d.link_Y1+" "+"a"+d.gene_r+","+d.gene_r+" 0 1 1 "+(d.link_X2-d.link_X1)+","+(d.link_Y2-d.link_Y1)+""; }
                                              else if(d.gene_type=="gene" && d.gene_strand=="-")
                                                {return "M"+d.link_X2+","+d.link_Y2+" "+"a"+d.gene_r+","+d.gene_r+" 0 1 0 "+(d.link_X1-d.link_X2)+","+(d.link_Y1-d.link_Y2)+""; }
                                            } else {
                                              if(d.gene_type=="gene" && d.gene_strand=="+")
                                                {return "M"+d.link_X1+","+d.link_Y1+" "+"a"+d.gene_r+","+d.gene_r+" 0 0 0 "+(d.link_X2-d.link_X1)+","+(d.link_Y2-d.link_Y1)+""; }
                                              else if(d.gene_type=="gene" && d.gene_strand=="-")
                                                {return "M"+d.link_X2+","+d.link_Y2+" "+"a"+d.gene_r+","+d.gene_r+" 0 0 1 "+(d.link_X1-d.link_X2)+","+(d.link_Y1-d.link_Y2)+""; }
                                            }
                                          }
                                        })
                                        .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");

                              var arrowGap = self.GENEsettings.arrowGap;
                              if(self.GENEsettings.GENEAnimationDisplay == true){
                                for (var i=0; i*arrowGap <= 100; i++) {
                                  //if ( (i)*arrowGap > 100 ) {return i=0;};
                                  var pathArrow1 = svg.append("g")
                                                      .attr("class", "NGCircosGENEar")
                                                      .selectAll("path.NGCircosGENEar")
                                                        .data(gene_objects)
                                                        .enter()
                                                      .append("text")
                                                      .filter(function(d){ return d.gene_type=="gene";})
                                                      .append("textPath")
                                                      .attr("xlink:href", function(d) {return "#"+d.gene_name+genei;})
                                                      .attr("startOffset", 0*arrowGap+"%")
                                                      .attr("dominant-baseline","central")
                                                      .attr("fill",self.GENEsettings.arrowColor)
                                                      .attr("font-size",self.GENEsettings.arrowSize)
                                                      //.text("➤");
                                                      .text("》")
                                                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")
                                                      .transition()
                                                      .delay(function(d,i){
                                                        return (i+1) * self.GENEsettings.GENEAnimationDelay;
                                                      })
                                                      .duration(self.GENEsettings.GENEAnimationTime)
                                                      .ease(self.GENEsettings.GENEAnimationType)
                                                      .attr("startOffset", i*arrowGap+"%");
                                }
                              }else{
                                for (var i=0; i*arrowGap <= 100; i++) {
                                  //if ( (i)*arrowGap > 100 ) {return i=0;};
                                  var pathArrow1 = svg.append("g")
                                                      .attr("class", "NGCircosGENEar")
                                                      .selectAll("path.NGCircosGENEar")
                                                        .data(gene_objects)
                                                        .enter()
                                                      .append("text")
                                                      .filter(function(d){ return d.gene_type=="gene";})
                                                      .append("textPath")
                                                      .attr("xlink:href", function(d) {return "#"+d.gene_name+genei;})
                                                      .attr("startOffset", i*arrowGap+"%")
                                                      .attr("dominant-baseline","central")
                                                      .attr("fill",self.GENEsettings.arrowColor)
                                                      .attr("font-size",self.GENEsettings.arrowSize)
                                                      //.text("➤");
                                                      .text("》")
                                                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")
                                                    
                                }
                              }
                              
                            }else{
                              //var curve_path = "m10,10 a150,150 0 0 1 10,300";
                              var curve = svg.append("g")
                                        .attr("class", "NGCircosGENEarrow")
                                        .selectAll("path.NGCircosGENEarrow")
                                          .data(gene_objects)
                                          .enter()
                                        .append("path")
                                        .attr("fill","none")
                                        //.attr("id","pathArrow")
                                        .attr("id",function(d) {return (d.gene_name+genei);})
                                        //.attr("id","pathArrow")
                                        .attr("stroke",self.GENEsettings.pathColor)
                                        .attr("stroke-width",self.GENEsettings.pathWidth)
                                        //.attr("marker-start","url(#arrow)")
                                        //.attr("marker-mid","url(#arrow)")
                                        //.attr("marker-end","url(#arrow)")
                                        .attr("d", function(d) {
                                         // console.log(d.endAngle - d.startAngle)
                                          if(self.GENEsettings.compareGroup == 1){
                                            if((d.endAngle - d.startAngle) >= Math.PI){
                                              if(d.gene_type=="gene" && d.gene_strand=="+")
                                                {return "M"+d.link_X1+","+d.link_Y1+" "+"a"+d.gene_r+","+d.gene_r+" 0 1 1 "+(d.link_X2-d.link_X1)+","+(d.link_Y2-d.link_Y1)+""; }
                                              else if(d.gene_type=="gene" && d.gene_strand=="-")
                                                {return "M"+d.link_X2+","+d.link_Y2+" "+"a"+d.gene_r+","+d.gene_r+" 0 1 0 "+(d.link_X1-d.link_X2)+","+(d.link_Y1-d.link_Y2)+""; }
                                            } else {
                                              if(d.gene_type=="gene" && d.gene_strand=="+")
                                                {return "M"+d.link_X1+","+d.link_Y1+" "+"a"+d.gene_r+","+d.gene_r+" 0 0 1 "+(d.link_X2-d.link_X1)+","+(d.link_Y2-d.link_Y1)+""; }
                                              else if(d.gene_type=="gene" && d.gene_strand=="-")
                                                {return "M"+d.link_X2+","+d.link_Y2+" "+"a"+d.gene_r+","+d.gene_r+" 0 0 0 "+(d.link_X1-d.link_X2)+","+(d.link_Y1-d.link_Y2)+""; }
                                            }
                                          }
                                          if(self.GENEsettings.compareGroup == 2){
                                            if((d.endAngle - d.startAngle) >= Math.PI){
                                              if(d.gene_type=="gene" && d.gene_strand=="+")
                                                {return "M"+d.link_X1+","+d.link_Y1+" "+"a"+d.gene_r+","+d.gene_r+" 0 1 1 "+(d.link_X2-d.link_X1)+","+(d.link_Y2-d.link_Y1)+""; }
                                              else if(d.gene_type=="gene" && d.gene_strand=="-")
                                                {return "M"+d.link_X2+","+d.link_Y2+" "+"a"+d.gene_r+","+d.gene_r+" 0 1 0 "+(d.link_X1-d.link_X2)+","+(d.link_Y1-d.link_Y2)+""; }
                                            } else {
                                              if(d.gene_type=="gene" && d.gene_strand=="+")
                                                {return "M"+d.link_X1+","+d.link_Y1+" "+"a"+d.gene_r+","+d.gene_r+" 0 0 0 "+(d.link_X2-d.link_X1)+","+(d.link_Y2-d.link_Y1)+""; }
                                              else if(d.gene_type=="gene" && d.gene_strand=="-")
                                                {return "M"+d.link_X2+","+d.link_Y2+" "+"a"+d.gene_r+","+d.gene_r+" 0 0 1 "+(d.link_X1-d.link_X2)+","+(d.link_Y1-d.link_Y2)+""; }
                                            }
                                          }
                                        })
                                        .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                            }
                                  

                          //draw cds and utr
                            if(self.GENEsettings.GENEAnimationDisplay == true){
                            
//                              console.log(self.GENEsettings.innerRadius,self.GENEsettings.outerRadius)
                              svg.append("g")
                                  .attr("class", "NGCircosGENE")
                                  .selectAll("path.NGCircosGENE")
                                    .data(gene_objects)
                                    .enter()
                                  .append("a")
                                  .attr("xlink:href", function(d) {if(self.settings.GENExlink == true){return d.gene_link;}})
                                  .append("path")
                                  .attr("class", "NGCircosGENE")
                                  .attr("fill", function (d,i) {
                                    if(d.gene_type=="cds"){return self.GENEsettings.cdsColor;}
                                    if(d.gene_type=="utr"){return self.GENEsettings.utrColor;}
                                  })
                                  .attr("stroke",function (d,i) {
                                    if(d.gene_type=="cds"){return self.GENEsettings.cdsStrokeColor;}
                                    if(d.gene_type=="utr"){return self.GENEsettings.utrStrokeColor;}
                                  })
                                  .attr("stroke-width",function (d,i) {
                                    if(d.gene_type=="cds"){return self.GENEsettings.cdsStrokeWidth;}
                                    if(d.gene_type=="utr"){return self.GENEsettings.utrStrokeWidth;}
                                  })
//                                  .attr("d", function(d,i) { if(d.gene_type=="cds"){
//                                    if(self.GENEsettings.GENEAnimationDirection=="S2E"){
//                                      return gene({startAngle:d.startAngle,endAngle:d.startAngle}); 
//                                    }
//                                    if(self.GENEsettings.GENEAnimationDirection=="E2S"){
//                                      return gene({startAngle:d.endAngle,endAngle:d.endAngle}); 
//                                    }
//                                    
//                                    }})
                                  .transition()
                                  .delay(function(d,i){
//                                    console.log("i",i)
                                    return (i+1) * self.GENEsettings.GENEAnimationDelay;
                                  })
                                  .duration(self.GENEsettings.GENEAnimationTime)
                                  .ease(self.GENEsettings.GENEAnimationType)
                                  .attrTween("d", function(d,i,a) { 
                                    if(d.gene_type=="cds"){return function(t){
                                      var cds=d3.svg.arc().innerRadius(d.cds_outerRadius).outerRadius(d.cds_innerRadius).startAngle(d.startAngle).endAngle(d.startAngle+(d.endAngle-d.startAngle)*t);
                                      return cds(d,i)}}
                                    if(d.gene_type=="utr"){return function(t){
                                      var utr=d3.svg.arc().innerRadius(d.utr_outerRadius).outerRadius(d.utr_innerRadius).startAngle(d.startAngle).endAngle(d.startAngle+(d.endAngle-d.startAngle)*t);
                                      return utr(d,i)}}
                                  
                                  })
                                  .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");

                            }else{
                              var cds = d3.svg.arc().innerRadius(innerRadius+self.GENEsettings.outerRadius).outerRadius(innerRadius+self.GENEsettings.innerRadius);
                              var utr = d3.svg.arc().innerRadius(innerRadius+self.GENEsettings.outerRadius-self.GENEsettings.utrWidth).outerRadius(innerRadius+self.GENEsettings.innerRadius+self.GENEsettings.utrWidth);
                              svg.append("g")
                                  .attr("class", "NGCircosGENE")
                                  .selectAll("path.NGCircosGENE")
                                    .data(gene_objects)
                                    .enter()
                                  .append("a")
                                  .attr("xlink:href", function(d) {if(self.settings.GENExlink == true){return d.gene_link;}})
                                  .append("path")
                                  .attr("class", "NGCircosGENE")
                                  .attr("fill", function (d,i) {
                                    if(d.gene_type=="cds"){return self.GENEsettings.cdsColor;}
                                    if(d.gene_type=="utr"){return self.GENEsettings.utrColor;}
                                  })
                                  .attr("stroke",function (d,i) {
                                    if(d.gene_type=="cds"){return self.GENEsettings.cdsStrokeColor;}
                                    if(d.gene_type=="utr"){return self.GENEsettings.utrStrokeColor;}
                                  })
                                  .attr("stroke-width",function (d,i) {
                                    if(d.gene_type=="cds"){return self.GENEsettings.cdsStrokeWidth;}
                                    if(d.gene_type=="utr"){return self.GENEsettings.utrStrokeWidth;}
                                  })
                                  .attr("d", function(d,i) { 
                                    if(d.gene_type=="cds"){
                                      var cds=d3.svg.arc().innerRadius(d.cds_outerRadius).outerRadius(d.cds_innerRadius);
                                      return cds(d,i)}
                                    if(d.gene_type=="utr"){
                                      var utr=d3.svg.arc().innerRadius(d.utr_outerRadius).outerRadius(d.utr_innerRadius);
                                      return utr(d,i)}
                                    
                                    })
                                  .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");

                            }
                            

            }
            self.init_GENEsettings();
            
        }
        
        if(self.settings.GENEMouseEvent==true){
            var GENEMouseOnTooltip = d3.select("body")
                .append("div")
                .attr("class","NGCircosGENETooltip")
                .attr("id","NGCircosGENETooltip")
                .style("opacity",0);

            var GENEMouseOn = svg.selectAll("path.NGCircosGENE");
            if(self.settings.GENEMouseOverDisplay==true){
                   GENEMouseOn.on("mouseover",function(d){
                       
                        if(self.ticksOffset !=undefined){
                          GENEMouseOnTooltip.html(function(){if(self.settings.GENEMouseOverTooltipsSetting == "style1"){
                              return "gene : "+d.gene_chr+"<br>start : "+(parseInt(d.gene_start)+self.ticksOffset)+"<br>end : "+(parseInt(d.gene_end)+self.ticksOffset)+" <br>name : "+d.gene_name+" <br>strand : "+d.gene_strand+" <br>type : "+d.gene_type+""
                            }else if (self.settings.GENEMouseOverTooltipsSetting == "custom") {
                              return self.settings.GENEMouseOverTooltipsHtml+d.gene_html
                            }
                          })
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY + 20) + "px")
                            .style("position", self.settings.GENEMouseOverTooltipsPosition)
                            .style("background-color", self.settings.GENEMouseOverTooltipsBackgroundColor)
                            .style("border-style", self.settings.GENEMouseOverTooltipsBorderStyle)
                            .style("border-width", self.settings.GENEMouseOverTooltipsBorderWidth)
                            .style("padding", self.settings.GENEMouseOverTooltipsPadding)
                            .style("border-radius", self.settings.GENEMouseOverTooltipsBorderRadius)
                            .style("opacity", self.settings.GENEMouseOverTooltipsOpacity)
                             d3.select(this)
                            .style("fill",  function(d,i) { if(self.settings.GENEMouseOverColor=="none"){return "";}else{return self.settings.GENEMouseOverColor;} })
                            .style("opacity",  function(d,i) { if(self.settings.GENEMouseOverArcOpacity=="none"){return "";}else{return self.settings.GENEMouseOverArcOpacity;} })
                            .style("stroke", function(d,i) { if(self.settings.GENEMouseOverArcStrokeColor=="none"){return "";}else{return self.settings.GENEMouseOverArcStrokeColor;} })
                            .style("stroke-width", function(d,i) { if(self.settings.GENEMouseOverArcStrokeWidth=="none"){return "";}else{return self.settings.GENEMouseOverArcStrokeWidth;} });
                        }else{
                          GENEMouseOnTooltip.html(function(){if(self.settings.GENEMouseOverTooltipsSetting == "style1"){
                              return "gene : "+d.gene_chr+"<br>start : "+d.gene_start+"<br>end : "+d.gene_end+" <br>name : "+d.gene_name+" <br>strand : "+d.gene_strand+" <br>type : "+d.gene_type+""
                            }else if (self.settings.GENEMouseOverTooltipsSetting == "custom") {
                              return self.settings.GENEMouseOverTooltipsHtml+d.gene_html
                            }
                          })
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY + 20) + "px")
                            .style("position", self.settings.GENEMouseOverTooltipsPosition)
                            .style("background-color", self.settings.GENEMouseOverTooltipsBackgroundColor)
                            .style("border-style", self.settings.GENEMouseOverTooltipsBorderStyle)
                            .style("border-width", self.settings.GENEMouseOverTooltipsBorderWidth)
                            .style("padding", self.settings.GENEMouseOverTooltipsPadding)
                            .style("border-radius", self.settings.GENEMouseOverTooltipsBorderRadius)
                            .style("opacity", self.settings.GENEMouseOverTooltipsOpacity)
                             d3.select(this)
                            .style("fill",  function(d,i) { if(self.settings.GENEMouseOverColor=="none"){return "";}else{return self.settings.GENEMouseOverColor;} })
                            .style("opacity",  function(d,i) { if(self.settings.GENEMouseOverArcOpacity=="none"){return "";}else{return self.settings.GENEMouseOverArcOpacity;} })
                            .style("stroke", function(d,i) { if(self.settings.GENEMouseOverArcStrokeColor=="none"){return "";}else{return self.settings.GENEMouseOverArcStrokeColor;} })
                            .style("stroke-width", function(d,i) { if(self.settings.GENEMouseOverArcStrokeWidth=="none"){return "";}else{return self.settings.GENEMouseOverArcStrokeWidth;} });
                        }
                                               
                   })
            }
            if(self.settings.GENEMouseClickDisplay==true){
                   GENEMouseOn.on("click",function(d){
                       d3.select(this)
                           .style("fill",  function(d,i) { if(self.settings.GENEMouseClickColor=="none"){return "";}else{return self.settings.GENEMouseClickColor;} })
                           .style("opacity",  function(d,i) { if(self.settings.GENEMouseClickArcOpacity=="none"){return "";}else{return self.settings.GENEMouseClickArcOpacity;} })
                           .style("stroke", function(d,i) { if(self.settings.GENEMouseClickArcStrokeColor=="none"){return "";}else{return self.settings.GENEMouseClickArcStrokeColor;} })
                           .style("stroke-width", function(d,i) { if(self.settings.GENEMouseClickArcStrokeWidth=="none"){return "";}else{return self.settings.GENEMouseClickArcStrokeWidth;} });
                       d3.select("#"+d.gene_click_label)
                           .style("opacity", self.settings.GENEMouseClickTextOpacity)
                           .style("fill", self.settings.GENEMouseClickTextColor)
                           .style("font-size", self.settings.GENEMouseClickTextSize)
                           .attr("x", d3.event.x - self.svgWidth/2 + self.settings.GENEMouseClickTextPostionX)
                           .attr("y", d3.event.y - self.svgHeight/2 + self.settings.GENEMouseClickTextPostionY);
                   })
            }

            if(self.settings.GENEMouseClickTextDrag==true){
                svg.selectAll("text.dragText").call(drag);
            }

            if(self.settings.GENEMouseDownDisplay==true){
                   GENEMouseOn.on("mousedown",function(d){
                      d3.select(this)
                          .style("fill",  function(d,i) { if(self.settings.GENEMouseDownColor=="none"){return "";}else{return self.settings.GENEMouseDownColor;} })
                          .style("opacity",  function(d,i) { if(self.settings.GENEMouseDownArcOpacity=="none"){return "";}else{return self.settings.GENEMouseDownArcOpacity;} })
                          .style("stroke", function(d,i) { if(self.settings.GENEMouseDownArcStrokeColor=="none"){return "";}else{return self.settings.GENEMouseDownArcStrokeColor;} })
                          .style("stroke-width", function(d,i) { if(self.settings.GENEMouseDownArcStrokeWidth=="none"){return "";}else{return self.settings.GENEMouseDownArcStrokeWidth;} });
                  })
            }

            if(self.settings.GENEMouseEnterDisplay==true){
                  GENEMouseOn.on("mouseenter",function(d){
                      d3.select(this)
                          .style("fill", function(d,i) { if(self.settings.GENEMouseEnterColor=="none"){return "";}else{return self.settings.GENEMouseEnterColor;} })
                          .style("opacity", function(d,i) { if(self.settings.GENEMouseEnterArcOpacity=="none"){return "";}else{return self.settings.GENEMouseEnterArcOpacity;} })
                          .style("stroke", function(d,i) { if(self.settings.GENEMouseEnterArcStrokeColor=="none"){return "";}else{return self.settings.GENEMouseEnterArcStrokeColor;} })
                          .style("stroke-width", function(d,i) { if(self.settings.GENEMouseEnterArcStrokeWidth=="none"){return "";}else{return self.settings.GENEMouseEnterArcStrokeWidth;} });
                  })
            }

            if(self.settings.GENEMouseLeaveDisplay==true){
                  GENEMouseOn.on("mouseleave",function(d){
                      GENEMouseOnTooltip.style("opacity",0.0);
                      d3.select(this)
                          .style("fill",  function(d,i) { if(self.settings.GENEMouseLeaveColor=="none"){return "";}else{return self.settings.GENEMouseLeaveColor;} })
                          .style("opacity",  function(d,i) { if(self.settings.GENEMouseLeaveArcOpacity=="none"){return "";}else{return self.settings.GENEMouseLeaveArcOpacity;} })
                          .style("stroke", function(d,i) { if(self.settings.GENEMouseLeaveArcStrokeColor=="none"){return "";}else{return self.settings.GENEMouseLeaveArcStrokeColor;} })
                          .style("stroke-width", function(d,i) { if(self.settings.GENEMouseLeaveArcStrokeWidth=="none"){return "";}else{return self.settings.GENEMouseLeaveArcStrokeWidth;} });
                  })
            }

            if(self.settings.GENEMouseUpDisplay==true){
                   GENEMouseOn.on("mouseup",function(d){
                       d3.select(this)
                          .style("fill",  function(d,i) { if(self.settings.GENEMouseUpColor=="none"){return "";}else{return self.settings.GENEMouseUpColor;} })
                          .style("opacity",  function(d,i) { if(self.settings.GENEMouseUpArcOpacity=="none"){return "";}else{return self.settings.GENEMouseUpArcOpacity;} })
                          .style("stroke", function(d,i) { if(self.settings.GENEMouseUpArcStrokeColor=="none"){return "";}else{return self.settings.GENEMouseUpArcStrokeColor;} })
                          .style("stroke-width", function(d,i) { if(self.settings.GENEMouseUpArcStrokeWidth=="none"){return "";}else{return self.settings.GENEMouseUpArcStrokeWidth;} });
                   })
            }

            if(self.settings.GENEMouseMoveDisplay==true){
                   GENEMouseOn.on("mousemove",function(d){
                       d3.select(this)
                          .style("fill",  function(d,i) { if(self.settings.GENEMouseMoveColor=="none"){return "";}else{return self.settings.GENEMouseMoveColor;} })
                          .style("opacity",  function(d,i) { if(self.settings.GENEMouseMoveArcOpacity=="none"){return "";}else{return self.settings.GENEMouseMoveArcOpacity;} })
                          .style("stroke", function(d,i) { if(self.settings.GENEMouseMoveArcStrokeColor=="none"){return "";}else{return self.settings.GENEMouseMoveArcStrokeColor;} })
                          .style("stroke-width", function(d,i) { if(self.settings.GENEMouseMoveArcStrokeWidth=="none"){return "";}else{return self.settings.GENEMouseMoveArcStrokeWidth;} });
                       GENEMouseOnTooltip.style("left", (d3.event.pageX) + "px")
                       .style("top", (d3.event.pageY + 20) + "px");
                   })
            }

            if(self.settings.GENEMouseOutDisplay==true){
                   GENEMouseOn.on("mouseout",function(d){
                       GENEMouseOnTooltip.style("opacity",0.0);
                       d3.select(this)
                           .transition()
                           .duration(self.settings.GENEMouseOutAnimationTime)
                          .style("fill",  function(d,i) { if(self.settings.GENEMouseOutColor=="none"){return "";}else{return self.settings.GENEMouseOutColor;} })
                          .style("opacity",  function(d,i) { if(self.settings.GENEMouseOutArcOpacity=="none"){return "";}else{return self.settings.GENEMouseOutArcOpacity;} })
                          .style("stroke", function(d,i) { if(self.settings.GENEMouseOutArcStrokeColor=="none"){return "";}else{return self.settings.GENEMouseOutArcStrokeColor;} })
                          .style("stroke-width", function(d,i) { if(self.settings.GENEMouseOutArcStrokeWidth=="none"){return "";}else{return self.settings.GENEMouseOutArcStrokeWidth;} });
                   });
            }
        }
        
    }

    if(self.HISTOGRAM.length > 0){
            function NGCircosHISTOGRAM(d) {
              return self.HISTOGRAM[histogrami].map(function(v, i) {
                var histogram_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  startAngle: v.start * histogram_k + d[self.initGenome[v.chr]].startAngle,
                  endAngle: v.end * histogram_k + d[self.initGenome[v.chr]].startAngle,
                  histogram_chr: v.chr,
                  histogram_start: v.start,
                  histogram_end: v.end,
                  histogram_name: v.name,
                  histogram_link: v.link,
                  histogram_value: v.value,
                  histogram_html:v.html,
                };
              });
            }
            function NGCircosHISTOGRAM2(d) {
              return self.HISTOGRAM[histogrami].map(function(v, i) {
                var histogram_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  startAngle: 3*Math.PI-(v.start * histogram_k + d[self.initGenome[v.chr]].startAngle),
                  endAngle: 3*Math.PI-(v.end * histogram_k + d[self.initGenome[v.chr]].startAngle),
                  histogram_chr: v.chr,
                  histogram_start: v.start,
                  histogram_end: v.end,
                  histogram_name: v.name,
                  histogram_link: v.link,
                  histogram_value: v.value,
                  histogram_html:v.html,
                };
              });
            }
        for(var histogrami=0; histogrami<self.HISTOGRAM.length; histogrami++){
            self.update_HISTOGRAMsettings(self.HISTOGRAMConfig[histogrami]);
            if(drawTime == self.HISTOGRAMsettings.compareGroup){
               if(self.HISTOGRAMsettings.compareGroup == 1){
                  var histogram_objects = NGCircosHISTOGRAM(chord.groups())
                }else{
                  var histogram_objects = NGCircosHISTOGRAM2(chord.groups())
                }
              
              if(self.HISTOGRAMsettings.HISTOGRAMAnimationDisplay == true){
                svg.append("g")
                    .attr("class", "NGCircosHISTOGRAM")
                    .selectAll("path.NGCircosHISTOGRAM")
                      .data(histogram_objects)
                      .enter()
                    .append("a")
                    .attr("xlink:href", function(d){if(self.settings.HISTOGRAMxlink == true){return d.histogram_link;}})
                    .append("path")
                    .attr("class", "NGCircosHISTOGRAM")
                    .attr("fill", self.HISTOGRAMsettings.histogramFillColor)
                    .attr("d", function (d) {
                      if(self.HISTOGRAMsettings.HISTOGRAMAnimationDirection == "O2I"){
                        var hg=d3.svg.arc().innerRadius(self.HISTOGRAMsettings.maxRadius).outerRadius(self.HISTOGRAMsettings.maxRadius);
                         return hg(d,i);
                      }
                      if(self.HISTOGRAMsettings.HISTOGRAMAnimationDirection == "I2O"){
                         var hg=d3.svg.arc().innerRadius(self.HISTOGRAMsettings.minRadius).outerRadius(self.HISTOGRAMsettings.minRadius);
                        return hg(d,i)
                      }
                    })
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")
                    .transition()
                    .delay(function (d,i) {
                      return (i+1) *self.HISTOGRAMsettings.HISTOGRAMAnimationDelay;
                    })
                    .duration(self.HISTOGRAMsettings.HISTOGRAMAnimationTime)
//                    .ease(self.HISTOGRAMsettings.HISTOGRAMAnimationType)
                    .attr("d", d3.svg.arc().innerRadius(self.HISTOGRAMsettings.minRadius).outerRadius(function(d) {return self.HISTOGRAMsettings.minRadius + ((d.histogram_value-self.histogram_value_maxmin(self.HISTOGRAM[histogrami])[1])*(self.HISTOGRAMsettings.maxRadius-self.HISTOGRAMsettings.minRadius)/(self.histogram_value_maxmin(self.HISTOGRAM[histogrami])[0]-self.histogram_value_maxmin(self.HISTOGRAM[histogrami])[1]));}));
              }else{
                svg.append("g")
                    .attr("class", "NGCircosHISTOGRAM")
                    .selectAll("path.NGCircosHISTOGRAM")
                      .data(histogram_objects)
                      .enter()
                    .append("a")
                    .attr("xlink:href", function(d){if(self.settings.HISTOGRAMxlink == true){return d.histogram_link;}})
                    .append("path")
                    .attr("class", "NGCircosHISTOGRAM")
                    .attr("fill", self.HISTOGRAMsettings.histogramFillColor)
                    .attr("d", d3.svg.arc().innerRadius(self.HISTOGRAMsettings.minRadius).outerRadius(function(d) {return self.HISTOGRAMsettings.minRadius + ((d.histogram_value-self.histogram_value_maxmin(self.HISTOGRAM[histogrami])[1])*(self.HISTOGRAMsettings.maxRadius-self.HISTOGRAMsettings.minRadius)/(self.histogram_value_maxmin(self.HISTOGRAM[histogrami])[0]-self.histogram_value_maxmin(self.HISTOGRAM[histogrami])[1]));}))
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")

              }
            }
            
            self.init_HISTOGRAMsettings();

        }

        if(self.settings.HISTOGRAMMouseEvent==true){
            var HISTOGRAMMouseOnTooltip = d3.select("body")
                .append("div")
                .attr("class","NGCircosHISTOGRAMTooltip")
                .attr("id","NGCircosHISTOGRAMTooltip")
                .style("opacity",0);

            var HISTOGRAMMouseOn = svg.selectAll("path.NGCircosHISTOGRAM");

            if(self.settings.HISTOGRAMMouseOverDisplay==true){
                HISTOGRAMMouseOn.on("mouseover",function(d){
                      
                      if(self.ticksOffset != undefined){
                        HISTOGRAMMouseOnTooltip.html(function(){if(self.settings.HISTOGRAMMouseOverTooltipsSetting == "style1"){
                              return "chr : "+d.histogram_chr+"<br>position : "+(parseInt(d.histogram_start)+self.ticksOffset)+"-"+(parseInt(d.histogram_end)+self.ticksOffset)+" <br>name : "+d.histogram_name+" <br>value : "+d.histogram_value+""
                            }else if (self.settings.HISTOGRAMMouseOverTooltipsSetting == "custom") {
                              return self.settings.HISTOGRAMMouseOverTooltipsHtml+d.histogram_html
                            }
                        })                        
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY + 20) + "px")
                         .style("position", self.settings.HISTOGRAMMouseOverTooltipsPosition)
                         .style("background-color", self.settings.HISTOGRAMMouseOverTooltipsBackgroundColor)
                         .style("border-style", self.settings.HISTOGRAMMouseOverTooltipsBorderStyle)
                         .style("border-width", self.settings.HISTOGRAMMouseOverTooltipsBorderWidth)
                         .style("padding", self.settings.HISTOGRAMMouseOverTooltipsPadding)
                         .style("border-radius", self.settings.HISTOGRAMMouseOverTooltipsBorderRadius)
                         .style("opacity", self.settings.HISTOGRAMMouseOverTooltipsOpacity)
                      d3.select(this)
                         .style("fill",  function(d,i) { if(self.settings.HISTOGRAMMouseOverColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseOverColor;} })
                         .style("opacity",  function(d,i) { if(self.settings.HISTOGRAMMouseOverOpacity=="none"){return "";}else{return self.settings.HISTOGRAMMouseOverOpacity;} })
                         .style("stroke", function(d,i) { if(self.settings.HISTOGRAMMouseOverStrokeColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseOverStrokeColor;} })
                         .style("stroke-width", function(d,i) { if(self.settings.HISTOGRAMMouseOverStrokeWidth=="none"){return "";}else{return self.settings.HISTOGRAMMouseOverStrokeWidth;} });

                      }else{
                        HISTOGRAMMouseOnTooltip.html(function(){if(self.settings.HISTOGRAMMouseOverTooltipsSetting == "style1"){
                              return "chr : "+d.histogram_chr+"<br>position : "+d.histogram_start+"-"+d.histogram_end+" <br>name : "+d.histogram_name+" <br>value : "+d.histogram_value+""
                            }else if (self.settings.HISTOGRAMMouseOverTooltipsSetting == "custom") {
                              return self.settings.HISTOGRAMMouseOverTooltipsHtml+d.histogram_html
                            }
                        })
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY + 20) + "px")
                         .style("position", self.settings.HISTOGRAMMouseOverTooltipsPosition)
                         .style("background-color", self.settings.HISTOGRAMMouseOverTooltipsBackgroundColor)
                         .style("border-style", self.settings.HISTOGRAMMouseOverTooltipsBorderStyle)
                         .style("border-width", self.settings.HISTOGRAMMouseOverTooltipsBorderWidth)
                         .style("padding", self.settings.HISTOGRAMMouseOverTooltipsPadding)
                         .style("border-radius", self.settings.HISTOGRAMMouseOverTooltipsBorderRadius)
                         .style("opacity", self.settings.HISTOGRAMMouseOverTooltipsOpacity)
                      d3.select(this)
                         .style("fill",  function(d,i) { if(self.settings.HISTOGRAMMouseOverColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseOverColor;} })
                         .style("opacity",  function(d,i) { if(self.settings.HISTOGRAMMouseOverOpacity=="none"){return "";}else{return self.settings.HISTOGRAMMouseOverOpacity;} })
                         .style("stroke", function(d,i) { if(self.settings.HISTOGRAMMouseOverStrokeColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseOverStrokeColor;} })
                         .style("stroke-width", function(d,i) { if(self.settings.HISTOGRAMMouseOverStrokeWidth=="none"){return "";}else{return self.settings.HISTOGRAMMouseOverStrokeWidth;} });

                      }
                    })
            }
            if(self.settings.HISTOGRAMMouseClickDisplay==true){
                HISTOGRAMMouseOn.on("click",function(d){
                    d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.HISTOGRAMMouseClickColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseClickColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HISTOGRAMMouseClickOpacity=="none"){return "";}else{return self.settings.HISTOGRAMMouseClickOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HISTOGRAMMouseClickStrokeColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseClickStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HISTOGRAMMouseClickStrokeWidth=="none"){return "";}else{return self.settings.HISTOGRAMMouseClickStrokeWidth;} });
                })
            }
            if(self.settings.HISTOGRAMMouseDownDisplay==true){
               HISTOGRAMMouseOn.on("mousedown",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.HISTOGRAMMouseDownColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseDownColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HISTOGRAMMouseDownOpacity=="none"){return "";}else{return self.settings.HISTOGRAMMouseDownOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HISTOGRAMMouseDownStrokeColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseDownStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HISTOGRAMMouseDownStrokeWidth=="none"){return "";}else{return self.settings.HISTOGRAMMouseDownStrokeWidth;} });
               })
            }
            if(self.settings.HISTOGRAMMouseEnterDisplay==true){
               HISTOGRAMMouseOn.on("mouseenter",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.HISTOGRAMMouseEnterColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseEnterColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HISTOGRAMMouseEnterOpacity=="none"){return "";}else{return self.settings.HISTOGRAMMouseEnterOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HISTOGRAMMouseEnterStrokeColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseEnterStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HISTOGRAMMouseEnterStrokeWidth=="none"){return "";}else{return self.settings.HISTOGRAMMouseEnterStrokeWidth;} });
               })
            }
            if(self.settings.HISTOGRAMMouseLeaveDisplay==true){
               HISTOGRAMMouseOn.on("mouseleave",function(d){
                   HISTOGRAMMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.HISTOGRAMMouseLeaveColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseLeaveColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HISTOGRAMMouseLeaveOpacity=="none"){return "";}else{return self.settings.HISTOGRAMMouseLeaveOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HISTOGRAMMouseLeaveStrokeColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseLeaveStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HISTOGRAMMouseLeaveStrokeWidth=="none"){return "";}else{return self.settings.HISTOGRAMMouseLeaveStrokeWidth;} });
               })
            }
            if(self.settings.HISTOGRAMMouseUpDisplay==true){
               HISTOGRAMMouseOn.on("mouseup",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.HISTOGRAMMouseUpColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseUpColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HISTOGRAMMouseUpOpacity=="none"){return "";}else{return self.settings.HISTOGRAMMouseUpOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HISTOGRAMMouseUpStrokeColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseUpStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HISTOGRAMMouseUpStrokeWidth=="none"){return "";}else{return self.settings.HISTOGRAMMouseUpStrokeWidth;} });
               })
            }
            if(self.settings.HISTOGRAMMouseMoveDisplay==true){
               HISTOGRAMMouseOn.on("mousemove",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.HISTOGRAMMouseMoveColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseMoveColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HISTOGRAMMouseMoveOpacity=="none"){return "";}else{return self.settings.HISTOGRAMMouseMoveOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HISTOGRAMMouseMoveStrokeColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseMoveStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HISTOGRAMMouseMoveStrokeWidth=="none"){return "";}else{return self.settings.HISTOGRAMMouseMoveStrokeWidth;} });
                   HISTOGRAMMouseOnTooltip.style("left", (d3.event.pageX) + "px")
                   .style("top", (d3.event.pageY + 20) + "px");
               })
            }
            if(self.settings.HISTOGRAMMouseOutDisplay==true){
               HISTOGRAMMouseOn.on("mouseout",function(d){
                   HISTOGRAMMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .transition()
                       .duration(self.settings.HISTOGRAMMouseOutAnimationTime)
                       .style("fill",  function(d,i) { if(self.settings.HISTOGRAMMouseOutColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseOutColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HISTOGRAMMouseOutOpacity=="none"){return "";}else{return self.settings.HISTOGRAMMouseOutOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HISTOGRAMMouseOutStrokeColor=="none"){return "";}else{return self.settings.HISTOGRAMMouseOutStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HISTOGRAMMouseOutStrokeWidth=="none"){return "";}else{return self.settings.HISTOGRAMMouseOutStrokeWidth;} });
               });
            }

        }

    }

    if(self.LINE.length > 0){
            function NGCircosLINE(d) {
              return self.LINE[linei].map(function(v, i) {
                var line_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  line_angle: v.pos * line_k + d[self.initGenome[v.chr]].startAngle,
                  line_chr: v.chr,
                  line_pos: v.pos,
                  line_des: v.des,
                  line_value: v.value,
                  line_color: self.LINEsettings.LineColor,
                  line_width: self.LINEsettings.LineWidth,
                  x: (0 + Math.sin(v.pos * line_k + d[self.initGenome[v.chr]].startAngle) * ((self.LINEsettings.minRadius + ( (v.value-self.line_value_maxmin(self.LINE[linei])[1])/(self.line_value_maxmin(self.LINE[linei])[0]-self.line_value_maxmin(self.LINE[linei])[1])*(self.LINEsettings.maxRadius-self.LINEsettings.minRadius) )))),
                  y: (0 - Math.cos(v.pos * line_k + d[self.initGenome[v.chr]].startAngle) * ((self.LINEsettings.minRadius + ( (v.value-self.line_value_maxmin(self.LINE[linei])[1])/(self.line_value_maxmin(self.LINE[linei])[0]-self.line_value_maxmin(self.LINE[linei])[1])*(self.LINEsettings.maxRadius-self.LINEsettings.minRadius) )))),
                  line_html:v.html,
                };
              });
            }
            function NGCircosLINE2(d) {
              return self.LINE[linei].map(function(v, i) {
                var line_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  line_angle: 3*Math.PI-(v.pos * line_k + d[self.initGenome[v.chr]].startAngle),
                  line_chr: v.chr,
                  line_pos: v.pos,
                  line_des: v.des,
                  line_value: v.value,
                  line_color: self.LINEsettings.LineColor,
                  line_width: self.LINEsettings.LineWidth,
                  x: (0 + Math.sin(3*Math.PI-(v.pos * line_k + d[self.initGenome[v.chr]].startAngle)) * ((self.LINEsettings.minRadius + ( (v.value-self.line_value_maxmin(self.LINE[linei])[1])/(self.line_value_maxmin(self.LINE[linei])[0]-self.line_value_maxmin(self.LINE[linei])[1])*(self.LINEsettings.maxRadius-self.LINEsettings.minRadius) )))),
                  y: (0 - Math.cos(3*Math.PI-(v.pos * line_k + d[self.initGenome[v.chr]].startAngle)) * ((self.LINEsettings.minRadius + ( (v.value-self.line_value_maxmin(self.LINE[linei])[1])/(self.line_value_maxmin(self.LINE[linei])[0]-self.line_value_maxmin(self.LINE[linei])[1])*(self.LINEsettings.maxRadius-self.LINEsettings.minRadius) )))),
                  line_html:v.html,
                };
              });
            }
        for(var linei=0; linei<self.LINE.length; linei++){
            self.update_LINEsettings(self.LINEConfig[linei]);
            if(drawTime == self.LINEsettings.compareGroup){
               if(self.LINEsettings.compareGroup == 1){
                  var line_objects = NGCircosLINE(chord.groups())
                }else{
                  var line_objects = NGCircosLINE2(chord.groups())
                }

              for(var chri=0; chri<self.genomeLabel.length; chri++){
                var line_objects_a_chr = line_objects.filter(function(element,pos){return element.line_chr==self.genomeLabel[chri]})
                if(line_objects_a_chr.length != 0){
                  if(self.LINEsettings.LINEAnimationDisplay == true){
                    LINE_path=svg.append("g")
                                .attr("class", "NGCircosLINE")
                                .append("path")
                                  .datum(line_objects_a_chr)
                                .attr("class", "NGCircosLINE")
                                .attr("fill", "none")
                                .attr("stroke",self.LINEsettings.LineColor)
                                .attr("stroke-width",self.LINEsettings.LineWidth)
                                .attr("d",  d3.svg.line()
                                  .x(function(d) {return d.x; })
                                  .y(function(d) { return d.y; })
                                  .interpolate(self.LINEsettings.LineType)
                                )
                                .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                      
                    totalLength=LINE_path.node().getTotalLength()
                    
                    LINE_path.attr("stroke-dasharray",totalLength+" "+totalLength)
                              .attr("stroke-dashoffset",function () {
                                if(self.LINEsettings.LINEAnimationDirection == "S2E"){
                                  return totalLength;
                                }
                                if(self.LINEsettings.LINEAnimationDirection == "E2S"){
                                  return -1*totalLength;
                                }
                              })
                              .transition()
                              .delay(function (d,i) {
  //                              return chri*2000;
                                if(self.LINEsettings.LINEAnimationDirection == "S2E"){
                                  return (chri+1)*self.LINEsettings.LINEAnimationDelay;
                                }
                                if(self.LINEsettings.LINEAnimationDirection == "E2S"){
                                  return (self.genomeLabel.length-chri)*self.LINEsettings.LINEAnimationDelay;
                                }
                              })
  //                            .duration(4000)
                              .duration(self.LINEsettings.LINEAnimationTime)
  //                            .ease("linear")
                              .ease(self.LINEsettings.LINEAnimationType)
                              .attr("stroke-dashoffset","0");
                  }else{
                    svg.append("g")
                      .attr("class", "NGCircosLINE")
                      .append("path")
                        .datum(line_objects_a_chr)
                      .attr("class", "NGCircosLINE")
                      .attr("fill", "none")
                      .attr("stroke",self.LINEsettings.LineColor)
                      .attr("stroke-width",self.LINEsettings.LineWidth)
                      .attr("d",  d3.svg.line()
                        .x(function(d) { return d.x; })
                        .y(function(d) { return d.y; })
                        .interpolate(self.LINEsettings.LineType)
                      )
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                }
              }
            }

            
            self.init_LINEsettings();

        }

        if(self.settings.LINEMouseEvent==true){
            var LINEMouseOnTooltip = d3.select("body")
                .append("div")
                .attr("class","NGCircosLINETooltip")
                .attr("id","NGCircosLINETooltip")
                .style("opacity",0);

            var LINEMouseOn = svg.selectAll("path.NGCircosLINE");

            if(self.settings.LINEMouseOverDisplay==true){
                LINEMouseOn.on("mouseover",function(d){
                  LINEMouseOnTooltip.html(function(){if(self.settings.LINEMouseOverTooltipsSetting == "style1"){
                              return self.settings.LINEMouseOverTooltipsHtml
                            }else if (self.settings.LINEMouseOverTooltipsSetting == "custom") {
                              return self.settings.LINEMouseOverTooltipsHtml+d.line_html
                            }
                        })
                       .style("left", (d3.event.pageX) + "px")
                       .style("top", (d3.event.pageY + 20) + "px")
                       .style("position", self.settings.LINEMouseOverTooltipsPosition)
                       .style("background-color", self.settings.LINEMouseOverTooltipsBackgroundColor)
                       .style("border-style", self.settings.LINEMouseOverTooltipsBorderStyle)
                       .style("border-width", self.settings.LINEMouseOverTooltipsBorderWidth)
                       .style("padding", self.settings.LINEMouseOverTooltipsPadding)
                       .style("border-radius", self.settings.LINEMouseOverTooltipsBorderRadius)
                       .style("opacity", self.settings.LINEMouseOverTooltipsOpacity)
                    d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.LINEMouseOverLineOpacity=="none"){return "";}else{return self.settings.LINEMouseOverLineOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINEMouseOverLineStrokeColor=="none"){return "";}else{return self.settings.LINEMouseOverLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINEMouseOverLineStrokeWidth=="none"){return "";}else{return self.settings.LINEMouseOverLineStrokeWidth;} });
                })
            }
            if(self.settings.LINEMouseClickDisplay==true){
                LINEMouseOn.on("click",function(d){
                    d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.LINEMouseClickLineOpacity=="none"){return "";}else{return self.settings.LINEMouseClickLineOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINEMouseClickLineStrokeColor=="none"){return "";}else{return self.settings.LINEMouseClickLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINEMouseClickLineStrokeWidth=="none"){return "";}else{return self.settings.LINEMouseClickLineStrokeWidth;} });
                })
            }
            if(self.settings.LINEMouseDownDisplay==true){
               LINEMouseOn.on("mousedown",function(d){
                   d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.LINEMouseDownLineOpacity=="none"){return "";}else{return self.settings.LINEMouseDownLineOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINEMouseDownLineStrokeColor=="none"){return "";}else{return self.settings.LINEMouseDownLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINEMouseDownLineStrokeWidth=="none"){return "";}else{return self.settings.LINEMouseDownLineStrokeWidth;} });
               })
            }
            if(self.settings.LINEMouseEnterDisplay==true){
               LINEMouseOn.on("mouseenter",function(d){
                   d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.LINEMouseEnterLineOpacity=="none"){return "";}else{return self.settings.LINEMouseEnterLineOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINEMouseEnterLineStrokeColor=="none"){return "";}else{return self.settings.LINEMouseEnterLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINEMouseEnterLineStrokeWidth=="none"){return "";}else{return self.settings.LINEMouseEnterLineStrokeWidth;} });
               })
            }
            if(self.settings.LINEMouseLeaveDisplay==true){
               LINEMouseOn.on("mouseleave",function(d){
                   LINEMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.LINEMouseLeaveLineOpacity=="none"){return "";}else{return self.settings.LINEMouseLeaveLineOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINEMouseLeaveLineStrokeColor=="none"){return "";}else{return self.settings.LINEMouseLeaveLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINEMouseLeaveLineStrokeWidth=="none"){return "";}else{return self.settings.LINEMouseLeaveLineStrokeWidth;} });
               })
            }
            if(self.settings.LINEMouseUpDisplay==true){
               LINEMouseOn.on("mouseup",function(d){
                   d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.LINEMouseUpLineOpacity=="none"){return "";}else{return self.settings.LINEMouseUpLineOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINEMouseUpLineStrokeColor=="none"){return "";}else{return self.settings.LINEMouseUpLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINEMouseUpLineStrokeWidth=="none"){return "";}else{return self.settings.LINEMouseUpLineStrokeWidth;} });
               })
            }
            if(self.settings.LINEMouseMoveDisplay==true){
               LINEMouseOn.on("mousemove",function(d){
                   d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.LINEMouseMoveLineOpacity=="none"){return "";}else{return self.settings.LINEMouseMoveLineOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINEMouseMoveLineStrokeColor=="none"){return "";}else{return self.settings.LINEMouseMoveLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINEMouseMoveLineStrokeWidth=="none"){return "";}else{return self.settings.LINEMouseMoveLineStrokeWidth;} });
                   LINEMouseOnTooltip.style("left", (d3.event.pageX) + "px")
                   .style("top", (d3.event.pageY + 20) + "px");
               })
            }
            if(self.settings.LINEMouseOutDisplay==true){
               LINEMouseOn.on("mouseout",function(d){
                   LINEMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .transition()
                       .duration(self.settings.LINEMouseOutAnimationTime)
                       .style("opacity",  function(d,i) { if(self.settings.LINEMouseOutLineOpacity=="none"){return "";}else{return self.settings.LINEMouseOutLineOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINEMouseOutLineStrokeColor=="none"){return "";}else{return self.settings.LINEMouseOutLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINEMouseOutLineStrokeWidth=="none"){return "";}else{return self.settings.LINEMouseOutLineStrokeWidth;} });
               });
            }

        }

    }
    
    //WIG
    if(self.WIG.length > 0){
            function NGCircosWIG(d) {
              return self.WIG[WIGi].map(function(v, i) {
                var WIG_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;

                if(self.WIGsettings.direction == "out"){
                  tempArc=d3.svg.arc()  // 创建弧形。
                    .innerRadius(self.WIGsettings.minRadius)  // 内径
                    .outerRadius(self.WIGsettings.minRadius)
                  return {
                    WIG_angle: v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle,
                    WIG_chr: v.chr,
                    WIG_pos: v.pos,
                    WIG_des: v.des,
                    WIG_value: v.value,
                    x0: tempArc.centroid({startAngle:v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle,endAngle:v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle})[0],
                    x1: (0 + Math.sin(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle) * ((self.WIGsettings.minRadius + ( (v.value-self.WIG_value_maxmin(self.WIG[WIGi])[1])/(self.WIG_value_maxmin(self.WIG[WIGi])[0]-self.WIG_value_maxmin(self.WIG[WIGi])[1])*(self.WIGsettings.maxRadius-self.WIGsettings.minRadius) )))),
                    y0: tempArc.centroid({startAngle:v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle,endAngle:v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle})[1],
                    y1: (0 - Math.cos(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle) * ((self.WIGsettings.minRadius + ( (v.value-self.WIG_value_maxmin(self.WIG[WIGi])[1])/(self.WIG_value_maxmin(self.WIG[WIGi])[0]-self.WIG_value_maxmin(self.WIG[WIGi])[1])*(self.WIGsettings.maxRadius-self.WIGsettings.minRadius) )))),
                    WIG_html:v.html,
                  };
                }
                if(self.WIGsettings.direction == "in"){
                  tempArc=d3.svg.arc()  // 创建弧形。
                    .innerRadius(self.WIGsettings.maxRadius)  // 内径
                    .outerRadius(self.WIGsettings.maxRadius)
                  return {
                    WIG_angle: v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle,
                    WIG_chr: v.chr,
                    WIG_pos: v.pos,
                    WIG_des: v.des,
                    WIG_value: v.value,
                    x0: tempArc.centroid({startAngle:v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle,endAngle:v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle})[0],
                    x1: (0 + Math.sin(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle) * ((self.WIGsettings.maxRadius - ( (v.value-self.WIG_value_maxmin(self.WIG[WIGi])[1])/(self.WIG_value_maxmin(self.WIG[WIGi])[0]-self.WIG_value_maxmin(self.WIG[WIGi])[1])*(self.WIGsettings.maxRadius-self.WIGsettings.minRadius) )))),
                    y0: tempArc.centroid({startAngle:v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle,endAngle:v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle})[1],
                    y1: (0 - Math.cos(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle) * ((self.WIGsettings.maxRadius - ( (v.value-self.WIG_value_maxmin(self.WIG[WIGi])[1])/(self.WIG_value_maxmin(self.WIG[WIGi])[0]-self.WIG_value_maxmin(self.WIG[WIGi])[1])*(self.WIGsettings.maxRadius-self.WIGsettings.minRadius) )))),
                    WIG_html:v.html,
                  };
                }
              });
            }
            function NGCircosWIG2(d) {
              return self.WIG[WIGi].map(function(v, i) {
                var WIG_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;

                if(self.WIGsettings.direction == "out"){
                  tempArc=d3.svg.arc()  // 创建弧形。
                    .innerRadius(self.WIGsettings.minRadius)  // 内径
                    .outerRadius(self.WIGsettings.minRadius)
                  return {
                    WIG_angle: 3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle),
                    WIG_chr: v.chr,
                    WIG_pos: v.pos,
                    WIG_des: v.des,
                    WIG_value: v.value,
                    x0: tempArc.centroid({startAngle:3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle),endAngle:3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle)})[0],
                    x1: (0 + Math.sin(3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle)) * ((self.WIGsettings.minRadius + ( (v.value-self.WIG_value_maxmin(self.WIG[WIGi])[1])/(self.WIG_value_maxmin(self.WIG[WIGi])[0]-self.WIG_value_maxmin(self.WIG[WIGi])[1])*(self.WIGsettings.maxRadius-self.WIGsettings.minRadius) )))),
                    y0: tempArc.centroid({startAngle:3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle),endAngle:3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle)})[1],
                    y1: (0 - Math.cos(3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle)) * ((self.WIGsettings.minRadius + ( (v.value-self.WIG_value_maxmin(self.WIG[WIGi])[1])/(self.WIG_value_maxmin(self.WIG[WIGi])[0]-self.WIG_value_maxmin(self.WIG[WIGi])[1])*(self.WIGsettings.maxRadius-self.WIGsettings.minRadius) ))))
                  };
                }
                if(self.WIGsettings.direction == "in"){
                  tempArc=d3.svg.arc()  // 创建弧形。
                    .innerRadius(self.WIGsettings.maxRadius)  // 内径
                    .outerRadius(self.WIGsettings.maxRadius)
                  return {
                    WIG_angle: 3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle),
                    WIG_chr: v.chr,
                    WIG_pos: v.pos,
                    WIG_des: v.des,
                    WIG_value: v.value,
                    x0: tempArc.centroid({startAngle:3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle),endAngle:3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle)})[0],
                    x1: (0 + Math.sin(3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle)) * ((self.WIGsettings.maxRadius - ( (v.value-self.WIG_value_maxmin(self.WIG[WIGi])[1])/(self.WIG_value_maxmin(self.WIG[WIGi])[0]-self.WIG_value_maxmin(self.WIG[WIGi])[1])*(self.WIGsettings.maxRadius-self.WIGsettings.minRadius) )))),
                    y0: tempArc.centroid({startAngle:3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle),endAngle:3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle)})[1],
                    y1: (0 - Math.cos(3*Math.PI-(v.pos * WIG_k + d[self.initGenome[v.chr]].startAngle)) * ((self.WIGsettings.maxRadius - ( (v.value-self.WIG_value_maxmin(self.WIG[WIGi])[1])/(self.WIG_value_maxmin(self.WIG[WIGi])[0]-self.WIG_value_maxmin(self.WIG[WIGi])[1])*(self.WIGsettings.maxRadius-self.WIGsettings.minRadius) ))))
                  };
                }
              });
            }
        for(var WIGi=0; WIGi<self.WIG.length; WIGi++){
            self.update_WIGsettings(self.WIGConfig[WIGi]);
            if(drawTime == self.WIGsettings.compareGroup){
              if(self.WIGsettings.compareGroup == 1){
                var WIG_objects = NGCircosWIG(chord.groups())
              }else{
                var WIG_objects = NGCircosWIG2(chord.groups())
              }
              
              for(var chri=0; chri<self.genomeLabel.length; chri++){
                var WIG_objects_a_chr = WIG_objects.filter(function(element,pos){return element.WIG_chr==self.genomeLabel[chri]})
                if(WIG_objects_a_chr.length != 0){
                  if(self.WIGsettings.WIGAnimationDisplay == true){
                    svg.append("g")
                                .attr("class", "NGCircosWIG")
                                .append("path")
                                  .datum(WIG_objects_a_chr)
                                .attr("class", "NGCircosWIG")
                                .attr("fill", self.WIGsettings.WIGColor)
                                .attr("stroke",self.WIGsettings.WIGStrokeColor)
                                .attr("stroke-width",self.WIGsettings.WIGStrokeWidth)
                                .attr("opacity",self.WIGsettings.WIGOpacity)
                                .attr("d",  d3.svg.area()
                                  .x0(function(d) { return d.x0; })
                                  .x1(function(d) { return d.x0; })
                                  .y0(function(d) { return d.y0; })
                                  .y1(function(d) { return d.y0; })
                                  .interpolate(self.WIGsettings.WIGStrokeType)
                                )
                                .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")
                                .transition()
                                .delay(function (d,i) {
                                  return (i+1) *self.WIGsettings.WIGAnimationDelay;
                                })
                                .duration(self.WIGsettings.WIGAnimationTime)
                                .ease(self.WIGsettings.WIGAnimationType)
                                .attr("d",  d3.svg.area()
                                  .x0(function(d) { return d.x0; })
                                  .x1(function(d) { return d.x1; })
                                  .y0(function(d) { return d.y0; })
                                  .y1(function(d) { return d.y1; })
                                  .interpolate(self.WIGsettings.WIGStrokeType)
                                );
                    

                  }else {
                    svg.append("g")
                      .attr("class", "NGCircosWIG")
                      .append("path")
                        .datum(WIG_objects_a_chr)
                      .attr("class", "NGCircosWIG")
                      .attr("fill", self.WIGsettings.WIGColor)
                      .attr("stroke",self.WIGsettings.WIGStrokeColor)
                      .attr("stroke-width",self.WIGsettings.WIGStrokeWidth)
                      .attr("opacity",self.WIGsettings.WIGOpacity)
                      .attr("d",  d3.svg.area()
                        .x0(function(d) { return d.x0; })
                        .x1(function(d) { return d.x1; })
                        .y0(function(d) { return d.y0; })
                        .y1(function(d) { return d.y1; })
                        .interpolate(self.WIGsettings.WIGStrokeType)
                      )
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }


                }
              }
              
            }
            self.init_WIGsettings();

        }
        
        if(self.settings.WIGMouseEvent==true){
            var WIGMouseOnTooltip = d3.select("body")
                .append("div")
                .attr("class","NGCircosWIGTooltip")
                .attr("id","NGCircosWIGTooltip")
                .style("opacity",0);

            var WIGMouseOn = svg.selectAll("path.NGCircosWIG");

            if(self.settings.WIGMouseOverDisplay==true){
                WIGMouseOn.on("mouseover",function(d){
                    WIGMouseOnTooltip.html(function(){if(self.settings.WIGMouseOverTooltipsSetting == "style1"){
                              return self.settings.WIGMouseOverTooltipsHtml+"chr"
                            }else if (self.settings.WIGMouseOverTooltipsSetting == "custom") {
                              return self.settings.WIGMouseOverTooltipsHtml+d.WIG_html
                            }
                        })
                       .style("left", (d3.event.pageX) + "px")
                       .style("top", (d3.event.pageY + 20) + "px")
                       .style("position", self.settings.WIGMouseOverTooltipsPosition)
                       .style("background-color", self.settings.WIGMouseOverTooltipsBackgroundColor)
                       .style("border-style", self.settings.WIGMouseOverTooltipsBorderStyle)
                       .style("border-width", self.settings.WIGMouseOverTooltipsBorderWidth)
                       .style("padding", self.settings.WIGMouseOverTooltipsPadding)
                       .style("border-radius", self.settings.WIGMouseOverTooltipsBorderRadius)
                       .style("opacity", self.settings.WIGMouseOverTooltipsOpacity)
                    d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.WIGMouseOverLineOpacity=="none"){return "";}else{return self.settings.WIGMouseOverLineOpacity;} })
                       .style("fill", function(d,i) { if(self.settings.WIGMouseOverFillColor=="none"){return "";}else{return self.settings.WIGMouseOverFillColor;} })
                       .style("stroke", function(d,i) { if(self.settings.WIGMouseOverLineStrokeColor=="none"){return "";}else{return self.settings.WIGMouseOverLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.WIGMouseOverLineStrokeWidth=="none"){return "";}else{return self.settings.WIGMouseOverLineStrokeWidth;} });
                })
            }
            if(self.settings.WIGMouseClickDisplay==true){
                WIGMouseOn.on("click",function(d){
                    d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.WIGMouseClickLineOpacity=="none"){return "";}else{return self.settings.WIGMouseClickLineOpacity;} })
                       .style("fill", function(d,i) { if(self.settings.WIGMouseClickFillColor=="none"){return "";}else{return self.settings.WIGMouseClickFillColor;} })
                       .style("stroke", function(d,i) { if(self.settings.WIGMouseClickLineStrokeColor=="none"){return "";}else{return self.settings.WIGMouseClickLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.WIGMouseClickLineStrokeWidth=="none"){return "";}else{return self.settings.WIGMouseClickLineStrokeWidth;} });
                })
            }
            if(self.settings.WIGMouseDownDisplay==true){
               WIGMouseOn.on("mousedown",function(d){
                   d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.WIGMouseDownLineOpacity=="none"){return "";}else{return self.settings.WIGMouseDownLineOpacity;} })
                       .style("fill", function(d,i) { if(self.settings.WIGMouseDownFillColor=="none"){return "";}else{return self.settings.WIGMouseDownFillColor;} })
                       .style("stroke", function(d,i) { if(self.settings.WIGMouseDownLineStrokeColor=="none"){return "";}else{return self.settings.WIGMouseDownLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.WIGMouseDownLineStrokeWidth=="none"){return "";}else{return self.settings.WIGMouseDownLineStrokeWidth;} });
               })
            }
            if(self.settings.WIGMouseEnterDisplay==true){
               WIGMouseOn.on("mouseenter",function(d){
                   d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.WIGMouseEnterLineOpacity=="none"){return "";}else{return self.settings.WIGMouseEnterLineOpacity;} })
                       .style("fill", function(d,i) { if(self.settings.WIGMouseEnterFillColor=="none"){return "";}else{return self.settings.WIGMouseEnterFillColor;} })
                       .style("stroke", function(d,i) { if(self.settings.WIGMouseEnterLineStrokeColor=="none"){return "";}else{return self.settings.WIGMouseEnterLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.WIGMouseEnterLineStrokeWidth=="none"){return "";}else{return self.settings.WIGMouseEnterLineStrokeWidth;} });
               })
            }
            if(self.settings.WIGMouseLeaveDisplay==true){
               WIGMouseOn.on("mouseleave",function(d){
                   WIGMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.WIGMouseLeaveLineOpacity=="none"){return "";}else{return self.settings.WIGMouseLeaveLineOpacity;} })
                       .style("fill", function(d,i) { if(self.settings.WIGMouseLeaveFillColor=="none"){return "";}else{return self.settings.WIGMouseLeaveFillColor;} })
                       .style("stroke", function(d,i) { if(self.settings.WIGMouseLeaveLineStrokeColor=="none"){return "";}else{return self.settings.WIGMouseLeaveLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.WIGMouseLeaveLineStrokeWidth=="none"){return "";}else{return self.settings.WIGMouseLeaveLineStrokeWidth;} });
               })
            }
            if(self.settings.WIGMouseUpDisplay==true){
               WIGMouseOn.on("mouseup",function(d){
                   d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.WIGMouseUpLineOpacity=="none"){return "";}else{return self.settings.WIGMouseUpLineOpacity;} })
                       .style("fill", function(d,i) { if(self.settings.WIGMouseUpFillColor=="none"){return "";}else{return self.settings.WIGMouseUpFillColor;} })
                       .style("stroke", function(d,i) { if(self.settings.WIGMouseUpLineStrokeColor=="none"){return "";}else{return self.settings.WIGMouseUpLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.WIGMouseUpLineStrokeWidth=="none"){return "";}else{return self.settings.WIGMouseUpLineStrokeWidth;} });
               })
            }
            if(self.settings.WIGMouseMoveDisplay==true){
               WIGMouseOn.on("mousemove",function(d){
                   d3.select(this)
                       .style("opacity",  function(d,i) { if(self.settings.WIGMouseMoveLineOpacity=="none"){return "";}else{return self.settings.WIGMouseMoveLineOpacity;} })
                       .style("fill", function(d,i) { if(self.settings.WIGMouseMoveFillColor=="none"){return "";}else{return self.settings.WIGMouseMoveFillColor;} })
                       .style("stroke", function(d,i) { if(self.settings.WIGMouseMoveLineStrokeColor=="none"){return "";}else{return self.settings.WIGMouseMoveLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.WIGMouseMoveLineStrokeWidth=="none"){return "";}else{return self.settings.WIGMouseMoveLineStrokeWidth;} });
                   WIGMouseOnTooltip.style("left", (d3.event.pageX) + "px")
                   .style("top", (d3.event.pageY + 20) + "px");
               })
            }
            if(self.settings.WIGMouseOutDisplay==true){
               WIGMouseOn.on("mouseout",function(d){
                   WIGMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .transition()
                       .duration(self.settings.WIGMouseOutAnimationTime)
                       .style("opacity",  function(d,i) { if(self.settings.WIGMouseOutLineOpacity=="none"){return "";}else{return self.settings.WIGMouseOutLineOpacity;} })
                       .style("fill", function(d,i) { if(self.settings.WIGMouseOutFillColor=="none"){return "";}else{return self.settings.WIGMouseOutFillColor;} })
                       .style("stroke", function(d,i) { if(self.settings.WIGMouseOutLineStrokeColor=="none"){return "";}else{return self.settings.WIGMouseOutLineStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.WIGMouseOutLineStrokeWidth=="none"){return "";}else{return self.settings.WIGMouseOutLineStrokeWidth;} });
               });
            }

        }

    }
    //WIG

    if(self.TEXT.length > 0 && drawTime == 1){
        for(var texti=0; texti<self.TEXT.length; texti++){
            self.update_TEXTsettings(self.TEXTConfig[texti]);
              if(self.TEXTsettings.TEXTAnimationDisplay == false){
                svg.append("text")
                 .attr("x", 0)
                 .attr("y", 0)
                 .style("opacity", self.TEXTsettings.textOpacity)
                 .style("font-size", self.TEXTsettings.textSize)
                 .style("font-weight", self.TEXTsettings.textWeight) //normal,bold,bolder,lighter,100,200,300,400,500,600,700,800,900
                 .attr("fill", self.TEXTsettings.textColor)
                 .attr("class", "dragText")
                 .attr("transform",function (d) {
                  return "translate("+self.TEXTsettings.x+" "+self.TEXTsettings.y+") rotate("+ self.TEXTsettings.rotateRate*180 + ")"
                })
                 .text(self.TEXTsettings.text);
              }
              if(self.TEXTsettings.TEXTAnimationDisplay == true){
                svg.append("text")
                 .attr("x", 0)
                 .attr("y", 0)
                 .style("opacity", self.TEXTsettings.TEXTAnimationInitialOpacity)
                 .style("font-size", self.TEXTsettings.TEXTAnimationInitialSize)
                 .style("font-weight", self.TEXTsettings.TEXTAnimationInitialWeight) //normal,bold,bolder,lighter,100,200,300,400,500,600,700,800,900
                 .attr("fill", self.TEXTsettings.TEXTAnimationInitialColor)
                 .attr("class", "dragText")
                 .attr("transform",function (d) {
                  return "translate("+self.TEXTsettings.TEXTAnimationInitialPositionX+" "+self.TEXTsettings.TEXTAnimationInitialPositionY+") rotate("+ self.TEXTsettings.TEXTAnimationInitialRotate*180 + ")"
                })
                 .text(self.TEXTsettings.text)
                  .transition()
                  .delay(function (d,i) {
                    return self.TEXTsettings.TEXTAnimationDelay;
                  })
                  .duration(self.TEXTsettings.TEXTAnimationTime)
                  .ease(self.TEXTsettings.TEXTAnimationType)
                 .attr("transform",function (d) {
                  return "translate("+self.TEXTsettings.x+" "+self.TEXTsettings.y+") rotate("+ self.TEXTsettings.rotateRate*180 + ")"
                }); 
              }
            self.init_TEXTsettings();
        }
        if(self.settings.TEXTModuleDragEvent==true){
            svg.selectAll("text.dragText").call(drag);
        }

    }
    
    //legend
    if(self.LEGEND.length > 0 && drawTime == 1){
      function NGCircosLEGEND(d) {
          return self.LEGEND[legendi].map(function(v, i) {
//            console.log(i)
            return {
              legend_x: self.LEGENDsettings.x+15,
              legend_y: self.LEGENDsettings.y+self.LEGENDsettings.titleSize+self.LEGENDsettings.GapBetweenLines*i,
              legend_type:v.type,
              legend_color:v.color,
              legend_opacity:v.opacity,
              legend_circleSize:v.circleSize,
              legend_rectSize:v.rectSize,
              legend_lineWidth:v.lineWidth,
              legend_lineHeight:v.lineHeight,
              legend_text:v.text,
              legend_textSize:v.textSize,
              legend_textWeight:v.textWeight,
              
              
            };
          });
        }
      for(var legendi=0; legendi<self.LEGEND.length; legendi++){
        self.update_LEGENDsettings(self.LEGENDConfig[legendi]);
          svg.append("text")
           .attr("x", self.LEGENDsettings.x)
           .attr("y", self.LEGENDsettings.y)
           .style("font-size", self.LEGENDsettings.titleSize)
           .style("font-weight", self.LEGENDsettings.titleWeight) //normal,bold,bolder,lighter,100,200,300,400,500,600,700,800,900
           .attr("fill", "black")
           .text(self.LEGENDsettings.title);
          
        var legend_objects = NGCircosLEGEND(chord.groups())
//        console.log(legend_objects)
          for(var objecti=0; objecti<legend_objects.length;objecti++){
              var legend_objects_circle= new Array();
              var legend_objects_line = new Array();
              var legend_objects_rect= new Array();
              if(legend_objects[objecti].legend_type == "circle"){
                legend_objects_circle[0] =legend_objects[objecti]
                //console.log(legend_objects_circle)
                svg.append("g")
                  .attr("class", "NGCircosLEGEND")
                  .selectAll("circle")
                  .data(legend_objects_circle)
                  .enter()
                  .append("circle")
                  .attr("id", "NGCircosLEGENDCircle")
                  .attr("fill", function(d) { return d.legend_color; })
                  .attr("opacity", function(d) { return d.legend_opacity; })
                  .attr("r", function(d) { return d.legend_circleSize; })
                  .attr("cx", function(d) { return d.legend_x; })
                  .attr("cy", function(d) { return d.legend_y; });
                
                textX=parseInt(legend_objects[objecti].legend_x)+parseInt(legend_objects[objecti].legend_circleSize)+self.LEGENDsettings.GapBetweenGraphicText
                textY=parseInt(legend_objects[objecti].legend_y)+parseInt(legend_objects[objecti].legend_circleSize)/2
                svg.append("text")
                 .attr("x", textX)
                 .attr("y", textY)
                 .style("font-size", legend_objects[objecti].legend_textSize)
                 .style("font-weight", legend_objects[objecti].legend_textWeight) //normal,bold,bolder,lighter,100,200,300,400,500,600,700,800,900
                 .attr("fill", "black")
                 .text(legend_objects[objecti].legend_text);

              }
              if(legend_objects[objecti].legend_type == "line"){
                legend_objects_line[0] = legend_objects[objecti]
//                console.log(legend_objects_line)
                start_x=parseInt(legend_objects[objecti].legend_x)-parseInt(legend_objects[objecti].legend_lineWidth)/2
                end_x=parseInt(legend_objects[objecti].legend_x)+parseInt(legend_objects[objecti].legend_lineWidth)/2
                start_y=parseInt(legend_objects[objecti].legend_y)
                end_y=parseInt(legend_objects[objecti].legend_y)
                data=[[start_x,start_y],[end_x,end_y]]
//                console.log(data)
                lineGenerator = d3.svg.line()
                                  .x(function(d) {
                                      return d[0]
                                  })
                                  .y(function(d) {
                                      return d[1];
                                  });
                svg.append("g")
                  .attr("class", "NGCircosLEGEND")
                  .selectAll("path")
                  .data(legend_objects_line)
                  .enter()
                  .append("path")
                  .attr("id", "NGCircosLEGENDLine")
                  .attr("d", lineGenerator(data))
                  .attr("stroke",function(d) { return d.legend_color; })
                  .attr("stroke-width",function(d) { return d.legend_lineHeight; })
                  .attr("fill","none");
                  
                textX=parseInt(legend_objects[objecti].legend_x)+parseInt(legend_objects[objecti].legend_lineWidth)+self.LEGENDsettings.GapBetweenGraphicText
                textY=parseInt(legend_objects[objecti].legend_y)+parseInt(legend_objects[objecti].legend_lineHeight)/2
                svg.append("text")
                 .attr("x", textX)
                 .attr("y", textY)
                 .style("font-size", legend_objects[objecti].legend_textSize)
                 .style("font-weight", legend_objects[objecti].legend_textWeight) //normal,bold,bolder,lighter,100,200,300,400,500,600,700,800,900
                 .attr("fill", "black")
                 .text(legend_objects[objecti].legend_text);

                
              }
              if(legend_objects[objecti].legend_type == "rect"){
                legend_objects_rect[0]=legend_objects[objecti]
                svg.append("g")
                  .attr("class", "NGCircosLEGEND")
                  .selectAll("rect")
                  .data(legend_objects_rect)
                  .enter()
                  .append("rect")
                  .attr("id", "NGCircosLEGENDRect")
                  .attr("x", function(d) { return d.legend_x-d.legend_rectSize/2; })
                  .attr("y", function(d) { return d.legend_y-d.legend_rectSize/2; })
                  .attr("fill", function(d) { return d.legend_color; })
                  .attr("width", function(d) { return d.legend_rectSize; })
                  .attr("height", function(d) { return d.legend_rectSize; })
                  .attr("opacity", function(d) { return d.legend_opacity; });

                textX=parseInt(legend_objects[objecti].legend_x)+parseInt(legend_objects[objecti].legend_rectSize)+self.LEGENDsettings.GapBetweenGraphicText
                textY=parseInt(legend_objects[objecti].legend_y)+parseInt(legend_objects[objecti].legend_rectSize)/2
                svg.append("text")
                 .attr("x", textX)
                 .attr("y", textY)
                 .style("font-size", legend_objects[objecti].legend_textSize)
                 .style("font-weight", legend_objects[objecti].legend_textWeight) //normal,bold,bolder,lighter,100,200,300,400,500,600,700,800,900
                 .attr("fill", "black")
                 .text(legend_objects[objecti].legend_text);

              }
          }
                                

          
        self.init_LEGENDsettings();
      }


    }

    //legend

    if(self.CNV.length > 0){
            function NGCircosCNV(d) {
              return self.CNV[cnvi].map(function(v, i) {
                var cnv_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  startAngle: v.start * cnv_k + d[self.initGenome[v.chr]].startAngle,
                  endAngle: v.end * cnv_k + d[self.initGenome[v.chr]].startAngle,
                  cnv_chr: v.chr,
                  cnv_start: v.start,
                  cnv_end: v.end,
                  cnv_val: v.value,
                  cnv_link: v.link,
                  cnv_color:v.color,
                  cnv_click_label: "cnv"+cnvi+"_"+i,
                  cnv_deviation: (v.value-self.cnv_value_maxmin(self.CNV[cnvi])[1])/(self.cnv_value_maxmin(self.CNV[cnvi])[0]-self.cnv_value_maxmin(self.CNV[cnvi])[1])*(self.CNVsettings.maxRadius-self.CNVsettings.minRadius),
                  cnv_html : v.html,
                };
              });
            }
            function NGCircosCNV2(d) {
              return self.CNV[cnvi].map(function(v, i) {
                var cnv_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  startAngle: 3*Math.PI-(v.start * cnv_k + d[self.initGenome[v.chr]].startAngle),
                  endAngle: 3*Math.PI-(v.end * cnv_k + d[self.initGenome[v.chr]].startAngle),
                  cnv_chr: v.chr,
                  cnv_start: v.start,
                  cnv_end: v.end,
                  cnv_val: v.value,
                  cnv_link: v.link,
                  cnv_color:v.color,
                  cnv_click_label: "cnv"+cnvi+"_"+i,
                  cnv_deviation: (v.value-self.cnv_value_maxmin(self.CNV[cnvi])[1])/(self.cnv_value_maxmin(self.CNV[cnvi])[0]-self.cnv_value_maxmin(self.CNV[cnvi])[1])*(self.CNVsettings.maxRadius-self.CNVsettings.minRadius),
                  cnv_html:v.html,
                };
              });
            }
        for(var cnvi=0; cnvi<self.CNV.length; cnvi++){
            self.update_CNVsettings(self.CNVConfig[cnvi]);
            if(drawTime == self.CNVsettings.compareGroup){
               if(self.CNVsettings.compareGroup == 1){
                  var cnv_objects = NGCircosCNV(chord.groups())
                }else{
                  var cnv_objects = NGCircosCNV2(chord.groups())
                }
            
            if(self.CNVsettings.CNVAnimationDisplay == true){
              svg.append("g")
                  .attr("class", "NGCircosCNV")
                  .selectAll("path.NGCircosCNV")
                    .data(cnv_objects)
                    .enter()
                  .append("a")
                  .attr("xlink:href", function(d){if(self.settings.CNVxlink == true){return d.cnv_link;}})
                  .append("path")
                  .attr("class", "NGCircosCNV")
                  .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")
                  .attr("fill", "none")
                  .attr("stroke","none")
                  .attr("stroke-width","none")
                  .attr("opacity","none")
                  .attr("d", function(d,i) { var cnv = d3.svg.arc().innerRadius(self.CNVsettings.minRadius).outerRadius(self.CNVsettings.maxRadius); return cnv(d,i); })
                  .transition()
                  .delay(function(d,i){
                    return (i+1) * self.CNVsettings.CNVAnimationDelay;
                  })
                  .duration(self.CNVsettings.CNVAnimationTime)
                  .ease(self.CNVsettings.CNVAnimationType)
                  .attr("fill", function(d,i) { if(d.cnv_color != undefined){return d.cnv_color;}else{return self.CNVsettings.CNVColor;} })
                  .attr("stroke",self.CNVsettings.strokeColor)
                  .attr("stroke-width",self.CNVsettings.strokeWidth)
                  .attr("opacity",self.CNVsettings.opacity)
                  .attr("d", function(d,i) { var cnv = d3.svg.arc().innerRadius(self.CNVsettings.minRadius+d.cnv_deviation).outerRadius(self.CNVsettings.minRadius+self.CNVsettings.CNVwidth+d.cnv_deviation); return cnv(d,i); });
            }else{
              svg.append("g")
                  .attr("class", "NGCircosCNV")
                  .selectAll("path.NGCircosCNV")
                    .data(cnv_objects)
                    .enter()
                  .append("a")
                  .attr("xlink:href", function(d){if(self.settings.CNVxlink == true){return d.cnv_link;}})
                  .append("path")
                  .attr("class", "NGCircosCNV")
                  .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")
                  .attr("fill", function(d,i) { if(d.cnv_color != undefined){return d.cnv_color;}else{return self.CNVsettings.CNVColor;} })
                  .attr("stroke",self.CNVsettings.strokeColor)
                  .attr("stroke-width",self.CNVsettings.strokeWidth)
                  .attr("opacity",self.CNVsettings.opacity)
                  .attr("d", function(d,i) { var cnv = d3.svg.arc().innerRadius(self.CNVsettings.minRadius+d.cnv_deviation).outerRadius(self.CNVsettings.minRadius+self.CNVsettings.CNVwidth+d.cnv_deviation); return cnv(d,i); });
            }

                  if(self.settings.CNVMouseClickTextFromData=="first"){
                      svg.append("g")
                          .attr("class", "NGCircosCNVlabel")
                        .selectAll("text")
                          .data(cnv_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "cnv"+cnvi+"_"+i; })
                          .text(function(d) { return d.cnv_chr; })
                          .attr("x", 0)
                          .attr("y", 0)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.CNVsettings.CNVFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.CNVMouseClickTextFromData=="second"){
                      svg.append("g")
                          .attr("class", "NGCircosCNVlabel")
                        .selectAll("text")
                          .data(cnv_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "cnv"+cnvi+"_"+i; })
                          .text(function(d) { return d.cnv_start; })
                          .attr("x", 0)
                          .attr("y", 0)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.CNVsettings.CNVFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.CNVMouseClickTextFromData=="third"){
                      svg.append("g")
                          .attr("class", "NGCircosCNVlabel")
                        .selectAll("text")
                          .data(cnv_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "cnv"+cnvi+"_"+i; })
                          .text(function(d) { return d.cnv_end; })
                          .attr("x", 0)
                          .attr("y", 0)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.CNVsettings.CNVFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.CNVMouseClickTextFromData=="fourth"){
                      svg.append("g")
                          .attr("class", "NGCircosCNVlabel")
                        .selectAll("text")
                          .data(cnv_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "cnv"+cnvi+"_"+i; })
                          .text(function(d) { return d.cnv_val; })
                          .attr("x", 0)
                          .attr("y", 0)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.CNVsettings.CNVFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }

            }
            
            self.init_CNVsettings();

        }
          
        if(self.settings.CNVMouseEvent==true){
            var CNVMouseOnTooltip = d3.select("body")
                .append("div")
                .attr("class","NGCircosCNVTooltip")
                .attr("id","NGCircosCNVTooltip")
                .style("opacity",0);

            var CNVMouseOn = svg.selectAll("path.NGCircosCNV");
            
//            if(self.settings.CNVMouseCombinationEvent == true){
//              if(self.settings.CNVMouseOverDisplay==true){
//                function CNVCombinationMouseOver(d, i) {
//                  var CNVCombinationData=[d.cnv_val,2,3]
//      //              console.log(CNVCombinationData)
//      //              console.log(d3.max(CNVCombinationData))
//                    
//                  var padding = {left:30, right:60, top:20, bottom:40};
//                  //x轴的比例尺
//                  var xScale = d3.scale.ordinal()
//                    .domain(d3.range(CNVCombinationData.length))
//                    .rangeRoundBands([0, width/4- padding.left - padding.right]);
//                  //y轴的比例尺
//                  var yScale = d3.scale.linear()
//                    .domain([0,d3.max(CNVCombinationData)])
//                    .range([height/2 - padding.top - padding.bottom, 0]);
//                    
//                  //定义x轴
//                  var xAxis = d3.svg.axis()
//                    .scale(xScale)
//                    .orient("bottom");
//                  //定义y轴
//                  var yAxis = d3.svg.axis()
//                    .scale(yScale)
//                    .orient("left");
//                  //矩形之间的空白
//                  var rectPadding = 40;
//                  var combinationStartX=width/4+padding.left
//                  //添加矩形元素
//                  var rects = svg.append("g")
//                      .attr("class", "CNVCombinationRect")
//                      .selectAll(".CNVCombinationRect")
//                      .data(CNVCombinationData)
//                      .enter()
//                      .append("rect")
//                      .attr("class","CNVCombinationRect")
//                      .attr("transform","translate(" + combinationStartX + "," + (height/2+padding.top) + ")")
//                      .attr("fill","#4782B4")
//                      .attr({
//                      id: "CNVCombinationRect-" + i,
//                      x: function(d,i){
//                        return xScale(i) + rectPadding/2;
//                      } })
//                      .attr("y",function(d){
//                        return yScale(d)-height/2;
//                      })
//                      .attr("width", xScale.rangeBand() - rectPadding )
//                      .attr("height", function(d){
//                        //console.log(yScale(d))
//                        return height/2 - padding.top - padding.bottom - yScale(d);
//                      });
//
//                  //添加文字元素
//                  var texts = svg.selectAll(".CNVCombinationText")
//                      .data(CNVCombinationData)
//                      .enter()
//                      .append("text")
//                      .attr("class","CNVCombinationText")
//                      .attr("transform","translate(" +combinationStartX+ "," + (height/2+padding.top) + ")")
//                      .attr("fill","white")
//                      .attr({
//                        id: "CNVCombinationText-" + i,
//                        x: function(d,i){
//                                          return xScale(i) + rectPadding/2;
//                                        }
//                      } )
//                      .attr("y",function(d){
//                        return yScale(d)-height/2;
//                      })
//                      .attr("dx",function(){
//                        return (xScale.rangeBand() - rectPadding)/2;
//                      })
//                      .attr("dy",function(d){
//                        return 20;
//                      })
//                      .text(function(d){
//                        return d;
//                      });
//                  //添加x轴
//                  svg.append("g")
//                    .attr("class","CNVCombinationAxis")
//                    .attr("transform","translate(" + (combinationStartX-6) + "," + (height - padding.bottom-height/2) + ")")
//                    .attr({id:"CNVCombinationAxisX"})
//                    .attr("fill","black")
//                    .call(xAxis); 
//
//                  //添加y轴
//                  svg.append("g")
//                    .attr("class","CNVCombinationAxis")
//                    .attr("transform","translate(" + combinationStartX + "," + (padding.top) + ")")
//                    .attr("id","CNVCombinationAxisY")
//                    .attr("fill","black")
//                    .call(yAxis);
//                  
//                   CNVMouseOnTooltip.html(self.settings.CNVMouseOverTooltipsHtml01+d.cnv_chr+self.settings.CNVMouseOverTooltipsHtml02+d.cnv_start+self.settings.CNVMouseOverTooltipsHtml03+d.cnv_end+self.settings.CNVMouseOverTooltipsHtml04+d.cnv_val+self.settings.CNVMouseOverTooltipsHtml05)
//                   .style("left", (d3.event.pageX) + "px")
//                   .style("top", (d3.event.pageY + 20) + "px")
//                   .style("position", self.settings.CNVMouseOverTooltipsPosition)
//                   .style("background-color", self.settings.CNVMouseOverTooltipsBackgroundColor)
//                   .style("border-style", self.settings.CNVMouseOverTooltipsBorderStyle)
//                   .style("border-width", self.settings.CNVMouseOverTooltipsBorderWidth)
//                   .style("padding", self.settings.CNVMouseOverTooltipsPadding)
//                   .style("border-radius", self.settings.CNVMouseOverTooltipsBorderRadius)
//                   .style("opacity", self.settings.CNVMouseOverTooltipsOpacity)
//                d3.select(this)
//                   .style("fill",  function(d,i) { if(self.settings.CNVMouseOverColor=="none"){return "";}else{return self.settings.CNVMouseOverColor;} })
//                   .style("opacity",  function(d,i) { if(self.settings.CNVMouseOverArcOpacity=="none"){return "";}else{return self.settings.CNVMouseOverArcOpacity;} })
//                   .style("stroke", function(d,i) { if(self.settings.CNVMouseOverArcStrokeColor=="none"){return "";}else{return self.settings.CNVMouseOverArcStrokeColor;} })
//                   .style("stroke-width", function(d,i) { if(self.settings.CNVMouseOverArcStrokeWidth=="none"){return "";}else{return self.settings.CNVMouseOverArcStrokeWidth;} });
//                }
//                
//                CNVMouseOn.on("mouseover",CNVCombinationMouseOver)
//                
//              }else{
//                function CNVCombinationMouseOver(d, i) {
//                  var CNVCombinationData=[d.cnv_val,2,3]
//      //              console.log(CNVCombinationData)
//      //              console.log(d3.max(CNVCombinationData))
//                    
//                  var padding = {left:30, right:60, top:20, bottom:40};
//                  //x轴的比例尺
//                  var xScale = d3.scale.ordinal()
//                    .domain(d3.range(CNVCombinationData.length))
//                    .rangeRoundBands([0, width/4- padding.left - padding.right]);
//                  //y轴的比例尺
//                  var yScale = d3.scale.linear()
//                    .domain([0,d3.max(CNVCombinationData)])
//                    .range([height/2 - padding.top - padding.bottom, 0]);
//                    
//                  //定义x轴
//                  var xAxis = d3.svg.axis()
//                    .scale(xScale)
//                    .orient("bottom");
//                  //定义y轴
//                  var yAxis = d3.svg.axis()
//                    .scale(yScale)
//                    .orient("left");
//                  //矩形之间的空白
//                  var rectPadding = 40;
//                  var combinationStartX=width/4+padding.left
//                  //添加矩形元素
//                  var rects = svg.append("g")
//                      .attr("class", "CNVCombinationRect")
//                      .selectAll(".CNVCombinationRect")
//                      .data(CNVCombinationData)
//                      .enter()
//                      .append("rect")
//                      .attr("class","CNVCombinationRect")
//                      .attr("transform","translate(" + combinationStartX + "," + (height/2+padding.top) + ")")
//                      .attr("fill","#4782B4")
//                      .attr({
//                      id: "CNVCombinationRect-" + i,
//                      x: function(d,i){
//                        return xScale(i) + rectPadding/2;
//                      } })
//                      .attr("y",function(d){
//                        return yScale(d)-height/2;
//                      })
//                      .attr("width", xScale.rangeBand() - rectPadding )
//                      .attr("height", function(d){
//                        //console.log(yScale(d))
//                        return height/2 - padding.top - padding.bottom - yScale(d);
//                      });
//
//                  //添加文字元素
//                  var texts = svg.selectAll(".CNVCombinationText")
//                      .data(CNVCombinationData)
//                      .enter()
//                      .append("text")
//                      .attr("class","CNVCombinationText")
//                      .attr("transform","translate(" +combinationStartX+ "," + (height/2+padding.top) + ")")
//                      .attr("fill","white")
//                      .attr({
//                        id: "CNVCombinationText-" + i,
//                        x: function(d,i){
//                                          return xScale(i) + rectPadding/2;
//                                        }
//                      } )
//                      .attr("y",function(d){
//                        return yScale(d)-height/2;
//                      })
//                      .attr("dx",function(){
//                        return (xScale.rangeBand() - rectPadding)/2;
//                      })
//                      .attr("dy",function(d){
//                        return 20;
//                      })
//                      .text(function(d){
//                        return d;
//                      });
//                  //添加x轴
//                  svg.append("g")
//                    .attr("class","CNVCombinationAxis")
//                    .attr("transform","translate(" + (combinationStartX-6) + "," + (height - padding.bottom-height/2) + ")")
//                    .attr({id:"CNVCombinationAxisX"})
//                    .attr("fill","black")
//                    .call(xAxis); 
//
//                  //添加y轴
//                  svg.append("g")
//                    .attr("class","CNVCombinationAxis")
//                    .attr("transform","translate(" + combinationStartX + "," + (padding.top) + ")")
//                    .attr("id","CNVCombinationAxisY")
//                    .attr("fill","black")
//                    .call(yAxis);
//                  
//                }
//                
//                CNVMouseOn.on("mouseover",CNVCombinationMouseOver)
//                
//              }
//              
//              if(self.settings.CNVMouseOutDisplay==true){
//                function CNVCombinationMouseOut(d, i) {
//                            // Select by id and then remove
//                            d3.selectAll("#" + "CNVCombinationRect-" + i).remove();
//                            d3.selectAll("#" + "CNVCombinationText-" + i).remove();
//                            d3.selectAll("#" + "CNVCombinationAxisX" ).remove();
//                            d3.selectAll("#" + "CNVCombinationAxisY").remove();
//                            
//                            CNVMouseOnTooltip.style("opacity",0);
//                            
//                            d3.select(this)
//                              .transition()
//                              .duration(self.settings.CNVMouseOutAnimationTime)
//                              .style("fill",  function(d,i) { if(self.settings.CNVMouseOutColor=="none"){return "";}else{return self.settings.CNVMouseOutColor;} })
//                              .style("opacity",  function(d,i) { if(self.settings.CNVMouseOutCircleOpacity=="none"){return "";}else{return self.settings.CNVMouseOutCircleOpacity;} })
//                              .style("stroke", function(d,i) { if(self.settings.CNVMouseOutCircleStrokeColor=="none"){return "";}else{return self.settings.CNVMouseOutCircleStrokeColor;} })
//                              .style("stroke-width", function(d,i) { if(self.settings.CNVMouseOutCircleStrokeWidth=="none"){return "";}else{return self.settings.CNVMouseOutCircleStrokeWidth;} });
//
//                          }
//                CNVMouseOn.on("mouseout",CNVCombinationMouseOut)
//              }else {
//                function CNVCombinationMouseOut(d, i) {
//                            // Select by id and then remove
//                            d3.selectAll("#" + "CNVCombinationRect-" + i).remove();
//                            d3.selectAll("#" + "CNVCombinationText-" + i).remove();
//                            d3.selectAll("#" + "CNVCombinationAxisX" ).remove();
//                            d3.selectAll("#" + "CNVCombinationAxisY").remove();
//                            
//                          }
//                CNVMouseOn.on("mouseout",CNVCombinationMouseOut)
//              }
//              
//            }else{                
                if(self.settings.CNVMouseOverDisplay==true){
                    CNVMouseOn.on("mouseover",function(d){
                          if(self.ticksOffset != undefined){
                            CNVMouseOnTooltip.html(function(){if(self.settings.CNVMouseOverTooltipsSetting == "style1"){
                                return "chr : "+d.cnv_chr+"<br>start : "+(parseInt(d.cnv_start)+self.ticksOffset)+"<br>end :"+(parseInt(d.cnv_end)+self.ticksOffset)+" <br>value : "+d.cnv_val+""
                              }else if (self.settings.CNVMouseOverTooltipsSetting == "custom") {
                                return self.settings.CNVMouseOverTooltipsHtml+d.cnv_html
                              }
                            })
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY + 20) + "px")
                            .style("position", self.settings.CNVMouseOverTooltipsPosition)
                            .style("background-color", self.settings.CNVMouseOverTooltipsBackgroundColor)
                            .style("border-style", self.settings.CNVMouseOverTooltipsBorderStyle)
                            .style("border-width", self.settings.CNVMouseOverTooltipsBorderWidth)
                            .style("padding", self.settings.CNVMouseOverTooltipsPadding)
                            .style("border-radius", self.settings.CNVMouseOverTooltipsBorderRadius)
                            .style("opacity", self.settings.CNVMouseOverTooltipsOpacity)
                          d3.select(this)
                            .style("fill",  function(d,i) { if(self.settings.CNVMouseOverColor=="none"){return "";}else{return self.settings.CNVMouseOverColor;} })
                            .style("opacity",  function(d,i) { if(self.settings.CNVMouseOverArcOpacity=="none"){return "";}else{return self.settings.CNVMouseOverArcOpacity;} })
                            .style("stroke", function(d,i) { if(self.settings.CNVMouseOverArcStrokeColor=="none"){return "";}else{return self.settings.CNVMouseOverArcStrokeColor;} })
                            .style("stroke-width", function(d,i) { if(self.settings.CNVMouseOverArcStrokeWidth=="none"){return "";}else{return self.settings.CNVMouseOverArcStrokeWidth;} });
                          }else{
                            CNVMouseOnTooltip.html(function(){if(self.settings.CNVMouseOverTooltipsSetting == "style1"){
                                return "chr : "+d.cnv_chr+"<br>start : "+d.cnv_start+"<br>end :"+d.cnv_end+" <br>value : "+d.cnv_val+""
                              }else if (self.settings.CNVMouseOverTooltipsSetting == "custom") {
                                return self.settings.CNVMouseOverTooltipsHtml+d.cnv_html
                              }
                            })
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY + 20) + "px")
                            .style("position", self.settings.CNVMouseOverTooltipsPosition)
                            .style("background-color", self.settings.CNVMouseOverTooltipsBackgroundColor)
                            .style("border-style", self.settings.CNVMouseOverTooltipsBorderStyle)
                            .style("border-width", self.settings.CNVMouseOverTooltipsBorderWidth)
                            .style("padding", self.settings.CNVMouseOverTooltipsPadding)
                            .style("border-radius", self.settings.CNVMouseOverTooltipsBorderRadius)
                            .style("opacity", self.settings.CNVMouseOverTooltipsOpacity)
                          d3.select(this)
                            .style("fill",  function(d,i) { if(self.settings.CNVMouseOverColor=="none"){return "";}else{return self.settings.CNVMouseOverColor;} })
                            .style("opacity",  function(d,i) { if(self.settings.CNVMouseOverArcOpacity=="none"){return "";}else{return self.settings.CNVMouseOverArcOpacity;} })
                            .style("stroke", function(d,i) { if(self.settings.CNVMouseOverArcStrokeColor=="none"){return "";}else{return self.settings.CNVMouseOverArcStrokeColor;} })
                            .style("stroke-width", function(d,i) { if(self.settings.CNVMouseOverArcStrokeWidth=="none"){return "";}else{return self.settings.CNVMouseOverArcStrokeWidth;} });
                          }
                          
                        

                    })
                }
                if(self.settings.CNVMouseOutDisplay==true){
                      CNVMouseOn.on("mouseout",function(d){
                          CNVMouseOnTooltip.style("opacity",0.0);
                          d3.select(this)
                              .transition()
                              .duration(self.settings.CNVMouseOutAnimationTime)
                              .style("fill",  function(d,i) { if(self.settings.CNVMouseOutColor=="none"){return "";}else{return self.settings.CNVMouseOutColor;} })
                              .style("opacity",  function(d,i) { if(self.settings.CNVMouseOutCircleOpacity=="none"){return "";}else{return self.settings.CNVMouseOutCircleOpacity;} })
                              .style("stroke", function(d,i) { if(self.settings.CNVMouseOutCircleStrokeColor=="none"){return "";}else{return self.settings.CNVMouseOutCircleStrokeColor;} })
                              .style("stroke-width", function(d,i) { if(self.settings.CNVMouseOutCircleStrokeWidth=="none"){return "";}else{return self.settings.CNVMouseOutCircleStrokeWidth;} });
                      });
                }
              
//            }
            
//            if(self.settings.CNVMouseOverDisplay==true){
//                CNVMouseOn.on("mouseover",function(d){
//                      CNVMouseOnTooltip.html(self.settings.CNVMouseOverTooltipsHtml01+d.cnv_chr+self.settings.CNVMouseOverTooltipsHtml02+d.cnv_start+self.settings.CNVMouseOverTooltipsHtml03+d.cnv_end+self.settings.CNVMouseOverTooltipsHtml04+d.cnv_val+self.settings.CNVMouseOverTooltipsHtml05)
//                       .style("left", (d3.event.pageX) + "px")
//                       .style("top", (d3.event.pageY + 20) + "px")
//                       .style("position", self.settings.CNVMouseOverTooltipsPosition)
//                       .style("background-color", self.settings.CNVMouseOverTooltipsBackgroundColor)
//                       .style("border-style", self.settings.CNVMouseOverTooltipsBorderStyle)
//                       .style("border-width", self.settings.CNVMouseOverTooltipsBorderWidth)
//                       .style("padding", self.settings.CNVMouseOverTooltipsPadding)
//                       .style("border-radius", self.settings.CNVMouseOverTooltipsBorderRadius)
//                       .style("opacity", self.settings.CNVMouseOverTooltipsOpacity)
//                    d3.select(this)
//                       .style("fill",  function(d,i) { if(self.settings.CNVMouseOverColor=="none"){return "";}else{return self.settings.CNVMouseOverColor;} })
//                       .style("opacity",  function(d,i) { if(self.settings.CNVMouseOverArcOpacity=="none"){return "";}else{return self.settings.CNVMouseOverArcOpacity;} })
//                       .style("stroke", function(d,i) { if(self.settings.CNVMouseOverArcStrokeColor=="none"){return "";}else{return self.settings.CNVMouseOverArcStrokeColor;} })
//                       .style("stroke-width", function(d,i) { if(self.settings.CNVMouseOverArcStrokeWidth=="none"){return "";}else{return self.settings.CNVMouseOverArcStrokeWidth;} });
//                    
//
//                })
//            }

            if(self.settings.CNVMouseClickDisplay==true){
                CNVMouseOn.on("click",function(d){
                    d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.CNVMouseClickColor=="none"){return "";}else{return self.settings.CNVMouseClickColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.CNVMouseClickArcOpacity=="none"){return "";}else{return self.settings.CNVMouseClickArcOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CNVMouseClickArcStrokeColor=="none"){return "";}else{return self.settings.CNVMouseClickArcStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CNVMouseClickArcStrokeWidth=="none"){return "";}else{return self.settings.CNVMouseClickArcStrokeWidth;} });
                    d3.select("#"+d.cnv_click_label)
                        .style("opacity", self.settings.CNVMouseClickTextOpacity)
                        .style("fill", self.settings.CNVMouseClickTextColor)
                        .style("font-size", self.settings.CNVMouseClickTextSize)
                        .attr("x", d3.event.x - self.svgWidth/2 + self.settings.ARCMouseClickTextPostionX)
                        .attr("y", d3.event.y - self.svgHeight/2 + self.settings.ARCMouseClickTextPostionY);
                })
            }

            if(self.settings.CNVMouseClickTextDrag==true){
                svg.selectAll("text.dragText").call(drag);
            }
            if(self.settings.CNVMouseDownDisplay==true){
               CNVMouseOn.on("mousedown",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.CNVMouseDownColor=="none"){return "";}else{return self.settings.CNVMouseDownColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.CNVMouseDownCircleOpacity=="none"){return "";}else{return self.settings.CNVMouseDownCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CNVMouseDownCircleStrokeColor=="none"){return "";}else{return self.settings.CNVMouseDownCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CNVMouseDownCircleStrokeWidth=="none"){return "";}else{return self.settings.CNVMouseDownCircleStrokeWidth;} });
               })
            }
            if(self.settings.CNVMouseEnterDisplay==true){
               CNVMouseOn.on("mouseenter",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.CNVMouseEnterColor=="none"){return "";}else{return self.settings.CNVMouseEnterColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.CNVMouseEnterCircleOpacity=="none"){return "";}else{return self.settings.CNVMouseEnterCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CNVMouseEnterCircleStrokeColor=="none"){return "";}else{return self.settings.CNVMouseEnterCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CNVMouseEnterCircleStrokeWidth=="none"){return "";}else{return self.settings.CNVMouseEnterCircleStrokeWidth;} });
               })
            }
            if(self.settings.CNVMouseLeaveDisplay==true){
               CNVMouseOn.on("mouseleave",function(d){
                   CNVMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.CNVMouseLeaveColor=="none"){return "";}else{return self.settings.CNVMouseLeaveColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.CNVMouseLeaveCircleOpacity=="none"){return "";}else{return self.settings.CNVMouseLeaveCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CNVMouseLeaveCircleStrokeColor=="none"){return "";}else{return self.settings.CNVMouseLeaveCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CNVMouseLeaveCircleStrokeWidth=="none"){return "";}else{return self.settings.CNVMouseLeaveCircleStrokeWidth;} });
               })
            }
            if(self.settings.CNVMouseUpDisplay==true){
               CNVMouseOn.on("mouseup",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.CNVMouseUpColor=="none"){return "";}else{return self.settings.CNVMouseUpColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.CNVMouseUpCircleOpacity=="none"){return "";}else{return self.settings.CNVMouseUpCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CNVMouseUpCircleStrokeColor=="none"){return "";}else{return self.settings.CNVMouseUpCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CNVMouseUpCircleStrokeWidth=="none"){return "";}else{return self.settings.CNVMouseUpCircleStrokeWidth;} });
               })
            }
            if(self.settings.CNVMouseMoveDisplay==true){
               CNVMouseOn.on("mousemove",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.CNVMouseMoveColor=="none"){return "";}else{return self.settings.CNVMouseMoveColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.CNVMouseMoveCircleOpacity=="none"){return "";}else{return self.settings.CNVMouseMoveCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CNVMouseMoveCircleStrokeColor=="none"){return "";}else{return self.settings.CNVMouseMoveCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CNVMouseMoveCircleStrokeWidth=="none"){return "";}else{return self.settings.CNVMouseMoveCircleStrokeWidth;} });
                   CNVMouseOnTooltip.style("left", (d3.event.pageX) + "px")
                   .style("top", (d3.event.pageY + 20) + "px");
               })
            }
//            if(self.settings.CNVMouseOutDisplay==true){
//               CNVMouseOn.on("mouseout",function(d){
//                   CNVMouseOnTooltip.style("opacity",0.0);
//                   d3.select(this)
//                       .transition()
//                       .duration(self.settings.CNVMouseOutAnimationTime)
//                       .style("fill",  function(d,i) { if(self.settings.CNVMouseOutColor=="none"){return "";}else{return self.settings.CNVMouseOutColor;} })
//                       .style("opacity",  function(d,i) { if(self.settings.CNVMouseOutCircleOpacity=="none"){return "";}else{return self.settings.CNVMouseOutCircleOpacity;} })
//                       .style("stroke", function(d,i) { if(self.settings.CNVMouseOutCircleStrokeColor=="none"){return "";}else{return self.settings.CNVMouseOutCircleStrokeColor;} })
//                       .style("stroke-width", function(d,i) { if(self.settings.CNVMouseOutCircleStrokeWidth=="none"){return "";}else{return self.settings.CNVMouseOutCircleStrokeWidth;} });
//               });
//            }
        }

    }

    if(self.HEATMAP.length > 0){
            function NGCircosHEATMAP(d) {
              return self.HEATMAP[heatmapi].map(function(v, i) {
                var heatmap_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  startAngle: v.start * heatmap_k + d[self.initGenome[v.chr]].startAngle,
                  endAngle: v.end * heatmap_k + d[self.initGenome[v.chr]].startAngle,
                  heatmap_chr: v.chr,
                  heatmap_start: v.start,
                  heatmap_end: v.end,
                  heatmap_name: v.name,
                  heatmap_value: v.value,
                  heatmap_layer:v.layer,
                  heatmap_html:v.html,
                };
              });
            }
            function NGCircosHEATMAP2(d) {
              return self.HEATMAP[heatmapi].map(function(v, i) {
                var heatmap_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  startAngle: 3*Math.PI-(v.start * heatmap_k + d[self.initGenome[v.chr]].startAngle),
                  endAngle: 3*Math.PI-(v.end * heatmap_k + d[self.initGenome[v.chr]].startAngle),
                  heatmap_chr: v.chr,
                  heatmap_start: v.start,
                  heatmap_end: v.end,
                  heatmap_name: v.name,
                  heatmap_value: v.value,
                  heatmap_layer:v.layer,
                  heatmap_html:v.html,
                };
              });
            }
        for(var heatmapi=0; heatmapi<self.HEATMAP.length; heatmapi++){
            self.update_HEATMAPsettings(self.HEATMAPConfig[heatmapi]);
            if(drawTime == self.HEATMAPsettings.compareGroup){
               if(self.HEATMAPsettings.compareGroup == 1){
                var heatmap_objects = NGCircosHEATMAP(chord.groups())
              }else{
                var heatmap_objects = NGCircosHEATMAP2(chord.groups())
              }

              var HeatmapMaxColor = d3.rgb(self.HEATMAPsettings.maxColor);
              var HeatmapMinColor = d3.rgb(self.HEATMAPsettings.minColor);
              var HeatmapValue2Color = d3.interpolate(HeatmapMinColor,HeatmapMaxColor);

              var heatmap = d3.svg.arc().innerRadius(innerRadius+self.HEATMAPsettings.innerRadius).outerRadius(innerRadius+self.HEATMAPsettings.outerRadius);
              
              if(self.HEATMAPsettings.HEATMAPAnimationDisplay == true){
                svg.append("g")
                    .attr("class", "NGCircosHEATMAP")
                    .selectAll("path.NGCircosHEATMAP")
                      .data(heatmap_objects)
                      .enter()
                    .append("path")
                    .attr("class", "NGCircosHEATMAP")
                    .attr("fill",function(){
                      if(self.HEATMAPsettings.HEATMAPAnimationColorDirection == "L2C"){return HeatmapValue2Color(0);}
                      if(self.HEATMAPsettings.HEATMAPAnimationColorDirection == "H2C"){return HeatmapValue2Color(1);}                    
                    })
                    .attr("d",function (d,i) { 
                      if(self.HEATMAPsettings.HEATMAPAnimationDirection == "O2I"){var hm=d3.svg.arc().innerRadius(innerRadius+self.HEATMAPsettings.outerRadius).outerRadius(innerRadius+self.HEATMAPsettings.outerRadius);}
                      if(self.HEATMAPsettings.HEATMAPAnimationDirection == "I2O"){var hm=d3.svg.arc().innerRadius(innerRadius+self.HEATMAPsettings.innerRadius).outerRadius(innerRadius+self.HEATMAPsettings.innerRadius);}
                      return hm(d,i);
                    })
                    .transition()
                    .delay(function (d,i) {
                      return (i+1) *self.HEATMAPsettings.HEATMAPAnimationDelay;
                    })
                    .duration(self.HEATMAPsettings.HEATMAPAnimationTime)
                    .ease(self.HEATMAPsettings.HEATMAPAnimationType)
                    .attr("fill", function(d,i) { 
  //                    console.log(self.HEATMAP[heatmapi])[0])
                      return HeatmapValue2Color((d.heatmap_value - self.heatmap_value_maxmin(self.HEATMAP[heatmapi])[1])/(self.heatmap_value_maxmin(self.HEATMAP[heatmapi])[0]-self.heatmap_value_maxmin(self.HEATMAP[heatmapi])[1])); })
                    .attr("d", function(d,i) { if(d.heatmap_layer == undefined){return heatmap(d,i);}else{
                       var heatmap2 = d3.svg.arc().innerRadius(innerRadius+self.HEATMAPsettings.innerRadius+(self.HEATMAPsettings.outerRadius-self.HEATMAPsettings.innerRadius)*((d.heatmap_layer-1)/self.HEATMAPsettings.totalLayer)).outerRadius(innerRadius+self.HEATMAPsettings.innerRadius+(self.HEATMAPsettings.outerRadius-self.HEATMAPsettings.innerRadius)*(d.heatmap_layer/self.HEATMAPsettings.totalLayer));
                      return heatmap2(d,i)} })
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
              }else{
                svg.append("g")
                    .attr("class", "NGCircosHEATMAP")
                    .selectAll("path.NGCircosHEATMAP")
                      .data(heatmap_objects)
                      .enter()
                    .append("path")
                    .attr("class", "NGCircosHEATMAP")
                    .attr("fill", function(d,i) { 
  //                    console.log(self.HEATMAP[heatmapi])[0])
                      return HeatmapValue2Color((d.heatmap_value - self.heatmap_value_maxmin(self.HEATMAP[heatmapi])[1])/(self.heatmap_value_maxmin(self.HEATMAP[heatmapi])[0]-self.heatmap_value_maxmin(self.HEATMAP[heatmapi])[1])); })
                    .attr("d", function(d,i) { console.log(self.HEATMAPsettings.totalLayer);if(d.heatmap_layer == undefined){return heatmap(d,i);}else{
                       var heatmap2 = d3.svg.arc().innerRadius(innerRadius+self.HEATMAPsettings.innerRadius+(self.HEATMAPsettings.outerRadius-self.HEATMAPsettings.innerRadius)*((d.heatmap_layer-1)/self.HEATMAPsettings.totalLayer)).outerRadius(innerRadius+self.HEATMAPsettings.innerRadius+(self.HEATMAPsettings.outerRadius-self.HEATMAPsettings.innerRadius)*(d.heatmap_layer/self.HEATMAPsettings.totalLayer));
                      return heatmap2(d,i)} })
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
              }
              
            }
            self.init_HEATMAPsettings();

        }

        if(self.settings.HEATMAPMouseEvent==true){
            var HEATMAPMouseOnTooltip = d3.select("body")
                .append("div")
                .attr("class","NGCircosHeatmapTooltip")
                .attr("id","NGCircosHeatmapTooltip")
                .style("opacity",0);

            var HEATMAPMouseOn = svg.selectAll("path.NGCircosHEATMAP");

            if(self.settings.HEATMAPMouseOverDisplay==true){
                HEATMAPMouseOn.on("mouseover",function(d){
                      if(self.ticksOffset != undefined){
                        HEATMAPMouseOnTooltip.html(function(){if(self.settings.HEATMAPMouseOverTooltipsSetting == "style1"){
                              return "chr : "+d.heatmap_chr+"<br>position : "+(parseInt(d.heatmap_start)+self.ticksOffset)+"-"+(parseInt(d.heatmap_end)+self.ticksOffset)+" <br>name : "+d.heatmap_name+" <br>value : "+d.heatmap_value+""
                            }else if (self.settings.HEATMAPMouseOverTooltipsSetting == "custom") {
                              return self.settings.HEATMAPMouseOverTooltipsHtml+d.heatmap_html
                            }
                          })
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY + 20) + "px")
                         .style("position", self.settings.HEATMAPMouseOverTooltipsPosition)
                         .style("background-color", self.settings.HEATMAPMouseOverTooltipsBackgroundColor)
                         .style("border-style", self.settings.HEATMAPMouseOverTooltipsBorderStyle)
                         .style("border-width", self.settings.HEATMAPMouseOverTooltipsBorderWidth)
                         .style("padding", self.settings.HEATMAPMouseOverTooltipsPadding)
                         .style("border-radius", self.settings.HEATMAPMouseOverTooltipsBorderRadius)
                         .style("opacity", self.settings.HEATMAPMouseOverTooltipsOpacity)
                      d3.select(this)
                         .style("fill",  function(d,i) { if(self.settings.HEATMAPMouseOverColor=="none"){return "";}else{return self.settings.HEATMAPMouseOverColor;} })
                         .style("opacity",  function(d,i) { if(self.settings.HEATMAPMouseOverOpacity=="none"){return "";}else{return self.settings.HEATMAPMouseOverOpacity;} })
                         .style("stroke", function(d,i) { if(self.settings.HEATMAPMouseOverStrokeColor=="none"){return "";}else{return self.settings.HEATMAPMouseOverStrokeColor;} })
                         .style("stroke-width", function(d,i) { if(self.settings.HEATMAPMouseOverStrokeWidth=="none"){return "";}else{return self.settings.HEATMAPMouseOverStrokeWidth;} });
                      }else{
                        HEATMAPMouseOnTooltip.html(function(){if(self.settings.HEATMAPMouseOverTooltipsSetting == "style1"){
                              return "chr : "+d.heatmap_chr+"<br>position : "+d.heatmap_start+"-"+d.heatmap_end+" <br>name : "+d.heatmap_name+" <br>value : "+d.heatmap_value+""
                            }else if (self.settings.HEATMAPMouseOverTooltipsSetting == "custom") {
                              return self.settings.HEATMAPMouseOverTooltipsHtml+d.heatmap_html
                            }
                          })
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY + 20) + "px")
                         .style("position", self.settings.HEATMAPMouseOverTooltipsPosition)
                         .style("background-color", self.settings.HEATMAPMouseOverTooltipsBackgroundColor)
                         .style("border-style", self.settings.HEATMAPMouseOverTooltipsBorderStyle)
                         .style("border-width", self.settings.HEATMAPMouseOverTooltipsBorderWidth)
                         .style("padding", self.settings.HEATMAPMouseOverTooltipsPadding)
                         .style("border-radius", self.settings.HEATMAPMouseOverTooltipsBorderRadius)
                         .style("opacity", self.settings.HEATMAPMouseOverTooltipsOpacity)
                      d3.select(this)
                         .style("fill",  function(d,i) { if(self.settings.HEATMAPMouseOverColor=="none"){return "";}else{return self.settings.HEATMAPMouseOverColor;} })
                         .style("opacity",  function(d,i) { if(self.settings.HEATMAPMouseOverOpacity=="none"){return "";}else{return self.settings.HEATMAPMouseOverOpacity;} })
                         .style("stroke", function(d,i) { if(self.settings.HEATMAPMouseOverStrokeColor=="none"){return "";}else{return self.settings.HEATMAPMouseOverStrokeColor;} })
                         .style("stroke-width", function(d,i) { if(self.settings.HEATMAPMouseOverStrokeWidth=="none"){return "";}else{return self.settings.HEATMAPMouseOverStrokeWidth;} });
                      }
                      
                })
            }
            if(self.settings.HEATMAPMouseClickDisplay==true){
                HEATMAPMouseOn.on("click",function(d){
                    d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.HEATMAPMouseClickColor=="none"){return "";}else{return self.settings.HEATMAPMouseClickColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HEATMAPMouseClickOpacity=="none"){return "";}else{return self.settings.HEATMAPMouseClickOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HEATMAPMouseClickStrokeColor=="none"){return "";}else{return self.settings.HEATMAPMouseClickStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HEATMAPMouseClickStrokeWidth=="none"){return "";}else{return self.settings.HEATMAPMouseClickStrokeWidth;} });
                })
            }
            if(self.settings.HEATMAPMouseDownDisplay==true){
               HEATMAPMouseOn.on("mousedown",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.HEATMAPMouseDownColor=="none"){return "";}else{return self.settings.HEATMAPMouseDownColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HEATMAPMouseDownOpacity=="none"){return "";}else{return self.settings.HEATMAPMouseDownOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HEATMAPMouseDownStrokeColor=="none"){return "";}else{return self.settings.HEATMAPMouseDownStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HEATMAPMouseDownStrokeWidth=="none"){return "";}else{return self.settings.HEATMAPMouseDownStrokeWidth;} });
               })
            }
            if(self.settings.HEATMAPMouseEnterDisplay==true){
               HEATMAPMouseOn.on("mouseenter",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.HEATMAPMouseEnterColor=="none"){return "";}else{return self.settings.HEATMAPMouseEnterColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HEATMAPMouseEnterOpacity=="none"){return "";}else{return self.settings.HEATMAPMouseEnterOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HEATMAPMouseEnterStrokeColor=="none"){return "";}else{return self.settings.HEATMAPMouseEnterStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HEATMAPMouseEnterStrokeWidth=="none"){return "";}else{return self.settings.HEATMAPMouseEnterStrokeWidth;} });
               })
            }
            if(self.settings.HEATMAPMouseLeaveDisplay==true){
               HEATMAPMouseOn.on("mouseleave",function(d){
                   HEATMAPMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.HEATMAPMouseLeaveColor=="none"){return "";}else{return self.settings.HEATMAPMouseLeaveColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HEATMAPMouseLeaveOpacity=="none"){return "";}else{return self.settings.HEATMAPMouseLeaveOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HEATMAPMouseLeaveStrokeColor=="none"){return "";}else{return self.settings.HEATMAPMouseLeaveStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HEATMAPMouseLeaveStrokeWidth=="none"){return "";}else{return self.settings.HEATMAPMouseLeaveStrokeWidth;} });
               })
            }
            if(self.settings.HEATMAPMouseUpDisplay==true){
               HEATMAPMouseOn.on("mouseup",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.HEATMAPMouseUpColor=="none"){return "";}else{return self.settings.HEATMAPMouseUpColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HEATMAPMouseUpOpacity=="none"){return "";}else{return self.settings.HEATMAPMouseUpOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HEATMAPMouseUpStrokeColor=="none"){return "";}else{return self.settings.HEATMAPMouseUpStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HEATMAPMouseUpStrokeWidth=="none"){return "";}else{return self.settings.HEATMAPMouseUpStrokeWidth;} });
               })
            }
            if(self.settings.HEATMAPMouseMoveDisplay==true){
               HEATMAPMouseOn.on("mousemove",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.HEATMAPMouseMoveColor=="none"){return "";}else{return self.settings.HEATMAPMouseMoveColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HEATMAPMouseMoveOpacity=="none"){return "";}else{return self.settings.HEATMAPMouseMoveOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HEATMAPMouseMoveStrokeColor=="none"){return "";}else{return self.settings.HEATMAPMouseMoveStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HEATMAPMouseUpStrokeWidth=="none"){return "";}else{return self.settings.HEATMAPMouseMoveStrokeWidth;} });
                   HEATMAPMouseOnTooltip.style("left", (d3.event.pageX) + "px")
                   .style("top", (d3.event.pageY + 20) + "px");
               })
            }
            if(self.settings.HEATMAPMouseOutDisplay==true){
               HEATMAPMouseOn.on("mouseout",function(d){
                   HEATMAPMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .transition()
                       .duration(self.settings.HEATMAPMouseOutAnimationTime)
                       .style("fill",  function(d,i) { if(self.settings.HEATMAPMouseOutColor=="none"){return "";}else{return self.settings.HEATMAPMouseOutColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.HEATMAPMouseOutOpacity=="none"){return "";}else{return self.settings.HEATMAPMouseOutOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.HEATMAPMouseOutStrokeColor=="none"){return "";}else{return self.settings.HEATMAPMouseOutStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.HEATMAPMouseUpStrokeWidth=="none"){return "";}else{return self.settings.HEATMAPMouseOutStrokeWidth;} });
               });
            }

        }

    }
    
    if(self.BUBBLE.length > 0){
            function NGCircosBUBBLE(d) {
              return self.BUBBLE[BUBBLEi].map(function(v, i) {
                var BUBBLE_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  startAngle: v.start * BUBBLE_k + d[self.initGenome[v.chr]].startAngle,
                  endAngle: v.end * BUBBLE_k + d[self.initGenome[v.chr]].startAngle,
                  BUBBLE_chr: v.chr,
                  BUBBLE_start: v.start,
                  BUBBLE_end: v.end,
                  BUBBLE_name: v.name,
                  BUBBLE_value: v.value,
                  BUBBLE_color:v.color,
                  BUBBLE_layer:v.layer,
                  x: (0 + Math.sin((v.end/2+v.start/2) * BUBBLE_k + d[self.initGenome[v.chr]].startAngle) * (((self.BUBBLEsettings.maxRadius-self.BUBBLEsettings.minRadius)/self.BUBBLEsettings.totalLayer)*(v.layer-0.5)+self.BUBBLEsettings.minRadius)),  
                  y: (0 - Math.cos((v.end/2+v.start/2) * BUBBLE_k + d[self.initGenome[v.chr]].startAngle) * (((self.BUBBLEsettings.maxRadius-self.BUBBLEsettings.minRadius)/self.BUBBLEsettings.totalLayer)*(v.layer-0.5)+self.BUBBLEsettings.minRadius)),
                  BUBBLE_html:v.html,
                };
              });
            }
            function NGCircosBUBBLE2(d) {
              return self.BUBBLE[BUBBLEi].map(function(v, i) {
                var BUBBLE_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  startAngle: 3*Math.PI-(v.start * BUBBLE_k + d[self.initGenome[v.chr]].startAngle),
                  endAngle: 3*Math.PI-(v.end * BUBBLE_k + d[self.initGenome[v.chr]].startAngle),
                  BUBBLE_chr: v.chr,
                  BUBBLE_start: v.start,
                  BUBBLE_end: v.end,
                  BUBBLE_name: v.name,
                  BUBBLE_value: v.value,
                  BUBBLE_color:v.color,
                  BUBBLE_layer:v.layer,
                  x: (0 + Math.sin(3*Math.PI-((v.end/2+v.start/2) * BUBBLE_k + d[self.initGenome[v.chr]].startAngle)) * (((self.BUBBLEsettings.maxRadius-self.BUBBLEsettings.minRadius)/self.BUBBLEsettings.totalLayer)*v.layer+self.BUBBLEsettings.minRadius)),  //self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[0] max
                  y: (0 - Math.cos(3*Math.PI-((v.end/2+v.start/2) * BUBBLE_k + d[self.initGenome[v.chr]].startAngle)) *(((self.BUBBLEsettings.maxRadius-self.BUBBLEsettings.minRadius)/self.BUBBLEsettings.totalLayer)*v.layer+self.BUBBLEsettings.minRadius)),
                  BUBBLE_html:v.html,
                };
              });
            }
        for(var BUBBLEi=0; BUBBLEi<self.BUBBLE.length; BUBBLEi++){
            self.update_BUBBLEsettings(self.BUBBLEConfig[BUBBLEi]);
            if(drawTime == self.BUBBLEsettings.compareGroup){
               if(self.BUBBLEsettings.compareGroup == 1){
                var BUBBLE_objects = NGCircosBUBBLE(chord.groups())
              }else{
                var BUBBLE_objects = NGCircosBUBBLE2(chord.groups())
              }

              var BUBBLEMaxColor = d3.rgb(self.BUBBLEsettings.maxColor);
              var BUBBLEMinColor = d3.rgb(self.BUBBLEsettings.minColor);
              var BUBBLEValue2Color = d3.interpolate(BUBBLEMinColor,BUBBLEMaxColor);

              var BUBBLE = d3.svg.arc().innerRadius(self.BUBBLEsettings.minRadius).outerRadius(self.BUBBLEsettings.maxRadius);
              
              svg.append("g")
                  .attr("class", "NGCircosBUBBLEBlock")
                  .selectAll("path.NGCircosBUBBLEBlock")
                  .data(BUBBLE_objects)
                  .enter()
                  .append("path")
                  .attr("class", "NGCircosBUBBLEBlock")
//                  .attr("fill", function(d,i) { return BUBBLEValue2Color((d.BUBBLE_value - self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[1])/(self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[0]-self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[1])); })
                  .attr("fill", function(d,i) { if(self.BUBBLEsettings.blockFill == true){return self.BUBBLEsettings.blockFillColor;}else{return "none";} })
                  .attr("d", function(d,i) { 
                    if(d.BUBBLE_layer == undefined){return BUBBLE(d,i);}else{
                    var BUBBLE2 = d3.svg.arc().innerRadius(self.BUBBLEsettings.minRadius+((self.BUBBLEsettings.maxRadius-self.BUBBLEsettings.minRadius)/self.BUBBLEsettings.totalLayer)*(d.BUBBLE_layer-1)).outerRadius(self.BUBBLEsettings.minRadius+((self.BUBBLEsettings.maxRadius-self.BUBBLEsettings.minRadius)/self.BUBBLEsettings.totalLayer)*(d.BUBBLE_layer));
                    return BUBBLE2(d,i)} })
                  .attr("stroke",function(d,i) { if(self.BUBBLEsettings.blockStroke == true){return self.BUBBLEsettings.blockStrokeColor;}else{return "none";} })
                  .attr("stroke-width",self.BUBBLEsettings.blockStrokeWidth)
                  .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                
              if(self.BUBBLEsettings.BUBBLEAnimationDisplay == true){
                svg.append("g")
                    .attr("class", "NGCircosBUBBLE")
                    .selectAll("circle")
                    .data(BUBBLE_objects)
                    .enter()
                    .append("a")
                    .attr("xlink:href", function(d){if(self.settings.BUBBLExlink == true){return d.BUBBLE_link;}})
                    .append("circle")
                    .attr("id", "NGCircosBUBBLE")
                    .attr("fill", function(d,i) { if(d.BUBBLE_color!=undefined){return d.BUBBLE_color;}else{return BUBBLEValue2Color((d.BUBBLE_value - self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[1])/(self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[0]-self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[1]));} })
                    .attr("r", function(d,i) { 
  //                    console.log(self.BUBBLE_value_maxmin(self.BUBBLE[0])[1])
                      return (((d.BUBBLE_value - self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[1])/(self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[0]-self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[1]))*(self.BUBBLEsettings.bubbleMaxSize-self.BUBBLEsettings.bubbleMinSize)+self.BUBBLEsettings.bubbleMinSize);})
                    .attr("cx", function(d) { return 0; })
                    .attr("cy", function(d) { return 0; })
                    .transition()
                    .delay(function(d,i){
                      return (i+1) * self.BUBBLEsettings.BUBBLEAnimationDelay;
                    })
                    .duration(self.BUBBLEsettings.BUBBLEAnimationTime)
                    .ease(self.BUBBLEsettings.BUBBLEAnimationType)
                    .attr("cx", function(d) { return d.x; })
                    .attr("cy", function(d) { return d.y; })
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
              }else{
                svg.append("g")
                    .attr("class", "NGCircosBUBBLE")
                    .selectAll("circle")
                    .data(BUBBLE_objects)
                    .enter()
                    .append("a")
                    .attr("xlink:href", function(d){if(self.settings.BUBBLExlink == true){return d.BUBBLE_link;}})
                    .append("circle")
                    .attr("id", "NGCircosBUBBLE")
                    .attr("fill", function(d,i) { if(d.BUBBLE_color!=undefined){return d.BUBBLE_color;}else{return BUBBLEValue2Color((d.BUBBLE_value - self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[1])/(self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[0]-self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[1]));} })
                    .attr("r", function(d,i) { 
  //                    console.log(self.BUBBLE_value_maxmin(self.BUBBLE[0])[1])
                      return (((d.BUBBLE_value - self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[1])/(self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[0]-self.BUBBLE_value_maxmin(self.BUBBLE[BUBBLEi])[1]))*(self.BUBBLEsettings.bubbleMaxSize-self.BUBBLEsettings.bubbleMinSize)+self.BUBBLEsettings.bubbleMinSize);})
                    .attr("cx", function(d) { return d.x; })
                    .attr("cy", function(d) { return d.y; })
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
              }    
              
                
            }
            self.init_BUBBLEsettings();

        }

        if(self.settings.BUBBLEMouseEvent==true){
            var BUBBLEMouseOnTooltip = d3.select("body")
                .append("div")
                .attr("class","NGCircosBUBBLETooltip")
                .attr("id","NGCircosBUBBLETooltip")
                .style("opacity",0);

            var BUBBLEMouseOn = svg.selectAll("#NGCircosBUBBLE");

            if(self.settings.BUBBLEMouseOverDisplay==true){
                BUBBLEMouseOn.on("mouseover",function(d){
                      if(self.ticksOffset != undefined){
                        BUBBLEMouseOnTooltip.html(function(){if(self.settings.BUBBLEMouseOverTooltipsSetting == "style1"){
                              return "chr : "+d.BUBBLE_chr+"<br>position : "+(parseInt(d.BUBBLE_start)+self.ticksOffset)+"-"+(parseInt(d.BUBBLE_end)+self.ticksOffset)+" <br>name : "+d.BUBBLE_name+" <br>value : "+d.BUBBLE_value+""
                            }else if (self.settings.BUBBLEMouseOverTooltipsSetting == "custom") {
                              return self.settings.BUBBLEMouseOverTooltipsHtml+d.BUBBLE_html
                            }
                        })
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY + 20) + "px")
                         .style("position", self.settings.BUBBLEMouseOverTooltipsPosition)
                         .style("background-color", self.settings.BUBBLEMouseOverTooltipsBackgroundColor)
                         .style("border-style", self.settings.BUBBLEMouseOverTooltipsBorderStyle)
                         .style("border-width", self.settings.BUBBLEMouseOverTooltipsBorderWidth)
                         .style("padding", self.settings.BUBBLEMouseOverTooltipsPadding)
                         .style("border-radius", self.settings.BUBBLEMouseOverTooltipsBorderRadius)
                         .style("opacity", self.settings.BUBBLEMouseOverTooltipsOpacity)
                      d3.select(this)
                         .style("fill",  function(d,i) { if(self.settings.BUBBLEMouseOverColor=="none"){return "";}else{return self.settings.BUBBLEMouseOverColor;} })
                         .style("opacity",  function(d,i) { if(self.settings.BUBBLEMouseOverOpacity=="none"){return "";}else{return self.settings.BUBBLEMouseOverOpacity;} })
                         .style("stroke", function(d,i) { if(self.settings.BUBBLEMouseOverStrokeColor=="none"){return "";}else{return self.settings.BUBBLEMouseOverStrokeColor;} })
                         .style("stroke-width", function(d,i) { if(self.settings.BUBBLEMouseOverStrokeWidth=="none"){return "";}else{return self.settings.BUBBLEMouseOverStrokeWidth;} });
                      }else{
                        BUBBLEMouseOnTooltip.html(function(){if(self.settings.BUBBLEMouseOverTooltipsSetting == "style1"){
                              return "chr : "+d.BUBBLE_chr+"<br>position : "+d.BUBBLE_start+"-"+d.BUBBLE_end+" <br>name : "+d.BUBBLE_name+" <br>value : "+d.BUBBLE_value+""
                            }else if (self.settings.BUBBLEMouseOverTooltipsSetting == "custom") {
                              return self.settings.BUBBLEMouseOverTooltipsHtml+d.BUBBLE_html
                            }
                        })
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY + 20) + "px")
                         .style("position", self.settings.BUBBLEMouseOverTooltipsPosition)
                         .style("background-color", self.settings.BUBBLEMouseOverTooltipsBackgroundColor)
                         .style("border-style", self.settings.BUBBLEMouseOverTooltipsBorderStyle)
                         .style("border-width", self.settings.BUBBLEMouseOverTooltipsBorderWidth)
                         .style("padding", self.settings.BUBBLEMouseOverTooltipsPadding)
                         .style("border-radius", self.settings.BUBBLEMouseOverTooltipsBorderRadius)
                         .style("opacity", self.settings.BUBBLEMouseOverTooltipsOpacity)
                      d3.select(this)
                         .style("fill",  function(d,i) { if(self.settings.BUBBLEMouseOverColor=="none"){return "";}else{return self.settings.BUBBLEMouseOverColor;} })
                         .style("opacity",  function(d,i) { if(self.settings.BUBBLEMouseOverOpacity=="none"){return "";}else{return self.settings.BUBBLEMouseOverOpacity;} })
                         .style("stroke", function(d,i) { if(self.settings.BUBBLEMouseOverStrokeColor=="none"){return "";}else{return self.settings.BUBBLEMouseOverStrokeColor;} })
                         .style("stroke-width", function(d,i) { if(self.settings.BUBBLEMouseOverStrokeWidth=="none"){return "";}else{return self.settings.BUBBLEMouseOverStrokeWidth;} });
                      }
                      
                })
            }
            if(self.settings.BUBBLEMouseClickDisplay==true){
                BUBBLEMouseOn.on("click",function(d){
                    d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.BUBBLEMouseClickColor=="none"){return "";}else{return self.settings.BUBBLEMouseClickColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.BUBBLEMouseClickOpacity=="none"){return "";}else{return self.settings.BUBBLEMouseClickOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.BUBBLEMouseClickStrokeColor=="none"){return "";}else{return self.settings.BUBBLEMouseClickStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.BUBBLEMouseClickStrokeWidth=="none"){return "";}else{return self.settings.BUBBLEMouseClickStrokeWidth;} });
                })
            }
            if(self.settings.BUBBLEMouseDownDisplay==true){
               BUBBLEMouseOn.on("mousedown",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.BUBBLEMouseDownColor=="none"){return "";}else{return self.settings.BUBBLEMouseDownColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.BUBBLEMouseDownOpacity=="none"){return "";}else{return self.settings.BUBBLEMouseDownOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.BUBBLEMouseDownStrokeColor=="none"){return "";}else{return self.settings.BUBBLEMouseDownStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.BUBBLEMouseDownStrokeWidth=="none"){return "";}else{return self.settings.BUBBLEMouseDownStrokeWidth;} });
               })
            }
            if(self.settings.BUBBLEMouseEnterDisplay==true){
               BUBBLEMouseOn.on("mouseenter",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.BUBBLEMouseEnterColor=="none"){return "";}else{return self.settings.BUBBLEMouseEnterColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.BUBBLEMouseEnterOpacity=="none"){return "";}else{return self.settings.BUBBLEMouseEnterOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.BUBBLEMouseEnterStrokeColor=="none"){return "";}else{return self.settings.BUBBLEMouseEnterStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.BUBBLEMouseEnterStrokeWidth=="none"){return "";}else{return self.settings.BUBBLEMouseEnterStrokeWidth;} });
               })
            }
            if(self.settings.BUBBLEMouseLeaveDisplay==true){
               BUBBLEMouseOn.on("mouseleave",function(d){
                   BUBBLEMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.BUBBLEMouseLeaveColor=="none"){return "";}else{return self.settings.BUBBLEMouseLeaveColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.BUBBLEMouseLeaveOpacity=="none"){return "";}else{return self.settings.BUBBLEMouseLeaveOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.BUBBLEMouseLeaveStrokeColor=="none"){return "";}else{return self.settings.BUBBLEMouseLeaveStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.BUBBLEMouseLeaveStrokeWidth=="none"){return "";}else{return self.settings.BUBBLEMouseLeaveStrokeWidth;} });
               })
            }
            if(self.settings.BUBBLEMouseUpDisplay==true){
               BUBBLEMouseOn.on("mouseup",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.BUBBLEMouseUpColor=="none"){return "";}else{return self.settings.BUBBLEMouseUpColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.BUBBLEMouseUpOpacity=="none"){return "";}else{return self.settings.BUBBLEMouseUpOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.BUBBLEMouseUpStrokeColor=="none"){return "";}else{return self.settings.BUBBLEMouseUpStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.BUBBLEMouseUpStrokeWidth=="none"){return "";}else{return self.settings.BUBBLEMouseUpStrokeWidth;} });
               })
            }
            if(self.settings.BUBBLEMouseMoveDisplay==true){
               BUBBLEMouseOn.on("mousemove",function(d){
                   d3.select(this)
                       .style("fill",  function(d,i) { if(self.settings.BUBBLEMouseMoveColor=="none"){return "";}else{return self.settings.BUBBLEMouseMoveColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.BUBBLEMouseMoveOpacity=="none"){return "";}else{return self.settings.BUBBLEMouseMoveOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.BUBBLEMouseMoveStrokeColor=="none"){return "";}else{return self.settings.BUBBLEMouseMoveStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.BUBBLEMouseUpStrokeWidth=="none"){return "";}else{return self.settings.BUBBLEMouseMoveStrokeWidth;} });
                   BUBBLEMouseOnTooltip.style("left", (d3.event.pageX) + "px")
                   .style("top", (d3.event.pageY + 20) + "px");
               })
            }
            if(self.settings.BUBBLEMouseOutDisplay==true){
               BUBBLEMouseOn.on("mouseout",function(d){
                   BUBBLEMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .transition()
                       .duration(self.settings.BUBBLEMouseOutAnimationTime)
                       .style("fill",  function(d,i) { if(self.settings.BUBBLEMouseOutColor=="none"){return "";}else{return self.settings.BUBBLEMouseOutColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.BUBBLEMouseOutOpacity=="none"){return "";}else{return self.settings.BUBBLEMouseOutOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.BUBBLEMouseOutStrokeColor=="none"){return "";}else{return self.settings.BUBBLEMouseOutStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.BUBBLEMouseUpStrokeWidth=="none"){return "";}else{return self.settings.BUBBLEMouseOutStrokeWidth;} });
               });
            }

        }

    }

    if(self.SCATTER.length > 0){
//            console.log(self.initGenome)
//            console.log(self.genomeLabel)
            function NGCircosSCATTER(d) {
              return self.SCATTER[scatteri].map(function(v, i) {
                var random_data = Math.random()*self.SCATTERsettings.random_data
                var scatter_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  scatter_angle: (v.start/2+v.end/2) * scatter_k + d[self.initGenome[v.chr]].startAngle,
                  scatter_chr: v.chr,
                  scatter_start: v.start,
                  scatter_end: v.end,
                  scatter_name: v.name,
                  scatter_des: v.des,
                  scatter_link: v.link,
                  scatter_click_label: "scatter"+scatteri+"_"+i,
                  x: (0 + Math.sin((v.start/2+v.end/2) * scatter_k + d[self.initGenome[v.chr]].startAngle) * (self.SCATTERsettings.SCATTERRadius - random_data)),
                  y: (0 - Math.cos((v.start/2+v.end/2) * scatter_k + d[self.initGenome[v.chr]].startAngle) * (self.SCATTERsettings.SCATTERRadius - random_data)),
                  scatter_html:v.html,
                };
              });
            }
            function NGCircosSCATTER2(d) {
              return self.SCATTER[scatteri].map(function(v, i) {
                var random_data = Math.random()*self.SCATTERsettings.random_data
                var scatter_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  scatter_angle: 3*Math.PI-((v.start/2+v.end/2) * scatter_k + d[self.initGenome[v.chr]].startAngle),
                  scatter_chr: v.chr,
                  scatter_start: v.start,
                  scatter_end: v.end,
                  scatter_name: v.name,
                  scatter_des: v.des,
                  scatter_link: v.link,
                  scatter_click_label: "scatter"+scatteri+"_"+i,
                  x: (0 + Math.sin(3*Math.PI-((v.start/2+v.end/2) * scatter_k + d[self.initGenome[v.chr]].startAngle)) * (self.SCATTERsettings.SCATTERRadius - random_data)),
                  y: (0 - Math.cos(3*Math.PI-((v.start/2+v.end/2) * scatter_k + d[self.initGenome[v.chr]].startAngle)) * (self.SCATTERsettings.SCATTERRadius - random_data)),
                  scatter_html:v.html,
                };
              });
            }
        for(var scatteri=0; scatteri<self.SCATTER.length; scatteri++){
            self.update_SCATTERsettings(self.SCATTERConfig[scatteri]);
            if(drawTime == self.SCATTERsettings.compareGroup){
               if(self.SCATTERsettings.compareGroup == 1){
                var scatter_objects = NGCircosSCATTER(chord.groups())
              }else{
                var scatter_objects = NGCircosSCATTER2(chord.groups())
              }
             // console.log(scatter_objects)

              if(self.SCATTERsettings.outerPointType=="circle"){
                if(self.SCATTERsettings.SCATTERAnimationDisplay==false){
                  svg.append("g")
                      .attr("class", "NGCircosSCATTER")
                    .selectAll("circle")
                      .data(scatter_objects)
                      .enter()
                      .append("a")
                      .attr("xlink:href", function(d){if(self.settings.SCATTERxlink == true){return d.scatter_link;}})
                      .append("circle")
                      .attr("id", "NGCircosSCATTEROut")
                      .attr("fill", self.SCATTERsettings.outerCircleColor)
                      .attr("opacity", self.SCATTERsettings.outerCircleOpacity)
                      .attr("r", self.SCATTERsettings.outerCircleSize)
                      .attr("cx", function(d) { return d.x; })
                      .attr("cy", function(d) { return d.y; })
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                }
                if(self.SCATTERsettings.SCATTERAnimationDisplay==true){
                  svg.append("g")
                      .attr("class", "NGCircosSCATTER")
                    .selectAll("circle")
                      .data(scatter_objects)
                      .enter()
                      .append("a")
                      .attr("xlink:href", function(d){if(self.settings.SCATTERxlink == true){return d.scatter_link;}})
                      .append("circle")
                      .attr("id", "NGCircosSCATTEROut")
                      .attr("fill", self.SCATTERsettings.outerCircleColor)
                      .attr("opacity", self.SCATTERsettings.outerCircleOpacity)
                      .attr("r", self.SCATTERsettings.outerCircleSize)
  		    .attr("cx",function(d){
  			    return self.SCATTERsettings.SCATTERAnimationInitialPositionX;
  		    })
  		    .attr("cy",function(d){
  			    return self.SCATTERsettings.SCATTERAnimationInitialPositionY;
  		    })
  		    .transition()
  		    .delay(function(d,i){
  			    return (i+1) * self.SCATTERsettings.SCATTERAnimationDelay;
  		    })
  		    .duration(self.SCATTERsettings.SCATTERAnimationTime)
  		    .ease(self.SCATTERsettings.SCATTERAnimationType)
                      .attr("cx", function(d) { return d.x; })
                      .attr("cy", function(d) { return d.y; })
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                 }

                  if(self.settings.SCATTERMouseClickTextFromData=="first"){
                      svg.append("g")
                          .attr("class", "NGCircosSCATTERlabel")
                        .selectAll("text")
                          .data(scatter_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "scatter"+scatteri+"_"+i; })
                          .text(function(d) { return d.scatter_chr; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SCATTERsettings.SCATTERFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.SCATTERMouseClickTextFromData=="second"){
                      svg.append("g")
                          .attr("class", "NGCircosSCATTERlabel")
                        .selectAll("text")
                          .data(scatter_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "scatter"+scatteri+"_"+i; })
                          .text(function(d) { return d.scatter_pos; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SCATTERsettings.SCATTERFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.SCATTERMouseClickTextFromData=="third"){
                      svg.append("g")
                          .attr("class", "NGCircosSCATTERlabel")
                        .selectAll("text")
                          .data(scatter_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "scatter"+scatteri+"_"+i; })
                          .text(function(d) { return d.scatter_val; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SCATTERsettings.SCATTERFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.SCATTERMouseClickTextFromData=="fourth"){
                      svg.append("g")
                          .attr("class", "NGCircosSCATTERlabel")
                        .selectAll("text")
                          .data(scatter_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "scatter"+scatteri+"_"+i; })
                          .text(function(d) { return d.scatter_name; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SCATTERsettings.SCATTERFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.SCATTERMouseClickTextFromData=="fifth"){
                      svg.append("g")
                          .attr("class", "NGCircosSCATTERlabel")
                        .selectAll("text")
                          .data(scatter_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "scatter"+scatteri+"_"+i; })
                          .text(function(d) { return d.scatter_des; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SCATTERsettings.SCATTERFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
              }

              if(self.SCATTERsettings.outerPointType=="rect"){
                  svg.append("g")
                      .attr("class", "NGCircosSCATTER")
                    .selectAll("rect")
                      .data(scatter_objects)
                      .enter()
                      .append("a")
                      .attr("xlink:href", function(d){if(self.settings.SCATTERxlink == true){return d.scatter_link;}})
                      .append("rect")
                      .attr("id", "NGCircosSCATTEROut")
                      .attr("x", function(d) { return d.x - self.SCATTERsettings.outerrectWidth/2; })
                      .attr("y", function(d) { return d.y - self.SCATTERsettings.outerrectHeight/2; })
                      .attr("fill", self.SCATTERsettings.outerCircleColor)
                      .attr("width", self.SCATTERsettings.outerrectWidth)
                      .attr("height", self.SCATTERsettings.outerrectHeight)
                      .attr("opacity", 0.5)
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
              }

              if(self.SCATTERsettings.innerPointType=="circle"){
                if(self.SCATTERsettings.SCATTERAnimationDisplay==false){
                  svg.append("g")
                      .attr("class", "NGCircosSCATTEROut")
                    .selectAll("circle")
                      .data(scatter_objects)
                      .enter()
                      .append("a")
                      .attr("xlink:href", function(d){if(self.settings.SCATTERxlink == true){return d.scatter_link;}})
                      .append("circle")
                      .attr("id", "NGCircosSCATTEROut")  //out
                      .attr("fill", self.SCATTERsettings.innerCircleColor)
                      .attr("r", self.SCATTERsettings.innerCircleSize)
                      .attr("cx", function(d) { return d.x; })
                      .attr("cy", function(d) { return d.y; })
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                 }
                if(self.SCATTERsettings.SCATTERAnimationDisplay==true){
                  svg.append("g")
                      .attr("class", "NGCircosSCATTEROut")
                    .selectAll("circle")
                      .data(scatter_objects)
                      .enter()
                      .append("a")
                      .attr("xlink:href", function(d){if(self.settings.SCATTERxlink == true){return d.scatter_link;}})
                      .append("circle")
                      .attr("id", "NGCircosSCATTEROut")  //out
                      .attr("fill", self.SCATTERsettings.innerCircleColor)
                      .attr("r", self.SCATTERsettings.innerCircleSize)
  		    .attr("cx",function(d){
  			    return 0;
  		    })
  		    .attr("cy",function(d){
  			    return 0;
  		    })
  		    .transition()
  		    .delay(function(d,i){
  			    return (i+1) * self.SCATTERsettings.SCATTERAnimationDelay;
  		    })
  		    .duration(self.SCATTERsettings.SCATTERAnimationTime)
  		    .ease(self.SCATTERsettings.SCATTERAnimationType)
                      .attr("cx", function(d) { return d.x; })
                      .attr("cy", function(d) { return d.y; })
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                 }
                  if(self.settings.SCATTERMouseClickTextFromData=="first"){
                      svg.append("g")
                          .attr("class", "NGCircosSCATTERlabel")
                        .selectAll("text")
                          .data(scatter_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "scatter"+scatteri+"_"+i; })
                          .text(function(d) { return d.scatter_chr; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SCATTERsettings.SCATTERFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.SCATTERMouseClickTextFromData=="second"){
                      svg.append("g")
                          .attr("class", "NGCircosSCATTERlabel")
                        .selectAll("text")
                          .data(scatter_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "scatter"+scatteri+"_"+i; })
                          .text(function(d) { return d.scatter_start; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SCATTERsettings.SCATTERFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.SCATTERMouseClickTextFromData=="third"){
                      svg.append("g")
                          .attr("class", "NGCircosSCATTERlabel")
                        .selectAll("text")
                          .data(scatter_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "scatter"+scatteri+"_"+i; })
                          .text(function(d) { return d.scatter_end; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SCATTERsettings.SCATTERFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.SCATTERMouseClickTextFromData=="fourth"){
                      svg.append("g")
                          .attr("class", "NGCircosSCATTERlabel")
                        .selectAll("text")
                          .data(scatter_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "scatter"+scatteri+"_"+i; })
                          .text(function(d) { return d.scatter_name; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SCATTERsettings.SCATTERFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.SCATTERMouseClickTextFromData=="fifth"){
                      svg.append("g")
                          .attr("class", "NGCircosSCATTERlabel")
                        .selectAll("text")
                          .data(scatter_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "scatter"+scatteri+"_"+i; })
                          .text(function(d) { return d.scatter_des; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SCATTERsettings.SCATTERFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
              }

              if(self.SCATTERsettings.innerPointType=="rect"){
                  svg.append("g")
                      .attr("class", "NGCircosSCATTEROut")
                    .selectAll("rect")
                      .data(scatter_objects)
                      .enter()
                      .append("a")
                      .attr("xlink:href", function(d){if(self.settings.SCATTERxlink == true){return d.scatter_link;}})
                      .append("rect")
                      .attr("id", "NGCircosSCATTEROut")  //out
                      .attr("x", function(d) { return d.x - self.SCATTERsettings.innerrectWidth/2; })
                      .attr("y", function(d) { return d.y - self.SCATTERsettings.innerrectHeight/2; })
                      .attr("width", self.SCATTERsettings.innerrectWidth)
                      .attr("height", self.SCATTERsettings.innerrectHeight)
                      .attr("fill", self.SCATTERsettings.innerCircleColor)
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
              }
            }
            

            self.init_SCATTERsettings();

        }

        if(self.settings.SCATTERMouseEvent==true){
            var SCATTERMouseOnTooltip = d3.select("body")
                .append("div")
                .attr("class","NGCircosSCATTERTooltip")
                .attr("id","NGCircosSCATTERTooltip")
                .style("opacity",0);

            var SCATTERMouseOn = svg.selectAll("#NGCircosSCATTEROut");

            if(self.settings.SCATTERMouseOverDisplay==true){
                SCATTERMouseOn.on("mouseover",function(d){
                      if(self.ticksOffset != undefined){
                        SCATTERMouseOnTooltip.html(function(){if(self.settings.SCATTERMouseOverTooltipsSetting == "style1"){
                              return "item : "+d.scatter_chr+"<br>start : "+(parseInt(d.scatter_start)+self.ticksOffset)+"<br>end : "+(parseInt(d.scatter_end)+self.ticksOffset)+" <br>name : "+d.scatter_name+" <br>des : "+d.scatter_des+""
                            }else if (self.settings.SCATTERMouseOverTooltipsSetting == "custom") {
                              return self.settings.SCATTERMouseOverTooltipsHtml+d.scatter_html
                            }
                        })
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY + 20) + "px")
                         .style("position", self.settings.SCATTERMouseOverTooltipsPosition)
                         .style("background-color", self.settings.SCATTERMouseOverTooltipsBackgroundColor)
                         .style("border-style", self.settings.SCATTERMouseOverTooltipsBorderStyle)
                         .style("border-width", self.settings.SCATTERMouseOverTooltipsBorderWidth)
                         .style("padding", self.settings.SCATTERMouseOverTooltipsPadding)
                         .style("border-radius", self.settings.SCATTERMouseOverTooltipsBorderRadius)
                         .style("opacity", self.settings.SCATTERMouseOverTooltipsOpacity)
                      d3.select(this)
                         .style("r",  function(d,i) { if(self.settings.SCATTERMouseOverCircleSize=="none"){return "";}else{return self.settings.SCATTERMouseOverCircleSize;} })
                         .style("fill",  function(d,i) { if(self.settings.SCATTERMouseOverColor=="none"){return "";}else{return self.settings.SCATTERMouseOverColor;} })
                         .style("opacity",  function(d,i) { if(self.settings.SCATTERMouseOverCircleOpacity=="none"){return "";}else{return self.settings.SCATTERMouseOverCircleOpacity;} })
                         .style("stroke", function(d,i) { if(self.settings.SCATTERMouseOverCircleStrokeColor=="none"){return "";}else{return self.settings.SCATTERMouseOverCircleStrokeColor;} })
                         .style("stroke-width", function(d,i) { if(self.settings.SCATTERMouseOverCircleStrokeWidth=="none"){return "";}else{return self.settings.SCATTERMouseOverCircleStrokeWidth;} });
                      }else{
                        SCATTERMouseOnTooltip.html(function(){if(self.settings.SCATTERMouseOverTooltipsSetting == "style1"){
                              return "item : "+d.scatter_chr+"<br>start : "+d.scatter_start+"<br>end : "+d.scatter_end+" <br>name : "+d.scatter_name+" <br>des : "+d.scatter_des+""
                            }else if (self.settings.SCATTERMouseOverTooltipsSetting == "custom") {
                              return self.settings.SCATTERMouseOverTooltipsHtml+d.scatter_html
                            }
                        })
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY + 20) + "px")
                         .style("position", self.settings.SCATTERMouseOverTooltipsPosition)
                         .style("background-color", self.settings.SCATTERMouseOverTooltipsBackgroundColor)
                         .style("border-style", self.settings.SCATTERMouseOverTooltipsBorderStyle)
                         .style("border-width", self.settings.SCATTERMouseOverTooltipsBorderWidth)
                         .style("padding", self.settings.SCATTERMouseOverTooltipsPadding)
                         .style("border-radius", self.settings.SCATTERMouseOverTooltipsBorderRadius)
                         .style("opacity", self.settings.SCATTERMouseOverTooltipsOpacity)
                      d3.select(this)
                         .style("r",  function(d,i) { if(self.settings.SCATTERMouseOverCircleSize=="none"){return "";}else{return self.settings.SCATTERMouseOverCircleSize;} })
                         .style("fill",  function(d,i) { if(self.settings.SCATTERMouseOverColor=="none"){return "";}else{return self.settings.SCATTERMouseOverColor;} })
                         .style("opacity",  function(d,i) { if(self.settings.SCATTERMouseOverCircleOpacity=="none"){return "";}else{return self.settings.SCATTERMouseOverCircleOpacity;} })
                         .style("stroke", function(d,i) { if(self.settings.SCATTERMouseOverCircleStrokeColor=="none"){return "";}else{return self.settings.SCATTERMouseOverCircleStrokeColor;} })
                         .style("stroke-width", function(d,i) { if(self.settings.SCATTERMouseOverCircleStrokeWidth=="none"){return "";}else{return self.settings.SCATTERMouseOverCircleStrokeWidth;} });
                      }
                })
            }
            if(self.settings.SCATTERMouseClickDisplay==true){
                SCATTERMouseOn.on("click",function(d){
                    d3.select(this)
                       .style("r",  function(d,i) { if(self.settings.SCATTERMouseClickCircleSize=="none"){return "";}else{return self.settings.SCATTERMouseClickCircleSize;} })
                       .style("fill",  function(d,i) { if(self.settings.SCATTERMouseClickColor=="none"){return "";}else{return self.settings.SCATTERMouseClickColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.SCATTERMouseClickCircleOpacity=="none"){return "";}else{return self.settings.SCATTERMouseClickCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SCATTERMouseClickCircleStrokeColor=="none"){return "";}else{return self.settings.SCATTERMouseClickCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SCATTERMouseClickCircleStrokeWidth=="none"){return "";}else{return self.settings.SCATTERMouseClickCircleStrokeWidth;} });
                    d3.select("#"+d.scatter_click_label)
                        .style("opacity", self.settings.SCATTERMouseClickTextOpacity)
                        .style("fill", self.settings.SCATTERMouseClickTextColor)
                        .style("font-size", self.settings.SCATTERMouseClickTextSize)
                        .attr("x", d.x+self.settings.SCATTERMouseClickTextPostionX)
                        .attr("y", d.y+self.settings.SCATTERMouseClickTextPostionY);
                })
            }
            if(self.settings.SCATTERMouseClickTextDrag==true){
                svg.selectAll("text.dragText").call(drag);
            }
            if(self.settings.SCATTERMouseDownDisplay==true){
               SCATTERMouseOn.on("mousedown",function(d){
                   d3.select(this)
                       .style("r", function(d,i) { if(self.settings.SCATTERMouseDownCircleSize=="none"){return "";}else{return self.settings.SCATTERMouseDownCircleSize;} })
                       .style("fill", function(d,i) { if(self.settings.SCATTERMouseDownColor=="none"){return "";}else{return self.settings.SCATTERMouseDownColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.SCATTERMouseDownCircleOpacity=="none"){return "";}else{return self.settings.SCATTERMouseDownCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SCATTERMouseDownCircleStrokeColor=="none"){return "";}else{return self.settings.SCATTERMouseDownCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SCATTERMouseDownCircleStrokeWidth=="none"){return "";}else{return self.settings.SCATTERMouseDownCircleStrokeWidth;} });
               })
            }
            if(self.settings.SCATTERMouseEnterDisplay==true){
               SCATTERMouseOn.on("mouseenter",function(d){
                   d3.select(this)
                       .style("r", function(d,i) { if(self.settings.SCATTERMouseEnterCircleSize=="none"){return "";}else{return self.settings.SCATTERMouseEnterCircleSize;} })
                       .style("fill", function(d,i) { if(self.settings.SCATTERMouseEnterColor=="none"){return "";}else{return self.settings.SCATTERMouseEnterColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.SCATTERMouseEnterCircleOpacity=="none"){return "";}else{return self.settings.SCATTERMouseEnterCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SCATTERMouseEnterCircleStrokeColor=="none"){return "";}else{return self.settings.SCATTERMouseEnterCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SCATTERMouseEnterCircleStrokeWidth=="none"){return "";}else{return self.settings.SCATTERMouseEnterCircleStrokeWidth;} });
               })
            }
            if(self.settings.SCATTERMouseLeaveDisplay==true){
               SCATTERMouseOn.on("mouseleave",function(d){
                   SCATTERMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .style("r", function(d,i) { if(self.settings.SCATTERMouseLeaveCircleSize=="none"){return "";}else{return self.settings.SCATTERMouseLeaveCircleSize;} })
                       .style("fill", function(d,i) { if(self.settings.SCATTERMouseLeaveColor=="none"){return "";}else{return self.settings.SCATTERMouseLeaveColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.SCATTERMouseLeaveCircleOpacity=="none"){return "";}else{return self.settings.SCATTERMouseLeaveCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SCATTERMouseLeaveCircleStrokeColor=="none"){return "";}else{return self.settings.SCATTERMouseLeaveCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SCATTERMouseLeaveCircleStrokeWidth=="none"){return "";}else{return self.settings.SCATTERMouseLeaveCircleStrokeWidth;} });
               })
            }
            if(self.settings.SCATTERMouseUpDisplay==true){
               SCATTERMouseOn.on("mouseup",function(d){
                   d3.select(this)
                       .style("r", function(d,i) { if(self.settings.SCATTERMouseUpCircleSize=="none"){return "";}else{return self.settings.SCATTERMouseUpCircleSize;} })
                       .style("fill", function(d,i) { if(self.settings.SCATTERMouseUpColor=="none"){return "";}else{return self.settings.SCATTERMouseUpColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.SCATTERMouseUpCircleOpacity=="none"){return "";}else{return self.settings.SCATTERMouseUpCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SCATTERMouseUpCircleStrokeColor=="none"){return "";}else{return self.settings.SCATTERMouseUpCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SCATTERMouseUpCircleStrokeWidth=="none"){return "";}else{return self.settings.SCATTERMouseUpCircleStrokeWidth;} });
               })
            }
            if(self.settings.SCATTERMouseMoveDisplay==true){
               SCATTERMouseOn.on("mousemove",function(d){
                   d3.select(this)
                       .style("r", function(d,i) { if(self.settings.SCATTERMouseMoveCircleSize=="none"){return "";}else{return self.settings.SCATTERMouseMoveCircleSize;} })
                       .style("fill", function(d,i) { if(self.settings.SCATTERMouseMoveColor=="none"){return "";}else{return self.settings.SCATTERMouseMoveColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.SCATTERMouseMoveCircleOpacity=="none"){return "";}else{return self.settings.SCATTERMouseMoveCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SCATTERMouseMoveCircleStrokeColor=="none"){return "";}else{return self.settings.SCATTERMouseMoveCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SCATTERMouseMoveCircleStrokeWidth=="none"){return "";}else{return self.settings.SCATTERMouseMoveCircleStrokeWidth;} });
                   SCATTERMouseOnTooltip.style("left", (d3.event.pageX) + "px")
                   .style("top", (d3.event.pageY + 20) + "px");
               })
            }
            if(self.settings.SCATTERMouseOutDisplay==true){
               SCATTERMouseOn.on("mouseout",function(d){
                   SCATTERMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .transition()
                       .duration(self.settings.SCATTERMouseOutAnimationTime)
                       .style("r", function(d,i) { if(self.settings.SCATTERMouseOutCircleSize=="none"){return "";}else{return self.settings.SCATTERMouseOutCircleSize;} })
                       .style("fill", function(d,i) { if(self.settings.SCATTERMouseOutColor=="none"){return "";}else{return self.settings.SCATTERMouseOutColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.SCATTERMouseOutCircleOpacity=="none"){return "";}else{return self.settings.SCATTERMouseOutCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SCATTERMouseOutCircleStrokeColor=="none"){return "";}else{return self.settings.SCATTERMouseOutCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SCATTERMouseOutCircleStrokeWidth=="none"){return "";}else{return self.settings.SCATTERMouseOutCircleStrokeWidth;} });
               });
            }
        }

    }


    if(self.SNP.length > 0){
//      console.log(self.SNPGraphData)
            function NGCircosSNP(d) {
              return self.SNP[snpi].map(function(v, i) {
                var snp_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  snp_angle: v.pos * snp_k + d[self.initGenome[v.chr]].startAngle,
                  snp_chr: v.chr,
                  snp_pos: v.pos,
                  snp_val: v.value,
                  snp_des: v.des,
                  snp_color: v.color,
                  snp_r2value:v.r2value,
                  snp_link: v.link,
                  snp_click_label: "snp"+snpi+"_"+i,
                  snp_index:v.index,
                  snp_image:v.image,
                  x: (0 + Math.sin(v.pos * snp_k + d[self.initGenome[v.chr]].startAngle) * (self.SNPsettings.minRadius + ( (v.value-self.snp_value_maxmin(self.SNP[snpi])[1])/(self.snp_value_maxmin(self.SNP[snpi])[0]-self.snp_value_maxmin(self.SNP[snpi])[1])*(self.SNPsettings.maxRadius-self.SNPsettings.minRadius) ))),  //self.snp_value_maxmin(self.SNP[snpi])[0] max
                  y: (0 - Math.cos(v.pos * snp_k + d[self.initGenome[v.chr]].startAngle) * (self.SNPsettings.minRadius + ( (v.value-self.snp_value_maxmin(self.SNP[snpi])[1])/(self.snp_value_maxmin(self.SNP[snpi])[0]-self.snp_value_maxmin(self.SNP[snpi])[1])*(self.SNPsettings.maxRadius-self.SNPsettings.minRadius) ))),
                  snp_html:v.html,
                };
              });
            }
            function NGCircosSNP2(d) {
              return self.SNP[snpi].map(function(v, i) {
                var snp_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                return {
                  snp_angle: 3*Math.PI-(v.pos * snp_k + d[self.initGenome[v.chr]].startAngle),
                  snp_chr: v.chr,
                  snp_pos: v.pos,
                  snp_val: v.value,
                  snp_des: v.des,
                  snp_color: v.color,
                  snp_r2value:v.r2value,
                  snp_link: v.link,
                  snp_click_label: "snp"+snpi+"_"+i,
                  snp_index:v.index,
                  snp_image:v.image,
                  x: (0 + Math.sin(3*Math.PI-(v.pos * snp_k + d[self.initGenome[v.chr]].startAngle)) * (self.SNPsettings.minRadius + ( (v.value-self.snp_value_maxmin(self.SNP[snpi])[1])/(self.snp_value_maxmin(self.SNP[snpi])[0]-self.snp_value_maxmin(self.SNP[snpi])[1])*(self.SNPsettings.maxRadius-self.SNPsettings.minRadius) ))),  //self.snp_value_maxmin(self.SNP[snpi])[0] max
                  y: (0 - Math.cos(3*Math.PI-(v.pos * snp_k + d[self.initGenome[v.chr]].startAngle)) * (self.SNPsettings.minRadius + ( (v.value-self.snp_value_maxmin(self.SNP[snpi])[1])/(self.snp_value_maxmin(self.SNP[snpi])[0]-self.snp_value_maxmin(self.SNP[snpi])[1])*(self.SNPsettings.maxRadius-self.SNPsettings.minRadius) ))),
                  snp_html:v.html,
                };
              });
            }
        for(var snpi=0; snpi<self.SNP.length; snpi++){
            self.update_SNPsettings(self.SNPConfig[snpi]);
            if(drawTime == self.SNPsettings.compareGroup){
              //console.log(chord.groups())
               if(self.SNPsettings.compareGroup == 1){
                var snp_objects = NGCircosSNP(chord.groups())
              }else{
                var snp_objects = NGCircosSNP2(chord.groups())
              }
              //console.log(snp_objects)

              if(self.SNPsettings.PointType=="circle"){
                if(self.SNPsettings.SNPAnimationDisplay==false){
                  svg.append("g")
                      .attr("class", "NGCircosSNP")
                    .selectAll("circle")
                      .data(snp_objects)
                      .enter()
                      .append("a")
                      .attr("xlink:href", function(d){if(self.settings.SNPxlink == true){return d.snp_link;}})
                      .append("circle")
                      .attr("id", "NGCircosSNP")
                      .attr("fill", function(d,i) { 
                        if(self.SNPsettings.SNPFillColorType=="specific"){if(d.snp_color!=undefined){return d.snp_color;}else{return self.SNPsettings.SNPFillColor;}}
                        if(self.SNPsettings.SNPFillColorType=="r2"){return self.snp_r2Value_color(d.snp_r2value);}
                       })
                      .attr("r", self.SNPsettings.circleSize)
                      .attr("cx", function(d) { return d.x; })
                      .attr("cy", function(d) { return d.y; })
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                 }
                if(self.SNPsettings.SNPAnimationDisplay==true){
                  svg.append("g")
                      .attr("class", "NGCircosSNP")
                      .selectAll("circle")
                      .data(snp_objects)
                      .enter()
                      .append("a")
                      .attr("xlink:href", function(d){if(self.settings.SNPxlink == true){return d.snp_link;}})
                      .append("circle")
                      .attr("id", "NGCircosSNP")
                      .attr("fill", function(d,i) { 
                        if(self.SNPsettings.SNPFillColorType=="specific"){if(d.snp_color!=undefined){return d.snp_color;}else{return self.SNPsettings.SNPFillColor;}}
                        if(self.SNPsettings.SNPFillColorType=="r2"){return self.snp_r2Value_color(d.snp_r2value);}
                      })
                      .attr("r", self.SNPsettings.circleSize)
                      .attr("cx",function(d){
                        return self.SNPsettings.SNPAnimationInitialPositionX;
                      })
                      .attr("cy",function(d){
                        return self.SNPsettings.SNPAnimationInitialPositionY;
                      })
                      .transition()
                      .delay(function(d,i){
                        return (i+1) * self.SNPsettings.SNPAnimationDelay;
                      })
                      .duration(self.SNPsettings.SNPAnimationTime)
                      .ease(self.SNPsettings.SNPAnimationType)
                      .attr("cx", function(d) { return d.x; })
                      .attr("cy", function(d) { return d.y; })
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                 }

                  if(self.settings.SNPMouseClickTextFromData=="first"){
                      svg.append("g")
                          .attr("class", "NGCircosSNPlabel")
                        .selectAll("text")
                          .data(snp_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "snp"+snpi+"_"+i; })
                          .text(function(d) { return d.snp_chr; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SNPsettings.SNPFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.SNPMouseClickTextFromData=="second"){
                      svg.append("g")
                          .attr("class", "NGCircosSNPlabel")
                        .selectAll("text")
                          .data(snp_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "snp"+snpi+"_"+i; })
                          .text(function(d) { return d.snp_pos; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SNPsettings.SNPFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.SNPMouseClickTextFromData=="third"){
                      svg.append("g")
                          .attr("class", "NGCircosSNPlabel")
                        .selectAll("text")
                          .data(snp_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "snp"+snpi+"_"+i; })
                          .text(function(d) { return d.snp_val; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SNPsettings.SNPFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
                  if(self.settings.SNPMouseClickTextFromData=="fourth"){
                      svg.append("g")
                          .attr("class", "NGCircosSNPlabel")
                        .selectAll("text")
                          .data(snp_objects)
                          .enter().append("text")
                          .attr("class", "dragText")
                          .attr("id", function(d,i) { return "snp"+snpi+"_"+i; })
                          .text(function(d) { return d.snp_des; })
                          .attr("x", -1000)
                          .attr("y", -1000)
                          .style("opacity", 0)
                          .style("font-size", 1)
                          .attr("fill", self.SNPsettings.SNPFillColor)
                          .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  }
              }

              if(self.SNPsettings.PointType=="rect"){
                  svg.append("g")
                      .attr("class", "NGCircosSNP")
                    .selectAll("rect")
                      .data(snp_objects)
                      .enter()
                      .append("a")
                      .attr("xlink:href", function(d){if(self.settings.SNPxlink == true){return d.snp_link;}})
                      .append("rect")
                      .attr("id", "NGCircosSNP")
                      .attr("x", function(d) { return d.x; })
                      .attr("y", function(d) { return d.y; })
                      .attr("width", self.SNPsettings.rectWidth)
                      .attr("height", self.SNPsettings.rectHeight)
                      //.attr("fill", self.SNPsettings.SNPFillColor);
                      .attr("fill", function(d,i) { 
                        if(self.SNPsettings.SNPFillColorType=="specific"){if(d.snp_color!=undefined){return d.snp_color;}else{return self.SNPsettings.SNPFillColor;}}
                        if(self.SNPsettings.SNPFillColorType=="r2"){return self.snp_r2Value_color(d.snp_r2value);}
                      })
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
              }

            }
            
                 self.init_SNPsettings();

        }

        if(self.settings.SNPMouseEvent==true){
            var SNPMouseOnTooltip = d3.select("body")
                .append("div")
                .attr("class","NGCircosSNPTooltip")
                .attr("id","NGCircosSNPTooltip")
                .style("opacity",0);

            var SNPMouseOn = svg.selectAll("#NGCircosSNP");

            //combinationSNP
            if(self.settings.SNPMouseCombinationEvent == true){
              
//              console.log(self.SNP[0][0].des)
              var parameterNum=0;
              parameterNum=self.SNPGraphData[0][0].length
              
              var firstSNP=0;
              for(var i=0;i<self.SNP[0].length;i++){
                if(self.SNP[0][i].index != undefined ){
                  var SNPCombinationData=self.SNPGraphData[0][self.SNP[0][i].index]
                  firstSNP = i
                  break;
                }
              }
              if(self.settings.SNPMouseCombinationGraphDisplay == true){
                
                svg.append("text")
                  .attr("class","SNPCombinationGraphTitle")
                  .attr({
                    id: "SNPCombinationGraphTitle",
                    x: self.settings.SNPMouseCombinationGraphPositionX-20
                  } )
                  .attr("y",(self.settings.SNPMouseCombinationGraphPositionY-self.settings.SNPMouseCombinationGraphHeight-10))
                  .style("font-size", self.settings.SNPMouseCombinationGraphTitleSize)
                  .style("font-weight", self.settings.SNPMouseCombinationGraphTitleWeight) 
                  .attr("fill", self.settings.SNPMouseCombinationGraphTitleColor)
                  .text(self.settings.SNPMouseCombinationGraphTitle+" ("+self.SNP[0][firstSNP].des+")");
                
                if(self.settings.SNPMouseCombinationGraphType == 'histogram'){
                  //x轴的比例尺
                  var xScale = d3.scale.ordinal()
                    .domain(d3.range(SNPCombinationData.length))
                    .rangeRoundBands([0, self.settings.SNPMouseCombinationGraphWidth]);
                  //y轴的比例尺
                  var yScale = d3.scale.linear()
                    .domain([0,d3.max(SNPCombinationData)])
                    .range([self.settings.SNPMouseCombinationGraphHeight, 0]);
                    
                  //定义x轴
                  var XAxisName=self.SNPGraphData[0][0]
                  var ticksValues=[]
                  for(var i=0;i<parameterNum;i++){
                    ticksValues.push(i)
                  }
                  var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .tickValues(ticksValues)
                    .tickFormat(function(d){return XAxisName[d];})
                    .orient("bottom");
                  //定义y轴
                  var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left");
                  //矩形之间的空白
                  var rectPadding =self.settings.SNPMouseCombinationGraphHistogramPadding;
                  var combinationStartX=self.settings.SNPMouseCombinationGraphPositionX
                  //添加矩形元素
                  var rects = svg.append("g")
                      .attr("class", "SNPCombinationHistogramRect")
                      .selectAll(".SNPCombinationHistogramRect")
                      .data(SNPCombinationData)
                      .enter()
                      .append("rect")
                      .attr("class","SNPCombinationHistogramRect")
                      .attr("transform","translate(" + combinationStartX + "," + self.settings.SNPMouseCombinationGraphPositionY + ")")
                      .attr("fill",self.settings.SNPMouseCombinationGraphHistogramBarColor)
                      .attr({
                      id: "SNPCombinationHistogramRect",
                      x: function(d,i){
                        return xScale(i) + rectPadding/2+self.settings.SNPMouseCombinationGraphHistogramPositionCorrectX;
                      } })
                      .attr("y",function(d){
                        return yScale(d)-self.settings.SNPMouseCombinationGraphHeight+20;
                      })
                      .attr("width", xScale.rangeBand() - rectPadding )
                      .attr("height", function(d){
                        //console.log(yScale(d))
                        return self.settings.SNPMouseCombinationGraphHeight - yScale(d);
                      });

                  if(self.settings.SNPMouseCombinationTextDisplay == true){
                    //添加文字元素
                    var texts = svg.selectAll(".SNPCombinationHistogramText")
                        .data(SNPCombinationData)
                        .enter()
                        .append("text")
                        .attr("class","SNPCombinationHistogramText")
                        .attr("transform","translate(" +combinationStartX+ "," + self.settings.SNPMouseCombinationGraphPositionY + ")")
                        .attr("fill",self.settings.SNPMouseCombinationTextColor)
                        .style("font-size", self.settings.SNPMouseCombinationTextSize)
                        .style("font-weight", self.settings.SNPMouseCombinationTextWeight) 
                        .attr({
                          id: "SNPCombinationHistogramText",
                          x: function(d,i){
                                            return xScale(i) + rectPadding/4+self.settings.SNPMouseCombinationTextPositionCorrectX;
                                          }
                        } )
                        .attr("y",function(d){
                          return yScale(d)-self.settings.SNPMouseCombinationGraphHeight+self.settings.SNPMouseCombinationTextPositionCorrectY;
                        })
                        .text(function(d){
                          return d;
                        });
                  }
                  
//                  //添加x轴
                  svg.append("g")
                    .attr("class","SNPCombinationAxis")
                    .attr("transform","translate(" + (combinationStartX-6+20) + "," + (self.settings.SNPMouseCombinationGraphPositionY+20) + ")")
                    .attr({id:"SNPCombinationAxisX"})
                    .attr("fill","black")
                    .call(xAxis); 
//
//                  //添加y轴
                  svg.append("g")
                    .attr("class","SNPCombinationAxis")
                    .attr("transform","translate(" + (combinationStartX+20) + "," + (self.settings.SNPMouseCombinationGraphPositionY-self.settings.SNPMouseCombinationGraphHeight+20) + ")")
                    .attr("id","SNPCombinationAxisY")
                    .attr("fill","black")
                    .call(yAxis);
                }
                
                if(self.settings.SNPMouseCombinationGraphType == 'pie'){
                  var XAxisName=self.SNPGraphData[0][0]
                                  
                   var pieCombination =d3.svg.arc()
                        .innerRadius(0)
                        .outerRadius(self.settings.SNPMouseCombinationGraphPieSize);
                    
                    var pie=d3.layout.pie().sort(null)
                            .value(function(d){return d;})
                    
//                    console.log(pie(SNPCombinationData))
                    
                    var color20 = d3.scale.category20()
                    var fillPie = d3.scale.ordinal()
                    .range(self.settings.SNPMouseCombinationGraphPieColor);
                    
                    svg.append("g")
                        .attr("class", "SNPCombinationPie")
                        .selectAll("path")
                        .data(pie(SNPCombinationData))
                        .enter()
                        .append("a")
                        .append("path")
                        .attr("id", "SNPCombinationPie")
                        .attr("fill", function(d,i){
                          if(self.settings.SNPMouseCombinationGraphPieAutoColor == true){
                            return color20(i);
                          }else{
                            return  fillPie(i);
                          }
                        })
                        .attr("transform", "translate(" +  (self.settings.SNPMouseCombinationGraphPositionX+self.settings.SNPMouseCombinationGraphWidth/2+compareMoveDistance)+ "," + (self.settings.SNPMouseCombinationGraphPositionY-(self.settings.SNPMouseCombinationGraphHeight-self.settings.SNPMouseCombinationGraphTitleSize*2)/2) + ")")
                        .attr("d",pieCombination)
                        .style("stroke", function(d){
                                            if(self.settings.SNPMouseCombinationGraphPieStroke == true){
                                              return self.settings.SNPMouseCombinationGraphPieStrokeColor;
                                            }else{
                                              return "";
                                            }
                                          })
                        .style("stroke-width", function(d){
                                                  if(self.settings.SNPMouseCombinationGraphPieStroke == true){
                                                    return self.settings.SNPMouseCombinationGraphPieStrokeWidth;
                                                  }else{
                                                    return "0px";
                                                  }
                                                })
                        .style("opacity",self.settings.SNPMouseCombinationGraphPieOpacity);
                  
                  if(self.settings.SNPMouseCombinationTextDisplay == true){
                    //添加文字元素
                    var texts = svg.selectAll(".SNPCombinationPieText")
                        .data(pie(SNPCombinationData))
                        .enter()
                        .append("text")
                        .attr("class","SNPCombinationPieText")
                        .attr("transform",function(d) {                   
                                d.innerRadius = 0;
                                d.outerRadius = self.settings.SNPMouseCombinationGraphPieSize;
                                console.log(pieCombination.centroid(d))
                                return "translate(" + pieCombination.centroid(d) + ")";        
                              })
                        .attr("fill",self.settings.SNPMouseCombinationTextColor)
                        .style("font-size", self.settings.SNPMouseCombinationTextSize)
                        .style("font-weight", self.settings.SNPMouseCombinationTextWeight) 
                        .attr({
                          id: "SNPCombinationHistogramText",
                          x: (self.settings.SNPMouseCombinationGraphPositionX+self.settings.SNPMouseCombinationGraphWidth/2+compareMoveDistance),
                          y: (self.settings.SNPMouseCombinationGraphPositionY-(self.settings.SNPMouseCombinationGraphHeight-self.settings.SNPMouseCombinationGraphTitleSize*2)/2),
                        } )
                        .text(function(d,i){
                          return XAxisName[i];
                        });
                  }
                  
                }
                
                if(self.settings.SNPMouseCombinationGraphType == 'line'){
                  //x轴的比例尺
                  var xScale = d3.scale.ordinal()
                    .domain(d3.range(SNPCombinationData.length))
                    .rangeRoundBands([0, self.settings.SNPMouseCombinationGraphWidth]);
                  //y轴的比例尺
                  var yScale = d3.scale.linear()
                    .domain([0,d3.max(SNPCombinationData)])
                    .range([self.settings.SNPMouseCombinationGraphHeight, 0]);
                    
                  //定义x轴
                  var XAxisName=self.SNPGraphData[0][0]
                  var ticksValues=[]
                  for(var i=0;i<parameterNum;i++){
                    ticksValues.push(i)
                  }                  
                  var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .tickValues(ticksValues)
                    .tickFormat(function(d){return XAxisName[d];})
                    .orient("bottom");
                  //定义y轴
                  var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left");
                    
                  var combinationStartX=self.settings.SNPMouseCombinationGraphPositionX
                  //添加x轴
                  svg.append("g")
                    .attr("class","SNPCombinationAxis")
                    .attr("transform","translate(" + (combinationStartX-6+20) + "," + (self.settings.SNPMouseCombinationGraphPositionY+20) + ")")
                    .attr({id:"SNPCombinationAxisX"})
                    .attr("fill","black")
                    .call(xAxis); 
                  //
                  //添加y轴
                  svg.append("g")
                    .attr("class","SNPCombinationAxis")
                    .attr("transform","translate(" + (combinationStartX+20) + "," + (self.settings.SNPMouseCombinationGraphPositionY-self.settings.SNPMouseCombinationGraphHeight+20) + ")")
                    .attr("id","SNPCombinationAxisY")
                    .attr("fill","black")
                    .call(yAxis);
                  
                  var line = d3.svg.line()
                      .x(function(d) {
                        return xScale(d.x)
                      })
                      .y(function(d) {
                        return yScale(d.y);
                      })
                      // 选择线条的类型
                      .interpolate(self.settings.SNPMouseCombinationGraphLineType);
                  
                  var SNPCombinationDataLine=[]
                  
                  for(var i=0;i<SNPCombinationData.length;i++){
                    SNPCombinationDataLine.push({x:i,y:SNPCombinationData[i]})
                  }
                              
                  svg.append("g")
                      .attr("class", "SNPCombinationLine")
                      .append("path")
                      .attr("id", "SNPCombinationLine")
                      .attr("d",line(SNPCombinationDataLine))
                      .attr("fill", "none")
                      .attr("transform", "translate(" +  (combinationStartX+self.settings.SNPMouseCombinationGraphLinePositionCorrectX)+ "," + (self.settings.SNPMouseCombinationGraphPositionY-self.settings.SNPMouseCombinationGraphHeight+20) + ")")
                      .style("stroke", self.settings.SNPMouseCombinationGraphLineColor)
                      .style("stroke-width", self.settings.SNPMouseCombinationGraphLineWidth);
                    
                  if(self.settings.SNPMouseCombinationGraphLinePoint == true){
                    var color20 = d3.scale.category20()
                    var fillLinePoint = d3.scale.ordinal()
                                          .range(self.settings.SNPMouseCombinationGraphLinePointColor);
                                          
                    svg.append("g")
                        .attr("class", "SNPCombinationLinePoint")
                        .selectAll('circle')
                          .data(SNPCombinationDataLine)
                          .enter()
                          .append('circle')
                          .attr("id", "SNPCombinationLinePoint")
                          .attr('r', self.settings.SNPMouseCombinationGraphLinePointSize)
                          .attr('cx', function(d) {
                                return xScale(d.x);
                              })
                          .attr('cy', function(d) {
                                return yScale(d.y);
                              })
                          .attr('transform', function(d){
                            return 'translate(' + (combinationStartX+self.settings.SNPMouseCombinationGraphLinePositionCorrectX) + ',' + (self.settings.SNPMouseCombinationGraphPositionY-self.settings.SNPMouseCombinationGraphHeight+20) + ')'
                          })
                          .attr("stroke",function (d,i) {
                            if(self.settings.SNPMouseCombinationGraphLinePointStroke == true){
                              return self.settings.SNPMouseCombinationGraphLinePointStrokeColor;
                            }else{
                              return "none";
                            }
                          })
                          .attr("stroke-width",function (d,i) {
                                                      if(self.settings.SNPMouseCombinationGraphLinePointStroke == true){
                                                        return self.settings.SNPMouseCombinationGraphLinePointStrokeWidth;
                                                      }else{
                                                        return "none";
                                                      }
                                                    })
                          .attr("opacity",self.settings.SNPMouseCombinationGraphLinePointOpacity)
                          .attr('fill', function (d,i) {
                            if(self.settings.SNPMouseCombinationGraphLinePointAutoColor == true){
                              return color20(i);
                            }else{
                              return fillLinePoint(i);
                            }
                          });
                  }
                      
    
                  if(self.settings.SNPMouseCombinationTextDisplay == true){
                    //添加文字元素
                    var texts = svg.selectAll(".SNPCombinationLineText")
                        .data(SNPCombinationData)
                        .enter()
                        .append("text")
                        .attr("class","SNPCombinationLineText")
                        .attr("transform","translate(" +combinationStartX+ "," + self.settings.SNPMouseCombinationGraphPositionY + ")")
                        .attr("fill",self.settings.SNPMouseCombinationTextColor)
                        .style("font-size", self.settings.SNPMouseCombinationTextSize)
                        .style("font-weight", self.settings.SNPMouseCombinationTextWeight) 
                        .attr({
                          id: "SNPCombinationLineText",
                          x: function(d,i){
                                            return xScale(i) +self.settings.SNPMouseCombinationTextPositionCorrectX;
                                          }
                        } )
                        .attr("y",function(d){
                          return yScale(d)-self.settings.SNPMouseCombinationGraphHeight+self.settings.SNPMouseCombinationTextPositionCorrectY;
                        })
                        .text(function(d){
                          return d;
                        });
                  }
                  
//                  
                }
                
              }
                        
              if(self.settings.SNPMouseCombinationImageDisplay == true){
//                console.log(self.SNP[0][0].des)
                svg.append("text")
                  .attr("class","SNPCombinationImageTitle")
                  .attr({
                    id: "SNPCombinationImageTitle",
                    x: self.settings.SNPMouseCombinationImagePositionX+37
                  } )
                  .attr("y",(self.settings.SNPMouseCombinationImagePositionY-20))
                  .style("font-size", self.settings.SNPMouseCombinationImageTitleSize)
                  .style("font-weight", self.settings.SNPMouseCombinationImageTitleWeight) 
                  .attr("fill", self.settings.SNPMouseCombinationImageTitleColor)
                  .text(self.settings.SNPMouseCombinationImageTitle+" ("+self.SNP[0][firstSNP].des+")");
                
                 svg.append("image")
                      .attr("id","SNPCombinationImage")
                     .attr("xlink:href", self.SNP[0][firstSNP].image)
                      .attr('x', self.settings.SNPMouseCombinationImagePositionX)
                      .attr('y', self.settings.SNPMouseCombinationImagePositionY)
                      .attr('width', self.settings.SNPMouseCombinationImageWidth)
                      .attr('height', self.settings.SNPMouseCombinationImageHeight)
              }
              
                function SNPCombinationMouseOver(d, i) {
                  d3.selectAll("#" + "SNPCombinationHistogramRect").remove();
                  d3.selectAll("#" + "SNPCombinationHistogramText").remove();
                  d3.selectAll("#" + "SNPCombinationAxisX" ).remove();
                  d3.selectAll("#" + "SNPCombinationAxisY").remove();
                  d3.selectAll("#" + "SNPCombinationPieText").remove();
                  d3.selectAll("#" + "SNPCombinationPie").remove();
                  d3.selectAll("#" + "SNPCombinationLine").remove();
                  d3.selectAll("#" + "SNPCombinationLineText").remove();
                  d3.selectAll("#" + "SNPCombinationLinePoint").remove();
                  d3.selectAll("#" + "SNPCombinationImage").remove();
                  d3.selectAll("#" + "SNPCombinationGraphTitle").remove();
                  d3.selectAll("#" + "SNPCombinationImageTitle").remove();
                  
                  var drawGraph=0
                  var parameterNum=0;
                  parameterNum=self.SNPGraphData[0][0].length
                  
                  if(d.snp_index != undefined ){
                      var SNPCombinationData=self.SNPGraphData[0][d.snp_index]
                      drawGraph=1
                  }
                  
//                  console.log(SNPCombinationData)
//                  var padding = {left:30, right:60, top:20, bottom:40};
                  if(self.settings.SNPMouseCombinationGraphDisplay == true){
                    
                    svg.append("text")
                      .attr("class","SNPCombinationGraphTitle")
                      .attr({
                        id: "SNPCombinationGraphTitle",
                        x: self.settings.SNPMouseCombinationGraphPositionX-20
                      } )
                      .attr("y",(self.settings.SNPMouseCombinationGraphPositionY-self.settings.SNPMouseCombinationGraphHeight-10))
                      .style("font-size", self.settings.SNPMouseCombinationGraphTitleSize)
                      .style("font-weight", self.settings.SNPMouseCombinationGraphTitleWeight) 
                      .attr("fill", self.settings.SNPMouseCombinationGraphTitleColor)
                      .text(self.settings.SNPMouseCombinationGraphTitle+" ("+d.snp_des+")");

                    
                    if(self.settings.SNPMouseCombinationGraphType == 'histogram' && drawGraph == 1){
                      //x轴的比例尺
                      var xScale = d3.scale.ordinal()
                        .domain(d3.range(SNPCombinationData.length))
                        .rangeRoundBands([0, self.settings.SNPMouseCombinationGraphWidth]);
                      //y轴的比例尺
                      var yScale = d3.scale.linear()
                        .domain([0,d3.max(SNPCombinationData)])
                        .range([self.settings.SNPMouseCombinationGraphHeight, 0]);
                        
                      //定义x轴
                      var XAxisName=self.SNPGraphData[0][0]
                      var ticksValues=[]
                      for(var i=0;i<parameterNum;i++){
                        ticksValues.push(i)
                      }
                      var xAxis = d3.svg.axis()
                        .scale(xScale)
                        .tickValues(ticksValues)
                        .tickFormat(function(d){return XAxisName[d];})
                        .orient("bottom");
                      //定义y轴
                      var yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left");
                      //矩形之间的空白
                      var rectPadding =self.settings.SNPMouseCombinationGraphHistogramPadding;
                      var combinationStartX=self.settings.SNPMouseCombinationGraphPositionX
                      //添加矩形元素
                      var rects = svg.append("g")
                          .attr("class", "SNPCombinationHistogramRect")
                          .selectAll(".SNPCombinationHistogramRect")
                          .data(SNPCombinationData)
                          .enter()
                          .append("rect")
                          .attr("class","SNPCombinationHistogramRect")
                          .attr("transform","translate(" + combinationStartX + "," + self.settings.SNPMouseCombinationGraphPositionY + ")")
                          .attr("fill",self.settings.SNPMouseCombinationGraphHistogramBarColor)
                          .attr({
                          id: "SNPCombinationHistogramRect",
                          x: function(d,i){
                            return xScale(i) + rectPadding/2+self.settings.SNPMouseCombinationGraphHistogramPositionCorrectX;
                          } })
                          .attr("y",function(d){
                            return yScale(d)-self.settings.SNPMouseCombinationGraphHeight+20;
                          })
                          .attr("width", xScale.rangeBand() - rectPadding )
                          .attr("height", function(d){
                            //console.log(yScale(d))
                            return self.settings.SNPMouseCombinationGraphHeight - yScale(d);
                          });

                      if(self.settings.SNPMouseCombinationTextDisplay == true){
                        //添加文字元素
                        var texts = svg.selectAll(".SNPCombinationHistogramText")
                            .data(SNPCombinationData)
                            .enter()
                            .append("text")
                            .attr("class","SNPCombinationHistogramText")
                            .attr("transform","translate(" +combinationStartX+ "," + self.settings.SNPMouseCombinationGraphPositionY + ")")
                            .attr("fill",self.settings.SNPMouseCombinationTextColor)
                            .style("font-size", self.settings.SNPMouseCombinationTextSize)
                            .style("font-weight", self.settings.SNPMouseCombinationTextWeight) 
                            .attr({
                              id: "SNPCombinationHistogramText",
                              x: function(d,i){
                                                return xScale(i) + rectPadding/4+self.settings.SNPMouseCombinationTextPositionCorrectX;
                                              }
                            } )
                            .attr("y",function(d){
                              return yScale(d)-self.settings.SNPMouseCombinationGraphHeight+self.settings.SNPMouseCombinationTextPositionCorrectY;
                            })
                            .text(function(d){
                              return d;
                            });
                      }
                      
    //                  //添加x轴
                      svg.append("g")
                        .attr("class","SNPCombinationAxis")
                        .attr("transform","translate(" + (combinationStartX-6+20) + "," + (self.settings.SNPMouseCombinationGraphPositionY+20) + ")")
                        .attr({id:"SNPCombinationAxisX"})
                        .attr("fill","black")
                        .call(xAxis); 
    //
    //                  //添加y轴
                      svg.append("g")
                        .attr("class","SNPCombinationAxis")
                        .attr("transform","translate(" + (combinationStartX+20) + "," + (self.settings.SNPMouseCombinationGraphPositionY-self.settings.SNPMouseCombinationGraphHeight+20) + ")")
                        .attr("id","SNPCombinationAxisY")
                        .attr("fill","black")
                        .call(yAxis);
                    }
                    
                    if(self.settings.SNPMouseCombinationGraphType == 'pie' && drawGraph == 1){
                      
                       var XAxisName=self.SNPGraphData[0][0]
                                      
                       var pieCombination =d3.svg.arc()
                            .innerRadius(0)
                            .outerRadius(self.settings.SNPMouseCombinationGraphPieSize);
                        
                        var pie=d3.layout.pie().sort(null)
                                .value(function(d){return d;})
                        
    //                    console.log(pie(SNPCombinationData))
                        
                        var color20 = d3.scale.category20()
                        var fillPie = d3.scale.ordinal()
                        .range(self.settings.SNPMouseCombinationGraphPieColor);
                        
                        svg.append("g")
                            .attr("class", "SNPCombinationPie")
                            .selectAll("path")
                            .data(pie(SNPCombinationData))
                            .enter()
                            .append("a")
                            .append("path")
                            .attr("id", "SNPCombinationPie")
                            .attr("fill", function(d,i){
                              if(self.settings.SNPMouseCombinationGraphPieAutoColor == true){
                                return color20(i);
                              }else{
                                return  fillPie(i);
                              }
                            })
                            .attr("transform", "translate(" +  (self.settings.SNPMouseCombinationGraphPositionX+self.settings.SNPMouseCombinationGraphWidth/2+compareMoveDistance)+ "," + (self.settings.SNPMouseCombinationGraphPositionY-(self.settings.SNPMouseCombinationGraphHeight-self.settings.SNPMouseCombinationGraphTitleSize*2)/2) + ")")
                            .attr("d",pieCombination)
                            .style("stroke", function(d){
                                                if(self.settings.SNPMouseCombinationGraphPieStroke == true){
                                                  return self.settings.SNPMouseCombinationGraphPieStrokeColor;
                                                }else{
                                                  return "";
                                                }
                                              })
                            .style("stroke-width", function(d){
                                                      if(self.settings.SNPMouseCombinationGraphPieStroke == true){
                                                        return self.settings.SNPMouseCombinationGraphPieStrokeWidth;
                                                      }else{
                                                        return "0px";
                                                      }
                                                    })
                            .style("opacity",self.settings.SNPMouseCombinationGraphPieOpacity);
                      
                      if(self.settings.SNPMouseCombinationTextDisplay == true){
                        //添加文字元素
                        var texts = svg.selectAll(".SNPCombinationPieText")
                            .data(pie(SNPCombinationData))
                            .enter()
                            .append("text")
                            .attr("class","SNPCombinationPieText")
                            .attr("transform",function(d) {                   
                                    d.innerRadius = 0;
                                    d.outerRadius = self.settings.SNPMouseCombinationGraphPieSize;
                                    console.log(pieCombination.centroid(d))
                                    return "translate(" + pieCombination.centroid(d) + ")";        
                                  })
                            .attr("fill",self.settings.SNPMouseCombinationTextColor)
                            .style("font-size", self.settings.SNPMouseCombinationTextSize)
                            .style("font-weight", self.settings.SNPMouseCombinationTextWeight) 
                            .attr({
                              id: "SNPCombinationHistogramText",
                              x: (self.settings.SNPMouseCombinationGraphPositionX+self.settings.SNPMouseCombinationGraphWidth/2+compareMoveDistance),
                              y: (self.settings.SNPMouseCombinationGraphPositionY-(self.settings.SNPMouseCombinationGraphHeight-self.settings.SNPMouseCombinationGraphTitleSize*2)/2),
                            } )
                            .text(function(d,i){
                              return XAxisName[i];
                            });
                      }
                    }
                    
                    if(self.settings.SNPMouseCombinationGraphType == 'line' && drawGraph == 1){
                      var xScale = d3.scale.ordinal()
                        .domain(d3.range(SNPCombinationData.length))
                        .rangeRoundBands([0, self.settings.SNPMouseCombinationGraphWidth]);
                      //y轴的比例尺
                      var yScale = d3.scale.linear()
                        .domain([0,d3.max(SNPCombinationData)])
                        .range([self.settings.SNPMouseCombinationGraphHeight, 0]);
                        
                      //定义x轴
                      var XAxisName=self.SNPGraphData[0][0]
                      var ticksValues=[]
                      for(var i=0;i<parameterNum;i++){
                        ticksValues.push(i)
                      }                      
                      var xAxis = d3.svg.axis()
                        .scale(xScale)
                        .tickValues(ticksValues)
                        .tickFormat(function(d){return XAxisName[d];})
                        .orient("bottom");
                      //定义y轴
                      var yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left");
                        
                      var combinationStartX=self.settings.SNPMouseCombinationGraphPositionX
                      //添加x轴
                      svg.append("g")
                        .attr("class","SNPCombinationAxis")
                        .attr("transform","translate(" + (combinationStartX-6+20) + "," + (self.settings.SNPMouseCombinationGraphPositionY+20) + ")")
                        .attr({id:"SNPCombinationAxisX"})
                        .attr("fill","black")
                        .call(xAxis); 
                      //
                      //添加y轴
                      svg.append("g")
                        .attr("class","SNPCombinationAxis")
                        .attr("transform","translate(" + (combinationStartX+20) + "," + (self.settings.SNPMouseCombinationGraphPositionY-self.settings.SNPMouseCombinationGraphHeight+20) + ")")
                        .attr("id","SNPCombinationAxisY")
                        .attr("fill","black")
                        .call(yAxis);
                      
                      var line = d3.svg.line()
                          .x(function(d) {
                            return xScale(d.x)
                          })
                          .y(function(d) {
                            return yScale(d.y);
                          })
                          // 选择线条的类型
                          .interpolate(self.settings.SNPMouseCombinationGraphLineType);
                      
                      var SNPCombinationDataLine=[]
                      
                      for(var i=0;i<SNPCombinationData.length;i++){
                        SNPCombinationDataLine.push({x:i,y:SNPCombinationData[i]})
                      }
                      
                      svg.append("g")
                          .attr("class", "SNPCombinationLine")
                          .append("path")
                          .attr("id", "SNPCombinationLine")
                          .attr("d",line(SNPCombinationDataLine))
                          .attr("fill", "none")
                          .attr("transform", "translate(" +  (combinationStartX+self.settings.SNPMouseCombinationGraphLinePositionCorrectX)+ "," + (self.settings.SNPMouseCombinationGraphPositionY-self.settings.SNPMouseCombinationGraphHeight+20) + ")")
                          .style("stroke", self.settings.SNPMouseCombinationGraphLineColor)
                          .style("stroke-width", self.settings.SNPMouseCombinationGraphLineWidth);
                        
                      if(self.settings.SNPMouseCombinationGraphLinePoint == true){
                        var color20 = d3.scale.category20()
                        var fillLinePoint = d3.scale.ordinal()
                                              .range(self.settings.SNPMouseCombinationGraphLinePointColor);
                                              
                        svg.append("g")
                            .attr("class", "SNPCombinationLinePoint")
                            .selectAll('circle')
                              .data(SNPCombinationDataLine)
                              .enter()
                              .append('circle')
                              .attr("id", "SNPCombinationLinePoint")
                              .attr('r', self.settings.SNPMouseCombinationGraphLinePointSize)
                              .attr('cx', function(d) {
                                    return xScale(d.x);
                                  })
                              .attr('cy', function(d) {
                                    return yScale(d.y);
                                  })
                              .attr('transform', function(d){
                                return 'translate(' + (combinationStartX+self.settings.SNPMouseCombinationGraphLinePositionCorrectX) + ',' + (self.settings.SNPMouseCombinationGraphPositionY-self.settings.SNPMouseCombinationGraphHeight+20) + ')'
                              })
                              .attr("stroke",function (d,i) {
                                if(self.settings.SNPMouseCombinationGraphLinePointStroke == true){
                                  return self.settings.SNPMouseCombinationGraphLinePointStrokeColor;
                                }else{
                                  return "none";
                                }
                              })
                              .attr("stroke-width",function (d,i) {
                                                          if(self.settings.SNPMouseCombinationGraphLinePointStroke == true){
                                                            return self.settings.SNPMouseCombinationGraphLinePointStrokeWidth;
                                                          }else{
                                                            return "none";
                                                          }
                                                        })
                              .attr("opacity",self.settings.SNPMouseCombinationGraphLinePointOpacity)
                              .attr('fill', function (d,i) {
                                if(self.settings.SNPMouseCombinationGraphLinePointAutoColor == true){
                                  return color20(i);
                                }else{
                                  return fillLinePoint(i);
                                }
                              });
                      }
                          
        
                      if(self.settings.SNPMouseCombinationTextDisplay == true){
                        //添加文字元素
                        var texts = svg.selectAll(".SNPCombinationLineText")
                            .data(SNPCombinationData)
                            .enter()
                            .append("text")
                            .attr("class","SNPCombinationLineText")
                            .attr("transform","translate(" +combinationStartX+ "," + self.settings.SNPMouseCombinationGraphPositionY + ")")
                            .attr("fill",self.settings.SNPMouseCombinationTextColor)
                            .style("font-size", self.settings.SNPMouseCombinationTextSize)
                            .style("font-weight", self.settings.SNPMouseCombinationTextWeight) 
                            .attr({
                              id: "SNPCombinationLineText",
                              x: function(d,i){
                                                return xScale(i) +self.settings.SNPMouseCombinationTextPositionCorrectX;
                                              }
                            } )
                            .attr("y",function(d){
                              return yScale(d)-self.settings.SNPMouseCombinationGraphHeight+self.settings.SNPMouseCombinationTextPositionCorrectY;
                            })
                            .text(function(d){
                              return d;
                            });
                      }
                    }

                  }
                            
                  if(self.settings.SNPMouseCombinationImageDisplay == true){
                    svg.append("text")
                      .attr("class","SNPCombinationImageTitle")
                      .attr({
                        id: "SNPCombinationImageTitle",
                        x: self.settings.SNPMouseCombinationImagePositionX+37
                      } )
                      .attr("y",(self.settings.SNPMouseCombinationImagePositionY-20))
                      .style("font-size", self.settings.SNPMouseCombinationImageTitleSize)
                      .style("font-weight", self.settings.SNPMouseCombinationImageTitleWeight) 
                      .attr("fill", self.settings.SNPMouseCombinationImageTitleColor)
                      .text(self.settings.SNPMouseCombinationImageTitle+" ("+d.snp_des+")");
                    
                     svg.append("image")
                          .attr("id","SNPCombinationImage")
                         .attr("xlink:href", d.snp_image)
                          .attr('x', self.settings.SNPMouseCombinationImagePositionX)
                          .attr('y', self.settings.SNPMouseCombinationImagePositionY)
                          .attr('width', self.settings.SNPMouseCombinationImageWidth)
                          .attr('height', self.settings.SNPMouseCombinationImageHeight)
                  }
                
                if(self.settings.SNPMouseOverDisplay==true){
                  if(self.ticksOffset != undefined){
                    SNPMouseOnTooltip.html(function(){if(self.settings.SNPMouseOverTooltipsSetting == "style1"){
                      return "chr : "+d.snp_chr+"<br>pos : "+(parseInt(d.snp_pos)+self.ticksOffset)+"<br>pvalue : "+d.snp_val+" <br>des : "+d.snp_des+""
                    }else if (self.settings.SNPMouseOverTooltipsSetting == "custom") {
                      return self.settings.SNPMouseOverTooltipsHtml+d.snp_html
                    }else if (self.settings.SNPMouseOverTooltipsSetting == "style2"){
                      return "chr : "+d.snp_chr+"<br>pos : "+(parseInt(d.snp_pos)+self.ticksOffset)+"<br># of patients : "+d.snp_val+" <br>AA : "+d.snp_des+""
                    }
                  }) 
                      .style("left", (d3.event.pageX) + "px")
                      .style("top", (d3.event.pageY + 20) + "px")
                      .style("position", self.settings.SNPMouseOverTooltipsPosition)
                      .style("background-color", self.settings.SNPMouseOverTooltipsBackgroundColor)
                      .style("border-style", self.settings.SNPMouseOverTooltipsBorderStyle)
                      .style("border-width", self.settings.SNPMouseOverTooltipsBorderWidth)
                      .style("padding", self.settings.SNPMouseOverTooltipsPadding)
                      .style("border-radius", self.settings.SNPMouseOverTooltipsBorderRadius)
                      .style("opacity", self.settings.SNPMouseOverTooltipsOpacity)
                    d3.select(this)
                      .style("r",  function(d,i) { if(self.settings.SNPMouseOverCircleSize=="none"){return "";}else{return self.settings.SNPMouseOverCircleSize;} })
                      .style("fill",  function(d,i) { if(self.settings.SNPMouseOverColor=="none"){return "";}else{return self.settings.SNPMouseOverColor;} })
                      .style("opacity",  function(d,i) { if(self.settings.SNPMouseOverCircleOpacity=="none"){return "";}else{return self.settings.SNPMouseOverCircleOpacity;} })
                      .style("stroke", function(d,i) { if(self.settings.SNPMouseOverCircleStrokeColor=="none"){return "";}else{return self.settings.SNPMouseOverCircleStrokeColor;} })
                      .style("stroke-width", function(d,i) { if(self.settings.SNPMouseOverCircleStrokeWidth=="none"){return "";}else{return self.settings.SNPMouseOverCircleStrokeWidth;} });            
                      
                  }else{
                    SNPMouseOnTooltip.html(function(){if(self.settings.SNPMouseOverTooltipsSetting == "style1"){
                      return "chr : "+d.snp_chr+"<br>pos : "+d.snp_pos+"<br>pvalue : "+d.snp_val+" <br>des : "+d.snp_des+""
                    }else if (self.settings.SNPMouseOverTooltipsSetting == "custom") {
                      return self.settings.SNPMouseOverTooltipsHtml+d.snp_html
                    }else if (self.settings.SNPMouseOverTooltipsSetting == "style2"){
                      return "chr : "+d.snp_chr+"<br>pos : "+(parseInt(d.snp_pos)+self.ticksOffset)+"<br># of patients : "+d.snp_val+" <br>AA : "+d.snp_des+""
                    }
                  })
                      .style("left", (d3.event.pageX) + "px")
                      .style("top", (d3.event.pageY + 20) + "px")
                      .style("position", self.settings.SNPMouseOverTooltipsPosition)
                      .style("background-color", self.settings.SNPMouseOverTooltipsBackgroundColor)
                      .style("border-style", self.settings.SNPMouseOverTooltipsBorderStyle)
                      .style("border-width", self.settings.SNPMouseOverTooltipsBorderWidth)
                      .style("padding", self.settings.SNPMouseOverTooltipsPadding)
                      .style("border-radius", self.settings.SNPMouseOverTooltipsBorderRadius)
                      .style("opacity", self.settings.SNPMouseOverTooltipsOpacity)
                    d3.select(this)
                      .style("r",  function(d,i) { if(self.settings.SNPMouseOverCircleSize=="none"){return "";}else{return self.settings.SNPMouseOverCircleSize;} })
                      .style("fill",  function(d,i) { if(self.settings.SNPMouseOverColor=="none"){return "";}else{return self.settings.SNPMouseOverColor;} })
                      .style("opacity",  function(d,i) { if(self.settings.SNPMouseOverCircleOpacity=="none"){return "";}else{return self.settings.SNPMouseOverCircleOpacity;} })
                      .style("stroke", function(d,i) { if(self.settings.SNPMouseOverCircleStrokeColor=="none"){return "";}else{return self.settings.SNPMouseOverCircleStrokeColor;} })
                      .style("stroke-width", function(d,i) { if(self.settings.SNPMouseOverCircleStrokeWidth=="none"){return "";}else{return self.settings.SNPMouseOverCircleStrokeWidth;} });            
                      
                  }
                  
                  }
                } 
                
              SNPMouseOn.on("mouseover",SNPCombinationMouseOver)             
              
            }else{
                if(self.settings.SNPMouseOverDisplay==true){
                                SNPMouseOn.on("mouseover",function(d){
                                      
                                      if(self.ticksOffset !=undefined){
                                        SNPMouseOnTooltip.html(function(){if(self.settings.SNPMouseOverTooltipsSetting == "style1"){
                                            return "chr : "+d.snp_chr+"<br>pos : "+(parseInt(d.snp_pos)+self.ticksOffset)+"<br>pvalue : "+d.snp_val+" <br>des : "+d.snp_des+""
                                          }else if (self.settings.SNPMouseOverTooltipsSetting == "custom") {
                                            return self.settings.SNPMouseOverTooltipsHtml+d.snp_html
                                          }else if (self.settings.SNPMouseOverTooltipsSetting == "style2"){
                      return "chr : "+d.snp_chr+"<br>pos : "+(parseInt(d.snp_pos)+self.ticksOffset)+"<br># of patients : "+d.snp_val+" <br>AA : "+d.snp_des+""
                    }
                                        })
                                        .style("left", (d3.event.pageX) + "px")
                                        .style("top", (d3.event.pageY + 20) + "px")
                                        .style("position", self.settings.SNPMouseOverTooltipsPosition)
                                        .style("background-color", self.settings.SNPMouseOverTooltipsBackgroundColor)
                                        .style("border-style", self.settings.SNPMouseOverTooltipsBorderStyle)
                                        .style("border-width", self.settings.SNPMouseOverTooltipsBorderWidth)
                                        .style("padding", self.settings.SNPMouseOverTooltipsPadding)
                                        .style("border-radius", self.settings.SNPMouseOverTooltipsBorderRadius)
                                        .style("opacity", self.settings.SNPMouseOverTooltipsOpacity)
                                      d3.select(this)
                                        .style("r",  function(d,i) { if(self.settings.SNPMouseOverCircleSize=="none"){return "";}else{return self.settings.SNPMouseOverCircleSize;} })
                                        .style("fill",  function(d,i) { if(self.settings.SNPMouseOverColor=="none"){return "";}else{return self.settings.SNPMouseOverColor;} })
                                        .style("opacity",  function(d,i) { if(self.settings.SNPMouseOverCircleOpacity=="none"){return "";}else{return self.settings.SNPMouseOverCircleOpacity;} })
                                        .style("stroke", function(d,i) { if(self.settings.SNPMouseOverCircleStrokeColor=="none"){return "";}else{return self.settings.SNPMouseOverCircleStrokeColor;} })
                                        .style("stroke-width", function(d,i) { if(self.settings.SNPMouseOverCircleStrokeWidth=="none"){return "";}else{return self.settings.SNPMouseOverCircleStrokeWidth;} });
                                      }else{
                                        SNPMouseOnTooltip.html(function(){if(self.settings.SNPMouseOverTooltipsSetting == "style1"){
                                            return "chr : "+d.snp_chr+"<br>pos : "+d.snp_pos+"<br>pvalue : "+d.snp_val+" <br>des : "+d.snp_des+""
                                          }else if (self.settings.SNPMouseOverTooltipsSetting == "custom") {
                                            return self.settings.SNPMouseOverTooltipsHtml+d.snp_html
                                          }else if (self.settings.SNPMouseOverTooltipsSetting == "style2"){
                      return "chr : "+d.snp_chr+"<br>pos : "+(parseInt(d.snp_pos)+self.ticksOffset)+"<br># of patients : "+d.snp_val+" <br>AA : "+d.snp_des+""
                    }
                                        })
                                        .style("left", (d3.event.pageX) + "px")
                                        .style("top", (d3.event.pageY + 20) + "px")
                                        .style("position", self.settings.SNPMouseOverTooltipsPosition)
                                        .style("background-color", self.settings.SNPMouseOverTooltipsBackgroundColor)
                                        .style("border-style", self.settings.SNPMouseOverTooltipsBorderStyle)
                                        .style("border-width", self.settings.SNPMouseOverTooltipsBorderWidth)
                                        .style("padding", self.settings.SNPMouseOverTooltipsPadding)
                                        .style("border-radius", self.settings.SNPMouseOverTooltipsBorderRadius)
                                        .style("opacity", self.settings.SNPMouseOverTooltipsOpacity)
                                            d3.select(this)
                                        .style("r",  function(d,i) { if(self.settings.SNPMouseOverCircleSize=="none"){return "";}else{return self.settings.SNPMouseOverCircleSize;} })
                                        .style("fill",  function(d,i) { if(self.settings.SNPMouseOverColor=="none"){return "";}else{return self.settings.SNPMouseOverColor;} })
                                        .style("opacity",  function(d,i) { if(self.settings.SNPMouseOverCircleOpacity=="none"){return "";}else{return self.settings.SNPMouseOverCircleOpacity;} })
                                        .style("stroke", function(d,i) { if(self.settings.SNPMouseOverCircleStrokeColor=="none"){return "";}else{return self.settings.SNPMouseOverCircleStrokeColor;} })
                                        .style("stroke-width", function(d,i) { if(self.settings.SNPMouseOverCircleStrokeWidth=="none"){return "";}else{return self.settings.SNPMouseOverCircleStrokeWidth;} });

                                      }
                                       
                                })
                            }
                            
   
            }
            //combinationSNP

//            if(self.settings.SNPMouseOverDisplay==true){
//                SNPMouseOn.on("mouseover",function(d){
//                      SNPMouseOnTooltip.html(self.settings.SNPMouseOverTooltipsHtml01+d.snp_chr+self.settings.SNPMouseOverTooltipsHtml02+d.snp_pos+self.settings.SNPMouseOverTooltipsHtml03+d.snp_val+self.settings.SNPMouseOverTooltipsHtml04+d.snp_des+self.settings.SNPMouseOverTooltipsHtml05)
//                       .style("left", (d3.event.pageX) + "px")
//                       .style("top", (d3.event.pageY + 20) + "px")
//                       .style("position", self.settings.SNPMouseOverTooltipsPosition)
//                       .style("background-color", self.settings.SNPMouseOverTooltipsBackgroundColor)
//                       .style("border-style", self.settings.SNPMouseOverTooltipsBorderStyle)
//                       .style("border-width", self.settings.SNPMouseOverTooltipsBorderWidth)
//                       .style("padding", self.settings.SNPMouseOverTooltipsPadding)
//                       .style("border-radius", self.settings.SNPMouseOverTooltipsBorderRadius)
//                       .style("opacity", self.settings.SNPMouseOverTooltipsOpacity)
//                    d3.select(this)
//                       .style("r",  function(d,i) { if(self.settings.SNPMouseOverCircleSize=="none"){return "";}else{return self.settings.SNPMouseOverCircleSize;} })
//                       .style("fill",  function(d,i) { if(self.settings.SNPMouseOverColor=="none"){return "";}else{return self.settings.SNPMouseOverColor;} })
//                       .style("opacity",  function(d,i) { if(self.settings.SNPMouseOverCircleOpacity=="none"){return "";}else{return self.settings.SNPMouseOverCircleOpacity;} })
//                       .style("stroke", function(d,i) { if(self.settings.SNPMouseOverCircleStrokeColor=="none"){return "";}else{return self.settings.SNPMouseOverCircleStrokeColor;} })
//                       .style("stroke-width", function(d,i) { if(self.settings.SNPMouseOverCircleStrokeWidth=="none"){return "";}else{return self.settings.SNPMouseOverCircleStrokeWidth;} });
//                })
//            }
            if(self.settings.SNPMouseClickDisplay==true){
                SNPMouseOn.on("click",function(d){
                    d3.select(this)
                       .style("r",  function(d,i) { if(self.settings.SNPMouseClickCircleSize=="none"){return "";}else{return self.settings.SNPMouseClickCircleSize;} })
                       .style("fill",  function(d,i) { if(self.settings.SNPMouseClickColor=="none"){return "";}else{return self.settings.SNPMouseClickColor;} })
                       .style("opacity",  function(d,i) { if(self.settings.SNPMouseClickCircleOpacity=="none"){return "";}else{return self.settings.SNPMouseClickCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SNPMouseClickCircleStrokeColor=="none"){return "";}else{return self.settings.SNPMouseClickCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SNPMouseClickCircleStrokeWidth=="none"){return "";}else{return self.settings.SNPMouseClickCircleStrokeWidth;} });
                    d3.select("#"+d.snp_click_label)
                        .style("opacity", self.settings.SNPMouseClickTextOpacity)
                        .style("fill", self.settings.SNPMouseClickTextColor)
                        .style("font-size", self.settings.SNPMouseClickTextSize)
                        .attr("x", d.x+self.settings.SNPMouseClickTextPostionX)
                        .attr("y", d.y+self.settings.SNPMouseClickTextPostionY);
                })
            }

            if(self.settings.SNPMouseClickTextDrag==true){
                svg.selectAll("text.dragText").call(drag);
            }

            if(self.settings.SNPMouseDownDisplay==true){
               SNPMouseOn.on("mousedown",function(d){
                   d3.select(this)
                       .style("r", function(d,i) { if(self.settings.SNPMouseDownCircleSize=="none"){return "";}else{return self.settings.SNPMouseDownCircleSize;} })
                       .style("fill", function(d,i) { if(self.settings.SNPMouseDownColor=="none"){return "";}else{return self.settings.SNPMouseDownColor;} })
                       .style("opacity", function(d,i) { if(self.settings.SNPMouseDownCircleOpacity=="none"){return "";}else{return self.settings.SNPMouseDownCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SNPMouseDownCircleStrokeColor=="none"){return "";}else{return self.settings.SNPMouseDownCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SNPMouseDownCircleStrokeWidth=="none"){return "";}else{return self.settings.SNPMouseDownCircleStrokeWidth;} });
               })
            }
            if(self.settings.SNPMouseEnterDisplay==true){
               SNPMouseOn.on("mouseenter",function(d){
                   d3.select(this)
                       .style("r", function(d,i) { if(self.settings.SNPMouseEnterCircleSize=="none"){return "";}else{return self.settings.SNPMouseEnterCircleSize;} })
                       .style("fill", function(d,i) { if(self.settings.SNPMouseEnterColor=="none"){return "";}else{return self.settings.SNPMouseEnterColor;} })
                       .style("opacity", function(d,i) { if(self.settings.SNPMouseEnterCircleOpacity=="none"){return "";}else{return self.settings.SNPMouseEnterCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SNPMouseEnterCircleStrokeColor=="none"){return "";}else{return self.settings.SNPMouseEnterCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SNPMouseEnterCircleStrokeWidth=="none"){return "";}else{return self.settings.SNPMouseEnterCircleStrokeWidth;} });
               })
            }
            if(self.settings.SNPMouseLeaveDisplay==true){
               SNPMouseOn.on("mouseleave",function(d){
                   SNPMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .style("r", function(d,i) { if(self.settings.SNPMouseLeaveCircleSize=="none"){return "";}else{return self.settings.SNPMouseLeaveCircleSize;} })
                       .style("fill", function(d,i) { if(self.settings.SNPMouseLeaveColor=="none"){return "";}else{return self.settings.SNPMouseLeaveColor;} })
                       .style("opacity", function(d,i) { if(self.settings.SNPMouseLeaveCircleOpacity=="none"){return "";}else{return self.settings.SNPMouseLeaveCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SNPMouseLeaveCircleStrokeColor=="none"){return "";}else{return self.settings.SNPMouseLeaveCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SNPMouseLeaveCircleStrokeWidth=="none"){return "";}else{return self.settings.SNPMouseLeaveCircleStrokeWidth;} });
               })
            }
            if(self.settings.SNPMouseUpDisplay==true){
               SNPMouseOn.on("mouseup",function(d){
                   d3.select(this)
                       .style("r", function(d,i) { if(self.settings.SNPMouseUpCircleSize=="none"){return "";}else{return self.settings.SNPMouseUpCircleSize;} })
                       .style("fill", function(d,i) { if(self.settings.SNPMouseUpColor=="none"){return "";}else{return self.settings.SNPMouseUpColor;} })
                       .style("opacity", function(d,i) { if(self.settings.SNPMouseUpCircleOpacity=="none"){return "";}else{return self.settings.SNPMouseUpCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SNPMouseUpCircleStrokeColor=="none"){return "";}else{return self.settings.SNPMouseUpCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SNPMouseUpCircleStrokeWidth=="none"){return "";}else{return self.settings.SNPMouseUpCircleStrokeWidth;} });
               })
            }
            if(self.settings.SNPMouseMoveDisplay==true){
               SNPMouseOn.on("mousemove",function(d){
                   d3.select(this)
                       .style("r", function(d,i) { if(self.settings.SNPMouseMoveCircleSize=="none"){return "";}else{return self.settings.SNPMouseMoveCircleSize;} })
                       .style("fill", function(d,i) { if(self.settings.SNPMouseMoveColor=="none"){return "";}else{return self.settings.SNPMouseMoveColor;} })
                       .style("opacity", function(d,i) { if(self.settings.SNPMouseMoveCircleOpacity=="none"){return "";}else{return self.settings.SNPMouseMoveCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SNPMouseMoveCircleStrokeColor=="none"){return "";}else{return self.settings.SNPMouseMoveCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SNPMouseMoveCircleStrokeWidth=="none"){return "";}else{return self.settings.SNPMouseMoveCircleStrokeWidth;} });
                   SNPMouseOnTooltip.style("left", (d3.event.pageX) + "px")
                   .style("top", (d3.event.pageY + 20) + "px");
               })
            }
            if(self.settings.SNPMouseOutDisplay==true){
               SNPMouseOn.on("mouseout",function(d){
                   SNPMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .transition()
                       .duration(self.settings.SNPMouseOutAnimationTime)
                       .style("r", function(d,i) { if(self.settings.SNPMouseOutCircleSize=="none"){return "";}else{return self.settings.SNPMouseOutCircleSize;} })
                       .style("fill", function(d,i) { if(self.settings.SNPMouseOutColor=="none"){return "";}else{return self.settings.SNPMouseOutColor;} })
                       .style("opacity", function(d,i) { if(self.settings.SNPMouseOutCircleOpacity=="none"){return "";}else{return self.settings.SNPMouseOutCircleOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.SNPMouseOutCircleStrokeColor=="none"){return "";}else{return self.settings.SNPMouseOutCircleStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.SNPMouseOutCircleStrokeWidth=="none"){return "";}else{return self.settings.SNPMouseOutCircleStrokeWidth;} });
               });
            }
        }
    }
    
    //LABEL
//     if(self.LABEL.length > 0){
//           labelArray=[];
//           anchorArray=[];
//           tempArc=d3.svg.arc()  // 创建弧形。
//             .innerRadius((innerRadius+outerRadius)/2)  // 内径
//             .outerRadius((innerRadius+outerRadius)/2)

//           function NGCircosLABEL(d) {
//               return self.LABEL[labeli].map(function(v, i) {
//                 var label_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
//                 return {
//                   label_angle: v.pos * label_k + d[self.initGenome[v.chr]].startAngle,
//                   label_val: v.value,
//                   x: tempArc.centroid({startAngle:v.pos * label_k + d[self.initGenome[v.chr]].startAngle,endAngle:v.pos * label_k + d[self.initGenome[v.chr]].startAngle})[0],  //self.snp_value_maxmin(self.SNP[snpi])[0] max
//                   y: tempArc.centroid({startAngle:v.pos * label_k + d[self.initGenome[v.chr]].startAngle,endAngle:v.pos * label_k + d[self.initGenome[v.chr]].startAngle})[1],
//                 };
//               });
//             }
//             function NGCircosLABEL2(d) {
//                 return self.LABEL[labeli].map(function(v, i) {
//                   var label_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
//                   return {
//                     label_angle: 3*Math.PI-(v.pos * label_k + d[self.initGenome[v.chr]].startAngle),
//                     label_val: v.value,
//                     x: tempArc.centroid({startAngle:3*Math.PI-(v.pos * label_k + d[self.initGenome[v.chr]].startAngle),endAngle:3*Math.PI-(v.pos * label_k + d[self.initGenome[v.chr]].startAngle)})[0],  //self.snp_value_maxmin(self.SNP[snpi])[0] max
//                     y: tempArc.centroid({startAngle:3*Math.PI-(v.pos * label_k + d[self.initGenome[v.chr]].startAngle),endAngle:3*Math.PI-(v.pos * label_k + d[self.initGenome[v.chr]].startAngle)})[1],
//                   };
//                 });
//               }
//         function redrawLabels(){
//                 labels
//                   .transition()
//                   .duration(1500)
//                   .attr("x",(d) => d.x)
//                   .attr("y",(d) => d.y);
//                 links
//                 .transition()
//                 .duration(1500)
//                 .attr("x2",(d) => d.x)
//                 .attr("y2",(d) => d.y);
//         }
        
//         for(var labeli=0; labeli<self.LABEL.length; labeli++){
//             self.update_LABELsettings(self.LABELConfig[labeli]);
//             if(drawTime == self.LABELsettings.compareGroup){
//               //console.log(chord.groups())
//                if(self.LABELsettings.compareGroup == 1){
//                 var label_objects = NGCircosLABEL(chord.groups())
//               }else{
//                 var label_objects = NGCircosLABEL2(chord.groups())
//               }
              
//               for(var objecti=0; objecti<label_objects.length;objecti++){
//                 labelArray.push({x: label_objects[objecti].x, y: label_objects[objecti].y, name: label_objects[objecti].label_val, width: 0.0, height: 0.0});
//                 anchorArray.push({x: label_objects[objecti].x, y: label_objects[objecti].y , r: outerRadius-innerRadius});
//               }
//             }                              
//             self.init_LABELsettings();

//         }
        
//         d3.labeler = function () {
//           var labeler = {}, w, h, lab = [], anc = [];

//           var max_move = 5.0,
//             max_angle = 0.5,
//             acc = 0,
//             rej = 0;

//           //weight
//           var weight_label = 30.0,
//             weight_label_anc = 30.0,
//             weight_len = 0.2;

//           energy = function (index) {
//             var m = lab.length,
//               ener = 0,
//               dx = lab[index].x - anc[index].x, //x dist between point and label
//               dy = anc[index].y - lab[index].y, //y dist between point and label
//               dist = Math.sqrt(dx * dx + dy * dy);

//             // penalty for length of leader line
//             if (dist > 0) ener += dist * weight_len;

//             var x21 = lab[index].x,
//               y21 = lab[index].y - lab[index].height + 2.0,
//               x22 = lab[index].x + lab[index].width,
//               y22 = lab[index].y + 2.0;
//             var x11, x12, y11, y12, x_overlap, y_overlap, overlap_area;
//             for (var i = 0; i < m; i++) {
//               if (i != index) {
//                 //label-label overlap
//                 //positions of 4 corners of rect bounding the text
//                 x11 = lab[i].x,
//                 y11 = lab[i].y - lab[i].height + 2.0,
//                 x12 = lab[i].x + lab[i].width,
//                 y12 = lab[i].y + 2.0;
//                 x_overlap = Math.max(0, Math.min(x12, x22) - Math.max(x11, x21));
//                 y_overlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, y21));
//                 overlap_area = x_overlap * y_overlap;
//                 ener += (overlap_area * weight_label);
//               }
//               //label point overlap
//               x11 = anc[i].x - anc[i].r; //x start point
//               y11 = anc[i].y - anc[i].r; //y start point
//               x12 = anc[i].x + anc[i].r; //x end point
//               y12 = anc[i].y + anc[i].r; //y end point
//               x_overlap = Math.max(0, Math.min(x12, x22) - Math.max(x11, x21));
//               y_overlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, y21));
//               overlap_area = x_overlap * y_overlap;
//               ener += (overlap_area * weight_label_anc);
//             }
//             return ener;
//           };
        
//           mcmove = function (currTemp) {
//             var i = Math.floor(Math.random() * lab.length);

//             //save old location of label
// //            var x_old = lab[i].x+Math.tan(label_objects[i].label_angle)*((Math.random() - 0.5) * max_move);
//             var x_old = lab[i].x
//             var y_old = lab[i].y;

//             //old energy
//             var old_energy = energy(i);

//             //move to a new position
            
// //            lab[i].x += (Math.random() - 0.5) * max_move+Math.tan(label_objects[i].label_angle)*((Math.random() - 0.5) * max_move)
//             lab[i].x += (Math.random() - 0.5) * max_move
//             lab[i].y += (Math.random() - 0.5) * max_move
            
//             if (lab[i].x > w) { lab[i].x = x_old; }
//             if (lab[i].x < 0) { lab[i].x = x_old; }
//             if (lab[i].y > h) { lab[i].y = y_old; }
//             if (lab[i].y < 0) { lab[i].y = y_old; }

//             //new energy
//             var new_energy = energy(i);
//             //change in energy
//             var delta_energy = new_energy - old_energy;

//             if (Math.random() < Math.exp(-delta_energy / currTemp)) {
//               // acc += 1;
//               // do nothing, label already at new pos
//             } else {
//               //go back to the old pos
//               lab[i].x = x_old;
//               lab[i].y = y_old;
//               rej += 1;
//             }
//           }

//           coolingTemp = function (currTemp, initialTemp, nsweeps) {
//             return (currTemp - (initialTemp / nsweeps));
//           }
//           labeler.start = function (nsweeps) {
//             //starts simulated annealing
//             var m = lab.length,
//               currTemp = 1.0,
//               initialTemp = 1.0;
//             for (var i = 0; i < nsweeps; i++) {
//               for (var j = 0; j < m; j++) {
//                 mcmove(currTemp);
//               }
//               currTemp = coolingTemp(currTemp, initialTemp, nsweeps);
//             }
//           };
//           labeler.width = function (x) {
//             w = x;
//             return labeler;
//           };
//           labeler.height = function (x) {
//             h = x;
//             return labeler;
//           };
//           labeler.label = function (x) {
//             lab = x;
//             return labeler;
//           };
//           labeler.anchor = function (x) {
//             anc = x;
//             return labeler;
//           };
//           return labeler;
//         };
        
        
//        // console.log(labelArray)
//         //console.log(anchorArray)
//         labels=svg.append("g")
//             .attr("class", "NGCircosLABEL")
//           .selectAll(".label")
//             .data(labelArray)
//             .enter()
//             .append("text")
//             .attr("id", "NGCircosLABEL")
//             .attr("x", (d,i) => {
//                         return d.x;
//                       })
//             .attr("y", (d,i) => {
//                         return d.y;
//                       })
//             .attr('text-anchor','start')
//             .style("opacity", self.LABELsettings.LABELOpacity)
//             .style("font-size", self.LABELsettings.LABELSize)
//             .style("font-weight", self.LABELsettings.LABELWeight) //normal,bold,bolder,lighter,100,200,300,400,500,600,700,800,900
//             .attr("fill", self.LABELsettings.LABELColor)
//             .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")
//             .text((d) => d.name);

        
//         var index = 0;
//         labels.each(function() {
//             labelArray[index].width = this.getBBox().width;
//             labelArray[index].height = this.getBBox().height;
//             index += 1;
//         });
        
//         links = svg.selectAll(".link")
//                   .data(labelArray)
//                   .enter()
//                   .append("line")
//                   .attr("class", "link")
//                   .attr("x1", (d) => d.x)
//                   .attr("y1", (d) => d.y)
//                   .attr("x2", (d) => d.x)
//                   .attr("y2", (d) => d.y)
//                   .attr("stroke-width", 0.2)
//                   .attr("stroke", "#6f6f6f")
//                   .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
            
//         d3.labeler()
//                   .label(labelArray)
//                   .anchor(anchorArray)
//                   .width(self.settings.svgWidth)
//                   .height(self.settings.svgHeight)
//                   .start(2000);
//         redrawLabels();
//     }

    //LABEL

    if(self.LINK.length > 0){
            function NGCircosLINK(d) {
              return self.LINK[linki].map(function(v, i) {
                var start_k = (d[self.initGenome[v.g1chr]].endAngle - d[self.initGenome[v.g1chr]].startAngle) / d[self.initGenome[v.g1chr]].value;
                var end_k = (d[self.initGenome[v.g2chr]].endAngle - d[self.initGenome[v.g2chr]].startAngle) / d[self.initGenome[v.g2chr]].value;
                return {
                  link_angle1: (v.g1start/2+v.g1end/2) * start_k + d[self.initGenome[v.g1chr]].startAngle,
                  link_angle2: (v.g2start/2+v.g2end/2) * end_k + d[self.initGenome[v.g2chr]].startAngle,
                  link_label1: v.g1name,
                  link_label2: v.g2name,
                  link_pair: v.fusion,
                  link_width: self.LINKsettings.LinkWidth,
                  link_X1: (0 + Math.sin((v.g1start/2+v.g1end/2) * start_k + d[self.initGenome[v.g1chr]].startAngle) * (self.LINKsettings.LinkRadius)),
                  link_Y1: (0 - Math.cos((v.g1start/2+v.g1end/2) * start_k + d[self.initGenome[v.g1chr]].startAngle) * (self.LINKsettings.LinkRadius)),
                  link_X2: (0 + Math.sin((v.g2start/2+v.g2end/2) * end_k + d[self.initGenome[v.g2chr]].startAngle) * (self.LINKsettings.LinkRadius)),
                  link_Y2: (0 - Math.cos((v.g2start/2+v.g2end/2) * end_k + d[self.initGenome[v.g2chr]].startAngle) * (self.LINKsettings.LinkRadius)),
                  link_html: v.html,
                  link_link:v.link,
                };
              });
            }
            function NGCircosLINK2(d) {
              return self.LINK[linki].map(function(v, i) {
                var start_k = (d[self.initGenome[v.g1chr]].endAngle - d[self.initGenome[v.g1chr]].startAngle) / d[self.initGenome[v.g1chr]].value;
                var end_k = (d[self.initGenome[v.g2chr]].endAngle - d[self.initGenome[v.g2chr]].startAngle) / d[self.initGenome[v.g2chr]].value;
                return {
                  link_angle1: 3*Math.PI-((v.g1start/2+v.g1end/2) * start_k + d[self.initGenome[v.g1chr]].startAngle),
                  link_angle2: 3*Math.PI-((v.g2start/2+v.g2end/2) * end_k + d[self.initGenome[v.g2chr]].startAngle),
                  link_label1: v.g1name,
                  link_label2: v.g2name,
                  link_pair: v.fusion,
                  link_width: self.LINKsettings.LinkWidth,
                  link_X1: (0 + Math.sin(3*Math.PI-((v.g1start/2+v.g1end/2) * start_k + d[self.initGenome[v.g1chr]].startAngle)) * (self.LINKsettings.LinkRadius)),
                  link_Y1: (0 - Math.cos(3*Math.PI-((v.g1start/2+v.g1end/2) * start_k + d[self.initGenome[v.g1chr]].startAngle)) * (self.LINKsettings.LinkRadius)),
                  link_X2: (0 + Math.sin(3*Math.PI-((v.g2start/2+v.g2end/2) * end_k + d[self.initGenome[v.g2chr]].startAngle)) * (self.LINKsettings.LinkRadius)),
                  link_Y2: (0 - Math.cos(3*Math.PI-((v.g2start/2+v.g2end/2) * end_k + d[self.initGenome[v.g2chr]].startAngle)) * (self.LINKsettings.LinkRadius)),
                  link_html: v.html,
                  link_link:v.link,
                };
              });
            }
        for(var linki=0; linki<self.LINK.length; linki++){
            self.update_LINKsettings(self.LINKConfig[linki]);
            if(drawTime == self.LINKsettings.compareGroup){
               if(self.LINKsettings.compareGroup == 1){
                var link_objects = NGCircosLINK(chord.groups())
              }else{
                var link_objects = NGCircosLINK2(chord.groups())
              }

              if(self.LINKsettings.displayLinkAxis==true){
                  svg.append("g")
                      .attr("class", "LINKAxis")
                      .selectAll("circle")
                      .data(["0"])
                      .enter().append("circle")
                      .attr("id", "LINKAxis")
                      .attr("cx", 0)
                      .attr("cy", 0)
                      .attr("fill", "none")
                      .attr("stroke",self.LINKsettings.LinkAxisColor)
                      .attr("stroke-width",self.LINKsettings.LinkAxisWidth)
                      .attr("r", function(d) { return self.LINKsettings.LinkRadius+self.LINKsettings.LinkAxisPad; })
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
              }
              
              if(self.LINKsettings.LINKAnimationDisplay ==true){
                var Link_svg = svg.append("g")
                    .attr("class", "NGCircosLINK")
                  .selectAll("path")
                    .data(link_objects)
                    .enter()
                    .append("a")
                    .attr("xlink:href", function(d){if(self.settings.LINKxlink == true){return d.link_link;}})
                    .append("path")
                    .attr("d", function(d) { return "M"+d.link_X1+","+d.link_Y1+" "+self.LINKsettings.LinkType+"0,0 "+d.link_X2+","+d.link_Y2+""; })
                    .attr("class", "NGCircosLINK")
                    .attr("fill","none")
                    .attr("stroke","none")
                    .attr("stroke-width","none")
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")

                    totalLength=Link_svg.node().getTotalLength()*2
  //                  console.log(totalLength)
                    
                    Link_svg
                    .attr("stroke",self.LINKsettings.LinkFillColor)
                      .attr("stroke-width",self.LINKsettings.LinkWidth)
                      .attr("stroke-dasharray",totalLength+" "+totalLength)
                      .attr("stroke-dashoffset",function (d) {
                        if(self.LINKsettings.LINKAnimationDirection == "1to2"){
                          return totalLength;
                        }
                        if(self.LINKsettings.LINKAnimationDirection == "2to1"){
                          return -1*totalLength;
                        }
                      } )
                      .transition()
                      .delay(function(d,i){
                        return (i+1) * self.LINKsettings.LINKAnimationDelay;
                      })
                      .duration(self.LINKsettings.LINKAnimationTime)
                      .ease(self.LINKsettings.LINKAnimationType)
                      .attr("stroke-dashoffset","0");
              }else{
                var Link_svg = svg.append("g")
                    .attr("class", "NGCircosLINK")
                  .selectAll("path")
                    .data(link_objects)
                    .enter()
                    .append("a")
                    .attr("xlink:href", function(d){if(self.settings.LINKxlink == true){return d.link_link;}})
                    .append("path")
                    .attr("d", function(d) { return "M"+d.link_X1+","+d.link_Y1+" "+self.LINKsettings.LinkType+"0,0 "+d.link_X2+","+d.link_Y2+""; })
                    .attr("class", "NGCircosLINK")
                    .attr("fill","none")
                    .attr("stroke",self.LINKsettings.LinkFillColor)
                    .attr("stroke-width",self.LINKsettings.LinkWidth)
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")
              }
              

              if(self.LINKsettings.displayLinkLabel==true){
                if(self.LINKsettings.LINKAnimationDisplay ==true){
                  svg.append("g")
                        .attr("class", "NGCircosLINKLabel")
                    .selectAll("text")
                      .data(link_objects)
                      .enter().append("text")
                      .attr("class", "NGCircosLINKLabel")
                      .attr("id", function(d) { return d.link_pair; })
                      .attr("x", self.LINKsettings.LinkLabelPad)
                      .attr("dy", ".35em")
                      .attr("fill", "none")
                      .style("font-size",0)
                      .transition()
                      .delay(function(d,i){
                        return (i+1) * self.LINKsettings.LINKAnimationDelay;
                      })
                      .duration(self.LINKsettings.LINKAnimationTime)
                      .attr("fill", self.LINKsettings.LinkLabelColor)
                      .style("font-size",self.LINKsettings.LinkLabelSize)
                      .text(function(d) { return d.link_pair; })
                      .attr("transform", function(d) {
                        return "rotate(" + (d.link_angle2 * 180 / Math.PI - 90) + ")"
                            + "translate(" + (self.LINKsettings.LinkRadius+self.LINKsettings.LinkAxisPad+Math.sin(d.link_angle2)*compareMoveDistance) + ","+(Math.cos(d.link_angle2)*compareMoveDistance)+")";
                      });
                }else{
                  svg.append("g")
                        .attr("class", "NGCircosLINKLabel")
                    .selectAll("text")
                      .data(link_objects)
                      .enter().append("text")
                      .attr("transform", function(d) {
                        return "rotate(" + (d.link_angle2 * 180 / Math.PI - 90) + ")"
                            + "translate(" + (self.LINKsettings.LinkRadius+self.LINKsettings.LinkAxisPad+Math.sin(d.link_angle2)*compareMoveDistance) + ","+(Math.cos(d.link_angle2)*compareMoveDistance)+")";
                      })
                      .attr("class", "NGCircosLINKLabel")
                      .attr("id", function(d) { return d.link_pair; })
                      .attr("x", self.LINKsettings.LinkLabelPad)
                      .attr("dy", ".35em")
                      .attr("fill", self.LINKsettings.LinkLabelColor)
                      .style("font-size",self.LINKsettings.LinkLabelSize)
                      .text(function(d) { return d.link_pair; });
                }
              
              }
            }
            
            self.init_LINKsettings();

            function draglinkmove(d) {
                d3.select(this)
                  .attr("x", d3.event.x )
                  .attr("y", d3.event.y );
            }
			
            var draglinklabel = d3.behavior.drag()
                      .on("drag", draglinkmove);

            if(self.settings.LINKLabelDragEvent==true){
                svg.selectAll("text.NGCircosLINKLabel").call(draglinklabel);
            }

        }

        if(self.settings.LINKMouseEvent==true){
            var LINKMouseOnTooltip = d3.select("body")
                .append("div")
                .attr("class","NGCircosLINKTooltip")
                .attr("id","NGCircosLINKTooltip")
                .style("opacity",0);

            var LINKMouseOn = svg.selectAll("path.NGCircosLINK");

            if(self.settings.LINKMouseOverDisplay==true){
                LINKMouseOn.on("mouseover",function(d){
                      LINKMouseOnTooltip.html(function(){
                        if (self.settings.LINKMouseOverTooltipsSetting == "style1") {
                          return "LINK : "+d.link_pair+" "
                        }else if(self.settings.LINKMouseOverTooltipsSetting == "custom"){
                          return self.settings.LINKMouseOverTooltipsHtml+d.link_html
                        }
                      })
                       .style("left", (d3.event.pageX) + "px")
                       .style("top", (d3.event.pageY + 20) + "px")
                       .style("position", self.settings.LINKMouseOverTooltipsPosition)
                       .style("background-color", self.settings.LINKMouseOverTooltipsBackgroundColor)
                       .style("border-style", self.settings.LINKMouseOverTooltipsBorderStyle)
                       .style("border-width", self.settings.LINKMouseOverTooltipsBorderWidth)
                       .style("padding", self.settings.LINKMouseOverTooltipsPadding)
                       .style("border-radius", self.settings.LINKMouseOverTooltipsBorderRadius)
                       .style("opacity", self.settings.LINKMouseOverTooltipsOpacity)
                    d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.LINKMouseOverOpacity=="none"){return "";}else{return self.settings.LINKMouseOverOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINKMouseOverStrokeColor=="none"){return "";}else{return self.settings.LINKMouseOverStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINKMouseOverStrokeWidth=="none"){return "";}else{return self.settings.LINKMouseOverStrokeWidth;} });
                })
            }
            if(self.settings.LINKMouseClickDisplay==true){
                LINKMouseOn.on("click",function(d){
                    d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.LINKMouseClickOpacity=="none"){return "";}else{return self.settings.LINKMouseClickOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINKMouseClickStrokeColor=="none"){return "";}else{return self.settings.LINKMouseClickStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINKMouseClickStrokeWidth=="none"){return "";}else{return self.settings.LINKMouseClickStrokeWidth;} });
                })
            }
            if(self.settings.LINKMouseDownDisplay==true){
               LINKMouseOn.on("mousedown",function(d){
                   d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.LINKMouseDownOpacity=="none"){return "";}else{return self.settings.LINKMouseDownOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINKMouseDownStrokeColor=="none"){return "";}else{return self.settings.LINKMouseDownStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINKMouseDownStrokeWidth=="none"){return "";}else{return self.settings.LINKMouseDownStrokeWidth;} });
               })
            }
            if(self.settings.LINKMouseEnterDisplay==true){
               LINKMouseOn.on("mouseenter",function(d){
                   d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.LINKMouseEnterOpacity=="none"){return "";}else{return self.settings.LINKMouseEnterOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINKMouseEnterStrokeColor=="none"){return "";}else{return self.settings.LINKMouseEnterStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINKMouseEnterStrokeWidth=="none"){return "";}else{return self.settings.LINKMouseEnterStrokeWidth;} });
               })
            }
            if(self.settings.LINKMouseLeaveDisplay==true){
               LINKMouseOn.on("mouseleave",function(d){
                   LINKMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.LINKMouseLeaveOpacity=="none"){return "";}else{return self.settings.LINKMouseLeaveOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINKMouseLeaveStrokeColor=="none"){return "";}else{return self.settings.LINKMouseLeaveStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINKMouseLeaveStrokeWidth=="none"){return "";}else{return self.settings.LINKMouseLeaveStrokeWidth;} });
               })
            }
            if(self.settings.LINKMouseUpDisplay==true){
               LINKMouseOn.on("mouseup",function(d){
                   d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.LINKMouseUpOpacity=="none"){return "";}else{return self.settings.LINKMouseUpOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINKMouseUpStrokeColor=="none"){return "";}else{return self.settings.LINKMouseUpStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINKMouseUpStrokeWidth=="none"){return "";}else{return self.settings.LINKMouseUpStrokeWidth;} });
               })
            }
            if(self.settings.LINKMouseMoveDisplay==true){
               LINKMouseOn.on("mousemove",function(d){
                   d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.LINKMouseMoveOpacity=="none"){return "";}else{return self.settings.LINKMouseMoveOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINKMouseMoveStrokeColor=="none"){return "";}else{return self.settings.LINKMouseMoveStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINKMouseMoveStrokeWidth=="none"){return "";}else{return self.settings.LINKMouseMoveStrokeWidth;} });
                   LINKMouseOnTooltip.style("left", (d3.event.pageX) + "px")
                   .style("top", (d3.event.pageY + 20) + "px");
               })
            }
            if(self.settings.LINKMouseOutDisplay==true){
               LINKMouseOn.on("mouseout",function(d){
                   LINKMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .transition()
                       .duration(self.settings.LINKMouseOutAnimationTime)
                       .style("opacity", function(d,i) { if(self.settings.LINKMouseOutOpacity=="none"){return "";}else{return self.settings.LINKMouseOutOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.LINKMouseOutStrokeColor=="none"){return "";}else{return self.settings.LINKMouseOutStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.LINKMouseOutStrokeWidth=="none"){return "";}else{return self.settings.LINKMouseOutStrokeWidth;} });
               });
            }

        }
    }

    //chord
    if(self.CHORD.length > 0 && drawTime ==1){

        for(var chordi=0; chordi<self.CHORD.length; chordi++){
            self.update_CHORDsettings(self.CHORDConfig[chordi]);
            var color20 = d3.scale.category20();
            
            var fillARC = d3.scale.ordinal()
            .range(self.CHORDsettings.CHORDouterARCColor);
            
            var fillARCStroke = d3.scale.ordinal()
            .range(self.CHORDsettings.CHORDouterARCStrokeColor);
            
            var chord_objects = self.CHORD[chordi][1]
            //console.log(chord_objects)

            var chord_layout = d3.layout.chord()
            			                 .padding(self.CHORDsettings.CHORDPadding)
            			                 .sortSubgroups(d3.descending)
            			                 .matrix(chord_objects);
            
//            console.log(chord_layout.groups());
//            console.log(chord_layout.chords());

            //console.log(self.CHORDsettings)

            if(self.CHORDsettings.CHORDouterARC == true){
              var outer_arc =  d3.svg.arc()
          					 .innerRadius(self.CHORDsettings.CHORDinnerRadius)
          					 .outerRadius(self.CHORDsettings.CHORDouterRadius);
          		
          		var g_outer = svg.append("g")
              if(self.CHORDsettings.CHORDouterARCAutoColor == true){
                g_outer.selectAll("path")
                				.data(chord_layout.groups)
                				.enter()
                				.append("path")
                				.style("fill", function(d) { return color20(d.index); })
                				.style("stroke", function(d) { return color20(d.index); })
                				.attr("d", outer_arc );

              }else{
                g_outer.selectAll("path")
                				.data(chord_layout.groups)
                				.enter()
                				.append("path")
                				.style("fill", function(d) { return fillARC(d.index); })
                				.style("stroke", function(d) { return fillARCStroke(d.index); })
                				.attr("d", outer_arc );

              }
              
              if(self.CHORDsettings.CHORDouterARCText == true){
                g_outer.selectAll("text")
                				.data(chord_layout.groups)
                				.enter()
                				.append("text")
                				.each( function(d,i) { 
                					d.angle = (d.startAngle + d.endAngle) / 2; 
                					d.name = self.CHORD[chordi][0][i];
                				})
                				.attr("dy",".35em")
                				.attr("transform", function(d){
                					return "rotate(" + ( d.angle * 180 / Math.PI ) + ")" +
                						   "translate(0,"+ -1.0*(self.CHORDsettings.CHORDouterRadius+10) +")" ;
                				})
                				.text(function(d){
                					return d.name;
                				});

              }
          		
            }
            
            var inner_chord =  d3.svg.chord()
        						.radius(self.CHORDsettings.CHORDinnerRadius);
        		
            var fill = d3.scale.ordinal()
            .range(self.CHORDsettings.CHORDFillColor);
            
            var fillStroke = d3.scale.ordinal()
            .range(self.CHORDsettings.CHORDFillStrokeColor);

//            var chord_layout_excluded=new Array()
//            var chord_layout_included=new Array()
//            for(var i=0; i<self.CHORDsettings.CHORDFillColor.length;i++){
//              console.log(self.CHORDsettings.CHORDFillColor[i])
//              if(self.CHORDsettings.CHORDFillColor[i] == self.settings.CHORDMouseFillColorExcluded){
//                chord_layout_excluded.push(chord_layout.groups[i])
//              }else{
//                chord_layout_included.push(chord_layout.groups[i])
//              }
//            }
//            console.log(chord_layout_included)
//            console.log(chord_layout_excluded)
        
            if(self.CHORDsettings.CHORDAutoFillColor == true){
              svg.append("g")
                    .attr("class", "NGCircosCHORD")
              		    .selectAll("path")
              			.data(chord_layout.chords)
              		    .enter()
              			.append("path")
                    .attr("class", "NGCircosCHORD")
              			.attr("d", inner_chord )
              		    .style("fill", function(d) { return color20(d.source.index); })
              			.style("opacity", self.CHORDsettings.CHORDFillOpacity)
              			.style("stroke",function(d) { return color20(d.source.index); })
              			.style("stroke-width",self.CHORDsettings.CHORDStrokeWidth);

            }else{
              svg.append("g")
                    .attr("class", "NGCircosCHORD")
              		    .selectAll("path")
              			.data(chord_layout.chords)
              		    .enter()
              			.append("path")
                    .attr("class", function (d) {if(fill(d.source.index) == self.settings.CHORDMouseFillColorExcluded && fillStroke(d.source.index) == self.settings.CHORDMouseFillColorExcluded ){
                      return "NGCircosCHORDExcluded";
                    }else
                      return "NGCircosCHORD";
                    }  )
              			.attr("d", inner_chord )
              		    .style("fill", function(d) { return fill(d.source.index); })
              			.style("opacity", self.CHORDsettings.CHORDFillOpacity)
              			.style("stroke",function(d) { return fillStroke(d.source.index); })
              			.style("stroke-width",self.CHORDsettings.CHORDStrokeWidth);
            }
        }
        self.init_CHORDsettings();


        if(self.settings.CHORDMouseEvent==true){
//            var CHORDMouseOnTooltip = d3.select("body")
//                .append("div")
//                .attr("class","NGCircosCHORDTooltip")
//                .attr("id","NGCircosCHORDTooltip")
//                .style("opacity",0);


            var CHORDMouseOn = svg.selectAll("path.NGCircosCHORD");
//            console.log( document.getElementsByClassName("NGCircosCHORD"))
            
            if(self.settings.CHORDMouseOverDisplay==true){
                CHORDMouseOn.on("mouseover",function(d){
//                      CHORDMouseOnTooltip.html(self.settings.CHORDMouseOverTooltipsHtml01+self.CHORD[chordi][0]+self.settings.CHORDMouseOverTooltipsHtml02)
//                       .style("left", (d3.event.pageX) + "px")
//                       .style("top", (d3.event.pageY + 20) + "px")
//                       .style("position", self.settings.CHORDMouseOverTooltipsPosition)
//                       .style("background-color", self.settings.CHORDMouseOverTooltipsBackgroundColor)
//                       .style("border-style", self.settings.CHORDMouseOverTooltipsBorderStyle)
//                       .style("border-width", self.settings.CHORDMouseOverTooltipsBorderWidth)
//                       .style("padding", self.settings.CHORDMouseOverTooltipsPadding)
//                       .style("border-radius", self.settings.CHORDMouseOverTooltipsBorderRadius)
//                       .style("opacity", self.settings.CHORDMouseOverTooltipsOpacity)
                    d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.CHORDMouseOverOpacity=="none"){return "";}else{return self.settings.CHORDMouseOverOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CHORDMouseOverStrokeColor=="none"){return "";}else{return self.settings.CHORDMouseOverStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CHORDMouseOverStrokeWidth=="none"){return "";}else{return self.settings.CHORDMouseOverStrokeWidth;} });
                })
            }
            if(self.settings.CHORDMouseClickDisplay==true){
                CHORDMouseOn.on("click",function(d){
                    d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.CHORDMouseClickOpacity=="none"){return "";}else{return self.settings.CHORDMouseClickOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CHORDMouseClickStrokeColor=="none"){return "";}else{return self.settings.CHORDMouseClickStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CHORDMouseClickStrokeWidth=="none"){return "";}else{return self.settings.CHORDMouseClickStrokeWidth;} });
                })
            }
            if(self.settings.CHORDMouseDownDisplay==true){
               CHORDMouseOn.on("mousedown",function(d){
                   d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.CHORDMouseDownOpacity=="none"){return "";}else{return self.settings.CHORDMouseDownOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CHORDMouseDownStrokeColor=="none"){return "";}else{return self.settings.CHORDMouseDownStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CHORDMouseDownStrokeWidth=="none"){return "";}else{return self.settings.CHORDMouseDownStrokeWidth;} });
               })
            }
            if(self.settings.CHORDMouseEnterDisplay==true){
               CHORDMouseOn.on("mouseenter",function(d){
                   d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.CHORDMouseEnterOpacity=="none"){return "";}else{return self.settings.CHORDMouseEnterOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CHORDMouseEnterStrokeColor=="none"){return "";}else{return self.settings.CHORDMouseEnterStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CHORDMouseEnterStrokeWidth=="none"){return "";}else{return self.settings.CHORDMouseEnterStrokeWidth;} });
               })
            }
            if(self.settings.CHORDMouseLeaveDisplay==true){
               CHORDMouseOn.on("mouseleave",function(d){
//                   CHORDMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.CHORDMouseLeaveOpacity=="none"){return "";}else{return self.settings.CHORDMouseLeaveOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CHORDMouseLeaveStrokeColor=="none"){return "";}else{return self.settings.CHORDMouseLeaveStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CHORDMouseLeaveStrokeWidth=="none"){return "";}else{return self.settings.CHORDMouseLeaveStrokeWidth;} });
               })
            }
            if(self.settings.CHORDMouseUpDisplay==true){
               CHORDMouseOn.on("mouseup",function(d){
                   d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.CHORDMouseUpOpacity=="none"){return "";}else{return self.settings.CHORDMouseUpOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CHORDMouseUpStrokeColor=="none"){return "";}else{return self.settings.CHORDMouseUpStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CHORDMouseUpStrokeWidth=="none"){return "";}else{return self.settings.CHORDMouseUpStrokeWidth;} });
               })
            }
            if(self.settings.CHORDMouseMoveDisplay==true){
               CHORDMouseOn.on("mousemove",function(d){
                   d3.select(this)
                       .style("opacity", function(d,i) { if(self.settings.CHORDMouseMoveOpacity=="none"){return "";}else{return self.settings.CHORDMouseMoveOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CHORDMouseMoveStrokeColor=="none"){return "";}else{return self.settings.CHORDMouseMoveStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CHORDMouseMoveStrokeWidth=="none"){return "";}else{return self.settings.CHORDMouseMoveStrokeWidth;} });
//                   CHORDMouseOnTooltip.style("left", (d3.event.pageX) + "px")
//                   .style("top", (d3.event.pageY + 20) + "px");
               })
            }
            if(self.settings.CHORDMouseOutDisplay==true){
               CHORDMouseOn.on("mouseout",function(d){
//                   CHORDMouseOnTooltip.style("opacity",0.0);
                   d3.select(this)
                       .transition()
                       .duration(self.settings.CHORDMouseOutAnimationTime)
                       .style("opacity", function(d,i) { if(self.settings.CHORDMouseOutOpacity=="none"){return "";}else{return self.settings.CHORDMouseOutOpacity;} })
                       .style("stroke", function(d,i) { if(self.settings.CHORDMouseOutStrokeColor=="none"){return "";}else{return self.settings.CHORDMouseOutStrokeColor;} })
                       .style("stroke-width", function(d,i) { if(self.settings.CHORDMouseOutStrokeWidth=="none"){return "";}else{return self.settings.CHORDMouseOutStrokeWidth;} });
               })
            }

        }
    }
    //chord
    
    //COMPARE
//    if(self.COMPARE.length > 0){
//
//        for(var comparei=0; comparei<self.COMPARE.length; comparei++){
//            self.update_COMPAREsettings(self.COMPAREConfig[comparei]);
//
//            var compare_objects = new Array()
////          console.log(self.COMPARE[comparei][1])
//          
//            var total = 0
//            var total2 = 0
//            var mean=0
//            for(var objecti=0; objecti<self.COMPARE[comparei][1].length;objecti++){
//              total += self.COMPARE[comparei][1][objecti]
//            }
//            for(var objectj=0; objectj<self.COMPARE[comparei][3].length;objectj++){
//              total2 += self.COMPARE[comparei][3][objectj]
//            }
//            if (total < total2){
//              mean =total2/self.COMPARE[comparei][3].length
//            }else{
//              mean =total/self.COMPARE[comparei][1].length
//            }
////            console.log(mean)
//            for(var objecti=0; objecti<self.COMPARE[comparei][1].length+self.COMPARE[comparei][3].length+2;objecti++){
//              var array = new Array()
//              for(var objectj=0; objectj<self.COMPARE[comparei][1].length+self.COMPARE[comparei][3].length+2;objectj++){
//                if (objecti < self.COMPARE[comparei][1].length){
//                  if (objectj<= self.COMPARE[comparei][1].length || objectj == self.COMPARE[comparei][1].length+self.COMPARE[comparei][3].length+1){
//                    array.push(0)
//                  }else {
//                    array.push(self.COMPARE[comparei][1][objecti]/self.COMPARE[comparei][3].length)
//                  }
//                }else if (objecti == self.COMPARE[comparei][1].length){
//                  if (objectj == self.COMPARE[comparei][1].length+self.COMPARE[comparei][3].length+1){
//                    array.push(mean)
//                  }else{
//                    array.push(0)
//                  }
//                }else if (objecti <self.COMPARE[comparei][1].length+self.COMPARE[comparei][3].length+1){
//                  if (objectj >= self.COMPARE[comparei][1].length ){
//                    array.push(0)
//                  }else {
//                    array.push(self.COMPARE[comparei][3][objecti-self.COMPARE[comparei][1].length-1]/self.COMPARE[comparei][1].length)
//                  }
//                }else{
//                  if (objectj == self.COMPARE[comparei][1].length){
//                    array.push(mean)
//                  }else{
//                    array.push(0)
//                  }
//                }
//              }
////              console.log(array)
//              compare_objects.push(array)
//              
//            }
////            console.log(compare_objects)
//            var compare_layout = d3.layout.chord()
//            			                 .padding(0.03)
//            			                 .sortSubgroups(d3.descending)
//            			                 .matrix(compare_objects);
//            
//            var color20 = d3.scale.category20();
//
//            if(self.COMPAREsettings.COMPAREouterARC == true){
//              var outer_arc =  d3.svg.arc()
//          					 .innerRadius(self.COMPAREsettings.COMPAREinnerRadius)
//          					 .outerRadius(self.COMPAREsettings.COMPAREouterRadius)
////                     .startAngle(Math.PI*mean/(total+total2+2*mean))
////                     .endAngle(2*Math.PI+Math.PI*mean/(total+total2+2*mean));
//          		
//          		var g_outer = svg.append("g")
//              if(self.COMPAREsettings.COMPAREAutoFillColor == true){
//                g_outer.selectAll("path")
//                				.data(compare_layout.groups)
//                				.enter()
//                				.append("path")
//                		.style("fill", function(d) { 
//                                      if(d.index == self.COMPARE[comparei][1].length || d.index == self.COMPARE[comparei][1].length + self.COMPARE[comparei][1].length+1 ){
//                                        return "white";
//                                      }else{
//                                        return color20(d.index); 
//                                      }
//                                  })
//                		.style("stroke", function(d) { 
//                                      if(d.index == self.COMPARE[comparei][1].length || d.index == self.COMPARE[comparei][1].length + self.COMPARE[comparei][1].length+1){
//                                        return "white";
//                                      }else{
//                                        return color20(d.index); 
//                                      }
//                                  })
//                		.attr("d", outer_arc )
//                    .attr("transform", function(d){
//                      return "rotate(" + 180*mean/(total+total2+2*mean) + ")";
//                     });
//                
//
//              }else{
//                g_outer.selectAll("path")
//                				.data(compare_layout.groups)
//                				.enter()
//                				.append("path")
//                				.style("fill", function (d) {
//                                          if(d.index == self.COMPARE[comparei][1].length || d.index == self.COMPARE[comparei][1].length + self.COMPARE[comparei][1].length+1 ){
//                                            return "white";
//                                          }else{
//                                            return self.COMPAREsettings.COMPAREFillColor
//                                          }
//                                })
//                				.style("stroke", function (d) {
//                                          if(d.index == self.COMPARE[comparei][1].length || d.index == self.COMPARE[comparei][1].length + self.COMPARE[comparei][1].length+1 ){
//                                            return "white";
//                                          }else{
//                                            return self.COMPAREsettings.COMPAREFillColor
//                                          }
//                                })
//                				.attr("d", outer_arc )
//                        .attr("transform", function(d){
//                          return "rotate(" + 180*mean/(total+total2+2*mean) + ")";
//                          });
//
//              }
//              
//              if(self.COMPAREsettings.COMPAREouterARCText == true){
//                g_outer.selectAll("text")
//                				.data(compare_layout.groups)
//                				.enter()
//                				.append("text")
//                				.each( function(d,i) { 
//                					d.angle = (d.startAngle + d.endAngle) / 2; 
//                          if(i>=0 && i<self.COMPARE[comparei][0].length ){
//                            d.name = self.COMPARE[comparei][0][i];
//                          }
//                					if(i>=self.COMPARE[comparei][0].length && i<self.COMPARE[comparei][0].length+self.COMPARE[comparei][2].length+1 ){
//                            d.name = self.COMPARE[comparei][2][i-self.COMPARE[comparei][0].length-1];
//                          }
//                				})
//                				.attr("dy",".35em")
//                				.attr("transform", function(d){
//                					return "rotate(" + ( d.angle * 180 / Math.PI ) + ")" +
//                						   "translate("+180*mean/(total+total2+2*mean)+","+ -1.0*(self.COMPAREsettings.COMPAREouterRadius+10) +")" ;
//                				})
//                				.text(function(d){
//                					return d.name;
//                				});
//
//              }
//          		
//            }
//            
////            var inner_compare =  d3.svg.chord()
////        						.radius(self.COMPAREsettings.COMPAREinnerRadius);
////        		
////            if(self.COMPAREsettings.COMPAREAutoFillColor == true){
////              svg.append("g")
////                    .attr("class", "NGCircosCOMPARE")
////              		    .selectAll("path")
////              			.data(compare_layout.chords)
////              		    .enter()
////              			.append("path")
////                    .attr("class", "NGCircosCOMPARE")
////              			.attr("d", inner_compare )
////              		    .style("fill", function(d) { return color20(d.source.index); })
////              			.style("opacity", self.COMPAREsettings.COMPAREFillOpacity)
////              			.style("stroke",self.COMPAREsettings.COMPAREStrokeColor)
////              			.style("stroke-width",self.COMPAREsettings.COMPAREStrokeWidth);
////
////            }
//        }
//        self.init_COMPAREsettings();
//
//
//        if(self.settings.COMPAREMouseEvent==true){
////            var CHORDMouseOnTooltip = d3.select("body")
////                .append("div")
////                .attr("class","NGCircosCHORDTooltip")
////                .attr("id","NGCircosCHORDTooltip")
////                .style("opacity",0);
//
//            var COMPAREMouseOn = svg.selectAll("path.NGCircosCOMPARE");
//
//            if(self.settings.COMPAREMouseOverDisplay==true){
//                COMPAREMouseOn.on("mouseover",function(d){
////                      COMPAREMouseOnTooltip.html(self.settings.COMPAREMouseOverTooltipsHtml01+self.COMPARE[COMPAREi][0]+self.settings.COMPAREMouseOverTooltipsHtml02)
////                       .style("left", (d3.event.pageX) + "px")
////                       .style("top", (d3.event.pageY + 20) + "px")
////                       .style("position", self.settings.COMPAREMouseOverTooltipsPosition)
////                       .style("background-color", self.settings.COMPAREMouseOverTooltipsBackgroundColor)
////                       .style("border-style", self.settings.COMPAREMouseOverTooltipsBorderStyle)
////                       .style("border-width", self.settings.COMPAREMouseOverTooltipsBorderWidth)
////                       .style("padding", self.settings.COMPAREMouseOverTooltipsPadding)
////                       .style("border-radius", self.settings.COMPAREMouseOverTooltipsBorderRadius)
////                       .style("opacity", self.settings.COMPAREMouseOverTooltipsOpacity)
//                    d3.select(this)
//                       .style("opacity", function(d,i) { if(self.settings.COMPAREMouseOverOpacity=="none"){return "";}else{return self.settings.COMPAREMouseOverOpacity;} })
//                       .style("stroke", function(d,i) { if(self.settings.COMPAREMouseOverStrokeColor=="none"){return "";}else{return self.settings.COMPAREMouseOverStrokeColor;} })
//                       .style("stroke-width", function(d,i) { if(self.settings.COMPAREMouseOverStrokeWidth=="none"){return "";}else{return self.settings.COMPAREMouseOverStrokeWidth;} });
//                })
//            }
//            if(self.settings.COMPAREMouseClickDisplay==true){
//                COMPAREMouseOn.on("click",function(d){
//                    d3.select(this)
//                       .style("opacity", function(d,i) { if(self.settings.COMPAREMouseClickOpacity=="none"){return "";}else{return self.settings.COMPAREMouseClickOpacity;} })
//                       .style("stroke", function(d,i) { if(self.settings.COMPAREMouseClickStrokeColor=="none"){return "";}else{return self.settings.COMPAREMouseClickStrokeColor;} })
//                       .style("stroke-width", function(d,i) { if(self.settings.COMPAREMouseClickStrokeWidth=="none"){return "";}else{return self.settings.COMPAREMouseClickStrokeWidth;} });
//                })
//            }
//            if(self.settings.COMPAREMouseDownDisplay==true){
//               COMPAREMouseOn.on("mousedown",function(d){
//                   d3.select(this)
//                       .style("opacity", function(d,i) { if(self.settings.COMPAREMouseDownOpacity=="none"){return "";}else{return self.settings.COMPAREMouseDownOpacity;} })
//                       .style("stroke", function(d,i) { if(self.settings.COMPAREMouseDownStrokeColor=="none"){return "";}else{return self.settings.COMPAREMouseDownStrokeColor;} })
//                       .style("stroke-width", function(d,i) { if(self.settings.COMPAREMouseDownStrokeWidth=="none"){return "";}else{return self.settings.COMPAREMouseDownStrokeWidth;} });
//               })
//            }
//            if(self.settings.COMPAREMouseEnterDisplay==true){
//               COMPAREMouseOn.on("mouseenter",function(d){
//                   d3.select(this)
//                       .style("opacity", function(d,i) { if(self.settings.COMPAREMouseEnterOpacity=="none"){return "";}else{return self.settings.COMPAREMouseEnterOpacity;} })
//                       .style("stroke", function(d,i) { if(self.settings.COMPAREMouseEnterStrokeColor=="none"){return "";}else{return self.settings.COMPAREMouseEnterStrokeColor;} })
//                       .style("stroke-width", function(d,i) { if(self.settings.COMPAREMouseEnterStrokeWidth=="none"){return "";}else{return self.settings.COMPAREMouseEnterStrokeWidth;} });
//               })
//            }
//            if(self.settings.COMPAREMouseLeaveDisplay==true){
//               COMPAREMouseOn.on("mouseleave",function(d){
////                   COMPAREMouseOnTooltip.style("opacity",0.0);
//                   d3.select(this)
//                       .style("opacity", function(d,i) { if(self.settings.COMPAREMouseLeaveOpacity=="none"){return "";}else{return self.settings.COMPAREMouseLeaveOpacity;} })
//                       .style("stroke", function(d,i) { if(self.settings.COMPAREMouseLeaveStrokeColor=="none"){return "";}else{return self.settings.COMPAREMouseLeaveStrokeColor;} })
//                       .style("stroke-width", function(d,i) { if(self.settings.COMPAREMouseLeaveStrokeWidth=="none"){return "";}else{return self.settings.COMPAREMouseLeaveStrokeWidth;} });
//               })
//            }
//            if(self.settings.COMPAREMouseUpDisplay==true){
//               COMPAREMouseOn.on("mouseup",function(d){
//                   d3.select(this)
//                       .style("opacity", function(d,i) { if(self.settings.COMPAREMouseUpOpacity=="none"){return "";}else{return self.settings.COMPAREMouseUpOpacity;} })
//                       .style("stroke", function(d,i) { if(self.settings.COMPAREMouseUpStrokeColor=="none"){return "";}else{return self.settings.COMPAREMouseUpStrokeColor;} })
//                       .style("stroke-width", function(d,i) { if(self.settings.COMPAREMouseUpStrokeWidth=="none"){return "";}else{return self.settings.COMPAREMouseUpStrokeWidth;} });
//               })
//            }
//            if(self.settings.COMPAREMouseMoveDisplay==true){
//               COMPAREMouseOn.on("mousemove",function(d){
//                   d3.select(this)
//                       .style("opacity", function(d,i) { if(self.settings.COMPAREMouseMoveOpacity=="none"){return "";}else{return self.settings.COMPAREMouseMoveOpacity;} })
//                       .style("stroke", function(d,i) { if(self.settings.COMPAREMouseMoveStrokeColor=="none"){return "";}else{return self.settings.COMPAREMouseMoveStrokeColor;} })
//                       .style("stroke-width", function(d,i) { if(self.settings.COMPAREMouseMoveStrokeWidth=="none"){return "";}else{return self.settings.COMPAREMouseMoveStrokeWidth;} });
////                   COMPAREMouseOnTooltip.style("left", (d3.event.pageX) + "px")
////                   .style("top", (d3.event.pageY + 20) + "px");
//               })
//            }
//            if(self.settings.COMPAREMouseOutDisplay==true){
//               COMPAREMouseOn.on("mouseout",function(d){
////                   COMPAREMouseOnTooltip.style("opacity",0.0);
//                   d3.select(this)
//                       .transition()
//                       .duration(self.settings.COMPAREMouseOutAnimationTime)
//                       .style("opacity", function(d,i) { if(self.settings.COMPAREMouseOutOpacity=="none"){return "";}else{return self.settings.COMPAREMouseOutOpacity;} })
//                       .style("stroke", function(d,i) { if(self.settings.COMPAREMouseOutStrokeColor=="none"){return "";}else{return self.settings.COMPAREMouseOutStrokeColor;} })
//                       .style("stroke-width", function(d,i) { if(self.settings.COMPAREMouseOutStrokeWidth=="none"){return "";}else{return self.settings.COMPAREMouseOutStrokeWidth;} });
//               });
//            }
//
//        }
//    }
    //COMPARE

            //zhec3
    if (self.LOLLIPOP.length >0){
      //if LOLLIPOP point is input
      
      var points2Line = d3.svg.line()
          .x(function(d) {
            return d.x;
          })
          .y(function(d) {
            return d.y;
          });
      
      function NGCircosLOLLIPOP(d) {
        if(self.LOLLIPOPsettings.lineAutoHeight==true){
          return self.LOLLIPOP[LOLLIPOPi].map(function(v,i){
            var LOLLIPOP_k = (d[self.initGenome[v.protein]].endAngle - d[self.initGenome[v.protein]].startAngle) / d[self.initGenome[v.protein]].value;
            //console.log(self.LOLLIPOP_value_maxmin(self.LOLLIPOP[LOLLIPOPi]));
            //console.log(self.LOLLIPOP_value_maxmin(self.LOLLIPOP[LOLLIPOPi]));
            
            var points=[];
            //console.log(innerRadius);
            tempArc=d3.svg.arc()  // 创建弧形。
                .innerRadius(innerRadius)  // 内径
                .outerRadius(innerRadius)
            points.push({x:tempArc.centroid({startAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle,endAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle})[0]*(0.96-(v.CancerTypeNumber/self.LOLLIPOP_value_maxmin(self.LOLLIPOP[LOLLIPOPi])[0])/3*self.LOLLIPOPsettings.lineAutoMaximumHeightZoomRate),y:tempArc.centroid({startAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle,endAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle})[1]*(0.96-(v.CancerTypeNumber/self.LOLLIPOP_value_maxmin(self.LOLLIPOP[LOLLIPOPi])[0])/3*self.LOLLIPOPsettings.lineAutoMaximumHeightZoomRate)}); //0.96 instead of 1 means the lowest lollipop is not located in the arcs. try 0.9 or 1 for example.
            points.push({x:tempArc.centroid({startAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle,endAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle})[0],y:tempArc.centroid({startAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle,endAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle})[1]});
            
            return {
              LOLLIPOP_angle: v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle,
              LOLLIPOP_protein: v.protein,
              LOLLIPOP_chr: v.chr,
              LOLLIPOP_pos: v.pos+self.LOLLIPOPsettings.realStart,
              LOLLIPOP_strand: v.strand,
              LOLLIPOP_CancerTypeNumber: v.CancerTypeNumber,
              LOLLIPOP_color: v.color,
              LOLLIPOP_link: v.link,
              LOLLIPOP_Consequence: v.Consequence,
              LOLLIPOP_AA_pos: v.AA_pos,
              LOLLIPOP_AA_change: v.AA_change,
              LOLLIPOP_type: v.type,
              LOLLIPOP_click_label: "LOLLIPOP"+LOLLIPOPi+"_"+i,
              points :points
            };
          });
        }else{
          return self.LOLLIPOP[LOLLIPOPi].map(function(v,i){
            var LOLLIPOP_k = (d[self.initGenome[v.protein]].endAngle - d[self.initGenome[v.protein]].startAngle) / d[self.initGenome[v.protein]].value;
            //console.log(self.LOLLIPOP_values_maxmin(self.LOLLIPOP[LOLLIPOPi]));
            //console.log(d[self.initGenome[v.protein]]);
            var points=[];
            tempArc=d3.svg.arc()  // 创建弧形。
              .innerRadius(innerRadius)  // 内径
              .outerRadius(innerRadius)
            points.push({x:tempArc.centroid({startAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle,endAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle})[0]*self.LOLLIPOPsettings.lineHeightRate,y:tempArc.centroid({startAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle,endAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle})[1]*self.LOLLIPOPsettings.lineHeightRate});
            points.push({x:tempArc.centroid({startAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle,endAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle})[0],y:tempArc.centroid({startAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle,endAngle:v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle})[1]});
            
            return {
              LOLLIPOP_angle: v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle,
              LOLLIPOP_protein: v.protein,
              LOLLIPOP_chr: v.chr,
              LOLLIPOP_pos: v.pos+self.LOLLIPOPsettings.realStart,
              LOLLIPOP_strand: v.strand,
              LOLLIPOP_CancerTypeNumber: v.CancerTypeNumber,
              LOLLIPOP_color: v.color,
              LOLLIPOP_link: v.link,
              LOLLIPOP_Consequence: v.Consequence,
              LOLLIPOP_AA_pos: v.AA_pos,
              LOLLIPOP_AA_change: v.AA_change,
              LOLLIPOP_type: v.type,
              LOLLIPOP_click_label: "LOLLIPOP"+LOLLIPOPi+"_"+i,
              points:points
            };
          });

        }
      }
      
      function NGCircosLOLLIPOP2(d) {
        if(self.LOLLIPOPsettings.lineAutoHeight==true){
          return self.LOLLIPOP[LOLLIPOPi].map(function(v,i){
            var LOLLIPOP_k = (d[self.initGenome[v.protein]].endAngle - d[self.initGenome[v.protein]].startAngle) / d[self.initGenome[v.protein]].value;
            //console.log(self.LOLLIPOP_value_maxmin(self.LOLLIPOP[LOLLIPOPi]));
            //console.log(self.LOLLIPOP_value_maxmin(self.LOLLIPOP[LOLLIPOPi]));
            
            var points=[];
            //console.log(innerRadius);
            tempArc=d3.svg.arc()  // 创建弧形。
                .innerRadius(innerRadius)  // 内径
                .outerRadius(innerRadius)
            points.push({x:tempArc.centroid({startAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle),endAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle)})[0]*(1-(v.CancerTypeNumber/self.LOLLIPOP_value_maxmin(self.LOLLIPOP[LOLLIPOPi])[0])/3*self.LOLLIPOPsettings.lineAutoMaximumHeightZoomRate),y:tempArc.centroid({startAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle),endAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle)})[1]*(1-(v.CancerTypeNumber/self.LOLLIPOP_value_maxmin(self.LOLLIPOP[LOLLIPOPi])[0])/3*self.LOLLIPOPsettings.lineAutoMaximumHeightZoomRate)});
            points.push({x:tempArc.centroid({startAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle),endAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle)})[0],y:tempArc.centroid({startAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle),endAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle)})[1]});
            
            return {
              LOLLIPOP_angle: 3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle),
              LOLLIPOP_protein: v.protein,
              LOLLIPOP_chr: v.chr,
              LOLLIPOP_pos: v.pos+self.LOLLIPOPsettings.realStart,
              LOLLIPOP_strand: v.strand,
              LOLLIPOP_CancerTypeNumber: v.CancerTypeNumber,
              LOLLIPOP_color: v.color,
              LOLLIPOP_link: v.link,
              LOLLIPOP_Consequence: v.Consequence,
              LOLLIPOP_AA_pos: v.AA_pos,
              LOLLIPOP_AA_change: v.AA_change,
              LOLLIPOP_type: v.type,
              LOLLIPOP_click_label: "LOLLIPOP"+LOLLIPOPi+"_"+i,
              points :points,
              LOLLIPOP_html:v.html,
            };
          });
        }else{
          return self.LOLLIPOP[LOLLIPOPi].map(function(v,i){
            var LOLLIPOP_k = (d[self.initGenome[v.protein]].endAngle - d[self.initGenome[v.protein]].startAngle) / d[self.initGenome[v.protein]].value;
            //console.log(self.LOLLIPOP_values_maxmin(self.LOLLIPOP[LOLLIPOPi]));
            //console.log(d[self.initGenome[v.protein]]);
            var points=[];
            tempArc=d3.svg.arc()  // 创建弧形。
              .innerRadius(innerRadius)  // 内径
              .outerRadius(innerRadius)
            points.push({x:tempArc.centroid({startAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle),endAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle)})[0]*self.LOLLIPOPsettings.lineHeightRate,y:tempArc.centroid({startAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle),endAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle)})[1]*self.LOLLIPOPsettings.lineHeightRate});
            points.push({x:tempArc.centroid({startAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle),endAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle)})[0],y:tempArc.centroid({startAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle),endAngle:3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle)})[1]});
            
            return {
              LOLLIPOP_angle: 3*Math.PI-(v.pos * LOLLIPOP_k + d[self.initGenome[v.protein]].startAngle),
              LOLLIPOP_protein: v.protein,
              LOLLIPOP_chr: v.chr,
              LOLLIPOP_pos: v.pos+self.LOLLIPOPsettings.realStart,
              LOLLIPOP_strand: v.strand,
              LOLLIPOP_CancerTypeNumber: v.CancerTypeNumber,
              LOLLIPOP_color: v.color,
              LOLLIPOP_link: v.link,
              LOLLIPOP_Consequence: v.Consequence,
              LOLLIPOP_AA_pos: v.AA_pos,
              LOLLIPOP_AA_change: v.AA_change,
              LOLLIPOP_type: v.type,
              LOLLIPOP_click_label: "LOLLIPOP"+LOLLIPOPi+"_"+i,
              points:points,
              LOLLIPOP_html:v.html,
            };
          });

        }
      }
      
      
      for(var LOLLIPOPi=0; LOLLIPOPi<self.LOLLIPOP.length; LOLLIPOPi++){
          self.update_LOLLIPOPsettings(self.LOLLIPOPConfig[LOLLIPOPi]);
          //zhec3
          self.LOLLIPOP[LOLLIPOPi].forEach(function (value, index, array) {
            array[index].pos=value.pos -self.LOLLIPOPsettings.realStart
          });
          //zhec3
          if(drawTime == self.LOLLIPOPsettings.compareGroup){
            //console.log(chord.groups())
             if(self.LOLLIPOPsettings.compareGroup == 1){
              var LOLLIPOP_objects = NGCircosLOLLIPOP(chord.groups())
            }else{
              var LOLLIPOP_objects = NGCircosLOLLIPOP2(chord.groups())
            }
  //                  console.log(LOLLIPOP_objects)
            
            var LOLLIPOP_objects_hetero=new Array()
            var LOLLIPOP_objects_homo=new Array()
            for (var pointi=0;pointi<LOLLIPOP_objects.length;pointi++) {
              //console.log(LOLLIPOP_objects[pointi])
              if (LOLLIPOP_objects[pointi].LOLLIPOP_type == "Hetero") {
                LOLLIPOP_objects_hetero.push(LOLLIPOP_objects[pointi]);
              }
              if (LOLLIPOP_objects[pointi].LOLLIPOP_type == "Homo"){
                LOLLIPOP_objects_homo.push(LOLLIPOP_objects[pointi]);
              }
            }
            //console.log(LOLLIPOP_objects_homo)
            // console.log(LOLLIPOP_objects_hetero)
            
            if(self.LOLLIPOPsettings.PointType=="circle"){
              if(self.LOLLIPOPsettings.LOLLIPOPAnimationDisplay==false){
                
                //zhec4
                //add needle-line
                svg.append("g")
                  .attr("class", "NGCircosLOLLIPOPLine")
                  .selectAll("path")
                  .data(LOLLIPOP_objects)
                  .enter()
                  .append("a")
                  .append("path")
                  .attr("class", "needleLine")
                  .attr("d",function(d){return points2Line(d.points)})
                  .attr({'stroke': self.LOLLIPOPsettings.LOLLIPOPLineColor,
                    'stroke-width': self.LOLLIPOPsettings.LOLLIPOPLineWidth,
                    'fill': 'none'})
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                  
                //zhec4
                svg.append("g")
                    .attr("class", "NGCircosLOLLIPOP_homo")
                    .selectAll("circle")
                    .data(LOLLIPOP_objects_homo)
                    .enter()
                    .append("a")
                    .append("circle")
                    .attr("id", "NGCircosLOLLIPOP_homo")
                    .attr("fill", function(d,i) { 
                                    if(d.LOLLIPOP_color!=undefined){
                                      return d.LOLLIPOP_color;
                                    }else{
                                      return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                    }
                                  })
                    .attr("r", self.LOLLIPOPsettings.circleSize)
                    .attr("cx", function(d) { return d.points[0].x; })
                    .attr("cy", function(d) { return d.points[0].y; })
                    .style("stroke", function(d){
                                        if(self.LOLLIPOPsettings.stroke == true){
                                          return self.LOLLIPOPsettings.strokeColor;
                                        }else{
                                          return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                        }
                                      })
                    .style("stroke-width", function(d){
                                              if(self.LOLLIPOPsettings.stroke == true){
                                                return self.LOLLIPOPsettings.strokeWidth;
                                              }else{
                                                return "0px";
                                              }
                                            })
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                
                var pieHetero =d3.svg.arc()
                    .innerRadius(0)
                    .outerRadius(self.LOLLIPOPsettings.circleSize);
                
                var pie=d3.layout.pie().sort(null)
                      
                svg.append("g")
                    .attr("class", "NGCircosLOLLIPOP_hetero")
                    .selectAll("path")
                    .data(LOLLIPOP_objects_hetero)
                    .enter()
                    .append("a")
                    .append("path")
                    .attr("id", "NGCircosLOLLIPOP_hetero_righthalf")
                    .attr("fill", self.LOLLIPOPsettings.LOLLIPOPSecondColor)
                    .attr("transform", function (d) { 
                      return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + d.points[0].y + ")" +"rotate("+ ((d.LOLLIPOP_angle-Math.PI) *180/Math.PI) + ")"
                    })
                    .attr("d",pieHetero(pie([10,10])[0])) //fake data, half and half circle.
                    .style("stroke", function(d){
                                        if(self.LOLLIPOPsettings.stroke == true){
                                          return self.LOLLIPOPsettings.strokeColor;
                                        }else{
                                          return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                        }
                                      })
                    .style("stroke-width", function(d){
                                              if(self.LOLLIPOPsettings.stroke == true){
                                                return self.LOLLIPOPsettings.strokeWidth;
                                              }else{
                                                return "0px";
                                              }
                                            });
                    
                svg.selectAll(".NGCircosLOLLIPOP_hetero")
                    .selectAll("a")
                    .append("path")
                    .attr("id","NGCircosLOLLIPOP_hetero_lefthalf")
                    .data(LOLLIPOP_objects_hetero)
                    .attr("fill", function(d,i) { 
                                  if(d.LOLLIPOP_color!=undefined){
                                    return d.LOLLIPOP_color;
                                  }else{
                                    return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                  }
                                })
                  .attr("transform", function (d) { 
                    return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + d.points[0].y + ")"+"rotate("+ ((d.LOLLIPOP_angle-Math.PI) *180/Math.PI) + ")"
                  })
                  .attr("d",pieHetero(pie([10,10])[1])) //fake data, half and half circle.
                  .style("stroke", function(d){
                                      if(self.LOLLIPOPsettings.stroke == true){
                                        return self.LOLLIPOPsettings.strokeColor;
                                      }else{
                                        return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                      }
                                    })
                  .style("stroke-width", function(d){
                                            if(self.LOLLIPOPsettings.stroke == true){
                                              return self.LOLLIPOPsettings.strokeWidth;
                                            }else{
                                              return "0px";
                                            }
                                          });
                
              }else{
                svg.append("g")
                  .attr("class", "NGCircosLOLLIPOPLine")
                  .selectAll("path")
                  .data(LOLLIPOP_objects)
                  .enter()
                  .append("a")
                  .append("path")
                  .attr("class", "needleLine")
                   .attr("d",function(d){return "M0 0 L0 0"})
                    .attr({'stroke': self.LOLLIPOPsettings.LOLLIPOPLineColor,
                      'stroke-width': self.LOLLIPOPsettings.LOLLIPOPLineWidth,
                      'fill': 'none'})
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")

                  .transition()
                  .delay(function(d,i){
                    return (i+1) * self.LOLLIPOPsettings.LOLLIPOPAnimationDelay;
                  })
                  .duration(self.LOLLIPOPsettings.LOLLIPOPAnimationTime)
                  .ease(self.LOLLIPOPsettings.LOLLIPOPAnimationType)
                  .attr("d",function(d){return points2Line(d.points)})
                  .attr({'stroke': self.LOLLIPOPsettings.LOLLIPOPLineColor,
                    'stroke-width': self.LOLLIPOPsettings.LOLLIPOPLineWidth,
                    'fill': 'none'})
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")
                
                svg.append("g")
                    .attr("class", "NGCircosLOLLIPOP_homo")
                    .selectAll("circle")
                    .data(LOLLIPOP_objects_homo)
                    .enter()
                    .append("a")
                    .append("circle")
                    .attr("id", "NGCircosLOLLIPOP_homo")
                    .attr("fill", function(d,i) { if(d.LOLLIPOP_color!=undefined){return d.LOLLIPOP_color;}else{return self.LOLLIPOPsettings.LOLLIPOPFillColor;} })
                    .attr("r", self.LOLLIPOPsettings.circleSize)
                    .attr("cx",function(d){
                      return 0;
                    })
                    .attr("cy",function(d){
                      return 0;
                    })
                    .style("stroke", function(d){
                                        if(self.LOLLIPOPsettings.stroke == true){
                                          return self.LOLLIPOPsettings.strokeColor;
                                        }else{
                                          return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                        }
                                      })
                    .style("stroke-width", function(d){
                                              if(self.LOLLIPOPsettings.stroke == true){
                                                return self.LOLLIPOPsettings.strokeWidth;
                                              }else{
                                                return "0px";
                                              }
                                            })
                    .transition()
                    .delay(function(d,i){
                      return (i+1) * self.LOLLIPOPsettings.LOLLIPOPAnimationDelay;
                    })
                    .duration(self.LOLLIPOPsettings.LOLLIPOPAnimationTime)
                    .ease(self.LOLLIPOPsettings.LOLLIPOPAnimationType)
                    .attr("cx", function(d) { return d.points[0].x; })
                    .attr("cy", function(d) { return d.points[0].y; })
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                                            
                var pieHetero =d3.svg.arc()
                    .innerRadius(0)
                    .outerRadius(self.LOLLIPOPsettings.circleSize);
                
                var pie=d3.layout.pie().sort(null)
                      
                svg.append("g")
                    .attr("class", "NGCircosLOLLIPOP_hetero")
                    .selectAll("path")
                    .data(LOLLIPOP_objects_hetero)
                    .enter()
                    .append("a")
                    .append("path")
                    .attr("id", "NGCircosLOLLIPOP_hetero_righthalf")
                    .attr("fill", self.LOLLIPOPsettings.LOLLIPOPSecondColor)
                    .attr("transform", function (d) { 
                      return "translate(" +  0+ "," + 0 + ")"
                    })
                    .attr("d",pieHetero(pie([10,10])[0])) //fake data, half and half circle.
                    .style("stroke", function(d){
                                        if(self.LOLLIPOPsettings.stroke == true){
                                          return self.LOLLIPOPsettings.strokeColor;
                                        }else{
                                          return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                        }
                                      })
                    .style("stroke-width", function(d){
                                              if(self.LOLLIPOPsettings.stroke == true){
                                                return self.LOLLIPOPsettings.strokeWidth;
                                              }else{
                                                return "0px";
                                              }
                                            })
                    .transition()
                    .delay(function(d,i){
                      return (i+1) * self.LOLLIPOPsettings.LOLLIPOPAnimationDelay;
                    })
                    .duration(self.LOLLIPOPsettings.LOLLIPOPAnimationTime)
                    .ease(self.LOLLIPOPsettings.LOLLIPOPAnimationType)
                    .attr("transform", function (d) { 
                      return "translate(" + (d.points[0].x+compareMoveDistance)+ "," + d.points[0].y + ")"+"rotate("+ ((d.LOLLIPOP_angle-Math.PI) *180/Math.PI) + ")"
                    });
                    
                    
                svg.selectAll(".NGCircosLOLLIPOP_hetero")
                    .selectAll("a")
                    .append("path")
                    .attr("id","NGCircosLOLLIPOP_hetero_lefthalf")
                    .data(LOLLIPOP_objects_hetero)
                    .attr("fill", function(d,i) { 
                                  if(d.LOLLIPOP_color!=undefined){
                                    return d.LOLLIPOP_color;
                                  }else{
                                    return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                  }
                                })
                  .attr("transform", function (d) { 
                    return "translate(" +  0+ "," + 0 + ")"
                  })
                  .attr("d",pieHetero(pie([10,10])[1])) //fake data, half and half circle.
                  .style("stroke", function(d){
                                      if(self.LOLLIPOPsettings.stroke == true){
                                        return self.LOLLIPOPsettings.strokeColor;
                                      }else{
                                        return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                      }
                                    })
                  .style("stroke-width", function(d){
                                            if(self.LOLLIPOPsettings.stroke == true){
                                              return self.LOLLIPOPsettings.strokeWidth;
                                            }else{
                                              return "0px";
                                            }
                                          })
                  .transition()
                  .delay(function(d,i){
                    return (i+1) * self.LOLLIPOPsettings.LOLLIPOPAnimationDelay;
                  })
                  .duration(self.LOLLIPOPsettings.LOLLIPOPAnimationTime)
                  .ease(self.LOLLIPOPsettings.LOLLIPOPAnimationType)
                  .attr("transform", function (d) { 
                    return "translate(" + (d.points[0].x+compareMoveDistance) + "," + d.points[0].y + ")"+"rotate("+ ((d.LOLLIPOP_angle-Math.PI) *180/Math.PI) + ")"
                  });

                  
              }
            }
              
            if(self.LOLLIPOPsettings.PointType=="rect"){
                if(self.LOLLIPOPsettings.LOLLIPOPAnimationDisplay==false){
                  
                  //zhec4
                  //add needle-line
                  svg.append("g")
                    .attr("class", "NGCircosLOLLIPOPLine")
                    .selectAll("path")
                    .data(LOLLIPOP_objects)
                    .enter()
                    .append("a")
                    .append("path")
                    .attr("class", "needleLine")
                    .attr("d",function(d){return points2Line(d.points)})
                    .attr({'stroke': self.LOLLIPOPsettings.LOLLIPOPLineColor,
                      'stroke-width': self.LOLLIPOPsettings.LOLLIPOPLineWidth,
                      'fill': 'none'})
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                    
                  //zhec4
                  svg.append("g")
                      .attr("class", "NGCircosLOLLIPOP_homo")
                    .selectAll("path")
                      .data(LOLLIPOP_objects_homo)
                      .enter()
                      .append("a")
                      .append("path")
                      .attr("id", "NGCircosLOLLIPOP_homo")
                      .attr("d", function(d) { return "M 0 0 0 "+self.LOLLIPOPsettings.rectHeight/2+" "+self.LOLLIPOPsettings.rectWidth+" "+self.LOLLIPOPsettings.rectHeight/2+" "+ self.LOLLIPOPsettings.rectWidth + " -" + self.LOLLIPOPsettings.rectHeight/2+" 0 -"+self.LOLLIPOPsettings.rectHeight/2+" L 0 0"; })
                      //.attr("fill", self.LOLLIPOPsettings.LOLLIPOPFillColor);
                      .attr("fill", function(d,i) { if(d.LOLLIPOP_color!=undefined){return d.LOLLIPOP_color;}else{return self.LOLLIPOPsettings.LOLLIPOPFillColor;} })
                      .style("stroke", function(d,i){
                                          if(self.LOLLIPOPsettings.stroke == true){
                                            return self.LOLLIPOPsettings.strokeColor;
                                          }else{
                                            return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                          }
                                        })
                      .style("stroke-width", function(d,i){
                                                if(self.LOLLIPOPsettings.stroke == true){
                                                  return self.LOLLIPOPsettings.strokeWidth;
                                                }else{
                                                  return "0px";
                                                }
                                              })
                      .attr("transform", function (d) { 
                        return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + (d.points[0].y) + ")"+"rotate("+ ((d.LOLLIPOP_angle-3/2*Math.PI) *180/Math.PI) + ")"
                      })
                        
                  svg.append("g")
                      .attr("class", "NGCircosLOLLIPOP_hetero")
                      .selectAll("path")
                      .data(LOLLIPOP_objects_hetero)
                      .enter()
                      .append("a")
                      .append("path")
                      .attr("id", "NGCircosLOLLIPOP_hetero_righthalf")
                      .attr("fill", self.LOLLIPOPsettings.LOLLIPOPSecondColor)
                      .attr("d", function(d) { return "M 0 0 "+self.LOLLIPOPsettings.rectWidth+" 0 "+ self.LOLLIPOPsettings.rectWidth + " " + self.LOLLIPOPsettings.rectHeight/2+" 0 "+ self.LOLLIPOPsettings.rectHeight/2 +" L 0 0"; })
                      .style("stroke", function(d,i){
                                          if(self.LOLLIPOPsettings.stroke == true){
                                            return self.LOLLIPOPsettings.strokeColor;
                                          }else{
                                            return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                          }
                                        })
                      .style("stroke-width", function(d,i){
                                                if(self.LOLLIPOPsettings.stroke == true){
                                                  return self.LOLLIPOPsettings.strokeWidth;
                                                }else{
                                                  return "0px";
                                                }
                                              })
                      .attr("transform", function (d) { 
                        return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + (d.points[0].y) + ")"+"rotate("+ ((d.LOLLIPOP_angle-3/2*Math.PI) *180/Math.PI) + ")"
                      });

                      
                  svg.selectAll(".NGCircosLOLLIPOP_hetero")
                      .selectAll("a")
                      .append("path")
                      .attr("id","NGCircosLOLLIPOP_hetero_lefthalf")
                      .data(LOLLIPOP_objects_hetero)
                      .attr("fill", function(d,i) { 
                                    if(d.LOLLIPOP_color!=undefined){
                                      return d.LOLLIPOP_color;
                                    }else{
                                      return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                    }
                                  })
                    .attr("d", function(d) { return "M 0 0 "+self.LOLLIPOPsettings.rectWidth+" 0 "+ self.LOLLIPOPsettings.rectWidth + " -" + self.LOLLIPOPsettings.rectHeight/2+" 0 -"+ self.LOLLIPOPsettings.rectHeight/2 +" L 0 0"; })
                    .style("stroke", function(d,i){
                                        if(self.LOLLIPOPsettings.stroke == true){
                                          return self.LOLLIPOPsettings.strokeColor;
                                        }else{
                                          return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                        }
                                      })
                    .style("stroke-width", function(d,i){
                                              if(self.LOLLIPOPsettings.stroke == true){
                                                return self.LOLLIPOPsettings.strokeWidth;
                                              }else{
                                                return "0px";
                                              }
                                            })
                    .attr("transform", function (d) { 
                      return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + (d.points[0].y) + ")"+"rotate("+ ((d.LOLLIPOP_angle-3/2*Math.PI) *180/Math.PI) + ")"
                    });
                  
                }else{
                  
                   //zhec4
                    //add needle-line
                    svg.append("g")
                      .attr("class", "NGCircosLOLLIPOPLine")
                      .selectAll("path")
                      .data(LOLLIPOP_objects)
                      .enter()
                      .append("a")
                      .append("path")
                      .attr("class", "needleLine")
                      .attr("d",function(d){return "M0 0 L0 0"})
                      .attr({'stroke': self.LOLLIPOPsettings.LOLLIPOPLineColor,
                        'stroke-width': self.LOLLIPOPsettings.LOLLIPOPLineWidth,
                        'fill': 'none'})
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")
                      .transition()
                      .delay(function(d,i){
                        return (i+1) * self.LOLLIPOPsettings.LOLLIPOPAnimationDelay;
                      })
                      .duration(self.LOLLIPOPsettings.LOLLIPOPAnimationTime)
                      .ease(self.LOLLIPOPsettings.LOLLIPOPAnimationType)
                      .attr("d",function(d){return points2Line(d.points)})
                      .attr({'stroke': self.LOLLIPOPsettings.LOLLIPOPLineColor,
                        'stroke-width': self.LOLLIPOPsettings.LOLLIPOPLineWidth,
                        'fill': 'none'})
                        .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                      
                    //zhec4
                    svg.append("g")
                        .attr("class", "NGCircosLOLLIPOP_homo")
                      .selectAll("path")
                        .data(LOLLIPOP_objects_homo)
                        .enter()
                        .append("a")
                        .append("path")
                        .attr("id", "NGCircosLOLLIPOP_homo")
                        .attr("d", function(d) { return "M 0 0 0 "+self.LOLLIPOPsettings.rectHeight/2+" "+self.LOLLIPOPsettings.rectWidth+" "+self.LOLLIPOPsettings.rectHeight/2+" "+ self.LOLLIPOPsettings.rectWidth + " -" + self.LOLLIPOPsettings.rectHeight/2+" 0 -"+self.LOLLIPOPsettings.rectHeight/2+" L 0 0"; })
                        .attr("fill", function(d,i) { if(d.LOLLIPOP_color!=undefined){return d.LOLLIPOP_color;}else{return self.LOLLIPOPsettings.LOLLIPOPFillColor;} })
                        .style("stroke", function(d,i){
                                            if(self.LOLLIPOPsettings.stroke == true){
                                              return self.LOLLIPOPsettings.strokeColor;
                                            }else{
                                              return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                            }
                                          })
                        .style("stroke-width", function(d,i){
                                                  if(self.LOLLIPOPsettings.stroke == true){
                                                    return self.LOLLIPOPsettings.strokeWidth;
                                                  }else{
                                                    return "0px";
                                                  }
                                                })
                        .transition()
                        .delay(function(d,i){
                          return (i+1) * self.LOLLIPOPsettings.LOLLIPOPAnimationDelay;
                        })
                        .duration(self.LOLLIPOPsettings.LOLLIPOPAnimationTime)
                        .ease(self.LOLLIPOPsettings.LOLLIPOPAnimationType)
                        .attr("transform", function (d) { 
                          return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + (d.points[0].y) + ")"+"rotate("+ ((d.LOLLIPOP_angle-3/2*Math.PI) *180/Math.PI) + ")"
                        });

                          
                    svg.append("g")
                        .attr("class", "NGCircosLOLLIPOP_hetero")
                        .selectAll("path")
                        .data(LOLLIPOP_objects_hetero)
                        .enter()
                        .append("a")
                        .append("path")
                        .attr("id", "NGCircosLOLLIPOP_hetero_righthalf")
                        .attr("fill", self.LOLLIPOPsettings.LOLLIPOPSecondColor)
                        .attr("d", function(d) { return "M 0 0 "+self.LOLLIPOPsettings.rectWidth+" 0 "+ self.LOLLIPOPsettings.rectWidth + " " + self.LOLLIPOPsettings.rectHeight/2+" 0 "+ self.LOLLIPOPsettings.rectHeight/2 +" L 0 0"; })
                        .style("stroke", function(d,i){
                                            if(self.LOLLIPOPsettings.stroke == true){
                                              return self.LOLLIPOPsettings.strokeColor;
                                            }else{
                                              return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                            }
                                          })
                        .style("stroke-width", function(d,i){
                                                  if(self.LOLLIPOPsettings.stroke == true){
                                                    return self.LOLLIPOPsettings.strokeWidth;
                                                  }else{
                                                    return "0px";
                                                  }
                                                })
                        .transition()
                        .delay(function(d,i){
                          return (i+1) * self.LOLLIPOPsettings.LOLLIPOPAnimationDelay;
                        })
                        .duration(self.LOLLIPOPsettings.LOLLIPOPAnimationTime)
                        .ease(self.LOLLIPOPsettings.LOLLIPOPAnimationType)
                        .attr("transform", function (d) { 
                          return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + (d.points[0].y) + ")"+"rotate("+ ((d.LOLLIPOP_angle-3/2*Math.PI) *180/Math.PI) + ")"
                        });

                        
                    svg.selectAll(".NGCircosLOLLIPOP_hetero")
                        .selectAll("a")
                        .append("path")
                        .attr("id","NGCircosLOLLIPOP_hetero_lefthalf")
                        .data(LOLLIPOP_objects_hetero)
                        .attr("fill", function(d,i) { 
                                      if(d.LOLLIPOP_color!=undefined){
                                        return d.LOLLIPOP_color;
                                      }else{
                                        return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                      }
                                    })
                      .attr("d", function(d) { return "M 0 0 "+self.LOLLIPOPsettings.rectWidth+" 0 "+ self.LOLLIPOPsettings.rectWidth + " -" + self.LOLLIPOPsettings.rectHeight/2+" 0 -"+ self.LOLLIPOPsettings.rectHeight/2 +" L 0 0"; })
                      .style("stroke", function(d,i){
                                          if(self.LOLLIPOPsettings.stroke == true){
                                            return self.LOLLIPOPsettings.strokeColor;
                                          }else{
                                            return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                          }
                                        })
                      .style("stroke-width", function(d,i){
                                                if(self.LOLLIPOPsettings.stroke == true){
                                                  return self.LOLLIPOPsettings.strokeWidth;
                                                }else{
                                                  return "0px";
                                                }
                                              })
                      .transition()
                      .delay(function(d,i){
                        return (i+1) * self.LOLLIPOPsettings.LOLLIPOPAnimationDelay;
                      })
                      .duration(self.LOLLIPOPsettings.LOLLIPOPAnimationTime)
                      .ease(self.LOLLIPOPsettings.LOLLIPOPAnimationType)
                      .attr("transform", function (d) { 
                        return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + (d.points[0].y) + ")"+"rotate("+ ((d.LOLLIPOP_angle-3/2*Math.PI) *180/Math.PI) + ")"
                      });
                  
                }
            }
                
            if(self.LOLLIPOPsettings.PointType=="diamond"){
                if(self.LOLLIPOPsettings.LOLLIPOPAnimationDisplay==false){
                  
                  //zhec4
                  //add needle-line
                  svg.append("g")
                    .attr("class", "NGCircosLOLLIPOPLine")
                    .selectAll("path")
                    .data(LOLLIPOP_objects)
                    .enter()
                    .append("a")
                    .append("path")
                    .attr("class", "needleLine")
                    .attr("d",function(d){return points2Line(d.points)})
                    .attr({'stroke': self.LOLLIPOPsettings.LOLLIPOPLineColor,
                      'stroke-width': self.LOLLIPOPsettings.LOLLIPOPLineWidth,
                      'fill': 'none'})
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                    
                  //zhec4
                  svg.append("g")
                      .attr("class", "NGCircosLOLLIPOP_homo")
                    .selectAll("path")
                      .data(LOLLIPOP_objects_homo)
                      .enter()
                      .append("a")
                      .append("path")
                      .attr("id", "NGCircosLOLLIPOP_homo")
                      .attr("d", function(d) { return "M 0 0 "+self.LOLLIPOPsettings.diamondHeight/2+" "+self.LOLLIPOPsettings.diamondWidth/2+" "+self.LOLLIPOPsettings.diamondHeight+" 0 "+ self.LOLLIPOPsettings.diamondHeight/2 + " -" + self.LOLLIPOPsettings.diamondWidth/2+" L 0 0"; })
                      //.attr("fill", self.LOLLIPOPsettings.LOLLIPOPFillColor);
                      .attr("fill", function(d,i) { if(d.LOLLIPOP_color!=undefined){return d.LOLLIPOP_color;}else{return self.LOLLIPOPsettings.LOLLIPOPFillColor;} })
                      .style("stroke", function(d,i){
                                          if(self.LOLLIPOPsettings.stroke == true){
                                            return self.LOLLIPOPsettings.strokeColor;
                                          }else{
                                            return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                          }
                                        })
                      .style("stroke-width", function(d,i){
                                                if(self.LOLLIPOPsettings.stroke == true){
                                                  return self.LOLLIPOPsettings.strokeWidth;
                                                }else{
                                                  return "0px";
                                                }
                                              })
                      .attr("transform", function (d) { 
                        return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + (d.points[0].y) + ")"+"rotate("+ ((d.LOLLIPOP_angle-3/2*Math.PI) *180/Math.PI) + ")"
                      })
                        
                  svg.append("g")
                      .attr("class", "NGCircosLOLLIPOP_hetero")
                      .selectAll("path")
                      .data(LOLLIPOP_objects_hetero)
                      .enter()
                      .append("a")
                      .append("path")
                      .attr("id", "NGCircosLOLLIPOP_hetero_righthalf")
                      .attr("fill", self.LOLLIPOPsettings.LOLLIPOPSecondColor)
                      .attr("d", function(d) { return "M 0 0 "+self.LOLLIPOPsettings.diamondHeight/2+" "+self.LOLLIPOPsettings.diamondWidth/2+" "+self.LOLLIPOPsettings.diamondHeight+" 0 L 0 0"; })
                      .style("stroke", function(d,i){
                                          if(self.LOLLIPOPsettings.stroke == true){
                                            return self.LOLLIPOPsettings.strokeColor;
                                          }else{
                                            return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                          }
                                        })
                      .style("stroke-width", function(d,i){
                                                if(self.LOLLIPOPsettings.stroke == true){
                                                  return self.LOLLIPOPsettings.strokeWidth;
                                                }else{
                                                  return "0px";
                                                }
                                              })
                      .attr("transform", function (d) { 
                        return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + (d.points[0].y) + ")"+"rotate("+ ((d.LOLLIPOP_angle-3/2*Math.PI) *180/Math.PI) + ")"
                      });

                      
                  svg.selectAll(".NGCircosLOLLIPOP_hetero")
                      .selectAll("a")
                      .append("path")
                      .attr("id","NGCircosLOLLIPOP_hetero_lefthalf")
                      .data(LOLLIPOP_objects_hetero)
                      .attr("fill", function(d,i) { 
                                    if(d.LOLLIPOP_color!=undefined){
                                      return d.LOLLIPOP_color;
                                    }else{
                                      return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                    }
                                  })
                    .attr("d", function(d) { return "M 0 0 "+self.LOLLIPOPsettings.diamondHeight+" 0 "+ self.LOLLIPOPsettings.diamondHeight/2 + " -" + self.LOLLIPOPsettings.diamondWidth/2+" L 0 0"; })
                    .style("stroke", function(d,i){
                                        if(self.LOLLIPOPsettings.stroke == true){
                                          return self.LOLLIPOPsettings.strokeColor;
                                        }else{
                                          return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                        }
                                      })
                    .style("stroke-width", function(d,i){
                                              if(self.LOLLIPOPsettings.stroke == true){
                                                return self.LOLLIPOPsettings.strokeWidth;
                                              }else{
                                                return "0px";
                                              }
                                            })
                    .attr("transform", function (d) { 
                      return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + (d.points[0].y) + ")"+"rotate("+ ((d.LOLLIPOP_angle-3/2*Math.PI) *180/Math.PI) + ")"
                    });
                  
                }else{
                  
                   //zhec4
                    //add needle-line
                    svg.append("g")
                      .attr("class", "NGCircosLOLLIPOPLine")
                      .selectAll("path")
                      .data(LOLLIPOP_objects)
                      .enter()
                      .append("a")
                      .append("path")
                      .attr("class", "needleLine")
                      .attr("d",function(d){return "M0 0 L0 0"})
                      .attr({'stroke': self.LOLLIPOPsettings.LOLLIPOPLineColor,
                        'stroke-width': self.LOLLIPOPsettings.LOLLIPOPLineWidth,
                        'fill': 'none'})
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")")
                      .transition()
                      .delay(function(d,i){
                        return (i+1) * self.LOLLIPOPsettings.LOLLIPOPAnimationDelay;
                      })
                      .duration(self.LOLLIPOPsettings.LOLLIPOPAnimationTime)
                      .ease(self.LOLLIPOPsettings.LOLLIPOPAnimationType)
                      .attr("d",function(d){return points2Line(d.points)})
                      .attr({'stroke': self.LOLLIPOPsettings.LOLLIPOPLineColor,
                        'stroke-width': self.LOLLIPOPsettings.LOLLIPOPLineWidth,
                        'fill': 'none'})
                        .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                      
                    //zhec4
                    svg.append("g")
                        .attr("class", "NGCircosLOLLIPOP_homo")
                      .selectAll("path")
                        .data(LOLLIPOP_objects_homo)
                        .enter()
                        .append("a")
                        .append("path")
                        .attr("id", "NGCircosLOLLIPOP_homo")
                        .attr("d", function(d) { return "M 0 0 "+self.LOLLIPOPsettings.diamondHeight/2+" "+self.LOLLIPOPsettings.diamondWidth/2+" "+self.LOLLIPOPsettings.diamondHeight+" 0 "+ self.LOLLIPOPsettings.diamondHeight/2 + " -" + self.LOLLIPOPsettings.diamondWidth/2+" L 0 0"; })
                        .attr("fill", function(d,i) { if(d.LOLLIPOP_color!=undefined){return d.LOLLIPOP_color;}else{return self.LOLLIPOPsettings.LOLLIPOPFillColor;} })
                        .style("stroke", function(d,i){
                                            if(self.LOLLIPOPsettings.stroke == true){
                                              return self.LOLLIPOPsettings.strokeColor;
                                            }else{
                                              return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                            }
                                          })
                        .style("stroke-width", function(d,i){
                                                  if(self.LOLLIPOPsettings.stroke == true){
                                                    return self.LOLLIPOPsettings.strokeWidth;
                                                  }else{
                                                    return "0px";
                                                  }
                                                })
                        .transition()
                        .delay(function(d,i){
                          return (i+1) * self.LOLLIPOPsettings.LOLLIPOPAnimationDelay;
                        })
                        .duration(self.LOLLIPOPsettings.LOLLIPOPAnimationTime)
                        .ease(self.LOLLIPOPsettings.LOLLIPOPAnimationType)
                        .attr("transform", function (d) { 
                          return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + (d.points[0].y) + ")"+"rotate("+ ((d.LOLLIPOP_angle-3/2*Math.PI) *180/Math.PI) + ")"
                        });

                          
                    svg.append("g")
                        .attr("class", "NGCircosLOLLIPOP_hetero")
                        .selectAll("path")
                        .data(LOLLIPOP_objects_hetero)
                        .enter()
                        .append("a")
                        .append("path")
                        .attr("id", "NGCircosLOLLIPOP_hetero_righthalf")
                        .attr("fill", self.LOLLIPOPsettings.LOLLIPOPSecondColor)
                        .attr("d", function(d) { return "M 0 0 "+self.LOLLIPOPsettings.diamondHeight/2+" "+self.LOLLIPOPsettings.diamondWidth/2+" "+self.LOLLIPOPsettings.diamondHeight+" 0 L 0 0"; })
                        .style("stroke", function(d,i){
                                            if(self.LOLLIPOPsettings.stroke == true){
                                              return self.LOLLIPOPsettings.strokeColor;
                                            }else{
                                              return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                            }
                                          })
                        .style("stroke-width", function(d,i){
                                                  if(self.LOLLIPOPsettings.stroke == true){
                                                    return self.LOLLIPOPsettings.strokeWidth;
                                                  }else{
                                                    return "0px";
                                                  }
                                                })
                        .transition()
                        .delay(function(d,i){
                          return (i+1) * self.LOLLIPOPsettings.LOLLIPOPAnimationDelay;
                        })
                        .duration(self.LOLLIPOPsettings.LOLLIPOPAnimationTime)
                        .ease(self.LOLLIPOPsettings.LOLLIPOPAnimationType)
                        .attr("transform", function (d) { 
                          return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + (d.points[0].y) + ")"+"rotate("+ ((d.LOLLIPOP_angle-3/2*Math.PI) *180/Math.PI) + ")"
                        });

                        
                    svg.selectAll(".NGCircosLOLLIPOP_hetero")
                        .selectAll("a")
                        .append("path")
                        .attr("id","NGCircosLOLLIPOP_hetero_lefthalf")
                        .data(LOLLIPOP_objects_hetero)
                        .attr("fill", function(d,i) { 
                                      if(d.LOLLIPOP_color!=undefined){
                                        return d.LOLLIPOP_color;
                                      }else{
                                        return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                      }
                                    })
                      .attr("d", function(d) { return "M 0 0 "+self.LOLLIPOPsettings.diamondHeight+" 0 "+ self.LOLLIPOPsettings.diamondHeight/2 + " -" + self.LOLLIPOPsettings.diamondWidth/2+" L 0 0"; })
                      .style("stroke", function(d,i){
                                          if(self.LOLLIPOPsettings.stroke == true){
                                            return self.LOLLIPOPsettings.strokeColor;
                                          }else{
                                            return self.LOLLIPOPsettings.LOLLIPOPFillColor;
                                          }
                                        })
                      .style("stroke-width", function(d,i){
                                                if(self.LOLLIPOPsettings.stroke == true){
                                                  return self.LOLLIPOPsettings.strokeWidth;
                                                }else{
                                                  return "0px";
                                                }
                                              })
                      .transition()
                      .delay(function(d,i){
                        return (i+1) * self.LOLLIPOPsettings.LOLLIPOPAnimationDelay;
                      })
                      .duration(self.LOLLIPOPsettings.LOLLIPOPAnimationTime)
                      .ease(self.LOLLIPOPsettings.LOLLIPOPAnimationType)
                      .attr("transform", function (d) { 
                        return "translate(" +  (d.points[0].x+compareMoveDistance)+ "," + (d.points[0].y) + ")"+"rotate("+ ((d.LOLLIPOP_angle-3/2*Math.PI) *180/Math.PI) + ")"
                      });
                  
                }
            }
            
            if(self.settings.LOLLIPOPMouseClickTextFromData=="first"){
                svg.append("g")
                    .attr("class", "NGCircosLOLLIPOPlabel")
                  .selectAll("text")
                    .data(LOLLIPOP_objects)
                    .enter().append("text")
                    .attr("class", "dragText")
                    .attr("id", function(d,i) { return "LOLLIPOP"+LOLLIPOPi+"_"+i; })
                    .text(function(d) { return d.LOLLIPOP_protein; })
                    .attr("x", -1000)
                    .attr("y", -1000)
                    .style("opacity", 0)
                    .style("font-size", 1)
                    .attr("fill", self.LOLLIPOPsettings.LOLLIPOPFillColor)
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
            }
            if(self.settings.LOLLIPOPMouseClickTextFromData=="second"){
                svg.append("g")
                    .attr("class", "NGCircosLOLLIPOPlabel")
                  .selectAll("text")
                    .data(LOLLIPOP_objects)
                    .enter().append("text")
                    .attr("class", "dragText")
                    .attr("id", function(d,i) { return "LOLLIPOP"+LOLLIPOPi+"_"+i; })
                    .text(function(d) { return d.LOLLIPOP_chr; })
                    .attr("x", -1000)
                    .attr("y", -1000)
                    .style("opacity", 0)
                    .style("font-size", 1)
                    .attr("fill", self.LOLLIPOPsettings.LOLLIPOPFillColor)
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
            }
            if(self.settings.LOLLIPOPMouseClickTextFromData=="third"){
                svg.append("g")
                    .attr("class", "NGCircosLOLLIPOPlabel")
                  .selectAll("text")
                    .data(LOLLIPOP_objects)
                    .enter().append("text")
                    .attr("class", "dragText")
                    .attr("id", function(d,i) { return "LOLLIPOP"+LOLLIPOPi+"_"+i; })
                    .text(function(d) { return d.LOLLIPOP_pos; })
                    .attr("x", -1000)
                    .attr("y", -1000)
                    .style("opacity", 0)
                    .style("font-size", 1)
                    .attr("fill", self.LOLLIPOPsettings.LOLLIPOPFillColor)
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
            }
            if(self.settings.LOLLIPOPMouseClickTextFromData=="fourth"){
                svg.append("g")
                    .attr("class", "NGCircosLOLLIPOPlabel")
                  .selectAll("text")
                    .data(LOLLIPOP_objects)
                    .enter().append("text")
                    .attr("class", "dragText")
                    .attr("id", function(d,i) { return "LOLLIPOP"+LOLLIPOPi+"_"+i; })
                    .text(function(d) { return d.LOLLIPOP_strand; })
                    .attr("x", -1000)
                    .attr("y", -1000)
                    .style("opacity", 0)
                    .style("font-size", 1)
                    .attr("fill", self.LOLLIPOPsettings.LOLLIPOPFillColor)
                    .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
            }
            if(self.settings.LOLLIPOPMouseClickTextFromData=="fifth"){
              svg.append("g")
                .attr("class", "NGCircosLOLLIPOPlabel")
                .selectAll("text")
                .data(LOLLIPOP_objects)
                .enter().append("text")
                .attr("class", "dragText")
                .attr("id", function(d,i) { return "LOLLIPOP"+LOLLIPOPi+"_"+i; })
                .text(function(d) { return d.LOLLIPOP_CancerTypeNumber; })
                .attr("x", -1000)
                .attr("y", -1000)
                .style("opacity", 0)
                .style("font-size", 1)
                .attr("fill", self.LOLLIPOPsettings.LOLLIPOPFillColor)
                .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
            }
            if(self.settings.LOLLIPOPMouseClickTextFromData=="sixth"){
              svg.append("g")
                .attr("class", "NGCircosLOLLIPOPlabel")
                .selectAll("text")
                .data(LOLLIPOP_objects)
                .enter().append("text")
                .attr("class", "dragText")
                .attr("id", function(d,i) { return "LOLLIPOP"+LOLLIPOPi+"_"+i; })
                .text(function(d) { return d.LOLLIPOP_AA_pos; })
                .attr("x", -1000)
                .attr("y", -1000)
                .style("opacity", 0)
                .style("font-size", 1)
                .attr("fill", self.LOLLIPOPsettings.LOLLIPOPFillColor)
                .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
            }
            if(self.settings.LOLLIPOPMouseClickTextFromData=="seventh"){
              svg.append("g")
                .attr("class", "NGCircosLOLLIPOPlabel")
                .selectAll("text")
                .data(LOLLIPOP_objects)
                .enter().append("text")
                .attr("class", "dragText")
                .attr("id", function(d,i) { return "LOLLIPOP"+LOLLIPOPi+"_"+i; })
                .text(function(d) { return d.LOLLIPOP_AA_change; })
                .attr("x", -1000)
                .attr("y", -1000)
                .style("opacity", 0)
                .style("font-size", 1)
                .attr("fill", self.LOLLIPOPsettings.LOLLIPOPFillColor)
                .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
            }
            if(self.settings.LOLLIPOPMouseClickTextFromData=="eighth"){
              svg.append("g")
                .attr("class", "NGCircosLOLLIPOPlabel")
                .selectAll("text")
                .data(LOLLIPOP_objects)
                .enter().append("text")
                .attr("class", "dragText")
                .attr("id", function(d,i) { return "LOLLIPOP"+LOLLIPOPi+"_"+i; })
                .text(function(d) { return d.LOLLIPOP_Consequence; })
                .attr("x", -1000)
                .attr("y", -1000)
                .style("opacity", 0)
                .style("font-size", 1)
                .attr("fill", self.LOLLIPOPsettings.LOLLIPOPFillColor)
                .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
            }
          }
          

          self.init_LOLLIPOPsettings();

      }

      if(self.settings.LOLLIPOPMouseEvent==true){
          var LOLLIPOPMouseOnTooltip = d3.select("body")
              .append("div")
              .attr("class","NGCircosLOLLIPOPTooltip")
              .attr("id","NGCircosLOLLIPOPTooltip")
              .style("opacity",0);

          var LOLLIPOPMouseOn = svg.selectAll("#NGCircosLOLLIPOP_homo,#NGCircosLOLLIPOP_hetero_lefthalf,#NGCircosLOLLIPOP,#NGCircosLOLLIPOP_hetero_righthalf");

          if(self.settings.LOLLIPOPMouseOverDisplay==true){
              LOLLIPOPMouseOn.on("mouseover",function(d){
                    if(self.ticksOffset != undefined){
                      LOLLIPOPMouseOnTooltip.html(function(){if(self.settings.LOLLIPOPMouseOverTooltipsSetting == "style1"){
                          return "chr : "+d.LOLLIPOP_protein+"<br>chr : "+d.LOLLIPOP_chr+" <br>pos : "+(parseInt(d.LOLLIPOP_pos)+self.ticksOffset)+"<br>strand : "+d.LOLLIPOP_strand+" <br>CancerTypeNumber : "+d.LOLLIPOP_CancerTypeNumber+" <br>AA_pos : "+d.LOLLIPOP_AA_pos+" <br>AA_change : "+d.LOLLIPOP_AA_change+" <br> Consequence : "+d.LOLLIPOP_Consequence+""
                        }else if (self.settings.LOLLIPOPMouseOverTooltipsSetting == "custom") {
                          return self.settings.LOLLIPOPMouseOverTooltipsHtml+d.LOLLIPOP_html
                        }
                      })
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY + 20) + "px")
                        .style("position", self.settings.LOLLIPOPMouseOverTooltipsPosition)
                        .style("background-color", self.settings.LOLLIPOPMouseOverTooltipsBackgroundColor)
                        .style("border-style", self.settings.LOLLIPOPMouseOverTooltipsBorderStyle)
                        .style("border-width", self.settings.LOLLIPOPMouseOverTooltipsBorderWidth)
                        .style("padding", self.settings.LOLLIPOPMouseOverTooltipsPadding)
                        .style("border-radius", self.settings.LOLLIPOPMouseOverTooltipsBorderRadius)
                        .style("opacity", self.settings.LOLLIPOPMouseOverTooltipsOpacity)
                    d3.select(this)
                        .style("r",  function(d,i) { if(self.settings.LOLLIPOPMouseOverCircleSize=="none"){return "";}else{return self.settings.LOLLIPOPMouseOverCircleSize;} })
                        .style("fill",  function(d,i) { if(self.settings.LOLLIPOPMouseOverColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseOverColor;} })
                        .style("opacity",  function(d,i) { if(self.settings.LOLLIPOPMouseOverCircleOpacity=="none"){return "";}else{return self.settings.LOLLIPOPMouseOverCircleOpacity;} })
                        .style("stroke", function(d,i) { if(self.settings.LOLLIPOPMouseOverCircleStrokeColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseOverCircleStrokeColor;} })
                        .style("stroke-width", function(d,i) { if(self.settings.LOLLIPOPMouseOverCircleStrokeWidth=="none"){return "";}else{return self.settings.LOLLIPOPMouseOverCircleStrokeWidth;} });

                    }else{
                      LOLLIPOPMouseOnTooltip.html(function(){if(self.settings.LOLLIPOPMouseOverTooltipsSetting == "style1"){
                          return "chr : "+d.LOLLIPOP_protein+"<br>chr : "+d.LOLLIPOP_chr+" <br>pos : "+d.LOLLIPOP_pos+"<br>strand : "+d.LOLLIPOP_strand+" <br>CancerTypeNumber : "+d.LOLLIPOP_CancerTypeNumber+" <br>AA_pos : "+d.LOLLIPOP_AA_pos+" <br>AA_change : "+d.LOLLIPOP_AA_change+" <br> Consequence : "+d.LOLLIPOP_Consequence+""
                        }else if (self.settings.LOLLIPOPMouseOverTooltipsSetting == "custom") {
                          return self.settings.LOLLIPOPMouseOverTooltipsHtml+d.LOLLIPOP_html
                        }
                      })
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY + 20) + "px")
                        .style("position", self.settings.LOLLIPOPMouseOverTooltipsPosition)
                        .style("background-color", self.settings.LOLLIPOPMouseOverTooltipsBackgroundColor)
                        .style("border-style", self.settings.LOLLIPOPMouseOverTooltipsBorderStyle)
                        .style("border-width", self.settings.LOLLIPOPMouseOverTooltipsBorderWidth)
                        .style("padding", self.settings.LOLLIPOPMouseOverTooltipsPadding)
                        .style("border-radius", self.settings.LOLLIPOPMouseOverTooltipsBorderRadius)
                        .style("opacity", self.settings.LOLLIPOPMouseOverTooltipsOpacity)
                    d3.select(this)
                        .style("r",  function(d,i) { if(self.settings.LOLLIPOPMouseOverCircleSize=="none"){return "";}else{return self.settings.LOLLIPOPMouseOverCircleSize;} })
                        .style("fill",  function(d,i) { if(self.settings.LOLLIPOPMouseOverColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseOverColor;} })
                        .style("opacity",  function(d,i) { if(self.settings.LOLLIPOPMouseOverCircleOpacity=="none"){return "";}else{return self.settings.LOLLIPOPMouseOverCircleOpacity;} })
                        .style("stroke", function(d,i) { if(self.settings.LOLLIPOPMouseOverCircleStrokeColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseOverCircleStrokeColor;} })
                        .style("stroke-width", function(d,i) { if(self.settings.LOLLIPOPMouseOverCircleStrokeWidth=="none"){return "";}else{return self.settings.LOLLIPOPMouseOverCircleStrokeWidth;} });

                    }
                                  })
          }
          
          if(self.settings.LOLLIPOPMouseClickDisplay==true && self.settings.LOLLIPOPxlink ==true){
              throw new Error('xlink and click display cannot be true at same time.');
          }else if (self.settings.LOLLIPOPMouseClickDisplay==true) {
              LOLLIPOPMouseOn.on("click",function(d){
                  d3.select(this)
                      .style("r",  function(d,i) { if(self.settings.LOLLIPOPMouseClickCircleSize=="none"){return "";}else{return self.settings.LOLLIPOPMouseClickCircleSize;} })
                      .style("fill",  function(d,i) { if(self.settings.LOLLIPOPMouseClickColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseClickColor;} })
                      .style("opacity",  function(d,i) { if(self.settings.LOLLIPOPMouseClickCircleOpacity=="none"){return "";}else{return self.settings.LOLLIPOPMouseClickCircleOpacity;} })
                      .style("stroke", function(d,i) { if(self.settings.LOLLIPOPMouseClickCircleStrokeColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseClickCircleStrokeColor;} })
                      .style("stroke-width", function(d,i) { if(self.settings.LOLLIPOPMouseClickCircleStrokeWidth=="none"){return "";}else{return self.settings.LOLLIPOPMouseClickCircleStrokeWidth;} });
                  d3.select("#"+d.LOLLIPOP_click_label)
                      .style("opacity", self.settings.LOLLIPOPMouseClickTextOpacity)
                      .style("fill", self.settings.LOLLIPOPMouseClickTextColor)
                      .style("font-size", self.settings.LOLLIPOPMouseClickTextSize)
                      .attr("x", d.points[0].x+self.settings.LOLLIPOPMouseClickTextPostionX)
                      .attr("y", d.points[0].y+self.settings.LOLLIPOPMouseClickTextPostionY);
              })
          }else if (self.settings.LOLLIPOPxlink == true){
              svg.selectAll(".NGCircosLOLLIPOP_hetero")
                .selectAll("a")
                .attr("xlink:href", function(d){return d.LOLLIPOP_link});
            
              svg.selectAll(".NGCircosLOLLIPOP_homo")
              .selectAll("a")
              .attr("xlink:href", function(d){return d.LOLLIPOP_link});
            
              svg.selectAll(".NGCircosLOLLIPOP")
              .selectAll("a")
              .attr("xlink:href", function(d){return d.LOLLIPOP_link});
                  
          }

          if(self.settings.LOLLIPOPMouseClickTextDrag==true){
              svg.selectAll("text.dragText").call(drag);
          }

          if(self.settings.LOLLIPOPMouseDownDisplay==true){
              LOLLIPOPMouseOn.on("mousedown",function(d){
                  d3.select(this)
                      .style("r", function(d,i) { if(self.settings.LOLLIPOPMouseDownCircleSize=="none"){return "";}else{return self.settings.LOLLIPOPMouseDownCircleSize;} })
                      .style("fill", function(d,i) { if(self.settings.LOLLIPOPMouseDownColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseDownColor;} })
                      .style("opacity", function(d,i) { if(self.settings.LOLLIPOPMouseDownCircleOpacity=="none"){return "";}else{return self.settings.LOLLIPOPMouseDownCircleOpacity;} })
                      .style("stroke", function(d,i) { if(self.settings.LOLLIPOPMouseDownCircleStrokeColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseDownCircleStrokeColor;} })
                      .style("stroke-width", function(d,i) { if(self.settings.LOLLIPOPMouseDownCircleStrokeWidth=="none"){return "";}else{return self.settings.LOLLIPOPMouseDownCircleStrokeWidth;} });
              })
          }
          if(self.settings.LOLLIPOPMouseEnterDisplay==true){
              LOLLIPOPMouseOn.on("mouseenter",function(d){
                  d3.select(this)
                      .style("r", function(d,i) { if(self.settings.LOLLIPOPMouseEnterCircleSize=="none"){return "";}else{return self.settings.LOLLIPOPMouseEnterCircleSize;} })
                      .style("fill", function(d,i) { if(self.settings.LOLLIPOPMouseEnterColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseEnterColor;} })
                      .style("opacity", function(d,i) { if(self.settings.LOLLIPOPMouseEnterCircleOpacity=="none"){return "";}else{return self.settings.LOLLIPOPMouseEnterCircleOpacity;} })
                      .style("stroke", function(d,i) { if(self.settings.LOLLIPOPMouseEnterCircleStrokeColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseEnterCircleStrokeColor;} })
                      .style("stroke-width", function(d,i) { if(self.settings.LOLLIPOPMouseEnterCircleStrokeWidth=="none"){return "";}else{return self.settings.LOLLIPOPMouseEnterCircleStrokeWidth;} });
              })
          }
          if(self.settings.LOLLIPOPMouseLeaveDisplay==true){
              LOLLIPOPMouseOn.on("mouseleave",function(d){
                  LOLLIPOPMouseOnTooltip.style("opacity",0.0);
                  d3.select(this)
                      .style("r", function(d,i) { if(self.settings.LOLLIPOPMouseLeaveCircleSize=="none"){return "";}else{return self.settings.LOLLIPOPMouseLeaveCircleSize;} })
                      .style("fill", function(d,i) { if(self.settings.LOLLIPOPMouseLeaveColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseLeaveColor;} })
                      .style("opacity", function(d,i) { if(self.settings.LOLLIPOPMouseLeaveCircleOpacity=="none"){return "";}else{return self.settings.LOLLIPOPMouseLeaveCircleOpacity;} })
                      .style("stroke", function(d,i) { if(self.settings.LOLLIPOPMouseLeaveCircleStrokeColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseLeaveCircleStrokeColor;} })
                      .style("stroke-width", function(d,i) { if(self.settings.LOLLIPOPMouseLeaveCircleStrokeWidth=="none"){return "";}else{return self.settings.LOLLIPOPMouseLeaveCircleStrokeWidth;} });
              })
          }
          if(self.settings.LOLLIPOPMouseUpDisplay==true){
              LOLLIPOPMouseOn.on("mouseup",function(d){
                  d3.select(this)
                      .style("r", function(d,i) { if(self.settings.LOLLIPOPMouseUpCircleSize=="none"){return "";}else{return self.settings.LOLLIPOPMouseUpCircleSize;} })
                      .style("fill", function(d,i) { if(self.settings.LOLLIPOPMouseUpColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseUpColor;} })
                      .style("opacity", function(d,i) { if(self.settings.LOLLIPOPMouseUpCircleOpacity=="none"){return "";}else{return self.settings.LOLLIPOPMouseUpCircleOpacity;} })
                      .style("stroke", function(d,i) { if(self.settings.LOLLIPOPMouseUpCircleStrokeColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseUpCircleStrokeColor;} })
                      .style("stroke-width", function(d,i) { if(self.settings.LOLLIPOPMouseUpCircleStrokeWidth=="none"){return "";}else{return self.settings.LOLLIPOPMouseUpCircleStrokeWidth;} });
              })
          }
          if(self.settings.LOLLIPOPMouseMoveDisplay==true){
              LOLLIPOPMouseOn.on("mousemove",function(d){
                  d3.select(this)
                      .style("r", function(d,i) { if(self.settings.LOLLIPOPMouseMoveCircleSize=="none"){return "";}else{return self.settings.LOLLIPOPMouseMoveCircleSize;} })
                      .style("fill", function(d,i) { if(self.settings.LOLLIPOPMouseMoveColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseMoveColor;} })
                      .style("opacity", function(d,i) { if(self.settings.LOLLIPOPMouseMoveCircleOpacity=="none"){return "";}else{return self.settings.LOLLIPOPMouseMoveCircleOpacity;} })
                      .style("stroke", function(d,i) { if(self.settings.LOLLIPOPMouseMoveCircleStrokeColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseMoveCircleStrokeColor;} })
                      .style("stroke-width", function(d,i) { if(self.settings.LOLLIPOPMouseMoveCircleStrokeWidth=="none"){return "";}else{return self.settings.LOLLIPOPMouseMoveCircleStrokeWidth;} });
                  LOLLIPOPMouseOnTooltip.style("left", (d3.event.pageX) + "px")
                  .style("top", (d3.event.pageY + 20) + "px");
              })
          }
          if(self.settings.LOLLIPOPMouseOutDisplay==true){
              LOLLIPOPMouseOn.on("mouseout",function(d){
                  LOLLIPOPMouseOnTooltip.style("opacity",0.0);
                  d3.select(this)
                      .transition()
                      .duration(self.settings.LOLLIPOPMouseOutAnimationTime)
                      .style("r", function(d,i) { if(self.settings.LOLLIPOPMouseOutCircleSize=="none"){return "";}else{return self.settings.LOLLIPOPMouseOutCircleSize;} })
                      .style("fill", function(d,i) { if(self.settings.LOLLIPOPMouseOutColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseOutColor;} })
                      .style("opacity", function(d,i) { if(self.settings.LOLLIPOPMouseOutCircleOpacity=="none"){return "";}else{return self.settings.LOLLIPOPMouseOutCircleOpacity;} })
                      .style("stroke", function(d,i) { if(self.settings.LOLLIPOPMouseOutCircleStrokeColor=="none"){return "";}else{return self.settings.LOLLIPOPMouseOutCircleStrokeColor;} })
                      .style("stroke-width", function(d,i) { if(self.settings.LOLLIPOPMouseOutCircleStrokeWidth=="none"){return "";}else{return self.settings.LOLLIPOPMouseOutCircleStrokeWidth;} });
              });
          }
          
          //console.log(LOLLIPOPMouseOn);
      }

      
      
    }
    
     if(self.ARC.length > 0){
              function NGCircosARC(d) {
                return self.ARC[arci].map(function(v, i) {
                  var arc_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                  return {
                    startAngle: v.start * arc_k + d[self.initGenome[v.chr]].startAngle,
                    endAngle: v.end * arc_k + d[self.initGenome[v.chr]].startAngle,
                    arc_chr: v.chr,
                    arc_start: v.start,
                    arc_end: v.end,
                    arc_color: v.color,
                    arc_des: v.des,
                    arc_link: v.link,
                    arc_click_label: "arc"+arci+"_"+i,
                    arc_innerRadius:innerRadius+self.ARCsettings.innerRadius,
                    arc_outerRadius:outerRadius+self.ARCsettings.outerRadius,
                    arc_html:v.html,
                  };
                });
              }
              function NGCircosARC2(d) {
                return self.ARC[arci].map(function(v, i) {
                  var arc_k = (d[self.initGenome[v.chr]].endAngle - d[self.initGenome[v.chr]].startAngle) / d[self.initGenome[v.chr]].value;
                  return {
                    startAngle: 3*Math.PI-(v.start * arc_k + d[self.initGenome[v.chr]].startAngle),
                    endAngle: 3*Math.PI-(v.end * arc_k + d[self.initGenome[v.chr]].startAngle),
                    arc_chr: v.chr,
                    arc_start: v.start,
                    arc_end: v.end,
                    arc_color: v.color,
                    arc_des: v.des,
                    arc_link: v.link,
                    arc_click_label: "arc"+arci+"_"+i,
                    arc_innerRadius:innerRadius+self.ARCsettings.innerRadius,
                    arc_outerRadius:outerRadius+self.ARCsettings.outerRadius,
                    arc_html:v.html,
                  };
                });
              }
          for(var arci=0; arci<self.ARC.length; arci++){
              self.update_ARCsettings(self.ARCConfig[arci]);
              if(drawTime == self.ARCsettings.compareGroup){
                if(self.ARCsettings.compareGroup == 1){
                  var arc_objects = NGCircosARC(chord.groups())
                }else{
                  var arc_objects = NGCircosARC2(chord.groups())
                }

                if(self.ARCsettings.ARCAnimationDisplay == true){
                  svg.append("g")
                      .attr("class", "NGCircosARC")
                      .selectAll("path.NGCircosARC")
                        .data(arc_objects)
                        .enter()
                      .append("a")
                      .attr("xlink:href", function(d){if(self.settings.ARCxlink == true){return d.arc_link;}})
                      .append("path")
                      .attr("class", "NGCircosARC")
                      .attr("fill", function(d,i) { return d.arc_color; })
//                      .attr("d", function(d,i) { return arc(d,i); })
                      .style("opacity", self.ARCsettings.ARCOpacity)
                      .transition()
                      .delay(function(d,i){
                        return (i+1) * self.ARCsettings.ARCAnimationDelay;
                      })
                      .duration(self.ARCsettings.ARCAnimationTime)
                      .ease(self.ARCsettings.ARCAnimationType)
                      .attrTween("d", function(d,i,a) { 
                        return function(t){
                          var arc=d3.svg.arc().innerRadius(d.arc_innerRadius).outerRadius(d.arc_outerRadius).startAngle(d.startAngle).endAngle(d.startAngle+(d.endAngle-d.startAngle)*t);
                          return arc(d,i);} 
                      })

                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                }else{
                  svg.append("g")
                      .attr("class", "NGCircosARC")
                      .selectAll("path.NGCircosARC")
                        .data(arc_objects)
                        .enter()
                      .append("a")
                      .attr("xlink:href", function(d){if(self.settings.ARCxlink == true){return d.arc_link;}})
                      .append("path")
                      .attr("class", "NGCircosARC")
                      .attr("fill", function(d,i) { return d.arc_color; })
                      .style("opacity",  self.ARCsettings.ARCOpacity)
                      .attr("d", function(d,i) { 
                        var arc=d3.svg.arc().innerRadius(d.arc_innerRadius).outerRadius(d.arc_outerRadius);
                        return arc(d,i); })
                      .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                }
                
                    
                    if(self.settings.ARCMouseClickTextFromData=="first"){
                        svg.append("g")
                            .attr("class", "NGCircosARClabel")
                          .selectAll("text")
                            .data(arc_objects)
                            .enter().append("text")
                            .attr("class", "dragText")
                            .attr("id", function(d,i) { return "arc"+arci+"_"+i; })
                            .text(function(d) { return d.arc_chr; })
                            .attr("x", -1000)
                            .attr("y", -1000)
                            .style("opacity", 0)
                            .style("font-size", 1)
                            .attr("fill", self.ARCsettings.ARCFillColor)
                            .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                    }
                    if(self.settings.ARCMouseClickTextFromData=="second"){
                        svg.append("g")
                            .attr("class", "NGCircosARClabel")
                          .selectAll("text")
                            .data(arc_objects)
                            .enter().append("text")
                            .attr("class", "dragText")
                            .attr("id", function(d,i) { return "arc"+arci+"_"+i; })
                            .text(function(d) { return d.arc_start; })
                            .attr("x", -1000)
                            .attr("y", -1000)
                            .style("opacity", 0)
                            .style("font-size", 1)
                            .attr("fill", self.ARCsettings.ARCFillColor)
                            .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                    }
                    if(self.settings.ARCMouseClickTextFromData=="third"){
                        svg.append("g")
                            .attr("class", "NGCircosARClabel")
                          .selectAll("text")
                            .data(arc_objects)
                            .enter().append("text")
                            .attr("class", "dragText")
                            .attr("id", function(d,i) { return "arc"+arci+"_"+i; })
                            .text(function(d) { return d.arc_end; })
                            .attr("x", -1000)
                            .attr("y", -1000)
                            .style("opacity", 0)
                            .style("font-size", 1)
                            .attr("fill", self.ARCsettings.ARCFillColor)
                            .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                    }
                    if(self.settings.ARCMouseClickTextFromData=="fifth"){
                        svg.append("g")
                            .attr("class", "NGCircosARClabel")
                          .selectAll("text")
                            .data(arc_objects)
                            .enter().append("text")
                            .attr("class", "dragText")
                            .attr("id", function(d,i) { return "arc"+arci+"_"+i; })
                            .text(function(d) { return d.arc_des; })
                            .attr("x", -1000)
                            .attr("y", -1000)
                            .style("opacity", 0)
                            .style("font-size", 1)
                            .attr("fill", self.ARCsettings.ARCFillColor)
                            .attr("transform", "translate(" + compareMoveDistance + "," + 0 + ")");
                    }

              }

              
              self.init_ARCsettings();

          }

          if(self.settings.ARCMouseEvent==true){
              var ARCMouseOnTooltip = d3.select("body")
                  .append("div")
                  .attr("class","NGCircosARCTooltip")
                  .attr("id","NGCircosARCTooltip")
                  .style("opacity",0);

              var ARCMouseOn = svg.selectAll("path.NGCircosARC");
              if(self.settings.ARCMouseOverDisplay==true){
                     ARCMouseOn.on("mouseover",function(d){
                        if(self.ticksOffset != undefined){
                          ARCMouseOnTooltip.html(function(){if(self.settings.ARCMouseOverTooltipsSetting == "style1"){
                              return "item : "+d.arc_chr+"<br>start : "+(parseInt(d.arc_start)+self.ticksOffset)+"<br>end : "+(parseInt(d.arc_end)+self.ticksOffset)+" <br>des : "+d.arc_des+""
                            }else if (self.settings.ARCMouseOverTooltipsSetting == "custom") {
                              return self.settings.ARCMouseOverTooltipsHtml+d.arc_html
                            }
                          })
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY + 20) + "px")
                            .style("position", self.settings.ARCMouseOverTooltipsPosition)
                            .style("background-color", self.settings.ARCMouseOverTooltipsBackgroundColor)
                            .style("border-style", self.settings.ARCMouseOverTooltipsBorderStyle)
                            .style("border-width", self.settings.ARCMouseOverTooltipsBorderWidth)
                            .style("padding", self.settings.ARCMouseOverTooltipsPadding)
                            .style("border-radius", self.settings.ARCMouseOverTooltipsBorderRadius)
                            .style("opacity", self.settings.ARCMouseOverTooltipsOpacity)
                               d3.select(this)
                            .style("fill",  function(d,i) { if(self.settings.ARCMouseOverColor=="none"){return "";}else{return self.settings.ARCMouseOverColor;} })
                            .style("opacity",  function(d,i) { if(self.settings.ARCMouseOverArcOpacity=="none"){return "";}else{return self.settings.ARCMouseOverArcOpacity;} })
                            .style("stroke", function(d,i) { if(self.settings.ARCMouseOverArcStrokeColor=="none"){return "";}else{return self.settings.ARCMouseOverArcStrokeColor;} })
                            .style("stroke-width", function(d,i) { if(self.settings.ARCMouseOverArcStrokeWidth=="none"){return "";}else{return self.settings.ARCMouseOverArcStrokeWidth;} });
                        }else{
                          ARCMouseOnTooltip.html(function(){if(self.settings.ARCMouseOverTooltipsSetting == "style1"){
                              return "item : "+d.arc_chr+"<br>start : "+(parseInt(d.arc_start)+self.ticksOffset)+"<br>end : "+(parseInt(d.arc_end)+self.ticksOffset)+" <br>des : "+d.arc_des+""
                            }else if (self.settings.ARCMouseOverTooltipsSetting == "custom") {
                              return self.settings.ARCMouseOverTooltipsHtml+d.arc_html
                            }
                          })
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY + 20) + "px")
                            .style("position", self.settings.ARCMouseOverTooltipsPosition)
                            .style("background-color", self.settings.ARCMouseOverTooltipsBackgroundColor)
                            .style("border-style", self.settings.ARCMouseOverTooltipsBorderStyle)
                            .style("border-width", self.settings.ARCMouseOverTooltipsBorderWidth)
                            .style("padding", self.settings.ARCMouseOverTooltipsPadding)
                            .style("border-radius", self.settings.ARCMouseOverTooltipsBorderRadius)
                            .style("opacity", self.settings.ARCMouseOverTooltipsOpacity)
                               d3.select(this)
                            .style("fill",  function(d,i) { if(self.settings.ARCMouseOverColor=="none"){return "";}else{return self.settings.ARCMouseOverColor;} })
                            .style("opacity",  function(d,i) { if(self.settings.ARCMouseOverArcOpacity=="none"){return "";}else{return self.settings.ARCMouseOverArcOpacity;} })
                            .style("stroke", function(d,i) { if(self.settings.ARCMouseOverArcStrokeColor=="none"){return "";}else{return self.settings.ARCMouseOverArcStrokeColor;} })
                            .style("stroke-width", function(d,i) { if(self.settings.ARCMouseOverArcStrokeWidth=="none"){return "";}else{return self.settings.ARCMouseOverArcStrokeWidth;} });
                        }
                        
                     })
              }
              if(self.settings.ARCMouseClickDisplay==true){
                     ARCMouseOn.on("click",function(d){
                         d3.select(this)
                             .style("fill",  function(d,i) { if(self.settings.ARCMouseClickColor=="none"){return "";}else{return self.settings.ARCMouseClickColor;} })
                             .style("opacity",  function(d,i) { if(self.settings.ARCMouseClickArcOpacity=="none"){return "";}else{return self.settings.ARCMouseClickArcOpacity;} })
                             .style("stroke", function(d,i) { if(self.settings.ARCMouseClickArcStrokeColor=="none"){return "";}else{return self.settings.ARCMouseClickArcStrokeColor;} })
                             .style("stroke-width", function(d,i) { if(self.settings.ARCMouseClickArcStrokeWidth=="none"){return "";}else{return self.settings.ARCMouseClickArcStrokeWidth;} });
                         d3.select("#"+d.arc_click_label)
                             .style("opacity", self.settings.ARCMouseClickTextOpacity)
                             .style("fill", self.settings.ARCMouseClickTextColor)
                             .style("font-size", self.settings.ARCMouseClickTextSize)
                             .attr("x", d3.event.x - self.svgWidth/2 + self.settings.ARCMouseClickTextPostionX)
                             .attr("y", d3.event.y - self.svgHeight/2 + self.settings.ARCMouseClickTextPostionY);
                     })
              }

              if(self.settings.ARCMouseClickTextDrag==true){
                  svg.selectAll("text.dragText").call(drag);
              }

              if(self.settings.ARCMouseDownDisplay==true){
                     ARCMouseOn.on("mousedown",function(d){
                        d3.select(this)
                            .style("fill",  function(d,i) { if(self.settings.ARCMouseDownColor=="none"){return "";}else{return self.settings.ARCMouseDownColor;} })
                            .style("opacity",  function(d,i) { if(self.settings.ARCMouseDownArcOpacity=="none"){return "";}else{return self.settings.ARCMouseDownArcOpacity;} })
                            .style("stroke", function(d,i) { if(self.settings.ARCMouseDownArcStrokeColor=="none"){return "";}else{return self.settings.ARCMouseDownArcStrokeColor;} })
                            .style("stroke-width", function(d,i) { if(self.settings.ARCMouseDownArcStrokeWidth=="none"){return "";}else{return self.settings.ARCMouseDownArcStrokeWidth;} });
                    })
              }

              if(self.settings.ARCMouseEnterDisplay==true){
                    ARCMouseOn.on("mouseenter",function(d){
                        d3.select(this)
                            .style("fill", function(d,i) { if(self.settings.ARCMouseEnterColor=="none"){return "";}else{return self.settings.ARCMouseEnterColor;} })
                            .style("opacity", function(d,i) { if(self.settings.ARCMouseEnterArcOpacity=="none"){return "";}else{return self.settings.ARCMouseEnterArcOpacity;} })
                            .style("stroke", function(d,i) { if(self.settings.ARCMouseEnterArcStrokeColor=="none"){return "";}else{return self.settings.ARCMouseEnterArcStrokeColor;} })
                            .style("stroke-width", function(d,i) { if(self.settings.ARCMouseEnterArcStrokeWidth=="none"){return "";}else{return self.settings.ARCMouseEnterArcStrokeWidth;} });
                    })
              }

              if(self.settings.ARCMouseLeaveDisplay==true){
                    ARCMouseOn.on("mouseleave",function(d){
                        ARCMouseOnTooltip.style("opacity",0.0);
                        d3.select(this)
                            .style("fill",  function(d,i) { if(self.settings.ARCMouseLeaveColor=="none"){return "";}else{return self.settings.ARCMouseLeaveColor;} })
                            .style("opacity",  function(d,i) { if(self.settings.ARCMouseLeaveArcOpacity=="none"){return "";}else{return self.settings.ARCMouseLeaveArcOpacity;} })
                            .style("stroke", function(d,i) { if(self.settings.ARCMouseLeaveArcStrokeColor=="none"){return "";}else{return self.settings.ARCMouseLeaveArcStrokeColor;} })
                            .style("stroke-width", function(d,i) { if(self.settings.ARCMouseLeaveArcStrokeWidth=="none"){return "";}else{return self.settings.ARCMouseLeaveArcStrokeWidth;} });
                    })
              }

              if(self.settings.ARCMouseUpDisplay==true){
                     ARCMouseOn.on("mouseup",function(d){
                         d3.select(this)
                            .style("fill",  function(d,i) { if(self.settings.ARCMouseUpColor=="none"){return "";}else{return self.settings.ARCMouseUpColor;} })
                            .style("opacity",  function(d,i) { if(self.settings.ARCMouseUpArcOpacity=="none"){return "";}else{return self.settings.ARCMouseUpArcOpacity;} })
                            .style("stroke", function(d,i) { if(self.settings.ARCMouseUpArcStrokeColor=="none"){return "";}else{return self.settings.ARCMouseUpArcStrokeColor;} })
                            .style("stroke-width", function(d,i) { if(self.settings.ARCMouseUpArcStrokeWidth=="none"){return "";}else{return self.settings.ARCMouseUpArcStrokeWidth;} });
                     })
              }

              if(self.settings.ARCMouseMoveDisplay==true){
                     ARCMouseOn.on("mousemove",function(d){
                         d3.select(this)
                            .style("fill",  function(d,i) { if(self.settings.ARCMouseMoveColor=="none"){return "";}else{return self.settings.ARCMouseMoveColor;} })
                            .style("opacity",  function(d,i) { if(self.settings.ARCMouseMoveArcOpacity=="none"){return "";}else{return self.settings.ARCMouseMoveArcOpacity;} })
                            .style("stroke", function(d,i) { if(self.settings.ARCMouseMoveArcStrokeColor=="none"){return "";}else{return self.settings.ARCMouseMoveArcStrokeColor;} })
                            .style("stroke-width", function(d,i) { if(self.settings.ARCMouseMoveArcStrokeWidth=="none"){return "";}else{return self.settings.ARCMouseMoveArcStrokeWidth;} });
                         ARCMouseOnTooltip.style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY + 20) + "px");
                     })
              }

              if(self.settings.ARCMouseOutDisplay==true){
                     ARCMouseOn.on("mouseout",function(d){
                         ARCMouseOnTooltip.style("opacity",0.0);
                         d3.select(this)
                             .transition()
                             .duration(self.settings.ARCMouseOutAnimationTime)
                            .style("fill",  function(d,i) { if(self.settings.ARCMouseOutColor=="none"){return "";}else{return self.settings.ARCMouseOutColor;} })
                            .style("opacity",  function(d,i) { if(self.settings.ARCMouseOutArcOpacity=="none"){return "";}else{return self.settings.ARCMouseOutArcOpacity;} })
                            .style("stroke", function(d,i) { if(self.settings.ARCMouseOutArcStrokeColor=="none"){return "";}else{return self.settings.ARCMouseOutArcStrokeColor;} })
                            .style("stroke-width", function(d,i) { if(self.settings.ARCMouseOutArcStrokeWidth=="none"){return "";}else{return self.settings.ARCMouseOutArcStrokeWidth;} });
                     });
              }
          }

      }
      
      if(self.AUXILIARYLINE.length > 0 && drawTime == 1){
        for(var auxiliarylinei=0; auxiliarylinei<self.AUXILIARYLINE.length; auxiliarylinei++){
          self.update_AUXILIARYLINEsettings(self.AUXILIARYLINEConfig[auxiliarylinei]);
              if(self.AUXILIARYLINEsettings.AUXILIARYLINEMarker == true){
                if(self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerType == 'circle'){
                  var data = [
                  {id:0,name:self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerType,path: 'M 0, 0 m -5, 0  a 5,5 0 1,0 10,0  a 5,5 0 1,0 -10,0', viewbox: '-6 -6 12 12' }
                  ]
                }else if(self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerType == 'square'){
                  var data = [
                  { id: 0, name: 'square', path: 'M 0,0 m -5,-5 L 5,-5 L 5,5 L -5,5 Z', viewbox: '-5 -5 10 10' }
                  ]
                }else if(self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerType == 'arrow'){
                  var data = [
                      { id: 0, name: 'arrow', path: 'M 0,0 m -5,-5 L 5,0 L -5,5 Z', viewbox: '-5 -5 10 10' }
                  ]
                }else if(self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerType == 'stub'){
                  var data = [
                      { id: 0, name: 'stub', path: 'M 0,0 m -1,-5 L 1,-5 L 1,5 L -1,5 Z', viewbox: '-1 -5 2 10' }
                  ]
                }
              }else{
                var data = [
                {id:0,name:self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerType,path: 'M 0, 0 m -5, 0 ', viewbox: '-6 -6 12 12' }
                ]
              }
                        //console.log(data)
    //          var color = ,
    //                margin = {top: 50, right: 20, bottom: 30, left: 40},
    //                width = 960 - margin.left - margin.right,
    //                height = 500 - margin.top - margin.bottom;

    //            var svg = d3.select('body').append('svg:svg')
    //              .attr('width', width + margin.left + margin.right)
    //              .attr('height', height + margin.top + margin.bottom);

  //              var data2 = [self.AUXILIARYLINEsettings.startX,self.AUXILIARYLINEsettings.startY,(self.AUXILIARYLINEsettings.startX+self.AUXILIARYLINEsettings.endX)/2,(self.AUXILIARYLINEsettings.startY+self.AUXILIARYLINEsettings.endY)/2,self.AUXILIARYLINEsettings.endX,self.AUXILIARYLINEsettings.endY]
                var defs = svg.append('svg:defs')

                var paths = svg.append('svg:g')
                  .attr('id', 'markers');

                var marker = defs.selectAll('marker')
                  .data(data)
                  .enter()
                  .append('svg:marker')
                    .attr('id', function(d){ return 'marker_' + d.name+auxiliarylinei})
                    .attr('markerHeight', self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerHeight)
                    .attr('markerWidth', self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerWidth)
                    .attr('markerUnits', 'strokeWidth')
                    .attr('orient', 'auto')
                    .attr('refX', 0)
                    .attr('refY', 0)
                    .attr('viewBox', function(d){ return d.viewbox })
                    .append('svg:path')
                      .attr('d', function(d){ 
  //                      console.log(self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerColor)
                        return d.path })
                      .attr('fill', self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerColor);

                var line_generator = d3.svg.line()
                                      .interpolate("cardinal")
                
                if(self.AUXILIARYLINEsettings.AUXILIARYLINEAnimationDispaly == false){
                  var path = paths.selectAll('path')
                  .data(data)
                  .enter()
                  .append('svg:path')
  //                  .attr('d', function(d,i){ return 'M' +self.AUXILIARYLINEsettings.startX+',' + self.AUXILIARYLINEsettings.startY + ' L ' + self.AUXILIARYLINEsettings.endX + ',' + self.AUXILIARYLINEsettings.endY + '' })
                    .attr('d', function(d,i){ 
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINEType=="straight"){
                        return 'M' +self.AUXILIARYLINEsettings.startX+',' + self.AUXILIARYLINEsettings.startY + ' L ' + self.AUXILIARYLINEsettings.endX + ',' + self.AUXILIARYLINEsettings.endY + '' 
                      }
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINEType=="curve"){
                        return 'M' +self.AUXILIARYLINEsettings.startX+',' + self.AUXILIARYLINEsettings.startY + ' Q '+ self.AUXILIARYLINEsettings.AUXILIARYLINEControlPointX +','+ self.AUXILIARYLINEsettings.AUXILIARYLINEControlPointY +' '+ self.AUXILIARYLINEsettings.endX + ',' + self.AUXILIARYLINEsettings.endY + '' 
                      }
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINEType=="broken"){
                        return 'M' +self.AUXILIARYLINEsettings.startX+',' + self.AUXILIARYLINEsettings.startY + ' L '+ self.AUXILIARYLINEsettings.AUXILIARYLINEControlPointX +','+ self.AUXILIARYLINEsettings.AUXILIARYLINEControlPointY +' '+ self.AUXILIARYLINEsettings.endX + ',' + self.AUXILIARYLINEsettings.endY + '' 

                      }
                      })
  //                  .attr('d', line_generator(data2))
                    .attr('fill','none')
                    .attr('stroke', self.AUXILIARYLINEsettings.AUXILIARYLINEColor)
                    .attr('stroke-width', self.AUXILIARYLINEsettings.AUXILIARYLINEWidth)
                    .attr("stroke-dasharray",function (d) {
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINELineType=="solid"){return 0;}
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINELineType=="dot"){return self.AUXILIARYLINEsettings.AUXILIARYLINEDashArray;}
                    })
                    .attr('stroke-linecap', 'round')
                    .attr('marker-start', function(d,i){ 
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerPosition == 1 || self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerPosition == 3){
                        return 'url(#marker_' + d.name +auxiliarylinei+ ')'
                      }else{
                        return 0
                      }
                      })
                    .attr('marker-end', function(d,i){ 
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerPosition == 2 || self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerPosition == 3){
                        return 'url(#marker_' + d.name  +auxiliarylinei+ ')'
                      }else{
                        return 0
                      }
                      });
                }
                if(self.AUXILIARYLINEsettings.AUXILIARYLINEAnimationDispaly == true){
                  var path = paths.selectAll('path')
                  .data(data)
                  .enter()
                  .append('svg:path')
                  .attr('d', function(d,i){ 
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINEType=="straight"){
                        return 'M' +self.AUXILIARYLINEsettings.startX+',' + self.AUXILIARYLINEsettings.startY + ' L ' + self.AUXILIARYLINEsettings.startX + ',' + self.AUXILIARYLINEsettings.startY + '' 
                      }
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINEType=="curve"){
                        return 'M' +self.AUXILIARYLINEsettings.startX+',' + self.AUXILIARYLINEsettings.startY + ' Q '+ self.AUXILIARYLINEsettings.startX +','+ self.AUXILIARYLINEsettings.startY +' '+ self.AUXILIARYLINEsettings.startX + ',' + self.AUXILIARYLINEsettings.startY + '' 
                      }
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINEType=="broken"){
                        return 'M' +self.AUXILIARYLINEsettings.startX+',' + self.AUXILIARYLINEsettings.startY + ' L '+ self.AUXILIARYLINEsettings.startX +','+ self.AUXILIARYLINEsettings.startY +' '+ self.AUXILIARYLINEsettings.startX + ',' + self.AUXILIARYLINEsettings.startY + '' 

                      }
                      })
                    .transition()
                  .delay(self.AUXILIARYLINEsettings.AUXILIARYLINEAnimationDelay)
                  .duration(self.AUXILIARYLINEsettings.AUXILIARYLINEAnimationTime)
                  .ease(self.AUXILIARYLINEsettings.AUXILIARYLINEAnimationType)
  //                  .attr('d', function(d,i){ return 'M' +self.AUXILIARYLINEsettings.startX+',' + self.AUXILIARYLINEsettings.startY + ' L ' + self.AUXILIARYLINEsettings.endX + ',' + self.AUXILIARYLINEsettings.endY + '' })
                    .attr('d', function(d,i){ 
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINEType=="straight"){
                        return 'M' +self.AUXILIARYLINEsettings.startX+',' + self.AUXILIARYLINEsettings.startY + ' L ' + self.AUXILIARYLINEsettings.endX + ',' + self.AUXILIARYLINEsettings.endY + '' 
                      }
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINEType=="curve"){
                        return 'M' +self.AUXILIARYLINEsettings.startX+',' + self.AUXILIARYLINEsettings.startY + ' Q '+ self.AUXILIARYLINEsettings.AUXILIARYLINEControlPointX +','+ self.AUXILIARYLINEsettings.AUXILIARYLINEControlPointY +' '+ self.AUXILIARYLINEsettings.endX + ',' + self.AUXILIARYLINEsettings.endY + '' 
                      }
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINEType=="broken"){
                        return 'M' +self.AUXILIARYLINEsettings.startX+',' + self.AUXILIARYLINEsettings.startY + ' L '+ self.AUXILIARYLINEsettings.AUXILIARYLINEControlPointX +','+ self.AUXILIARYLINEsettings.AUXILIARYLINEControlPointY +' '+ self.AUXILIARYLINEsettings.endX + ',' + self.AUXILIARYLINEsettings.endY + '' 

                      }
                      })
  //                  .attr('d', line_generator(data2))
                    .attr('fill','none')
                    .attr('stroke', self.AUXILIARYLINEsettings.AUXILIARYLINEColor)
                    .attr('stroke-width', self.AUXILIARYLINEsettings.AUXILIARYLINEWidth)
                    .attr("stroke-dasharray",function (d) {
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINELineType=="solid"){return 0;}
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINELineType=="dot"){return self.AUXILIARYLINEsettings.AUXILIARYLINEDashArray;}
                    })
                    .attr('stroke-linecap', 'round')
                    .attr('marker-start', function(d,i){ 
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerPosition == 1 || self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerPosition == 3){
                        return 'url(#marker_' + d.name +auxiliarylinei+ ')'
                      }else{
                        return 0
                      }
                      })
                    .attr('marker-end', function(d,i){ 
                      if(self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerPosition == 2 || self.AUXILIARYLINEsettings.AUXILIARYLINEMarkerPosition == 3){
                        return 'url(#marker_' + d.name  +auxiliarylinei+ ')'
                      }else{
                        return 0
                      }
                      });
                }
                  
              
    //          lineGenerator = d3.svg.line()
    //                            .x(function(d) {
    //                                return d[0]
    //                            })
    //                            .y(function(d) {
    //                                return d[1];
    //                            });
    //        svg.append("path")
    //           .attr("stroke", self.AUXILIARYLINEsettings.AUXILIARYLINEColor)
    //           .attr("stroke-width",self.AUXILIARYLINEsettings.AUXILIARYLINEWidth)
    //           .attr("stroke-dasharray",function (d) {
    //            if(self.AUXILIARYLINEsettings.AUXILIARYLINELineType=="solid"){return 0;}
    //            if(self.AUXILIARYLINEsettings.AUXILIARYLINELineType=="dot"){return self.AUXILIARYLINEsettings.AUXILIARYLINEDashArray;}
    //          })
    //           .attr("fill","none")
    //           .attr("d",lineGenerator(data))
            
          self.init_AUXILIARYLINEsettings();
        }


      }

            //zhec3

    }
}(jQuery));
