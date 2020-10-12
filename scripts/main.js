var _playMusic = true;


// Create the Video
//var i = Math.floor(Math.random() * 4) + 1
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//var i = Math.floor(Math.random() * 4) + 1
var i = getRandomInt(1, 4);
if (!isMobile()) {
    //Rägeboge (left)
    $(".video-main .videoContent").html('<video id="video2" preload="preload" muted="true" loop="loop" scale="tofit" canplay="false" width="1280" height="720" style="display: block; " class="is-vertical" autoplay poster="/website/img/raegebogebg2.png"><source src="/website/videos/LarryF_Rainbow.webm" type="video/webm" /><source src="/website/videos/LarryF_Rainbow.mp4" type="video/mp4" /><source src="/website/videos/LarryF_Rainbow.ogv" type="video/ogg" /></video>')

    //2000MusicVideo (right)
    $(".video-main2 .videoContent").html('<video id="video" preload="preload" muted="true" loop="loop" scale="tofit" canplay="false" width="1280" height="720" style="display: block; " class="is-vertical" autoplay poster="/website/img/film2000bg1.png"><source src="/website/videos/LarryF_2000.webm" type="video/webm" /><source src="/website/videos/LarryF_2000.mp4" type="video/mp4" /><source src="/website/videos/LarryF_2000.ogv" type="video/ogg" /></video>')

    //2000Film (Center)
    $(".video-main3 .videoContent").html('<video id="video3" preload="preload" muted="true" loop="loop" scale="tofit" canplay="false" width="1280" height="720" style="display: block; " class="is-vertical" autoplay poster="/website/img/musicvideo2000bg2.png"><source src="/website/videos/LarryF_2000_MusicVideo.webm" type="video/webm" /><source src="/website/videos/LarryF_2000_MusicVideo.mp4" type="video/mp4" /><source src="/website/videos/LarryF_2000_MusicVideo.ogv" type="video/ogg" /></video>')

    $(".soundHolder").html('<audio loop><source src="/website/Docs/Winterschlaf.mp3" type="audio/mpeg" /></audio>');
    $(".toggleBackgroundSound").html('<span class="glyphicon glyphicon-volume-up"></span>');
}

// Copyright
$("#copyright").html('© '+ new Date().getFullYear() +' LARRY F. All rights reserved.');

