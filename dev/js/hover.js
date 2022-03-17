import { gsap } from "gsap"; 
let hoverElement= document.querySelectorAll(".extra-li");

export function hoverEffect(){

            
    hoverElement.forEach((link, i) =>{
            
        link.addEventListener("mouseenter", ()=>{
            gsap.to(hoverElement[i],{duration:.03, scale: 1.3, transformOrigin: '50% 50%', ease: "elastic"})
        })
                   
        link.addEventListener("mouseleave", ()=>{
            gsap.to(hoverElement[i],{duration:.03, scale: 1, stagger:.3})
                         
        })
    });    
}