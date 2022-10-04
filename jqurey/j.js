
$("button").click(function(){
    $("h1").css("color", "purple")
});
// $(document).keypress(function(event){
//     $("h1").text(event.key);

// });

// // $("h1").on("mouseover", function(){
// //     $("h1").css("color", "red")
// });
$("h1").addClass("cake");
$("h1").before("<BUtton> HELLO G  </BUtton>")
$("h1").after("<BUtton> HELLO G  </BUtton>")
$("h1").prepend("<BUtton> HELLO G  </BUtton>")
$("h1").append("<BUtton> HELLO G  </BUtton>")
// $("button").remove();



$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});