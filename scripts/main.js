




/*
     FILE ARCHIVED ON 13:53:09 Jul 15, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:33:25 Sep 4, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/



// Create the Video
//var i = Math.floor(Math.random() * 4) + 1
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//var i = Math.floor(Math.random() * 4) + 1
var i = getRandomInt(1, 4);
$("#video-main").html(' <video id="video" preload="auto" muted="true" loop="loop" scale="tofit" canplay="false" width="1280" height="720" style="display: block; " class="is-vertical" autoplay poster="img/Default'+i+'.png"><source src="videos/videoBG' + i + '.webm" type="video/webm" /><source src="videos/videoBG' + i + '.mp4" type="video/mp4" /><source src="videos/videoBG' + i + '.ogv" type="video/ogg" /></video>')

// Copyright
$("#copyright").html('© '+ new Date().getFullYear() +' LARRY F. All Rights Reserved.');


    var min_w = 800; // minimum video width allowed
    var vid_w_orig;  // original video dimensions
    var vid_h_orig;

    $(function () { // runs after DOM has loaded

        vid_w_orig = parseInt($('video').attr('width'));
        vid_h_orig = parseInt($('video').attr('height'));
        

        $(window).resize(function () { resizeToCover(); });
        $(window).trigger('resize');
    });



    function resizeToCover() {

        // set the video viewport to the window size
        $('#video-main').width($(window).width());
        $('#video-main').height($(window).height());

        // use largest scale factor of horizontal/vertical
        var scale_h = $(window).width() / vid_w_orig;
        var scale_v = $(window).height() / vid_h_orig;
        var scale = scale_h > scale_v ? scale_h : scale_v;

        // don't allow scaled width < minimum video width
        if (scale * vid_w_orig < min_w) { scale = min_w / vid_w_orig; };

        // now scale the video
        $('video').width(scale * vid_w_orig);
        $('video').height(scale * vid_h_orig);
        // and center it by scrolling the video viewport
        $('#video-main').scrollLeft(($('video').width() - $(window).width()) / 2);
        $('#video-main').scrollTop(($('video').height() - $(window).height()) / 2);

        
    };

    function startDiscovery()
    {
        if (isCountdownDone) {
            // Close the Discovery
            $("#Intro").addClass("closed");


            // Document is ready and loaded.... so set the body flag
            $("body").addClass("bgImage" + i);
            $("body").addClass('loaded');


            video = document.getElementById("video");
            // Turn off the default controls 
            video.controls = false;
            video.play();
        }
    }

    var isCountdownDone = false;
    function startCountdown()
    {
        // set the date we're counting down to
        var target_date = new Date("05/23/2014  08:00:00").getTime();

        if (target_date > Date.now())
        {

        

        // variables for time units
            var days, hours, minutes, seconds;

            // get tag element
            var countdown = document.getElementById("countdown");

            // update the tag with id "countdown" every 1 second
            setInterval(function () {

                // find the amount of "seconds" between now and target
                var current_date = new Date().getTime();
                var seconds_left = (target_date - current_date) / 1000;

                // do some time calculations
                days = parseInt(seconds_left / 86400);
                seconds_left = seconds_left % 86400;

                hours = parseInt(seconds_left / 3600);
                hours += days * 24;
                seconds_left = seconds_left % 3600;

                minutes = parseInt(seconds_left / 60);
                seconds = parseInt(seconds_left % 60);

                // format countdown string + set tag value
                countdown.innerHTML = "<span>COMING SOON...</span><br/>" + hours + ":" + (minutes.toString().length < 2 ? "0" + minutes : minutes) + ":" + (seconds.toString().length < 2 ? "0" + seconds : seconds);

            }, 1000);
        }
        else
        {
            $("#countdown").fadeOut();
            isCountdownDone = true;
        }
    }


   

    var ytplayer = null;
    $(document).ready(function () {


        if (window.location.href.indexOf("allow") > 0)
        {
            isCountdownDone = true;
        }

       

        // Start Countdown
        startCountdown();

        
        $("#impressumLink").click(function (event) {
            event.preventDefault();
            $("#impressum").addClass("open");
        });
        $(".closeImpressum").click(function () {
            $("#impressum").removeClass("open");
        });
        

        // Remove Title on Hover and set back when gone
        {
            $('[title]').mouseover(function () {
                $this = $(this);
                $this.data('title', $this.attr('title'));
                // Using null here wouldn't work in IE, but empty string will work just fine.
                $this.attr('title', '');
            }).mouseout(function () {
                $this = $(this);
                $this.attr('title', $this.data('title'));
            });
        }

        // If it's a mobile device.. show the button to trigger the movie on the background if possible..
        if (jQuery.browser.mobile || navigator.userAgent.match(/iPad/i) != null) {
            $("#progressBar").addClass("active");
            // If it's a Desktop device the default document ready below will start the video.
            setTimeout(function () {
            // It's a mobile device... let the user start the discovery manually...
                if (isCountdownDone) {
                    $("#startDiscovery").fadeIn();
                }
                else {
                    $("#startDiscovery").hide();
                }
                $("#progressBar").addClass("hide");
            }, 2667);
        }
        else {
            $("#progressBar").addClass("active");
            // If it's a Desktop device the default document ready below will start the video.
            setTimeout(function () {
                startDiscovery();
                $("#progressBar").addClass("hide");
            }, 2667);
            

        }
        

        // Grab a handle to the video 
        var video = document.getElementById("video");
        // Turn off the default controls 
        video.controls = false;
        // Start Default Background Video
        video.play();


        $("#startDiscovery").click(function () {
            startDiscovery();
        });

        // Open Video
        $(".bigBall.right").click(function () {

            if (jQuery.browser.mobile )
            {
                var win = window.open("/web/20140715135309/http://m.youtube.com/watch?v=leYyuwro0LE", '_blank');
                win.focus();
            }
            else if (navigator.userAgent.match(/iPad/i) != null)
            {
                var win = window.open("/web/20140715135309/http://www.youtube.com/watch?v=leYyuwro0LE", '_blank');
                win.focus();
            }
            else
            {
                $('video').get(0).pause();
                $("#promoVideo").toggleClass('active');
                $(".closePromoVideo").toggleClass('active');
                setTimeout(function () {
                    if (player) {
                        startVideo();
                    }
                }, 666.6667);
            }
            
        });

        

        // Close Video
        $(".closePromoVideo").click(function () {
            $("#promoVideo").toggleClass('active');
            $(".closePromoVideo").toggleClass('active');
            $('video').get(0).play();
            stopVideo();
        });



        
    });


    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "/web/20140715135309/https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('promoVideoDiv', {
            videoId: 'leYyuwro0LE',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: {rel: 0}
        });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        //event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            //setTimeout(stopVideo, 6000);
            done = true;
        }
    }

    function startVideo()
    {
        if (!jQuery.browser.mobile || navigator.userAgent.match(/iPad/i) == null) {
            player.playVideo();
        }


    }
    function stopVideo() {
        player.stopVideo();
    }

   