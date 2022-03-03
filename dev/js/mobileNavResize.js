import { gsap } from "gsap";

export function displayWindowSizeMobile(){

    let menu = document.querySelector(".full-mobile-nav");
    // let menu2 = document.querySelector(".full-large-nav");
    let menuHeight = menu.offsetHeight;
    // let menuWidth = menu2.offsetWidth;

    console.log(menuHeight);
    // console.log(menuWidth);

    if(document.documentElement.clientWidth <= 768){
        console.log("hide");
        gsap.set(".full-mobile-nav", {y: -menuHeight})
        // gsap.set(".full-large-nav", {x: -menuWidth})
    }else{
        console.log("un-hide");
        gsap.set(".full-mobile-nav",{y:0, alpha:0});
        // gsap.set(".full-large-nav",{x:0});
    }

}