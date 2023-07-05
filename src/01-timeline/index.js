let tl = gsap.timeline();

tl.to(".logo", {
  duration: 3,
  x: 300,
  transformOrigin: "50% 50%",
  rotation: 360,
});
tl.from(".box", { duration: 1, x: -200, stagger: 0.1 }, "<");
tl.to(".box", { duration: 1, x: -400, stagger: 0.1 });
tl.to(".box", {
  duration: 1,
  x: -800,
  opacity: 0,
  stagger: { each: 0.2, from: "center" },
});
tl.to(".box", {
  duration: 0.3,
  x: 800,
  opacity: 1,
});
