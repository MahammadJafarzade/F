$(".cards").isotope({
    itemSelector:".card",
    layoutMode: 'fitRows'
})

$(".my-list li").click(function(){
  $(".my-list li").removeClass("active");
  $(this).addClass("active");

   var selector = $(this).attr("data-filter");
   $(".cards").isotope({
      filter:selector
})
})
