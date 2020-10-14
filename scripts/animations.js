$(document).ready(function () {

    $(".content .card").each(function (index, element) {


        $(element).hover(function (e) {
            var el_pos = $(this).offset();
            var edge = closestEdge(e.pageX - el_pos.left, e.pageY - el_pos.top, $(this).width(), $(this).height());
            switch (edge) {
                case "left":
                    return "";
                case "right":
                    return "";
                case "top":
                    return "";
                case "bottom":
                    return "";
            }

            log('entered at: ' + edge);
        }, function (e) {
            var el_pos = $(this).offset();
            var edge = closestEdge(e.pageX - el_pos.left, e.pageY - el_pos.top, $(this).width(), $(this).height());
            log('left at: ' + edge);
        });
    });

    function closestEdge(x, y, w, h) {
        var topEdgeDist = distMetric(x, y, w / 2, 0);
        var bottomEdgeDist = distMetric(x, y, w / 2, h);
        var leftEdgeDist = distMetric(x, y, 0, h / 2);
        var rightEdgeDist = distMetric(x, y, w, h / 2);

        var min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);
        switch (min) {
            case leftEdgeDist:
                return "left";
            case rightEdgeDist:
                return "right";
            case topEdgeDist:
                return "top";
            case bottomEdgeDist:
                return "bottom";
        }
    }

    function log(msg) {
        console.log(msg);
    }

    function distMetric(x, y, x2, y2) {
        var xDiff = x - x2;
        var yDiff = y - y2;
        return (xDiff * xDiff) + (yDiff * yDiff);
    }

});