document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");

    // Ensure sidebar is hidden by default on mobile
    if (window.innerWidth <= 780) {
        sidebar.classList.add("hidden");
        content.classList.add("full-width");
    }

    menuBtn.addEventListener("click", () => {
        if (window.innerWidth <= 780) {
            sidebar.classList.remove("hidden"); // Always open on mobile
            content.classList.remove("full-width");
        } else {
            sidebar.classList.toggle("hidden"); // Toggle normally on larger screens
            content.classList.toggle("full-width");
        }
    });

    // Hide sidebar when clicking outside (on mobile)
    document.addEventListener("click", (event) => {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnMenuBtn = menuBtn.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnMenuBtn && window.innerWidth <= 780) {
            sidebar.classList.add("hidden");
            content.classList.add("full-width");
        }
    });

    // Handle window resize to reset behavior
    window.addEventListener("resize", () => {
        if (window.innerWidth > 780) {
            sidebar.classList.remove("hidden");
            content.classList.remove("full-width");
        } else {
            sidebar.classList.add("hidden");
            content.classList.add("full-width");
        }
    });
});
