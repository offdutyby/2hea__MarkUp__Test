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
            width:420
          }
        }
      ]
  });
});


var state = true;
const aaaa = document.getElementsByClassName('hidden__menubar')[0];
console.log(aaaa);

aaaa.addEventListener("click", function(){
  console.log('hi')
  state = !state
  console.log(state)
})
