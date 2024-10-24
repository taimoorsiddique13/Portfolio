document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

  // Function to open mobile menu
  function openMobileMenu() {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
  }

  // Function to close mobile menu
  function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  }

  // Event listener for hamburger menu icon
  menuIcon.addEventListener("click", openMobileMenu);

  // Event listener for close icon
  closeIcon.addEventListener("click", closeMobileMenu);

  // Event listeners for menu links
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      closeMobileMenu();

      // Smooth scroll to target section
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }, 300); // Small delay to allow menu animation to complete
      }
    });
  });
});
