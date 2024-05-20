const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
  card.addEventListener('click', () => {
    pricingCards.forEach(otherCard => otherCard.classList.remove('selected'));
    card.classList.add('
