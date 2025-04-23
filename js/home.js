// DOMContentLoaded - Handles menu, card animations, and addDestination
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    // Hamburger toggle
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        menuToggle.classList.toggle("active");
      });
    }
  
    // Animate destination cards on scroll or on load
    const cards = document.querySelectorAll(".destination-card");
  
    const revealCards = () => {
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("show");
        }, index * 200);
      });
    };
  
    revealCards(); // Consider moving this into a scroll observer for optimization
  
    // Add new destination card dynamically
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
  
    // === Testimonials Carousel ===
    const slider = document.querySelector(".testimonial-slider");
    if (slider) {
      let scrollAmount = 0;
      const slideWidth = 320; // Card width + margin
  
      setInterval(() => {
        scrollAmount += slideWidth;
  
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          scrollAmount = 0;
        }
  
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth"
        });
      }, 5000);
    }
  
    // Alternative if you use fade/active class instead of scroll
    const testimonials = document.querySelectorAll(".testimonial");
    if (testimonials.length) {
      let testimonialIndex = 0;
  
      const showTestimonial = (index) => {
        testimonials.forEach((t, i) => {
          t.classList.toggle("active", i === index);
        });
      };
  
      showTestimonial(testimonialIndex); // Show the first one
  
      setInterval(() => {
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        showTestimonial(testimonialIndex);
      }, 5000);
    }
  });
  