const hamburger = document.querySelector(".hamburger");
const navWrapper = document.querySelector(".nav-wrapper");

// Toggle Menu saat hamburger diklik
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navWrapper.classList.toggle("active");
});

// Menutup menu jika salah satu link diklik (opsional, bagus untuk UX)
document.querySelectorAll(".menu-item, .sign-up").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navWrapper.classList.remove("active");
}));