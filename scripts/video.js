var videos = 8;
var videoCount = 1;
$(document).ready(function(){

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }

      videoCount = getRandomInt(1,videos)

    function initializeVideo()
    {
        var videoObject = $("video")[0];
        $('video source').attr('src', "/videos/video"+ videoCount+".mp4");
        videoObject.load()

        var videoObject = $("video")[0];
        videoObject.addEventListener('timeupdate', function(e){
            if(videoObject.currentTime+3 > videoObject.duration)
            {                
                videoObject.pause();                
                $("video").fadeOut();
                setTimeout(function () {
                    changeVideo();
            }, 600)
            }
        });
    }
    initializeVideo();

    function changeVideo ()
    {
        
        var videoObject = $("video")[0];
        $('video source').attr('src', "../videos/video"+ videoCount+".mp4");
        videoObject.load()              
        $("video").fadeIn();
        videoCount++;
        if (videoCount > videos)
        {
            videoCount = 1;            
        }
    }

   
  });


//   var showing = 1 // which of the two videos are showing at the moment

// var video1 = document.getElementById('vid');
// var video2 = document.getElementById('video-loop');

// video1.addEventListener('timeupdate',function(e){
//     if ((showing == 1) && (video1.currentTime > 2.5)) {
//        showing=2
//        video1.pause()
//        $('#vid').delay(100).fadeOut(); 
//        $('#video-loop').delay(100).fadeIn(); 
//        video2.play()
//     }
// }); 
// video2.addEventListener('timeupdate',function(e){
//     if ((showing == 2) && (video2.currentTime > 3.5)) {
//        video2.pause()
//        $('#video-loop').delay(100).fadeOut(); 
//        $('#vid').delay(100).fadeIn(); 
//        video1.play()
//     }
// }); 