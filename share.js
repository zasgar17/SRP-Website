const apiUrl = 'https://681a717317018fe50577d7a0.mockapi.io/ActForImpact/ActForImpact';

const form = document.getElementById('shareForm');
const message = document.getElementById('formMessage');
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('searchResults');

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

function toggleDropdown(event) {
  event.preventDefault();

  const allDropdowns = document.querySelectorAll('.language-dropdown');
  allDropdowns.forEach(dropdown => {
    if (dropdown !== event.target.closest('.language-dropdown')) {
      dropdown.classList.remove('open');
    }
  });

  const dropdown = event.target.closest('.language-dropdown');
  dropdown.classList.toggle('open');
}

document.addEventListener('click', function (event) {
  const isClickInside = event.target.closest('.language-dropdown');
  if (!isClickInside) {
    document.querySelectorAll('.language-dropdown').forEach(drop => drop.classList.remove('open'));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  setLanguage(savedLang);
  updateAuthLink();
  checkLoginForSharing();
  setupShareForm(); // Set up form after DOM is loaded
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

async function checkLoginForSharing() {
  const res = await fetch('/auth-status');
  const { loggedIn } = await res.json();

  if (!loggedIn) {
    alert("Please log in to share your project.");
    window.location.href = 'login.html';
  }
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const newProject = {
      name: document.getElementById('projectName').value.trim(),
      description: document.getElementById('description').value.trim(),
      sdgNumbers: document.getElementById('sdgNumbers').value.trim(),
      images: document.getElementById('imageUrls').value.trim().split(',').map(url => url.trim())
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject)
      });
  
      if (response.ok) {
        message.textContent = 'Project shared successfully!';
        form.reset();
      } else {
        message.textContent = 'Failed to share project.';
      }
    } catch (error) {
      message.textContent = 'Error sending data.';
    }
  });
  
  searchInput.addEventListener('input', async () => {
    const query = searchInput.value.trim().toLowerCase();
    resultsDiv.innerHTML = '';
  
    if (query === '') return;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      const filtered = data.filter(project =>
        project.name.toLowerCase().includes(query) ||
        project.sdgNumbers.split(',').map(n => n.trim()).includes(query)
      );
  
      if (filtered.length > 0) {
        filtered.forEach(p => {
          resultsDiv.innerHTML += `
            <div class="project-card">
              <h3>${p.name}</h3>
              <p><strong>SDGs:</strong> ${p.sdgNumbers}</p>
              <p>${p.description}</p>
              ${p.images.length ? `<img src="${p.images[0]}" alt="${p.name}" style="max-width: 100%; border-radius: 8px; margin-top: 10px;" />` : ''}
            </div>
          `;
        });
      } else {
        resultsDiv.innerHTML = `<p>No matching projects found.</p>`;
      }
    } catch (err) {
      resultsDiv.innerHTML = `<p>Error fetching data.</p>`;
    }
  });