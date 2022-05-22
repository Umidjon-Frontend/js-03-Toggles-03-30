const toggles__input = document.querySelectorAll(".toggles__input");

toggles__input.forEach((toggles) => {
  toggles.addEventListener("change", (e) => {
    const targetEl = e.target;

    toggles__input.forEach((el) => {
      if (el === targetEl) {
        return;
      }

      const random = Math.random();
      el.checked = random > 0.6;
    });
  });
});
