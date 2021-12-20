$(document).ready(function() {
    $(".side-nav a").on("click", function(event) {
        event.preventDefault();
		var href = $(this).attr("href");

        var offset = href ? $(href).offset().top : 0; //distance from desired section to the top of the page

        var topDistance = $(window).scrollTop(); //distance from position to the top of the page
        var delta_space = Math.abs(offset - topDistance); //distance to be made

		var velocity = 2.5;/* determines the time by dividing the distance to the desired velocity */

        $("body, html").animate({ scrollTop: (offset)}, delta_space / velocity);

    })
});