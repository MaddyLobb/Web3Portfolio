import { Fancybox } from "@fancyapps/ui";
import { Carousel } from "@fancyapps/ui";
import { burgerTL } from "./burgerAnimation";
import { displayWindowSizeMobile } from "./mobileNavResize";
import { mobileMenuEnter } from "./mobileNavAnimation";
import { mobileScrollPage } from "./mobileNavScrollTo";

var burgerButton = document.querySelector("#burger");
// burgerButton.classList.toggle('hide');

var canISeeMenu = false;

function openCloseMenu(){
    if(canISeeMenu === false){
        burgerTL.play();
        mobileMenuEnter.play();
        canISeeMenu = true;
    }else{
        burgerTL.reverse();
        mobileMenuEnter.reverse();
        canISeeMenu = false;
    }
}

burgerButton.addEventListener("click", openCloseMenu);
let mobileNavButtons = document.querySelectorAll(".nav-btn");

for (const button of mobileNavButtons){
    button.addEventListener("click", checkScrolling);
    button.addEventListener("click", openCloseMenu);
}

function checkScrolling(e) {
    // check to see which button was clicked
    const indexValue = [].indexOf.call(mobileNavButtons, e.target)
    if (indexValue != -1) {
        mobileScrollPage(indexValue);
    }
}

window.addEventListener('resize', displayWindowSizeMobile);

window.addEventListener('load', displayWindowSizeMobile);

// let projectsCarousel = document.querySelectorAll(".carousel");

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


//lightmode//
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e){

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme',light);
    }

    else{
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme',dark); 
    }
    
    console.log(toggleSwitch.checked +'this is the value for the checkbox');


}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') :null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light'){
        toggleSwitch.checked = true;
    }
}