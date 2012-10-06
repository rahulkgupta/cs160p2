//PP2.js//



$(document).ready(function() {
  

  function changeColor(i, colorflag){

    // $("#beam"+(i+1)).setColor()
    // $("#beam"+(i+1)).setColor()
    // $("#beam"+(i+1)).setColor()
    if ((i==1) && (colorflag == true)){
      ($("#beam2").css("background-color", "000000"))
      //($("#beam3").css("background-color", "000000"))
      //($("#beam4").css("background-color", "000000"))
    }
    else{
      ($("#beam2").css("background-color", "FFFFFF"))
      // ($("#beam3").css("background-color", "FFFFFF"))
      // ($("#beam4").css("background-color", "FFFFFF"))
    }

  }





  lens1y = parseInt($("#lens1").css("top"),10)
  lens2y = parseInt($("#lens2").css("top"),10)
  lens3y = parseInt($("#lens3").css("top"),10)



  $("#lens1").click(function() {

    var left = parseInt($(this).css("left"),10)
    var top = parseInt($(this).css("top"), 10)
    var height = parseInt($(this).css("height"), 10)
    var distop = parseInt($("#beam1").css("top"), 10)
    var colorflag = true

    if (top == lens1y){
      var changey = (distop - top) - 0.5 * height
    }
    else{
      changey = lens1y - top
      colorflag = false
    }
    var self = this;
    $(self).animate({
          "top": "+=" + changey + "px"}, function () {  
          changeColor(1, colorflag)      
      }
    );

    

  });

  $("#lens2").click(function() {

    var left = parseInt($(this).css("left"),10)
    var top = parseInt($(this).css("top"), 10)
    var height = parseInt($(this).css("height"), 10)
    var distop = parseInt($("#beam2").css("top"), 10)

    if (top == lens2y){
      var changey = (distop - top) - 0.5 * height
    }
    else{
      changey = lens2y - top
    }
    var self = this;
    $(self).animate({
          "top": "+=" + changey + "px"}, "slow", function () {        
      }
    );

 
  });


    $("#lens3").click(function() {

    var left = parseInt($(this).css("left"),10)
    var top = parseInt($(this).css("top"), 10)
    var height = parseInt($(this).css("height"), 10)
    var distop = parseInt($("#beam3").css("top"), 10)

    if (top == lens3y){
      var changey = (distop - top) - 0.5 * height
    }
    else{
      changey = lens3y - top
    }
    var self = this;
    $(self).animate({
          "top": "+=" + changey + "px"}, "slow", function () {        
      }
    );

   
  });






})