const toggleBtn = document.getElementById("toggleMode");
const body = document.body;
const yearSpan = document.getElementById("year");
const scrollUpBtn = document.getElementById("scrollUpBtn");

// GitHub ikonunu hedefle (tüm project'lerdeki img'ler için)
const githubIcons = document.querySelectorAll('.github-icon');

toggleBtn.addEventListener("click", () => {
  const isLight = body.classList.toggle("light-mode");
  toggleBtn.textContent = isLight ? "☀️" : "🌙";

  // İkonları güncelle
  githubIcons.forEach((icon) => {
    icon.src = isLight
      ? "icons/github-dark.svg"
      : "icons/github-white.svg";
  });
});

// Footer yıl
yearSpan.textContent = new Date().getFullYear();

// Scroll to top
window.addEventListener("scroll", () => {
  scrollUpBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
});
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});