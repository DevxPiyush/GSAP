let timelinee = gsap.timeline();

timelinee.from("#nav h3", {
    y: -60, // minux isleye taaki upar se niche aaye
    opacity: 0,
    delay: 0.1,
    duration: 1,
    stagger:0.2,
})

timelinee.from("#main h1", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    stagger: 0.8,
})
timelinee.from("img", {
    x: 100,
    rotate: 45,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5
})