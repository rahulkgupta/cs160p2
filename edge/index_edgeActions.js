/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 913, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Lens1UpEnd");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Lens1}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log(e)
         console.log(sym)
         var down = true
         if (down) {
         	sym.play("Lens1Down")
         	console.log('up')
         } else {
         	sym.play("Lens1Down")
         	console.log("DOWN")
         }
         down = !down
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2864, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'lens3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Lens2}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         
      });
      //Edge binding end

   })("lens3");
   //Edge symbol end:'lens3'

   //=========================================================
   
   //Edge symbol: 'Lens1'
   (function(symbolName) {   
   
   })("Lens1");
   //Edge symbol end:'Lens1'

})(jQuery, AdobeEdge, "EDGE-212141936");