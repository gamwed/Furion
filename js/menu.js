$(document).ready(function() {
  $('.menu-triger').click(function() {
    $('nav ul').slideToggle(992);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 992 ) {			
			$('nav ul').removeAttr('style');
		 }
	});//end resize
});//end ready