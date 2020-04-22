$(document).ready(function(){
    $('#fullpage').fullpage({
		autoScrolling:true
    });

    if($(window).width()>481){
      $(".skills_xsm_slider").remove();
    }

    var typed = new Typed('.type', {
    strings: ['WELCOME', 'VIEWERS'],
    typeSpeed: 80,
    backSpeed:50,
    loop: true,
    showCursor: false,
    smartBackspace: true 
  });

});

$(window).resize(function(){
  check_theme_screen();
});

function check_theme_screen(){

  var theme_screen;

  if($(window).width() > 992){
    theme_screen = "/PC/";
  }
  else if($(window).width() < 992 && $(window).width() > 768){
    if($(window).width() > $(window).height()){
      theme_screen = "no_screen";
    }
    else{
      theme_screen = "/TAB/";
    }
  }
  else if($(window).width() < 768 && $(window).width() > 480){
    if($(window).width() > $(window).height()){
      theme_screen = "no_screen";
    }
    else{
      theme_screen = "/TAB/";
    }
  }
  else if($(window).width() < 480){
      theme_screen = "/MOBILE/";
  }

  if(theme_screen == "no_screen"){
    $("#fullpage").hide();
    $(".mobile_landscape").css("display","flex");
  }
  else{
    $("#fullpage").show();
    $(".mobile_landscape").css("display","none");
  }

}
