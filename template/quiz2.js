(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouse-over');
	$click     = $('.click');
	$submit       = $('.submit');
	$cookie = document.cookie.substring(document.cookie.indexOf('=')+1, document.cookie.length); // get only value

	$("#titles").text($cookie);

	$mouseover.mouseover(function () {
		//$this = $(this);
		$('.mouse-over').html('Scrooge McDuck!');
		$('.mouse-over').height($(this).height() + 50);
	});



	$click.click( function() {
		$('.click').html('Peace Out!')
		$('.click').fadeout(1500);
		return false;
	});

	$submit.on('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append("<h2>Congratulations! You've entered some text!</h2>");
		}
	});

	$('#btnTitle').click(function(){
		$.getJSON( "http://www.mattbowytz.com/simple_api.json", {data: 'quizData'}, function( response ) {
			console.log(response);
			console.log(response.data);

			// get a random value from the returned data
			var rndNum = Math.floor(Math.random() * response.data.length) + 1;

			// set the paragraph to show the random item
			$("#titles").text(response.data[rndNum]);

			// rename the button
			$("#btnTitle").text("Change It");

			// show the "Keep It" button
			$("#btnKeep").show().click(function (){
				// set cookie
				document.cookie = 'value=' + response.data[rndNum] + ';path=\\';
			});
		});
	});

	$(document).on("ready", function() {
		setTimeout(function(){
			$("timeout").fadeIn("slow");
		}, 1000);
	});

})(jQuery);