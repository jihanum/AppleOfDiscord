// Show/hide the button based on scroll position
const upArrowButton = document.getElementById('upArrowButton');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    upArrowButton.classList.add('show');
    upArrowButton.classList.remove('hide');
  } else {
    upArrowButton.classList.add('hide');
    upArrowButton.classList.remove('show');
  }
});

// Smooth scroll to titlePage
function scrollToTitlePage() {
  document.getElementById('titlePage').scrollIntoView({ behavior: 'smooth' });
}