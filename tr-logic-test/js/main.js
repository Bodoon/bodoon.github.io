$(document).ready(function() {	
	$('#open--left').click(function() {
		$('.aside-left').stop().animate({width: 'toggle', display: 'block'}, 250);
		});
	$('#open--right').click(function() {
		$('.aside-right').stop().animate({width: 'toggle', display: 'block'}, 250);
		});	
	});