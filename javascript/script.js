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