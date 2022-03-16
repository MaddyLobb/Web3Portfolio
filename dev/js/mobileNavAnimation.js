import { gsap } from "gsap"; 

gsap.set(".nav-btn", {alpha:0, scaleY:0});


export const mobileMenuEnter = new gsap.timeline({paused: true});

mobileMenuEnter.to("#mobile-nav-container", {duration:0.5, y:0, x:0})
               .to(".nav-btn", {duration: 0.5, alpha:1, scaleY:1});