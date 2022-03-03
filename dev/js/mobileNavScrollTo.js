import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#mobile-about-box","#mobile-projects-box","#mobile-contact-box"];

export function mobileScrollPage(index){
    gsap.to(window, {duration: 2, scrollTo:idArray[index]});
}