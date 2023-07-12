let sections = document.querySelectorAll(".section");
let scrollContainer = document.querySelector(".scrollContainer");
let clamp, dragRatio;

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
});

let horizontalScroll = ScrollTrigger.create({
  animation: scrollTween,
  trigger: scrollContainer,
  pin: true,
  scrub: 1,
  end: () => "+=" + scrollContainer.offsetWidth,
});

var drag = Draggable.create(".proxy", {
  trigger: scrollContainer,
  type: "x",
  onPress() {
    clamp || ScrollTrigger.refresh();
    this.startScroll = horizontalScroll.scroll();
    console.log("Onpress", clamp(), ScrollTrigger.refresh());
  },
  onDrag() {
    horizontalScroll.scroll(
      clamp(this.startScroll - (this.x - this.startX) * dragRatio)
    );

    //horizontalScroll.getTween().progress(1);
  },
})[0];

ScrollTrigger.addEventListener("refresh", () => {
  clamp = gsap.utils.clamp(
    horizontalScroll.start + 1,
    horizontalScroll.end - 1
  );

  dragRatio =
    scrollContainer.offsetWidth / (window.innerWidth * (sections.length - 1));
});
