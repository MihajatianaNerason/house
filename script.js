const buttons = gsap.utils.toArray(".ito");
buttons.forEach((item) => {
  let span = item.querySelector("span");
  let tl = gsap.timeline({ paused: true });

  tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
  tl.set(span, { yPercent: 150 });
  tl.to(span, { duration: 0.2, yPercent: 0 });

  item.addEventListener("mouseenter", () => tl.play(0));
});
