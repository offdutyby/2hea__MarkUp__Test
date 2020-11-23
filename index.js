// slic slider module

$(document).ready(function(){
  $('.slider__part').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 420,
          settings: {
            width:420,
            arrows: true,
          }
        }
      ]
  });
});

$(document).ready(function(){
  $('.project__mobile__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: true,
      adaptiveHeight: true,
  });
});


// Modal Logic

// document.getElementsByClassName("mobile__menubar").addEventListener('click', function() {
//   console.log('hi');
// })
const modal = document.getElementById('modal__menu')
const menubar = document.getElementById('mobile__menubar');
const remove = document.getElementById('remove__modal');
const body  =  document.body

menubar.addEventListener('click', function(){
    modal.style.visibility = 'visible';
    modal.style.left = 0;
    modal.style.top = 0;
    modal.style.opacity = 1;
    modal.style.transition = 'linear 900ms';

    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.width = '100%';
    body.style.height = '100%';
    // modal.id = "plusModal"
    // body.id = "plusBody"
})

remove.addEventListener('click', function(){
  modal.style.visibility = 'hidden';
  modal.style.left = '1100px';
  modal.style.top = 0;
  modal.style.opacity = 0;
  body.style.overflow = 'visible';
  body.style.position = 'static';
  body.style.width = '100%';
  body.style.height = '100%';
})