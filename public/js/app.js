$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
  $('.slider').slider({
    full_width: true,
    // indicators: false
  });

  // $('.email-modal-trigger').click(function() {
  //   // $('.email-modal').show();
  //   $('.email-modal').modal();
  // })
});