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

  $('#whack-preview').hover(function() {
    $('#whack-preview-img').addClass('preview-image-selected');
  }, function() {
    $('#whack-preview-img').removeClass('preview-image-selected');
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

  $('#emotibubbles-preview').click(function() {
    window.location = 'projects/emotibubbles/home.html';
  });

  $('#youtube-preview').click(function() {
    window.location = 'projects/youtube/home.html';
  });

  $('#microsoft-preview').click(function() {
    window.location = 'projects/microsoft/home.html';
  });

});
