import { gsap } from "gsap";

export function displayWindowSizeMobile(){

    let menu = document.querySelector("#mobile-nav-container");
    let menuHeight = menu.offsetHeight;

    console.log(menuHeight);

    if(document.documentElement.clientWidth <= 768){
        console.log("hide");
        gsap.set("#mobile-nav-container", { y: -menuHeight, alpha:0, transformOrigin: "top right", scaleX:0, scaleY:0, borderRadius:"100% 100%"})
        gsap.set(".nav-btn", {alpha:0});
    }else{
        console.log("un-hide");
        gsap.set("#mobile-nav-container",{y:0, alpha: 1, scaleX:1, scaleY:1, borderRadius:"0% 0%"});
        gsap.set(".nav-btn", {alpha:1});
    }

}