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
    const publicationCarousel = new Carousel(document.querySelector(".carousel-4"),{
          'center': false,
          slidesPerPage: 1,
  });

  Fancybox.bind('[data-fancybox="gallery5"]', {
      Carousel: {
        on: {
          change: (that) => {
            publicationCarousel.slideTo(publicationCarousel.findPageForSlide(that.page), {
              friction: 0,
            });
          },
        },
      },
    });
  
}