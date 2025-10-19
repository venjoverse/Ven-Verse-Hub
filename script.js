document.addEventListener('DOMContentLoaded', () => {
  // ===============================
  // 🔹 HAMBURGER MENU TOGGLE
  // ===============================
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // ===============================
  // 🔹 OPTIONAL: CAROUSEL FUNCTIONALITY
  // ===============================
  const track = document.querySelector('.flat-track');
  const items = Array.from(document.querySelectorAll('.flat-item'));
  const prevBtn = document.querySelector('.flat-btn.prev');
  const nextBtn = document.querySelector('.flat-btn.next');
  let index = 0;

  function updateCarousel() {
    const carousel = document.querySelector('.flat-carousel');
    const containerCenter = carousel.offsetWidth / 2;
    const activeItem = items[index];
    const itemCenter = activeItem.offsetLeft + activeItem.offsetWidth / 2;
    const translateX = containerCenter - itemCenter;
    track.style.transform = `translateX(${translateX}px)`;
    items.forEach((item, i) => item.classList.toggle('active', i === index));
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + items.length) % items.length;
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % items.length;
      updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    window.addEventListener('load', updateCarousel);
  }
});