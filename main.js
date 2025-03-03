const background = document.getElementById("background");

window.onmousemove = e => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  const xDecimal = mouseX / window.innerWidth;
  const yDecimal = mouseY / window.innerHeight;
  
  const maxX = background.offsetWidth - window.innerWidth;
  const maxY = background.offsetHeight - window.innerHeight;
  
  const panX = maxX * xDecimal;
  const panY = maxY * yDecimal;
  
  background.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
};
