function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

function toggleDropdown(event) {
  event.preventDefault();

  // Close any other open dropdowns
  const allDropdowns = document.querySelectorAll('.language-dropdown');
  allDropdowns.forEach(dropdown => {
      if (dropdown !== event.target.closest('.language-dropdown')) {
          dropdown.classList.remove('open');
      }
  });

  // Toggle current dropdown
  const dropdown = event.target.closest('.language-dropdown');
  dropdown.classList.toggle('open');
}

document.addEventListener('click', function(event) {
  const isClickInside = event.target.closest('.language-dropdown');
  if (!isClickInside) {
      document.querySelectorAll('.language-dropdown').forEach(drop => drop.classList.remove('open'));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  setLanguage(savedLang);
});