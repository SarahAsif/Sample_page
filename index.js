document
  .querySelectorAll(`.nav-link[href="${window.location.pathname}"]`)
  .forEach((i) => i.classList.add("active"));

gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray("section");
sections.forEach((s) => {
  const ups = s.querySelectorAll(".anim-up");
  gsap.from(ups, {
    y: "100px",
    opacity: 0,
    ease: Power2.easeInOut,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: s,
      start: "top 80%",
    },
  });
  const pops = s.querySelectorAll(".anim-pop");
  gsap.from(pops, {
    opacity: 0,
    scale: 0.9,
    ease: Power1.easeInOut,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: s,
      start: "top 80%",
    },
  });
});
