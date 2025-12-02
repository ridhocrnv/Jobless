/* --- HAMBURGER MENU (Navbar) --- */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-wrapper");

// Pastikan elemen ada sebelum menjalankan event listener (mencegah error)
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".menu-item, .sign-up").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
}

/* --- JOB FILTER TAGS (Interaksi Tombol Filter) --- */
// Ambil semua elemen dengan class .tag
const filterTags = document.querySelectorAll(".tag");

if (filterTags.length > 0) {
    filterTags.forEach(tag => {
        tag.addEventListener("click", () => {
            // 1. Hapus class 'active' dari semua tag
            filterTags.forEach(t => t.classList.remove("active"));
            
            // 2. Tambahkan class 'active' ke tag yang sedang diklik
            tag.classList.add("active");
        });
    });
}