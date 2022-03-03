import { gsap } from "gsap";

gsap.set(".lines", {transformOrigin: "center"});

const topTL = new gsap.timeline();
topTL.to("#top",{duration:0.25, y:"+=8"})
     .to("#top",{duration:0.25, rotation:45});

const bottomTL = new gsap.timeline();
bottomTL.to("#bottom",{duration:0.25, y:"-=8"})
        .to("#bottom",{duration:0.25, rotation:-45});

const middleTL = new gsap.timeline();
middleTL.to("#middle",{duration:0.25, scale:0});

export const burgerTL = new gsap.timeline({paused:true});

burgerTL.add(topTL,"burger")
    .add(bottomTL,"burger")
    .add(middleTL,"burger")