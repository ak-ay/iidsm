document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("[data-form]");
  const revealItems = document.querySelectorAll(".reveal");

  forms.forEach((form) => {
    const success = form.querySelector(".form-success");

    form.addEventListener("submit", () => {
      if (success) {
        success.style.display = "block";
      }
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));
  }
});
