$(window).scroll(function(){
  var screen = $(window)
  if (screen.width() > 720) {
    $("#actions, .subscribe").css("opacity", 1 - $(window).scrollTop() / 250);
  }
});
