gsap.from(".card", {
    duration: 1.5,
    opacity: 0,
    y: 250,
    stagger: 0.25,
    ease: "back",
  });
  gsap.from(".first", {
    duration: 1,
    opacity: 0,
    x: 500,
    stagger: 0.5,
    ease: "back",
  });
  gsap.from(".second p", {
    duration: 1,
    opacity: 0,
    x: 350,
    stagger: 0.5,
    ease: "back",
  });
  gsap.from(".second img", {
    duration: 1,
    opacity: 0,
    x: -350,
    stagger: 0.5,
    ease: "back",
  });