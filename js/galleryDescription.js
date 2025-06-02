document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("galleryContainer");
  const galleryImages = document.querySelectorAll(".galleryImage");

  galleryContainer.addEventListener("click", (e) => {
    const clickedElement = e.target.closest(".galleryImage");

    if (clickedElement && !clickedElement.classList.contains("active")) {
      galleryImages.forEach((image) => {
        image.classList.remove("active");
        image.classList.remove("dimmed");
      });

      // Set the clicked image as active and dim others
      clickedElement.classList.add("active");
      galleryImages.forEach((image) => {
        if (image !== clickedElement) {
          image.classList.add("dimmed");
        }
      });
    }

    if (e.target.classList.contains("close-btn")) {
      const activeImage = e.target.closest(".galleryImage");

      activeImage.classList.remove("active");
      galleryImages.forEach((image) => image.classList.remove("dimmed"));
    }
  });
});
