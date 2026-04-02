document.addEventListener('DOMContentLoaded', () => {
  const interactiveCards = document.querySelectorAll('.skill-card-interactive');

  interactiveCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-3px)';
    });

    card.addEventListener('mouseout', () => {
      card.style.transform = '';
    });
  });
});
