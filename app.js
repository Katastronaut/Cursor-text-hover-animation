document.body.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Apply custom cursor to cursor
  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY,
  });

  // Apply shapes to cursor
  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1,
  });
});
