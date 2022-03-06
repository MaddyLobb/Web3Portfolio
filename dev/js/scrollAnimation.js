import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".pop-up", {transformOrigin:"center"});

export function skillsGrow(){
    const tl = new gsap.timeline(triggerElement, animationElement);

    tl.from(animationElement,{
        duration:1,
        scaleY:0,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "play pause pause complete",
            markers: true,
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
            toggleActions: "play pause pause complete",
            //markers: true,
            scrub: true,
            pin:true
        }
    });
}

// export function skillsGrow(){
//     const tl = new gsap.timeline();

//     tl.from(".pop-up",{
//         duration:1,
//         // scaleX:0,
//         scaleY:0,
//         // alpha:0,
//         scrollTrigger: {
//             trigger: "#about",
//             toggleActions: "play pause pause complete",
//             markers: true,
//             scrub: true
//         }
//     });
// }