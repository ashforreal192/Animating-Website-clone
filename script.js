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
