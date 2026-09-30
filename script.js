document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.reserve-btn');

  if (button) {
    button.addEventListener('click', () => {
      button.classList.toggle('is-active');
      button.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
});
