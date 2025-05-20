document.addEventListener('DOMContentLoaded', () => {
  let sections = document.querySelectorAll('section');
  let scrollTimeout;

  window.addEventListener('scroll', () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      let top = window.scrollY;

      sections.forEach(sec => {
        let offset = sec.offsetTop - window.innerHeight * 0.5;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
          sec.classList.add('show-animation');
        }
      });
    }, 15);
  });
});
