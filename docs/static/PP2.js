//PP2.js//






$(document).ready(function() {
  
  lensList = [false, false, false]
  white = "FFFFFF"
  color1 = "0000FF" //1
  color2 = "FF0000" //2
  color3 = "33CC33" //3
  color4 = "800080" //12
  color5 = "408040" //123
  color6 = "248F61" //13
  color7 = "99661A" //23
  $("#lens1menu").hide();
  $("#lens2menu").hide();
  $("#lens3menu").hide();
  $("#prismmenu").hide();




  function toString(color){
    string = "black " + color + " black"
    // console.log(string)
    return string
  }

  function changeColor(lens1down, lens2down, lens3down){

    if ((lens1down==true) && (lens2down == true) && (lens3down == true)){
      ($("#beam2").css("background-color", color1));
      ($("#beam3").css("background-color", color4));
      ($("#beam4").css("background-color", color5));
      $("#grad2").css("stop-color", color5);
    }
    else if ((lens1down==true) && (lens2down == false) && (lens3down == false)){
      ($("#beam2").css("background-color", color1));
      ($("#beam3").css("background-color", color1));
      ($("#beam4").css("background-color", color1));
      $("#grad2").css("stop-color", color1);
    }
    else if ((lens1down==true) && (lens2down == true) && (lens3down == false)){
      ($("#beam2").css("background-color", color1));
      ($("#beam3").css("background-color", color4));
      ($("#beam4").css("background-color", color4));
      $("#grad2").css("stop-color", color4);
    }
    else if ((lens1down==true) && (lens2down == false) && (lens3down == true)){
      ($("#beam2").css("background-color", color1));
      ($("#beam3").css("background-color", color1));
      ($("#beam4").css("background-color", color6));
      $("#grad2").css("stop-color", color6);
    }
    else if ((lens1down==false) && (lens2down == false) && (lens3down == true)){
      ($("#beam2").css("background-color", white));
      ($("#beam3").css("background-color", white));
      ($("#beam4").css("background-color", color3));
      $("#grad2").css("stop-color", color3);
    }
    else if ((lens1down==false) && (lens2down == true) && (lens3down == false)){
       ($("#beam2").css("background-color", white));
       ($("#beam3").css("background-color", color2));
       ($("#beam4").css("background-color", color2));
       $("#grad2").css("stop-color", color2);
    }
    else if ((lens1down==false) && (lens2down == true) && (lens3down == true)){
      ($("#beam2").css("background-color", white));
      ($("#beam3").css("background-color", color2));
      ($("#beam4").css("background-color", color7));
      $("#grad2").css("stop-color", color7);
    }
    else if ((lens1down==false) && (lens2down == false) && (lens3down == false)){
      ($("#beam2").css("background-color", white));
      ($("#beam3").css("background-color", white));
      ($("#beam4").css("background-color", white));
      $("#grad2").css("stop-color", "black")
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
    $("#lens1menu").hide();
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

    $("#lens1menu").animate({
          "top": "+=" + changey + "px"}, "fast", function () {  
          if (lens1down == true)
            changeColor(lens1down, lensList[1], lensList[2])      
      }

    );

    

  });

  $("#lens2").click(function() {

    $("#lens2menu").hide();

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

    $("#lens2menu").animate({
          "top": "+=" + changey + "px"}, "fast", function () {  
          if (lens1down == true)
            changeColor(lens1down, lensList[1], lensList[2])      
      }

    ); 

 
  });


    $("#lens3").click(function() {

    $("#lens3menu").hide();


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

    $("#lens3menu").animate({
          "top": "+=" + changey + "px"}, "fast", function () {  
          if (lens1down == true)
            changeColor(lens1down, lensList[1], lensList[2])      
      }

    ); 
  });


    var lens1show = true;
    var lens2show = true;
    var lens3show = true;
    var prismshow = true;


    $("#lens1").mouseenter(function() {
        
        if (lens1show == true){
          $("#lens1menu").show();
          lens1show = false
        }
        else{
          $("#lens1menu").hide();
          lens1show = true
        }

    });



    $("#lens2").mouseenter(function() {
        
        if (lens2show == true){
          $("#lens2menu").show();
          lens2show = false
        }
        else{
          $("#lens2menu").hide();
          lens2show = true
        }

    });


    $("#lens3").mouseenter(function() {
        
        if (lens3show == true){
          $("#lens3menu").show();
          lens3show = false
        }
        else{
          $("#lens3menu").hide();
          lens3show = true
        }

    });


    $(".prism").mouseenter(function() {
        
        if (prismshow == true){
          $("#prismmenu").show();
          prismshow = false
        }
        else{
          $("#prismmenu").hide();
          prismshow = true
        }





    });




  function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push(escape(f.name),
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a');
      console.log(output)
    }
    //document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.

  }

  // Setup the dnd listeners.
  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);






})