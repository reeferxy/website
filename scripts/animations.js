$(document).ready(function () {
    $(".cardHolder a").each(function (index, obj) {
        $(obj).click(function () {
            if ($(obj).parent().hasClass("active")) {
                $(".cardHolder").removeClass("active");
                $(".boxContent").removeClass("active");
            }
            else{
                $(".cardHolder").removeClass("active");
                $(obj).parent().addClass("active");
                $(".boxContent").addClass("active");
            } 
        });
    });
});