document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector('.hamMenu'); // Or .ham-menu
  const offScreenMenu = document.querySelector('.off-screen-menu');

  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
  });
});