$(".coverImage").hover(function () {
    $(this).next().toggleClass("active");
});

    var min_w = 100; // minimum video width allowed
    var vid_w_orig;  // original video dimensions
    var vid_h_orig;

    $(function () { // runs after DOM has loaded

        vid_w_orig = parseInt($('video').attr('width'));
        vid_h_orig = parseInt($('video').attr('height'));
        
        $(".video-caption .caption").hover(function () {
            //$(this).toggleClass("active");
            $(this).parent().prev().toggleClass("active");
            $(this).prev().toggleClass("active");
            //$("body").toggleClass("loaded");
        });

        $(window).resize(function () { resizeToCover(); });
        $(window).trigger('resize');
    });



    function resizeToCover() {

        var aThirdOfWindow = $(window).width() / 3;

        // set the video viewport to the window size
        $('.video-main,.video-caption').width(aThirdOfWindow);
        $('.video-caption2').css("left", aThirdOfWindow);
        $('.video-main,.video-caption').height($(window).height());
        

        // use largest scale factor of horizontal/vertical
        var scale_h = (aThirdOfWindow) / vid_w_orig;
        var scale_v = $(window).height() / vid_h_orig;
        var scale = scale_h > scale_v ? scale_h : scale_v;

        // don't allow scaled width < minimum video width
        if (scale * vid_w_orig < min_w) { scale = min_w / vid_w_orig; };

        // now scale the video
        $('video').width(scale * vid_w_orig);
        $('video').height(scale * vid_h_orig);
        //$('video').height("100%");
        $('#video').css("transform", "translate(-" + $('video').width() / 3 + "px, 0px) scale(1.5) ");
        $('#video2').css("transform", "translate(-" + $('video').width() / 3 + "px, 0px) scale(1.1) ");
        $('#video3').css("transform", "translate(-" + $('video').width() / 3 + "px, 0px) scale(1.4) ");

        //// and center it by scrolling the video viewport
        $('.video-main').scrollLeft(($('video').width() - $(window).width()));
        $('.video-main').scrollTop(($('video').height() - $(window).height()));

        
    };

    function startDiscovery()
    {
        if (isCountdownDone) {
            // Close the Discovery
            $("#Intro").addClass("closed");


            // Document is ready and loaded.... so set the body flag
            
            $("body").addClass("loaded");
            $(".darkLayer").addClass('darken')
            
            //$("body").hover(function () { $("body").addClass("loaded"); $(".darkLayer").addClass('darken') }, function () { $("body").removeClass("loaded"); $(".darkLayer").removeClass('darken') })


            if (!isMobileDevice()) {

                video = document.getElementById("video");
                // Turn off the default controls 
                video.controls = false;
                video.defaultPlaybackRate = 0.95;

                video.playbackRate = 0.95;


                video.play();

                video2 = document.getElementById("video2");
                // Turn off the default controls 
                video2.controls = false;
                video2.defaultPlaybackRate = 0.95;

                video2.playbackRate = 0.95;
                video2.play();


                video3 = document.getElementById("video3");
                // Turn off the default controls 
                video3.controls = false;
                video3.defaultPlaybackRate = 0.95;

                video3.playbackRate = 0.95;


                video3.play();

            }
        }
    }

    var isCountdownDone = false;
    function startCountdown()
    {
        // set the date we're counting down to
        //var target_date = new Date("09/12/2014  00:00:00").getTime();
        var target_date = null;

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

    function isMobileDevice()
    {
        return isMobile() || isTablet();
    }

    function isMobile()
    {
        return jQuery.browser.mobile;
    }
    function isTablet()
    {
        return navigator.userAgent.match(/iPad/i) != null;
    }

    function isSafari()
    {
        if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
            return true;
        }
        return false;
    }

   

    var ytplayer = null;
    $(document).ready(function () {


        if (window.location.href.indexOf("allow") > 0)
        {
            isCountdownDone = true;
        }


       
        

        //hide background video
        if (isMobileDevice())
        {
            $("body").addClass("no-video");
            $(".video-caption2").addClass("film2000bg" + i);
            $(".video-caption3").addClass("musicvideo2000bg" + i);
            $(".video-caption1").addClass("raegebogebg" + i);
            //$(".toggleMobileMenu").addClass("visible");

            

            $(window).scroll(function () {
                $(".mobileMenu").removeClass("active");
                $(".toggleMobileMenu").removeClass("active");
            });

        }
        else
        {
            startAudio();
        }

        $(".toggleMobileMenu").click(function () {
            $(this).toggleClass("active");
            $(".mainLogo .menu").toggleClass("active");
            $(".mobileMenu").toggleClass("active");
        });

       

       

        // Start Countdown
        startCountdown();

        //Raegeboge
        $(".caption1").click(function () {
            
            if (!isMobileDevice() && !isSafari()) {
                $(".video-caption").addClass("hideItem");
                setTimeout(function () {
                    $(".video-main2, .video-main3").addClass("closed");
                    $(".video-main1").addClass("open");
                    setTimeout(function () {
                        openVideo("leYyuwro0LE");
                    },300);
                },1000);          
                
            }
            else
            {
                
                openVideo("leYyuwro0LE");
            }
            
        });

        //2000MusicVideo
        $(".caption2").click(function () {

            if (!isMobileDevice() && !isSafari()) {
                $(".video-caption").addClass("hideItem");
                setTimeout(function () {
                    $(".video-main1, .video-main2").addClass("closed");
                    $(".video-main3").addClass("open");
                    setTimeout(function () {
                        openVideo("_XtbAnXWG3Y");
                    }, 300);
                }, 1000);

            }
            else {
                openVideo("_XtbAnXWG3Y");
            }           
        });

        //2000Film
        $(".caption3").click(function () {

            if (!isMobileDevice() && !isSafari()) {
                $(".video-caption").addClass("hideItem");
                setTimeout(function () {
                    $(".video-main1, .video-main3").addClass("closed");
                    $(".video-main2").addClass("open");
                    setTimeout(function () {
                        openVideo("Au3rBWOvQrU");
                    }, 300);
                }, 1000);

            }
            else {
                openVideo("Au3rBWOvQrU");
            }            
        });

        
        $(".impressumLink").click(function (event) {
            $(".mobileMenu,.toggleMobileMenu,.mainLogo .menu").removeClass("active");
            event.preventDefault();
            $("#impressum").addClass("open");
            
        });
        $("#impressum .close").click(function () {
            $("#impressum").removeClass("open");
        });

        $(".lyricsLink").click(function (event) {
            $(".mobileMenu,.toggleMobileMenu,.mainLogo .menu").removeClass("active");
            event.preventDefault();
            $("#lyrics").addClass("open");
            
        });
        $("#lyrics .close").click(function () {
            $("#lyrics").removeClass("open");
        });

        $(".konzerteLink").click(function (event) {
            $(".mobileMenu,.toggleMobileMenu,.mainLogo .menu").removeClass("active");
            event.preventDefault();
            $("#konzerte").addClass("open");
            
        });
        $("#konzerte .close").click(function () {
            $("#konzerte").removeClass("open");
        });

        $(".presseLink").click(function (event) {
            $(".mobileMenu,.toggleMobileMenu,.mainLogo .menu").removeClass("active");
            event.preventDefault();
            $("#presse").addClass("open");
            
        });
        $("#presse .close").click(function () {
            $("#presse").removeClass("open");
        });

        $(".kontaktLink").click(function (event) {
            $(".mobileMenu,.toggleMobileMenu,.mainLogo .menu").removeClass("active");
            event.preventDefault();
            $("#kontakt").addClass("open");
            
        });
        $("#kontakt .close").click(function () {
            $("#kontakt").removeClass("open");
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
        //if (isMobile() || isTablet()) {
        //    $("#progressBar").addClass("active");
        //    // If it's a Desktop device the default document ready below will start the video.
        //    setTimeout(function () {
        //    // It's a mobile device... let the user start the discovery manually...
        //        if (isCountdownDone) {
        //            $("#startDiscovery").fadeIn();
        //        }
        //        else {
        //            $("#startDiscovery").hide();
        //        }
        //        $("#progressBar").addClass("hide");
        //    }, 2667);
        //}
        //else {
            $("#progressBar").addClass("active");
            // If it's a Desktop device the default document ready below will start the video.
            setTimeout(function () {
                startDiscovery();
                $("#progressBar").addClass("hide");
            }, 2667);
            

        //}
        

        //// Grab a handle to the video 
        //var video = document.getElementById("video");
        //// Turn off the default controls 
        //video.controls = false;
        //// Start Default Background Video
        //video.play();

        //// Grab a handle to the video 
        //var video = document.getElementById("video");
        //// Turn off the default controls 
        //video.controls = false;
        //// Start Default Background Video
        //video.play();


        $("#startDiscovery").click(function () {
            startDiscovery();
        });

        // Open Video
       function openVideo(videoID)
        {
           stopAudio();
            if (isMobile() )
            {
                var win = window.open("http://m.youtube.com/watch?v=" + videoID, '_blank');
                win.focus();
            }
            else if (isTablet() || isSafari())
            {
                var win = window.open("http://www.youtube.com/watch?v=" + videoID, '_blank');
                win.focus();
            }
            else
            {
                //if ($('video').get(0).pause() != undefined) {
                //    $('video').get(0).pause();
                //}
                
                setTimeout(function () {
                    loadPlayer(videoID)
                    
                }, 999.9999);
            }
            
        }

        

       



        
    });


    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function loadPlayer(videoID) {
        $("#promoVideo").html('<div class="closePromoVideo"><span class="glyphicon glyphicon-remove "></span></div><div id="promoVideoDiv" style="width: 100%; height: 100%;"></div>');

        // Close Video
        $(".closePromoVideo").click(function () {
            stopVideo();
            $(".closePromoVideo").toggleClass('active');
            $("#promoVideo").toggleClass('active');
            $(".video-main").removeClass("closed");
            $(".video-main").removeClass("open");
            setTimeout(function () {
                $(".video-caption").removeClass("hideItem");
                startAudio();
            }, 1000);






            //$('video').get(0).play();

        });
        player = null;
        player = new YT.Player('promoVideoDiv', {
            videoId: videoID,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: { rel: 0, wmode: "opaque" }
        });

       
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        $("#promoVideo").toggleClass('active');
        $(".closePromoVideo").toggleClass('active');
        event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            //setTimeout(stopVideo, 1000);
            done = true;
        }
    }

    function startVideo()
    {
        if (!isMobile() || !isTablet()) {
            player.playVideo();
        }


    }
    function stopVideo() {
        player.stopVideo();
    }


    function startAudio()
    {
        if (_playMusic) {
            $audio = $("audio");
            $audio.animate({ volume: 0.0 }, 0);
            $($audio).get(0).play();
            $audio.animate({ volume: 1.0 }, 3000);
        }
    }

    function stopAudio()
    {
        $audio = $("audio");
        $audio.animate({ volume: 0.0 }, 1000);
        setTimeout(function () { $($audio).get(0).pause(); }, 1000);
              
    }

    $(".toggleBackgroundSound").click(function () {
        togglePlayMusic();
    });
   
    $(".toggleBackgroundSound").hover(function () {
        $(".glyphicon", this).removeClass("glyphicon-volume-up").addClass("glyphicon-volume-off");

    }, function () {
        if (_playMusic) {
            $(".glyphicon", this).removeClass("glyphicon-volume-off").addClass("glyphicon-volume-up");
        }
    });

        function togglePlayMusic()
    {
            
            if (_playMusic)
            {
                $(".toggleBackgroundSound .glyphicon").removeClass("glyphicon-volume-up").addClass( "glyphicon-volume-off");
                _playMusic = false;
                stopAudio();
            }
            else
            {
                $(".toggleBackgroundSound .glyphicon").removeClass("glyphicon-volume-off").addClass("glyphicon-volume-up");
                _playMusic = true;
                startAudio();
            }
        }
   