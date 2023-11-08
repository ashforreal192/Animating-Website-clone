// function loco(){
//     gsap.registerPlugin(ScrollTrigger);
    
//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);
    
//     // tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//       }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//       getBoundingClientRect() {
//         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//       },
//       // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//       pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });
    
//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();
//     }
// loco()




var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cblur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 13 + "px"
    crsr.style.top = dets.y + 13 + "px"
    blur.style.left = dets.x - 145 + "px"
    blur.style.top = dets.y - 145 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
})

gsap.to("#nav", {
    backgroundColor: "#354f52",
    duration: 0.5,
    // delay: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#354f52",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 1,
        // markers: true
    }
})

gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from(".card", {
    scale: 0.8,
    y: 50,
    opacity: 0,
    duration: 1.5,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 1
    }
})

gsap.from("#colon1", {
    x: -70,
    y: -70,
    scrollTrigger: {
        trigger: "#colon1",
        // markers: true,
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 1.5
    }
})

gsap.from("#colon2", {
    x: 70,
    y: 70,
    scrollTrigger: {
        trigger: "#colon1",
        // markers: true,
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 1.5
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        // markers: true,
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
})
