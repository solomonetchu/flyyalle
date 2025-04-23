// Filter Functionality
const durationFilter = document.getElementById('duration-filter');
const priceFilter = document.getElementById('price-filter');
const packageCards = document.querySelectorAll('.package-card');

// Filter Packages by Duration
durationFilter.addEventListener('change', filterPackages);
priceFilter.addEventListener('change', filterPackages);

function filterPackages() {
  const durationValue = durationFilter.value;
  const priceValue = priceFilter.value;

  packageCards.forEach(card => {
    const duration = card.querySelector('.duration').textContent.trim();
    const price = parseInt(card.querySelector('.price').textContent.replace('$', '').trim());
    
    // Filter by Duration
    const matchesDuration = (durationValue === 'all' || duration.includes(durationValue));

    // Filter by Price Range
    let matchesPrice = false;
    if (priceValue === 'all') {
      matchesPrice = true;
    } else if (priceValue === 'low' && price <= 1000) {
      matchesPrice = true;
    } else if (priceValue === 'medium' && price > 1000 && price <= 3000) {
      matchesPrice = true;
    } else if (priceValue === 'high' && price > 3000) {
      matchesPrice = true;
    }

    // Show or hide card based on filter match
    if (matchesDuration && matchesPrice) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Book Now Button Interaction
const bookNowButtons = document.querySelectorAll('.book-now');

bookNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    const packageName = button.closest('.package-card').querySelector('h3').textContent;
    alert(`Thank you for choosing the ${packageName}! You will be redirected to the booking page.`);
    // Redirect to booking page (you can modify this as per your site structure)
    window.location.href = 'contact.html';
  });
});
