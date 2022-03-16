import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".pop-up", {transformOrigin:"top center"});
gsap.set(".pop-up2", {transformOrigin:"top center"});

export function slideLeft(triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        duration:1,
        x:-500,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "play none none none",
            markers: true,
            scrub: true
        }
    });
}

export function slideRight(triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        duration:1,
        x:500,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "play pause none none",
            markers: true,
            scrub: true
        }
    });
}

export function skillsGrow(triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        duration:1,
        scaleY:0,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "play none none none",
            //markers: true,
            scrub: true
        }
    });
}

export function heroScroll(){
    const tl = new gsap.timeline();

    tl.from("#hero-text-container",{
        duration:1,
        scaleX:0,
        scaleY:0,
        alpha:0,
        scrollTrigger: {
            trigger: "#hero",
            toggleActions: "play none none none",
            //markers: true,
            scrub: true,
            pin:true
        }
    });
}
