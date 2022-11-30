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