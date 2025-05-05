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

async function updateAuthLink() {
  const res = await fetch('/auth-status');
  const { loggedIn } = await res.json();

  const authLink = document.getElementById('authLink');
  const aTag = authLink.querySelector('a');

  if (loggedIn) {
      aTag.textContent = 'Logout';
      aTag.href = '#';
      aTag.onclick = function (e) {
          e.preventDefault();
          fetch('/logout')
              .then(res => res.text())
              .then(msg => {
                  alert(msg);
                  window.location.href = 'index.html';
              });
      };
  } else {
      aTag.textContent = 'Login';
      aTag.href = 'login.html';
      aTag.onclick = null;
  }
}

// Run when page loads
updateAuthLink();