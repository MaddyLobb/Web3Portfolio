import { Fancybox } from "@fancyapps/ui";
import { Carousel } from "@fancyapps/ui";

export function photographyCarousel(){
    const photographyCarousel = new Carousel(document.querySelector(".carousel-1"),{
            'center': false,
            slidesPerPage: 1,
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
        Carousel: {
          on: {
            change: (that) => {
              photographyCarousel.slideTo(photographyCarousel.findPageForSlide(that.page), {
                friction: 0,
              });
            },
          },
        },
      });
}



window.addEventListener('load', function(){
    // const myCarousel = new Carousel(document.querySelector(".carousel"),{
    //     'center': false,
    //     slidesPerPage: 1,
    // });


    // Initialise Carousel
    const myCarousel = new Carousel(document.querySelector(".carousel"), {
    'center': false,
    slidesPerPage: 1,
    on: {
      change: (carousel, to) => {
        // Clear active elements
        document
          .querySelectorAll(".carousel .is-active")
          .forEach((el) => {
            el.classList.remove("is-active");
          });
  
        // Mark current elements as active
        document
          .querySelectorAll(
            `.carousel [data-for="${to}"]`
          )
          .forEach((el) => {
            el.classList.add("is-active");
          });
      },
    },
});
  
  // Make links clickable
//   document.getElementById("logoBar").addEventListener("click", (event) => {
//     const index = event.target.dataset.for || -1;
  
//     if (index > -1) {
//       event.preventDefault();
//       logoCarousel.slideTo(index);
//     }
//   });
});

Fancybox.bind('[data-fancybox="inspire"]', {
    Carousel: {
      on: {
        change: (that) => {
          myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  });