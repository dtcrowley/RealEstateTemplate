$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
  $('.slider').slider({
    full_width: true,
  });
  $('.next').click(function() {
    $('.slider').slider('next');
  });
  $('.prev').click(function() {
    $('.slider').slider('prev');
  });
});