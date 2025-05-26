window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  // Dynamically update the background position
  if (window.innerWidth < 1000) {
    document.getElementById("titlePage").style.backgroundPositionY = `${100 + scrollPosition / -10}%`;
  } else {
    document.getElementById("titlePage").style.backgroundPositionY = `${100 + scrollPosition / -50}%`;
  }
});
