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
