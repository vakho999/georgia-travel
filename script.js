document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('showRecommendations');
  const section = document.getElementById('recommendations');
  if (btn && section) {
    btn.addEventListener('click', () => {
      section.classList.toggle('hidden');
    });
  }
});
