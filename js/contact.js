// contact.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("booking-form");
    
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Validate form
      const name = form.name.value;
      const email = form.email.value;
      const destination = form.destination.value;
      const travelDates = form['travel-dates'].value;
      const message = form.message.value;
  
      if (name && email && destination && travelDates) {
        alert("Your booking request has been submitted! We'll get back to you soon.");
        form.reset(); // Reset the form
      } else {
        alert("Please fill out all required fields.");
      }
    });
  });
  