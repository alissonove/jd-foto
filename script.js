// JB4 ESTÚDIO FOTOGRÁFICO - SCRIPT COMPLETO
document.addEventListener("DOMContentLoaded", function() {

  const track = document.getElementById("track");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsContainer = document.getElementById("dots");

  if (!track) return;

  const slides = track.children;
  let currentIndex = 0;
  const slideWidth = 296; // 280 + gap 16

  // CRIAR DOTS
  function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = "";
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add("active");
    }
  }

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;
    track.scrollTo({
      left: currentIndex * slideWidth,
      behavior: "smooth"
    });
    updateDots();
  }

  // SETAS
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goToSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goToSlide(currentIndex + 1);
    });
  }

  // PASSAGEM AUTOMÁTICA A CADA 3 SEGUNDOS
  let autoPlay = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 3000);

  // PAUSAR AO PASSAR O MOUSE
  track.addEventListener("mouseenter", () => clearInterval(autoPlay));
  track.addEventListener("mouseleave", () => {
    autoPlay = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 3000);
  });

  // ARRASTE COM O MOUSE / DEDO
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    track.classList.add("active");
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  track.addEventListener("mouseleave", () => {
    isDown = false;
  });
  track.addEventListener("mouseup", () => {
    isDown = false;
  });
  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });

  // SCROLL SUAVE NOS LINKS DO MENU
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // INICIAR
  createDots();
  console.log("JB4 - Site carregado | WhatsApp 11 98128-9588 | @jbfour | Rua Fioravante Begamini, 50");
});
