
function smoothScrollTo(targetID) {
    $("html, body").animate({
        scrollTop: $(targetID).offset().top
    }, 600, 'swing', function () {
        location.hash = targetID;
    });
}

$(function () {
    $("#down").click(function () {
        smoothScrollTo("#projects");
    });

    $("#back-to-top").click(function () {
        smoothScrollTo("#header");
    });
});

// hijack anchors to smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    smoothScrollTo($.attr(this, 'href'));
});