document.addEventListener("DOMContentLoaded", () => {
    const filterInput = document.getElementById("filter-input");
    const destinationCards = document.querySelectorAll(".destination-card");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".modal .close");
    const viewMoreButtons = document.querySelectorAll(".view-more");

    // === Filter destination cards by input ===
    filterInput.addEventListener("input", () => {
      const value = filterInput.value.toLowerCase();
      destinationCards.forEach((card) => {
        const title = card.querySelector("h4").textContent.toLowerCase();
        card.style.display = title.includes(value) ? "block" : "none";
      });
    });

    // === Open modal when "View More" is clicked ===
    viewMoreButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent click from bubbling to the card
        const card = e.target.closest(".destination-card");
        const modalId = card.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add("show");
          // Disable scrolling in the background when modal is open
          document.body.style.overflow = 'hidden';
        }
      });
    });

    // === Close modal when close icon is clicked ===
    closeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("show");
        // Enable scrolling when modal is closed
        document.body.style.overflow = 'auto';
      });
    });

    // === Close modal on outside click ===
    window.addEventListener("click", (e) => {
      modals.forEach((modal) => {
        if (e.target === modal) {
          modal.classList.remove("show");
          // Enable scrolling when modal is closed
          document.body.style.overflow = 'auto';
        }
      });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Get all slideshow containers
    const slideshows = document.querySelectorAll(".slideshow-container");
  
    slideshows.forEach((slideshow) => {
      let slideIndex = 0;
  
      // Get all slides inside the slideshow container
      const slides = slideshow.querySelectorAll(".slide");
  
      // Function to show the next slide
      const showSlides = () => {
        slides.forEach((slide, index) => {
          slide.style.display = index === slideIndex ? "block" : "none";
        });
        slideIndex = (slideIndex + 1) % slides.length; // Loop back to the first slide
      };
  
      // Show the slides every 3 seconds (you can adjust the time)
      setInterval(showSlides, 3000);
  
      // Initially show the first slide
      showSlides();
    });
  });
  