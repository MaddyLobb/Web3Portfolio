import { gsap } from "gsap";

export function displayWindowSizeMobile(){

    let menu = document.querySelector("#mobile-nav-container");
    let menuHeight = menu.offsetHeight;

    console.log(menuHeight);
    //y: -menuHeight

    if(document.documentElement.clientWidth <= 768){
        console.log("hide");
        gsap.set("#mobile-nav-container", {alpha:0, transformOrigin: "50% 50%"})
        gsap.set(".nav-btn", {alpha:0});
    }else{
        console.log("un-hide");
        gsap.set("#mobile-nav-container",{alpha: 1});
        gsap.set(".nav-btn", {alpha:1});
    }
    //y:0
}