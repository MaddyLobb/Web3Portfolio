import { gsap } from "gsap"; 

// gsap.set(".mobile-nav", {alpha:0});


export const mobileMenuEnter = new gsap.timeline({paused: true});

mobileMenuEnter.to("#mobile-nav-container", {duration:0.5, y:0, x:0});
            //    .to(".mobile-nav", {duration: 0.5, alpha:1, stagger:0.25});