import { gsap } from "gsap"; 

//gsap.set(".nav-btn", {alpha:0});


export const mobileMenuEnter = new gsap.timeline({paused: true});
//y:0, x:0,

mobileMenuEnter.to("#mobile-nav-container", {duration:0.5, alpha:1})
               .to(".nav-btn",{duration:0.5, x:0, alpha:1, stagger: .1})
               .to(".nav-btn",{duration:0.01, x:0, y:"+=15", alpha:1, ease: "elastic", stagger: .1}, "-=1");


//let navButtonsAnimate = document.querySelectorAll(".nav-btn");
let btn1 = document.querySelectorAll(".button1");
let btn2 = document.querySelectorAll(".button2");
let btn3 = document.querySelectorAll(".button3");


export function abouBtn (){

    
    console.log("working");
    if(window.innerWidth <= 768){
            
        btn1.forEach((link, i) =>{
            
            link.addEventListener("mouseenter", ()=>{
                gsap.to(btn1[i],{duration:.03, scale: 1.5, transformOrigin: '50% 50%', ease: "elastic", color:"#FF3F47",  background: "#000"})
            })
                   
            link.addEventListener("mouseleave", ()=>{
                gsap.to(btn1[i],{duration:.03, scale: 1, stagger:.3 , color:"#fff", background: "transparent"})
                         
            })
            
            
                           
    });
            
    }else{
        btn1.forEach((link, i) =>{
            
            link.addEventListener("mouseenter", ()=>{
                gsap.to(btn1[i],{duration:.03, scale: 1, color:"#FF3F47", background: "transparent"})
            
            })
                    
            link.addEventListener("mouseleave", ()=>{
                gsap.to(btn1[i],{duration:.03, scale: 1, color:"#fff", background: "transparent"})
                
                
            
            
            })
        });
    }           
}

export function projectBtn (){

    
    console.log("working");
    if(window.innerWidth <= 768){
            
        btn2.forEach((link, i) =>{
            
            link.addEventListener("mouseenter", ()=>{
                gsap.to(btn2[i],{duration:.03, scale: 1.5, transformOrigin: '50% 50%', ease: "elastic", color:"#FFD400",  background: "#000"})
            })
                   
            link.addEventListener("mouseleave", ()=>{
                gsap.to(btn2[i],{duration:.03, scale: 1, stagger:.3 , color:"#fff", background: "transparent"})
                         
            })
            
            
                           
    });
            
    }else{
        btn2.forEach((link, i) =>{
            
            link.addEventListener("mouseenter", ()=>{
                gsap.to(btn2[i],{duration:.03, scale: 1, color:"#FFD400", background: "transparent"})
            
            })
                    
            link.addEventListener("mouseleave", ()=>{
                gsap.to(btn2[i],{duration:.03, scale: 1, color:"#fff", background: "transparent"})
                
                
            
            
            })
        });
    }           
}

export function contactBtn (){

    
    console.log("working");
    if(window.innerWidth <= 768){
            
        btn3.forEach((link, i) =>{
            
            link.addEventListener("mouseenter", ()=>{
                gsap.to(btn3[i],{duration:.03, scale: 1.5, transformOrigin: '50% 50%', ease: "elastic", color:"#938D0E",  background: "#000"})
            })
                   
            link.addEventListener("mouseleave", ()=>{
                gsap.to(btn3[i],{duration:.03, scale: 1, stagger:.3 , color:"#fff", background: "transparent"})
                         
            })
            
            
                           
    });
            
    }else{
        btn3.forEach((link, i) =>{
            
            link.addEventListener("mouseenter", ()=>{
                gsap.to(btn3[i],{duration:.03, scale: 1, color:"#938D0E", background: "transparent" })
            
            })
                    
            link.addEventListener("mouseleave", ()=>{
                gsap.to(btn3[i],{duration:.03, scale: 1, color:"#fff", background: "transparent"})
                
                
            
            
            })
        });
    }           
}

// export function menuListners (){

    
//     console.log("working");
//     if(window.innerWidth <= 768){
            
//         navButtonsAnimate.forEach((link, i) =>{
            
//             link.addEventListener("mouseenter", ()=>{
//                 gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1.5, transformOrigin: '50% 50%', ease: "elastic"})
//             })
                   
//             link.addEventListener("mouseleave", ()=>{
//                 gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, stagger:.3})
                         
//             })
            
            
                           
//     });
            
//     }else{
//         navButtonsAnimate.forEach((link, i) =>{
            
//             link.addEventListener("mouseenter", ()=>{
//                 gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1})
            
//             })
                    
//             link.addEventListener("mouseleave", ()=>{
//                 gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1})
                
                
            
            
//             })
//         });
//     }           
// }