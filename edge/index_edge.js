/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'RoundRect',
            type:'rect',
            rect:['1334px','387px','139px','106px','auto','auto'],
            borderRadius:["77px 77px","10px","10px","75px 75px"],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Prism',
            type:'image',
            rect:['1186px','393px','154px','106px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"glosprismedit2.jpg",'0px','0px']
         },
         {
            id:'Beam4',
            type:'rect',
            rect:['925px','440px','225px','18px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[1,"rgb(0, 0, 0)","solid"],
            transform:[[],['0deg'],['-30deg','0deg'],['1.59']]
         },
         {
            id:'Beam3',
            type:'rect',
            rect:['836px','440px','82px','18px','auto','auto'],
            fill:["rgba(235,241,246,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Beam2',
            type:'rect',
            rect:['759px','440px','82px','18px','auto','auto'],
            fill:["rgba(235,241,246,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Beam1',
            type:'rect',
            rect:['620px','440px','137px','18px','auto','auto'],
            fill:["rgba(235,241,246,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Lens3',
            type:'ellipse',
            rect:['734px','393px','24px','111px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(180,212,241,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Lens2',
            type:'ellipse',
            rect:['895px','393px','24px','111px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(180,212,241,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Lens1',
            type:'ellipse',
            rect:['818px','393px','24px','111px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(180,212,241,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Source',
            type:'ellipse',
            rect:['552px','412px','66px','72px','auto','auto'],
            borderRadius:["59.8% 59.8%","222% 222%","192% 192%","59.8% 59.8%"],
            fill:["rgba(134,107,107,1.00)"],
            stroke:[1,"rgb(0, 0, 0)","solid"],
            transform:[[],['-181deg']]
         },
         {
            id:'Text2',
            type:'text',
            rect:['551px','435px','69px','25px','auto','auto'],
            text:"Source<br>",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Source}": [
            ["color", "background-color", 'rgba(134,107,107,1.00)'],
            ["style", "border-top-left-radius", [59.8,59.8], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "top", '412.24px'],
            ["transform", "rotateZ", '-181deg'],
            ["style", "border-top-right-radius", [222,222], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-left-radius", [59.8,59.8], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '551.61px'],
            ["style", "border-bottom-right-radius", [192,192], {valueTemplate:'@@0@@% @@1@@%'} ]
         ],
         "${_Lens3}": [
            ["style", "top", '392.68px'],
            ["style", "height", '111.41666412354px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '733.66px'],
            ["style", "width", '23.746616363525px']
         ],
         "${_RoundRect}": [
            ["style", "top", '387px'],
            ["style", "border-top-left-radius", [77,77], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '1333.76px'],
            ["style", "border-bottom-left-radius", [75,75], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text2}": [
            ["style", "top", '434.68px'],
            ["style", "height", '25.333333333333px'],
            ["style", "left", '551.39px'],
            ["style", "width", '68.616536458333px']
         ],
         "${_Beam1}": [
            ["style", "top", '439.68px'],
            ["style", "left", '620.39px']
         ],
         "${_Beam3}": [
            ["style", "top", '439.68px'],
            ["style", "left", '836.39px'],
            ["style", "width", '82px']
         ],
         "${_Beam4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '439.68px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '-30deg'],
            ["transform", "scaleX", '1.59'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '925.2px'],
            ["style", "width", '225.47767316326px']
         ],
         "${_Beam2}": [
            ["style", "top", '439.68px'],
            ["style", "left", '759.39px'],
            ["style", "width", '82px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(1,0,0,1.00)'],
            ["style", "width", '2000px'],
            ["style", "height", '1000px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Lens2}": [
            ["style", "top", '392.68px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '111.41666412354px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '894.66px'],
            ["style", "width", '23.746616363525px']
         ],
         "${_Lens1}": [
            ["style", "top", '392.68px'],
            ["style", "height", '111.41666412354px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '817.66px'],
            ["style", "width", '23.746616363525px']
         ],
         "${_Prism}": [
            ["style", "top", '392.68px'],
            ["style", "height", '106.296875px'],
            ["style", "left", '1186.39px'],
            ["style", "width", '153.6px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-212141936");
