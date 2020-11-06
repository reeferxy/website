$(document).ready(function () {
    $(".cardHolder a").each(function (index, obj) {
        $(obj).click(function () {
            var parent = $(obj).parent();
            if ($(parent).hasClass("active")) {
                $(".cardHolder").removeClass("active");
                $(".box").removeClass("active");
               
            }
            else{
                $(".cardHolder").removeClass("active");
                $(parent).addClass("active");
                var content = $(".cardBoxContent", $(parent)).html();
                $(".box .boxContent").html(content);
                $(".box").addClass("active");
            } 
        });
    });


    var $w = $(window);
    console.log("FullScreenSection: " + $(".fullScreenSection").height());
    $w.scroll(function() {
        var d = $w.scrollTop();
        var height = $(".fullScreenSection").height();
        if (height - d > 0) {
            $("video").css("filter", "blur(" + d / 48 + "px)");
        }
    });
});