// jQuery for page scrolling feature - requires jQuery Easing plugin
$('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

 // Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function(){ 
        $('.navbar-toggle:visible').click();
});

//Navbar size
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav.navbar').css("padding", "0");
    $('.navbar-brand').css("max-width", "80px");
    $('.navbar-brand').css("margin-top", "0");
  } else {
    $('nav.navbar').css("padding", "15px 0");
    $('.navbar-brand').css("max-width", "120px");
    $('.navbar-brand').css("margin-top", "-20px");
  }
});