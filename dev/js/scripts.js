import { burgerTL } from "./burgerAnimation";
import { displayWindowSizeMobile } from "./mobileNavResize";
import { mobileMenuEnter, abouBtn, projectBtn, contactBtn } from "./mobileNavAnimation";
import { mobileScrollPage } from "./mobileNavScrollTo";
import { photographyCarousel, publicationCarousel, brandingCarousel, posterCarousel} from "./carousel";
import { skillsGrow, heroScroll, slideLeft, slideRight } from "./scrollAnimation";
import { hoverEffect } from "./hover";

var burgerButton = document.querySelector("#burger");
// burgerButton.classList.toggle('hide');

var canISeeMenu = false;

function openCloseMenu(){
    if(window.innerWidth <=768){
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
}

window.addEventListener("resize", function(){
    if(canISeeMenu === true){
        openCloseMenu();

    }
});

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


//lightmode//
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e){

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
    }

    else{
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme','dark'); 
    }
    
    console.log(toggleSwitch.checked +'this is the value for the checkbox');


}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light'){
        toggleSwitch.checked = true;
    }
}

//? localStorage.getItem('theme') :null;

window.addEventListener('resize', displayWindowSizeMobile);

window.addEventListener('load', displayWindowSizeMobile);

window.addEventListener('load', photographyCarousel);
window.addEventListener('load', brandingCarousel);
window.addEventListener('load', posterCarousel);
window.addEventListener('load', publicationCarousel);

window.addEventListener('load', heroScroll);

window.addEventListener('load', abouBtn);
window.addEventListener('resize', abouBtn);
window.addEventListener('load', projectBtn);
window.addEventListener('resize', projectBtn);
window.addEventListener('load', contactBtn);
window.addEventListener('resize', contactBtn);

window.addEventListener('load', hoverEffect);



window.addEventListener('load', function(){

  let triggerElements = [".pop-up", ".pop-up2", "#about-svg", "#project-svg-container", "#photography-text-container", "#branding", "#poster", ".pop-up2", "#project-svg-container", "#photography-text-container", "#branding", "#poster"];
  console.log(triggerElements);

  let animationElements = [".pop-up", ".pop-up2", "#about-text-container", "#photography-text-container", "#branding-image-container", "#poster-text-container", "#publication-image-container", "#contact-form-container", "#photography-image-container", "#branding-text-container", "#poster-image-container", "#publication-text-container"];

  for(let i = 0; i < 2; i++){
    skillsGrow(triggerElements[i], animationElements[i]);
}

for(let i = 2; i < 8; i++){
    slideLeft(triggerElements[i], animationElements[i]);
}

for(let i = 8; i < triggerElements.length; i++){
    slideRight(triggerElements[i], animationElements[i]);
}
  
});