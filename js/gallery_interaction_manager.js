document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("galleryContainer");
  const galleryImages = document.querySelectorAll(".galleryImage");

  galleryContainer.addEventListener("click", (e) => {
    const clickedElement = e.target.closest(".galleryImage");

    // If a gallery image is clicked
    if (clickedElement && !clickedElement.classList.contains("active")) {
      // Clear all active or dimmed classes
      galleryImages.forEach((image) => {
        image.classList.remove("active");
        image.classList.remove("dimmed");
      });

      // Set the clicked image as active and dim others
      clickedElement.classList.add("active");
      galleryImages.forEach((image) => {
        if (image !== clickedElement) {
          image.classList.add("dimmed"); // Dim non-clicked images
        }
      });
    }

    // If the close button is clicked
    if (e.target.classList.contains("close-btn")) {
      const activeImage = e.target.closest(".galleryImage");

      // Remove active/dimmed classes
      activeImage.classList.remove("active");
      galleryImages.forEach((image) => image.classList.remove("dimmed"));
    }
  });
});
