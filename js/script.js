/***navbar fixed **/
$(window).scroll(function(){
  if($(window).scrollTop() > 20) {
      $(".navbar").addClass("fixed");
  } else {
    $(".navbar").removeClass("fixed");
  }
});

/** end navar fixed ****/

/**** change active class navbar*/
jQuery(function($) {
     var path = window.location.href;
     $('.navbar .nav-item .nav-link').each(function() {
      if (this.href === path) {
       $(this).addClass('active');
      }
     });
    });

/**** end change active class navbar*/

/** search ***/

$(".search-navbar").click(function(){
    $(".search-box").css("display", "block");
});

$(".search-box-content label").click(function(){
   $(".search-box").css("display", "none");
});
/*** end of search **/
