document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.classList.toggle("active");
  });

  // Animate destination cards on scroll
  const cards = document.querySelectorAll(".destination-card");

  const revealCards = () => {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 200);
    });
  };

  revealCards(); // You can also tie this to a scroll event

  // Optional: Add new card dynamically
  // Example function you can call elsewhere:
  window.addDestination = function (title, desc, imgPath) {
    const grid = document.querySelector(".destinations-grid");
    const card = document.createElement("div");
    card.className = "destination-card show";
    card.innerHTML = `
      <img src="${imgPath}" alt="${title}" />
      <h4>${title}</h4>
      <p>${desc}</p>
    `;
    grid.appendChild(card);
  };
});
