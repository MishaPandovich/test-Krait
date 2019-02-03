$(document).ready(function () {
	$(".nav-site__item").click(function () {
	    var elementClick = $(this).attr("href");
	    var destination = $(elementClick).offset().top;
	    $('html, body').animate({ scrollTop: destination }, 600);
	    return false;
	});
});