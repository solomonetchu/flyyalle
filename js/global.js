document.addEventListener("DOMContentLoaded", function () {
  // === Hamburger Menu Toggle (for all pages) ===
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      hamburgerBtn.classList.toggle("active");
    });
  }

  // === Animate Destination Cards (if present) ===
  const cards = document.querySelectorAll(".destination-card");
  if (cards.length) {
    const revealCards = () => {
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("show");
        }, index * 200);
      });
    };

    revealCards(); // You can also trigger this on scroll for lazy effect
  }

  // === Function to Add Destination Card Dynamically (if called) ===
  window.addDestination = function (title, desc, imgPath) {
    const grid = document.querySelector(".destinations-grid");
    if (grid) {
      const card = document.createElement("div");
      card.className = "destination-card show";
      card.innerHTML = `
        <img src="${imgPath}" alt="${title}" />
        <h4>${title}</h4>
        <p>${desc}</p>
      `;
      grid.appendChild(card);
    }
  };
});
