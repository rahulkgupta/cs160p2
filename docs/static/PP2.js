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


  var updateddocs = docs

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
      filter(true, true, true)
    }
    else if ((lens1down==true) && (lens2down == false) && (lens3down == false)){
      ($("#beam2").css("background-color", color1));
      ($("#beam3").css("background-color", color1));
      ($("#beam4").css("background-color", color1));
      $("#grad2").css("stop-color", color1);
      filter(true, false, false)
    }
    else if ((lens1down==true) && (lens2down == true) && (lens3down == false)){
      ($("#beam2").css("background-color", color1));
      ($("#beam3").css("background-color", color4));
      ($("#beam4").css("background-color", color4));
      $("#grad2").css("stop-color", color4);
      filter(true, true, false)
    }
    else if ((lens1down==true) && (lens2down == false) && (lens3down == true)){
      ($("#beam2").css("background-color", color1));
      ($("#beam3").css("background-color", color1));
      ($("#beam4").css("background-color", color6));
      $("#grad2").css("stop-color", color6);
      filter(true, false, true)
    }
    else if ((lens1down==false) && (lens2down == false) && (lens3down == true)){
      ($("#beam2").css("background-color", white));
      ($("#beam3").css("background-color", white));
      ($("#beam4").css("background-color", color3));
      $("#grad2").css("stop-color", color3);
      filter(false, false, true)
    }
    else if ((lens1down==false) && (lens2down == true) && (lens3down == false)){
       ($("#beam2").css("background-color", white));
       ($("#beam3").css("background-color", color2));
       ($("#beam4").css("background-color", color2));
       $("#grad2").css("stop-color", color2);
       filter(true, true, false)
    }
    else if ((lens1down==false) && (lens2down == true) && (lens3down == true)){
      ($("#beam2").css("background-color", white));
      ($("#beam3").css("background-color", color2));
      ($("#beam4").css("background-color", color7));
      $("#grad2").css("stop-color", color7);
      filter(false, true, true)
    }
    else if ((lens1down==false) && (lens2down == false) && (lens3down == false)){
      ($("#beam2").css("background-color", white));
      ($("#beam3").css("background-color", white));
      ($("#beam4").css("background-color", white));
      $("#grad2").css("stop-color", "black")
      filter(false, false, false)
    }

    lensList[0] = lens1down
    lensList[1] = lens2down
    lensList[2] = lens3down  
  }

  function filter(l1, l2, l3) {
    updateddocs = []
    for (var i in docs) {
      if ((docs[i].fields.java || docs[i].fields.java == l1)
          && (docs[i].fields.design || docs[i].fields.design == l2)
          && (docs[i].fields.math || docs[i].fields.math == l3)) {
        updateddocs.push(docs[i])
      } 
    }
    //need to put in an ordering component
    replaceDocs(updateddocs)
    
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

  $("#name_sort").click(function () {
      updateddocs.sort(function (a,b) {
        if( a.fields.name > b.fields.name) {
          return 1 
        } else return -1
      })
      replaceDocs(updateddocs)
  })

  $("#author_sort").click(function () {
    console.log('author')
    updateddocs.sort(function (a,b) {
      if( a.fields.author > b.fields.author) {
        return 1 
      } else return -1
    })
    replaceDocs(updateddocs)
  })

  $("#date_sort").click(function () {
    console.log('date')
    updateddocs.sort(function (a,b) {
      if( a.fields.date > b.fields.date) {
        return 1 
      } else return -1
    })
    replaceDocs(updateddocs)
  })

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
      console.log(lens1down, lens2down, lens3down)
      var doc = {fields: 
                  {
                    author: "user", 
                    date: f.lastModifiedDate, 
                    design: lens2down, 
                    java: lens1down, 
                    math: lens3down,
                    name: f.name
                  }
                }
      docs.push(doc)
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

  var showmenu = false

  // $(".prism").hover(
  //   function (e) {
  //     $("#prism_menu").css("display", "block")
  //     $("#prism_menu").css("left", e.clientX)
  //     $("#prism_menu").css("top", e.clientY)
  //   },
  //   function (e) {
  //     if (!showmenu) {
  //       $("#prism_menu").css("display", "none")
  //     }
  //   }
  // )

  function replaceDocs (docs) {
    $("#docs_list").html("")
    for (var j in docs) {
      $("#docs_list").append("<li> " + docs[j].fields.name + "</li>")
    }
  }

})