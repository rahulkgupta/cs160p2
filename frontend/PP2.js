//PP2.js//



$(document).ready(function() {
  
  lensList = [false, false, false]
  white = "FFFFFF"
  color1 = "00CCFF"
  color2 = "660066"
  color3 = "009900"
  
  function toString(color){
    string = "black " + color + " black"
    console.log(string)
    return string
  }

  function changeColor(lens1down, lens2down, lens3down){

    if ((lens1down==true) && (lens2down == true) && (lens3down == true)){
      ($("#beam2").css("background-color", color1));
      ($("#beam3").css("background-color", color2));
      ($("#beam4").css("background-color", color3));
      ($(".finalLight").css("border-color", toString(color3)));
    }
    else if ((lens1down==true) && (lens2down == false) && (lens3down == false)){
      ($("#beam2").css("background-color", color1));
      ($("#beam3").css("background-color", color1));
      ($("#beam4").css("background-color", color1));
      ($(".finalLight").css("border-color", toString(color1)));
    }
    else if ((lens1down==true) && (lens2down == true) && (lens3down == false)){
      ($("#beam2").css("background-color", color1));
      ($("#beam3").css("background-color", color2));
      ($("#beam4").css("background-color", color2));
      ($(".finalLight").css("border-color", toString(color2)));
    }
    else if ((lens1down==true) && (lens2down == false) && (lens3down == true)){
      ($("#beam2").css("background-color", color1));
      ($("#beam3").css("background-color", color1));
      ($("#beam4").css("background-color", color3));
      ($(".finalLight").css("border-color", toString(color3)));
    }
    else if ((lens1down==false) && (lens2down == false) && (lens3down == true)){
      ($("#beam2").css("background-color", white));
      ($("#beam3").css("background-color", white));
      ($("#beam4").css("background-color", color3));
      ($(".finalLight").css("border-color", toString(color3)));
    }
    else if ((lens1down==false) && (lens2down == true) && (lens3down == false)){
       ($("#beam2").css("background-color", white));
       ($("#beam3").css("background-color", color2));
       ($("#beam4").css("background-color", color2));
       ($(".finalLight").css("border-color", toString(color2)));
    }
    else if ((lens1down==false) && (lens2down == true) && (lens3down == true)){
      ($("#beam2").css("background-color", white));
      ($("#beam3").css("background-color", color2));
      ($("#beam4").css("background-color", color3));
      ($(".finalLight").css("border-color", toString(color3)));
    }
    else if ((lens1down==false) && (lens2down == false) && (lens3down == false)){
      ($("#beam2").css("background-color", white));
      ($("#beam3").css("background-color", white));
      ($("#beam4").css("background-color", white));
      ($(".finalLight").css("border-color", toString(white)));
    }

    lensList[0] = lens1down
    lensList[1] = lens2down
    lensList[2] = lens3down  
  }


  var lens1y = parseInt($("#lens1").css("top"),10)
  var lens2y = parseInt($("#lens2").css("top"),10)
  var lens3y = parseInt($("#lens3").css("top"),10)
  var lens1down = false;
  var lens2down = false; 
  var lens3down = false;


  $("#lens1").click(function() {

    if (lens1down == false)
      lens1down = true
    else
      lens1down = false
    

    var left = parseInt($(this).css("left"),10)
    var top = parseInt($(this).css("top"), 10)
    var height = parseInt($(this).css("height"), 10)
    var distop = parseInt($("#beam1").css("top"), 10)

    if (top == lens1y){
      var changey = (distop - top) - 0.5 * height
    }
    else{
      changey = lens1y - top
      changeColor(lens1down, lensList[1], lensList[2])      

    }
    var self = this;
    $(self).animate({
          "top": "+=" + changey + "px"}, "fast", function () {  
          if (lens1down == true)
            changeColor(lens1down, lensList[1], lensList[2])      
      }
    );

    

  });

  $("#lens2").click(function() {

    if (lens2down == false)
      lens2down = true
    else
      lens2down = false

    var left = parseInt($(this).css("left"),10)
    var top = parseInt($(this).css("top"), 10)
    var height = parseInt($(this).css("height"), 10)
    var distop = parseInt($("#beam2").css("top"), 10)

    if (top == lens2y){
      var changey = (distop - top) - 0.5 * height
    }
    else{
      changey = lens2y - top
      changeColor(lensList[0], lens2down, lensList[2])    
    }
    var self = this;
    $(self).animate({
          "top": "+=" + changey + "px"}, "fast", function () {
          if (lens2down == true)
            changeColor(lensList[0], lens2down, lensList[2])        
      }
    );

 
  });


    $("#lens3").click(function() {

    if (lens3down == false)
      lens3down = true
    else
      lens3down = false

    var left = parseInt($(this).css("left"),10)
    var top = parseInt($(this).css("top"), 10)
    var height = parseInt($(this).css("height"), 10)
    var distop = parseInt($("#beam3").css("top"), 10)

    if (top == lens3y){
      var changey = (distop - top) - 0.5 * height
    }
    else{
      changey = lens3y - top
      changeColor(lensList[0], lensList[1], lens3down) 
    }
    var self = this;
    $(self).animate({
          "top": "+=" + changey + "px"}, "fast", function () {
          if (lens3down == true)
            changeColor(lensList[0], lensList[1], lens3down)        
      }
    );

   
  });






})