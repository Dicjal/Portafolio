const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("animated");
      }
    });
  }, {
    threshold: 0.5, // Cuando al menos el 50% del elemento está en pantalla
  });
  