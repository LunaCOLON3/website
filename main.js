const background = document.getElementById("background");

window.onmousemove = e => {
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  
  const maxX = background.offsetWidth - window.innerWidth,
        maxY = background.offsetHeight - window.innerHeight;
  
  const panX = maxX * xDecimal,
        panY = maxY * yDecimal;
  
  background.animate({
    transform: `translate(${panX - 50}px, ${panY - 50}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}
