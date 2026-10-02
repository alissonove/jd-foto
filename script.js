document.addEventListener('DOMContentLoaded', () => {
  // ===== CONFIGURA SEU WHATSAPP AQUI =====
  const numeroWhats = "5511999999999"; // troca pelo seu número com DDD
  const mensagem = "Olá! Vim pelo site JB4 Estúdio Fotográfico e quero agendar um ensaio.";

  document.getElementById('btnAgendar')?.addEventListener('click', (e) => {
    e.preventDefault();
    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  });

  // ===== SCROLL SUAVE =====
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== CARROSSEL 6 FOTOS - AUTOMÁTICO COM SETA =====
  const track = document.getElementById('track');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const dotsContainer = document.getElementById('dots');

  if (track && nextBtn && prevBtn) {
    let index = 0;
    const slideWidth = 336; // 320px + 16px gap
    const totalSlides = 6;
    let autoPlay;

    // Cria bolinhas
    if (dotsContainer) {
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          index = i;
          updateCarousel();
          resetAutoPlay();
        });
        dotsContainer.appendChild(dot);
      }
    }
    const dots = dotsContainer? dotsContainer.querySelectorAll('span') : [];

    function updateCarousel() {
      track.style.transform = `translateX(-${index * slideWidth}px)`;
      dots.forEach(d => d.classList.remove('active'));
      if (dots[index]) dots[index].classList.add('active');
    }

    function nextSlide() {
      index = (index + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      index = (index - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    function startAutoPlay() {
      autoPlay = setInterval(nextSlide, 3000); // passa a cada 3 segundos
    }

    function resetAutoPlay() {
      clearInterval(autoPlay);
      startAutoPlay();
    }

    nextBtn.addEventListener('click', () => { nextSlide(); resetAutoPlay(); });
    prevBtn.addEventListener('click', () => { prevSlide(); resetAutoPlay(); });

    // Pausa quando passa o mouse
    track.addEventListener('mouseenter', () => clearInterval(autoPlay));
    track.addEventListener('mouseleave', () => startAutoPlay());

    // Swipe no celular
    let startX = 0;
    track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    track.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) { nextSlide(); resetAutoPlay(); }
      if (endX - startX > 50) { prevSlide(); resetAutoPlay(); }
    });

    startAutoPlay();
  }

  // ===== ANIMAÇÃO DE ENTRADA DAS FOTOS =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.grid img,.grid-6 img,.slide').forEach(img => {
    img.style.opacity = "0";
    img.style.transform = "translateY(20px)";
    img.style.transition = "opacity.8s ease, transform.8s ease";
    observer.observe(img);
  });
});
