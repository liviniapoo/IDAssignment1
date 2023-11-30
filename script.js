/*discography carousel*/
$("#albumcarousel").carousel();

$(".item").click(function(){
    $("#albumcarousel").carousel(1);
});

$(".left-carousel-control").click(function(){
    $("#albumcarousel").carousel("prev");
});