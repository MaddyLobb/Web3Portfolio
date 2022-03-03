import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#about","#projects","#contact"];

export function mobileScrollPage(index){
    gsap.to(window, {duration: 1.5, scrollTo:idArray[index]});
}