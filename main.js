const images = document.querySelectorAll(".collage > .img");



    images.forEach(function (appear) {
        appear.addEventListener("click", function (e) {
            e.preventDefault();
            const clicked_image = e.target.closest(".img");
            const target_image = clicked_image.nextElementSibling;

            console.log(clicked_image);
            console.log(target_image);

            if(target_image){
                if(window.innerWidth <= 680){
                    target_image.scrollIntoView({behavior: "smooth", block: "center"});
                }
                
                target_image.classList.add("active");
            }
            
        });
    });

function onYouTubeIframeAPIReady() {
    const video_player = document.querySelector(".yt-player");
    const video_id = video_player.dataset.videoId;
    player = new YT.Player(video_player, {
      height: "390",
      width: "640",
      videoId: video_id,
      playerVars: {
        'playsinline': 1,
        'controls': 0,
        'modestbranding': 1,
        'showinfo': 0
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onStateChange
      }
    });
}

function onPlayerReady(e){
    console.log(">> READY >>", e)

    e.target.mute();
    e.target.playVideo();
}

function onStateChange(e){
    if(e.data === YT.PlayerState.PLAYING) {
        setTimeout(() => {
            e.target.getIframe().closest(".video-frame").classList.add("active");
        }, 500);
    }
}


