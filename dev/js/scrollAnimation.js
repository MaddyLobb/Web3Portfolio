import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.from(".pop-up", {scaleX: 0, scaleY:0});  

ScrollTrigger.create({
    animation: tl,
    trigger: "#skills",
    start: "top top",
    end: "+=4000", 
    scrub: true,
    pin: true,
    markers: true,
    anticipatePin: 1
  });