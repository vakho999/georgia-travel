document.addEventListener("DOMContentLoaded", () => {
  const showBtn = document.getElementById("showRecommendations");
  const recSection = document.getElementById("recommendations");
  if (showBtn) {
    showBtn.addEventListener("click", () => {
      recSection.classList.toggle("hidden");
    });
  }

  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");
  
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      response.textContent = `Thank you, ${form.name.value || "Traveler"}! We’ll contact you soon at ${form.email.value}.`;
      response.classList.remove("hidden");
      form.reset();
    });
  }
});
