import { burgerTL } from "./burgerAnimation"
import { displayWindowSizeMobile } from "./mobileNavResize";
import { mobileMenuEnter } from "./mobileNavAnimation";
import { mobileScrollPage } from "./mobileNavScrollTo";

var burgerButton = document.querySelector("#burger");

var canISeeMenu = false;

function openCloseMenu(){
    if(canISeeMenu === false){
        burgerTL.play();
        mobileMenuEnter.play();
        //mobileNavAnimationTL.reverse();
        canISeeMenu = true;
    }else{
        burgerTL.reverse();
        mobileMenuEnter.reverse();
        //mobileNavAnimationTL.play();
        canISeeMenu = false;
    }
}

burgerButton.addEventListener("click", openCloseMenu);
let mobileNavButtons = document.querySelectorAll(".mobile-main-title");

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