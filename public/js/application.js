$(document).ready(function() {

  $('.welcome').mouseover(function (){
    $('.welcome').css('color','red').fadeTo('slow', 0.5);
  }).mouseout(function(){
    $('.welcome').css('color', 'white').fadeTo('slow', 1);
  });

  $('.funny').mouseover(function(){
    $('.funny').css('color', 'red').fadeTo('slow', 0.8);
  }).mouseleave(function(){
    $('.funny').css('color', 'black').fadeTo('slow', 1);
  })


  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

});


// .toggle({ effect: "scale", direction: "horizontal" });
// });


