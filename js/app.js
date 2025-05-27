document.addEventListener('DOMContentLoaded', () => {
  let sections = document.querySelectorAll('section');
  let scrollTimeout;

  window.addEventListener('scroll', () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      let top = window.scrollY;

      sections.forEach(sec => {
        let offset = sec.offsetTop - window.innerHeight * 0.85;
        let offset2 = sec.offsetTop - window.innerHeight * 0.15;
        let height = sec.offsetHeight;

        if ((top >= offset && top < offset + height) || (top >= offset2 && top < offset2 + height)) {
          sec.classList.add('show-animation');
        }
      });
    }, 15);
  });
});



// add offset2 condition