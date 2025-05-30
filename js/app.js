document.addEventListener('DOMContentLoaded', () => {
  let sections = document.querySelectorAll('section');
  let scrollTimeout;

  window.addEventListener('scroll', () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      let top = window.scrollY;
      let windowHeight = window.innerHeight;

      sections.forEach(sec => {
        let sectionTop = sec.offsetTop;
        let sectionBottom = sec.offsetTop + sec.offsetHeight;

        // Check if the section is in the viewport
        if (top + windowHeight > sectionTop && top < sectionBottom) {
          sec.classList.add('show-animation'); // Show the section
        } else {
          sec.classList.remove('show-animation'); // Hide the section
        }
      });
    }, 15);
  });
});
