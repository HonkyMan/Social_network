$(function(){
	$('#toggler').click(function(e){
		e.preventDefault();
		$('.main-menu').slideToggle();
	});
	/**/
	$('.search-wrap').click(function () {

		$('.search-field').stop().slideToggle();
		$('.search-field input[type=text]').focus();
	});

	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$('.search-field').slideUp();
			$('#select-city').removeClass('select_showed');
			$('#select-options').slideUp();
			$('.modal').fadeOut();
			$('.title-block').slideToggle().detach();
		}
	}).click(function () {
		$('.search-field').slideUp()
		$('#select-city').removeClass('select_showed');
		$('#select-options').slideUp();
		$('.title-block').slideToggle().detach();
	});
	$('.search-field').click(function(e){
		e.stopPropagation();
	});

	$('.search-wrap').click(function (e) {
		e.stopPropagation()
	});
	$('.nav-toggler-label').click(function (e) {
		e.stopPropagation();
	});

	$('.nav-toggler-label').click(function (e) {
		e.preventDefault();
		$('.nav_content').stop().slideToggle();
		$('.search-field').stop().slideToggle();
	});
});