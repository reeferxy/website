$(document).ready(function () {
    $(".cardHolder a").each(function (index, obj) {
        $(obj).click(function () {
            if ($(obj).parent().hasClass("active")) {
                $(".cardHolder").removeClass("active");
                $(".box").removeClass("active");
            }
            else{
                $(".cardHolder").removeClass("active");
                $(obj).parent().addClass("active");
                $(".box").addClass("active");
            } 
        });
    });
});