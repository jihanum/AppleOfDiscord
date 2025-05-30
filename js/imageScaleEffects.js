document.querySelectorAll('.appearanceImage').forEach((image) => {
    let scale = 1; // Initial scale
    let growInterval;

    image.addEventListener('click', () => {
        // Start growth
        scale = 2; // Increment the scale
            image.style.transform = `scale(${scale})`;
            image.style.zIndex = 999;
    });

    image.addEventListener('mouseenter', () => {
        // Start growth
        scale = 1.05; // Increment the scale
        image.style.transform = `scale(${scale})`;
        image.style.zIndex = 999;
    });

    image.addEventListener('mouseleave', () => {
        // Stop growth
        clearInterval(growInterval);
        scale = 1; // Reset the scale to its original size
        image.style.transform = `scale(${scale})`;
        image.style.zIndex = 5;
    });
});