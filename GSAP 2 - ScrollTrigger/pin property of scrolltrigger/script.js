gsap.to("#page2 img", {
    width: "80%",
    scrollTrigger: {
        trigger: "#page2", // jab apan pin use krte hai toh hum target element nhi uske parent ko trigger krte hai
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
    }
})