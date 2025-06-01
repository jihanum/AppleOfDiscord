document.querySelectorAll('.appearanceImage').forEach((image) => {
    let scale = 1; // Initial scale
    let growInterval;

    image.addEventListener('mouseenter', () => {
        // Start growth
        scale = 1.05; // Increment the scale
        image.style.transform = `scale(${scale})`;
    });

    image.addEventListener('mouseleave', () => {
        // Stop growth
        clearInterval(growInterval);
        scale = 1; // Reset the scale to its original size
        image.style.transform = `scale(${scale})`;
    });
});