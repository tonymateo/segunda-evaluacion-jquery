$(document).ready(function() {
  $('.open').click(function() {
      $("#login form").animate({'display': 'block'}).slideToggle("fast", "linear");//le pongo un display block y luego un slideToggle
      $(this).toggleClass('open close');//alterno entre las clases open y close
    });
});
