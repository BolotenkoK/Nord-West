$(document).ready(function(){

  //Dark background for mobile

  foggingOn = () => document.querySelector('.fogging-container').classList.add('active');
  foggingOff = () => document.querySelector('.fogging-container').classList.remove('active');  
  
  //Open mobile menu

  if (document.querySelector('.burger-nav')) {
    document.querySelector('.burger-nav').addEventListener('click', function () {
        foggingOn();
        document.querySelector('.mob-menu').classList.add('active')
    })
  }

  //Close mobile menu

  $(document).mouseup(function (e){ 
    let div = $(".mob-menu.active"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
      div.removeClass('active');
      foggingOff();
    }
  });

  //Adding and removing 'active' class for mobile menu

  if (document.querySelector('.header-menu__item-name')) {
    var items = document.querySelectorAll('.header-menu__item-name');
    for (let i = 0; i < items.length; ++i) {
      items[i].addEventListener('click', 
        function () {
          items.forEach(function(item) {
            if(item.classList.contains('active')){
              item.classList.remove('active');
            }
      });
      
        items[i].classList.add('active');
        document.querySelector('.mob-header-menu').classList.add('active');
        document.querySelector('.mob-nav').classList.add('hidden');
        document.querySelector('.mob-contact-info').classList.add('hidden');
      })
    }
  }

  //Slider settings

  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    center: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
  
  });
})