import { gsap } from "gsap";

export function displayWindowSizeMobile(){

    let menu = document.querySelector("#mobile-nav-container");
    let menuHeight = menu.offsetHeight;

    console.log(menuHeight);

    if(document.documentElement.clientWidth <= 768){
        console.log("hide");
        gsap.set("#mobile-nav-container", {y: -menuHeight})
    }else{
        console.log("un-hide");
        gsap.set("#mobile-nav-container",{y:0});
    }

}