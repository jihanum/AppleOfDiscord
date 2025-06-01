// JavaScript to apply reversible animations on scroll
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".galleryImage");

  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in"); // Add animation class when entering
            entry.target.classList.remove("fade-out"); // Ensure exit animation is cleared
          } else {
            entry.target.classList.remove("fade-in"); // Remove entering animation
            entry.target.classList.add("fade-out"); // Add exit animation
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
  );

  galleryImages.forEach((image) => observer.observe(image));
});
