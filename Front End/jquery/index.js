$("h1").css("color","red");

$("button").click(function () {
  $("h1").css("color","yellow");
  $("h1").css("font-family","Helvetica");
  $("h1").slideUp().slideDown().animate({opacity: 0.4});
  $("h1").css("opacity",1);

});

$(document).keypress(function (event) {
    $("h1").text(event.key);
});

$("h1").before("<h2>YOYOYOYO</h2>");
