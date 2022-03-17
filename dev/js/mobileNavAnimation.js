import { gsap } from "gsap"; 

//gsap.set(".nav-btn", {alpha:0});


export const mobileMenuEnter = new gsap.timeline({paused: true});

mobileMenuEnter.to("#mobile-nav-container", {duration:0.5, y:0, x:0})
               .to(".nav-btn",{duration:0.5, x:0, alpha:1, stagger: .1})
               .to(".nav-btn",{duration:0.01, x:0, y:"+=15", alpha:1, ease: "elastic", stagger: .1}, "-=1");


let navButtonsAnimate = document.querySelectorAll(".nav-btn");


export function menuListners (){

    
    console.log("working");
    if(window.innerWidth <= 768){
            
        navButtonsAnimate.forEach((link, i) =>{
            
            link.addEventListener("mouseenter", ()=>{
                gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1.5, transformOrigin: '50% 50%', ease: "elastic"})
            })
                   
            link.addEventListener("mouseleave", ()=>{
                gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, stagger:.3})
                         
            })
            
            
                           
    });
            
    }else{
        navButtonsAnimate.forEach((link, i) =>{
            
            link.addEventListener("mouseenter", ()=>{
                gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1})
            
            })
                    
            link.addEventListener("mouseleave", ()=>{
                gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1})
            
            
            })
        });
    }
            
            
}