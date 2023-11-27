$("h1").css("color","red");
// This is same as writing - document.querySelector("h1").style.color = "blue"; in JavaScript.

$("h1").css("font-size","3rem");
$("h1").addClass("big-title margin-50");

$("button").html("Manipulating Text");
// $("body").html("<h2> Adding Heading 2 using jQuery </h2>");

console.log($("img").attr("src"));
$("img").attr("src", "https://i.pinimg.com/originals/dd/97/3a/dd973ac116a977c8dd5296b0da504b8c.jpg");

$("h1").click(function() {
    $("h1").css("color", "blue");
});

$("img").click(function() {
    $("h1").css("color", "#f7e98e");
    $("h1").text("Hare Krishna!");
});

// Challenge
$("input").keypress(function(Event) {
    $("h1").text(Event.key);
});

// Can use ".on" instead of ".keypress" or ".click".

// Animations

$("button.First").on("click", function() {
    $("h1").append("<button>Created using event listener</button>");
});

$("button.Second").on("click", function() {
    $("h1").fadeOut();
});

$("button.Third").on("click", function() {
    $("h1").slideDown();
});

$("button.Fourth").on("click", function() {
    $("h1").fadeOut().fadeIn().animate({opacity : 0.5});
});

