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

export function brandingCarousel(){
  const brandingCarousel = new Carousel(document.querySelector(".carousel-2"),{
          'center': false,
          slidesPerPage: 1,
  });

  Fancybox.bind('[data-fancybox="gallery3"]', {
      Carousel: {
        on: {
          change: (that) => {
            brandingCarousel.slideTo(brandingCarousel.findPageForSlide(that.page), {
              friction: 0,
            });
          },
        },
      },
    });
}

export function posterCarousel(){
  const posterCarousel = new Carousel(document.querySelector(".carousel-3"),{
          'center': false,
          slidesPerPage: 1,
  });

  Fancybox.bind('[data-fancybox="gallery4"]', {
      Carousel: {
        on: {
          change: (that) => {
            posterCarousel.slideTo(posterCarousel.findPageForSlide(that.page), {
              friction: 0,
            });
          },
        },
      },
    });
}

export function publicationCarousel(){

  // Initialise Carousel
  const myCarousel = new Carousel(document.querySelector("#pub-carousel"), {
      'center': false,
       slidesPerPage: 1,
    // on: {
    //   change: (carousel, to) => {
    //     // Clear active elements
    //     document.querySelectorAll("#pub-carousel .is-active").forEach((el) => {
    //         el.classList.remove("is-active");
    //     });

    //     // Mark current elements as active
    //     document.querySelectorAll(`#pub-carousel [data-for="${to}"]`).forEach((el) => {
    //         el.classList.add("is-active");
    //     });
    //   },
    // },
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
}

// export function publicationCarousel(){

//   // Initialise Carousel
//   const myCarousel = new Carousel(document.querySelector("#pub-carousel"), {
//       'center': true,
//        slidesPerPage: 1,
//     on: {
//       change: (carousel, to) => {
//         // Clear active elements
//         document.querySelectorAll("#pub-carousel .is-active").forEach((el) => {
//             el.classList.remove("is-active");
//         });

//         // Mark current elements as active
//         document.querySelectorAll(`#pub-carousel [data-for="${to}"]`).forEach((el) => {
//             el.classList.add("is-active");
//         });
//       },
//     },
//   });

//   Fancybox.bind('[data-fancybox="inspire"]', {
//     Carousel: {
//       on: {
//         change: (that) => {
//           myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
//             friction: 0,
//           });
//         },
//       },
//     },
//   });
// }

//, #publication-text [data-for="${to}"]



// window.addEventListener('load', function(){

//     // Initialise Carousel
//     const myCarousel = new Carousel(document.querySelector("#pub-carousel"), {
//         'center': true,
//          slidesPerPage: 1,
//       on: {
//         change: (carousel, to) => {
//           // Clear active elements
//           document.querySelectorAll("#pub-carousel .is-active").forEach((el) => {
//               el.classList.remove("is-active");
//           });
  
//           // Mark current elements as active
//           document.querySelectorAll(`#pub-carousel [data-for="${to}"]`).forEach((el) => {
//               el.classList.add("is-active");
//           });
//         },
//       },
//     });
// });

// //, #publication-text [data-for="${to}"]

// Fancybox.bind('[data-fancybox="inspire"]', {
//     Carousel: {
//       on: {
//         change: (that) => {
//           myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
//             friction: 0,
//           });
//         },
//       },
//     },
// });