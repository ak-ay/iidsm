document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("[data-form]");
  const revealItems = document.querySelectorAll(".reveal");

  forms.forEach((form) => {
    const success = form.querySelector(".form-success");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Submission failed");
        }

        if (success) {
          success.style.display = "block";
        }
        form.reset();
      } catch (error) {
        alert("Something went wrong. Please try again or call us at +91 85900 20595.");
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
