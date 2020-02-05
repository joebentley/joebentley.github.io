
function smoothScrollTo(targetID, after) {
    if (after == null) {
        after = function () {
            location.hash = targetID;
        }
    }

    $("html, body").animate({
        scrollTop: $(targetID).offset().top
    }, 600, 'swing', after);
}

$(function () {
    $("#down").click(function () {
        smoothScrollTo("#about");
    });

    $("#back-to-top").click(function () {
        smoothScrollTo("#header", function () {
            location.hash = '';
        });
    });
});

// hijack anchors to smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    smoothScrollTo($.attr(this, 'href'));
});
