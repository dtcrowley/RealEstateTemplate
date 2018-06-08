// // var instance = M.Modal.getInstance(Modal);

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems, 0.5);
//   });

//   var instance = M.Carousel.init({
//     fullWidth: true,
//     indicators: true
//   });

// $(document).ready(function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems, {
//         'onOpenEnd': initCarouselModal
//     });

//     function initCarouselModal() {
//         var elems = document.querySelectorAll('.carousel');
//         var instances = M.Carousel.init(elems, {'fullWidth': true});
//         instances[0].set(2);
//     }
// });

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
$('.email-modal').hide();
$('.modal').modal();
$('.slider').slider({
  full_width: true,
  // indicators: false
});

$('.next').click(function() {
  $('.slider').slider('next');
});
$('.prev').click(function() {
  $('.slider').slider('prev');
});

$('.email-modal-trigger').click(function() {
  $('.email-modal').show();
  $('.email-modal').modal();
})
});