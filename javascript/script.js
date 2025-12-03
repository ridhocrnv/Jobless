/* --- HAMBURGER MENU (Navbar Mobile) --- */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-wrapper");

// Defensive Programming: Cek elemen ada atau tidak
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        
        // Aksesibilitas
        const isActive = navMenu.classList.contains("active");
        hamburger.setAttribute("aria-expanded", isActive);
    });

    // FIX: Menambahkan .login-link agar menu tertutup saat tombol Login diklik
    document.querySelectorAll(".menu-item, .sign-up, .login-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
}

/* --- JOB FILTER LOGIC --- */
const filterTags = document.querySelectorAll(".tag");
const jobCards = document.querySelectorAll(".job-card");

if (filterTags.length > 0) {
    filterTags.forEach(tag => {
        tag.addEventListener("click", () => {
            // 1. Visual: Update tombol active
            filterTags.forEach(t => t.classList.remove("active"));
            tag.classList.add("active");

            // 2. Logic: Ambil teks kategori dari tombol (misal: "Design")
            const selectedCategory = tag.innerText;

            // 3. Logic: Filter Job Cards
            jobCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (selectedCategory === "All Jobs" || selectedCategory === cardCategory) {
                    card.style.display = "block"; // Tampilkan
                } else {
                    card.style.display = "none";  // Sembunyikan
                }
            });
        });
    });
}