/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/

//localStorage interaction function
//get item
var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//update
var updateItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

//clear everything
var clearEverything = function() {
  return window.localStorage.clear();
}

var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}


///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks
$(document).ready(function() {

  var getThumbs = function() {
  thumbs = [];
  for (let i in heroes) {
    for (let j in heroes[i]) {
      if (j === 'icon_url') {
        thumbs.push(heroes[i][j]['92x93']);
      }
    }
  }
  return thumbs;
}();

  $("#createButton").click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      //current key exists, do something error-handle-y
    } else {
      createItem(currentKey, currentValue);
    }
  });

  $("#updateButton").click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      updateItem(currentKey, currentValue);
    } else {
      //current key doesnt exist, do stuff
    }
  });
  $("#newLObutton").click(function(event) {
    console.log("I've done been clicked on newLObutton");
    $("#newLObutton").hide();
    $("#savedLObutton").hide();
    $("<button class=backbutton>back</button>").click(function(event) {
      console.log("clicked back button");
      $("#newLObutton").show();
      $("#savedLObutton").show();
      $(".backbutton").remove();
      $(".heroes").remove();     
    }).appendTo(".home")
    $("<div class=heroes></div>").appendTo(".home");
    $.each(thumbs, function(i){
      $("<button class='herobutton'><img src='"+ thumbs[i] +"'/></button").click(function(event) {
        console.log('save this character as a key and link to trait options')
      }).appendTo(".heroes")
    })
    var backbutton = $("<button class=backbutton>back</button>").click(function(event) {
      console.log("clicked back button");
      $("#newLObutton").show();
      $("#savedLObutton").show();
      $(".backbutton").remove();
      $(".heroes").remove();     
    }).appendTo(".home")
  })
});


// $.each(thumbs, $"<button class=herobutton></button")


