document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".galleryImage");

  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            entry.target.classList.remove("fade-out");
          } else {
            entry.target.classList.remove("fade-in");
            entry.target.classList.add("fade-out");
          }
        });
      },
      { threshold: 0.1 }
  );

  galleryImages.forEach((image) => observer.observe(image));
});
