$(document).ready(function() {
  $('#civicmedia-preview').hover(function() {
    $('#civicmedia-preview-img').addClass('preview-image-selected');
  }, function() {
    $('#civicmedia-preview-img').removeClass('preview-image-selected');
  });

  $('#emotibubbles-preview').hover(function() {
    $('#emotibubbles-preview-img').addClass('preview-image-selected');
  }, function() {
    $('#emotibubbles-preview-img').removeClass('preview-image-selected');
  });

  $('#sn-preview').hover(function() {
    $('#sn-preview-img').addClass('preview-image-selected');
  }, function() {
    $('#sn-preview-img').removeClass('preview-image-selected');
  });

   $('#Supor-preview').hover(function() {
    $('#Supor-preview-img').addClass('preview-image-selected');
  }, function() {
    $('#Supor-preview-img').removeClass('preview-image-selected');
  });



  $('#library-preview').hover(function() {
    $('#library-preview-img').addClass('preview-image-selected');
  }, function() {
    $('#library-preview-img').removeClass('preview-image-selected');
  });

  $('#youtube-preview').hover(function() {
    $('#youtube-preview-img').addClass('preview-image-selected');
  }, function() {
    $('#youtube-preview-img').removeClass('preview-image-selected');
  });

  $('#microsoft-preview').hover(function() {
    $('#microsoft-preview-img').addClass('preview-image-selected');
  }, function() {
    $('#microsoft-preview-img').removeClass('preview-image-selected');
  });

  $('#library-preview').click(function() {
    window.location = 'projects/library/home.html';
  });
  $('#sn-preview').click(function() {
    window.location = 'projects/sn/home.html';
  });
    $('#library-preview').click(function() {
    window.location = 'projects/library/home.html';
  });
      $('#Supor-preview').click(function() {
    window.location = 'projects/Supor/home.html';
  });
 

});




















filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
