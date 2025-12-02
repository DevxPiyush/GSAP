let tl = gsap.timeline()

tl.to("#box1", {
    x: 1500,
    rotate: 360,
    backgroundColor: "blue",
    scale: 0.5,
    duration: 2,
    delay:1,
})
tl.to("#box2", {
    x: 1500,
    rotate: 360,
    backgroundColor: "red",
    scale: 0.5,
    duration: 2,
})
tl.to("#box3", {
    x: 1500,
    rotate: 360,
    backgroundColor: "aqua",
    scale: 0.5,
    duration: 2,
})