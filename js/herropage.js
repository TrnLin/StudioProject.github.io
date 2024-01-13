//header
let heroMain = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-main",
    start: "65% 50%",
    end: "-40% -100%",
    scrub: true,
    scrub: 1,
    markers: false,
  },
});

//hero-sub
let heroSub = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-sub",
    start: "-45% 40%",
    end: "90% 0%",
    scrub: true,
    scrub: 1,
    markers: false,
  },
});

//about
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-container",
    start: "-90% 90%",
    end: "50% 60%",
    scrub: true,
    markers: false,
  },
});

//contribute
let contributeRight = gsap.timeline({
  scrollTrigger: {
    trigger: ".right",
    start: "-20% center",
    end: "50% center",
    scrub: true,
    markers: false,
  },
});

let contributeLeft = gsap.timeline({
  scrollTrigger: {
    trigger: ".left",
    start: "-20% center",
    end: "50% center",
    scrub: true,
    markers: false,
  },
});

//data analytics
let dataAnalytics = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourth-container",
    start: "-40% center",
    end: "50% center",
    scrub: true,
    markers: false,
  },
});

tl.to(".about-container", {
  x: 800,
  opacity: 1,
});

heroMain.to(".hero-main", {
  y: -400,
});

heroSub.to(".hero-sub", {
  x: 400,
});

contributeLeft.to(".left", {
  x: 800,
});

contributeRight.to(".right", {
  x: -800,
});

dataAnalytics.to(".fourth-container", {
  opacity: 1,
});
