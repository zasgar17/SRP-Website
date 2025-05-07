const apiUrl = 'https://681a717317018fe50577d7a0.mockapi.io/ActForImpact/ActForImpact';
const postsGrid = document.getElementById('postsGrid');

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


  // const translations = {
  //   en: {
  //     srpProjectTitle: "Our SRP Project",
  //     srpProjectDescription: `<strong>Our SDG Project:</strong> As part of our SRP (Social Responsibility Project), we organized a tree planting activity with school students, with support from the Ministry of Ecology and Natural Resources. First, we reached out to different organizations, and the Ministry of Ecology agreed to help us. Then we contacted several schools and found one that allowed us to take their students to the tree planting area provided by the Ministry.
  
  //     Together with the students, we planted trees and raised awareness about protecting nature. We also created a website about the 17 Sustainable Development Goals (SDGs), available in both English and Azerbaijani. On the website, we shared our tree planting project as an example to inspire others. <br>
      
  //     With this project, we supported the following SDGs:<br>
  //     SDG 4 – Quality Education<br>
  //     SDG 13 – Climate Action<br>
  //     SDG 15 – Life on Land<br>
  //     SDG 17 – Partnerships for the Goals`
  //   },
  //   az: {
  //     srpProjectTitle: "SRP Layihəmiz",
  //     srpProjectDescription: `<strong>SDG Layihəmiz:</strong> SRP (Sosial Məsuliyyət Layihəsi) çərçivəsində məktəb şagirdləri ilə birlikdə Ekologiya və Təbii Sərvətlər Nazirliyinin dəstəyi ilə ağacəkmə aksiyası təşkil etdik. Əvvəlcə müxtəlif təşkilatlarla əlaqə saxladıq və Nazirlik bizə dəstək oldu. Daha sonra bir neçə məktəblə əlaqə saxladıq və bir məktəb bizimlə bu aksiyada iştirak etməyə razılıq verdi.
  
  //     Şagirdlərlə birlikdə ağaclar əkdik və təbiətin qorunması barədə maarifləndirmə apardıq. Eyni zamanda, 17 Davamlı İnkişaf Məqsədi (SDG) haqqında veb sayt yaratdıq. Saytda bu layihəni paylaşaraq başqalarını da ruhlandırmaq istədik. <br>
      
  //     Bu layihə ilə biz aşağıdakı SDG-ləri dəstəklədik:<br>
  //     SDG 4 – Keyfiyyətli Təhsil<br>
  //     SDG 13 – İqlim Dəyişikliyinə Qarşı Mübarizə<br>
  //     SDG 15 – Quru Ekosistemlərinin Mühafizəsi<br>
  //     SDG 17 – Məqsədlər üçün Tərəfdaşlıq`
  //   }
  // };
  function setLanguage(lang) {
    localStorage.setItem("language", lang);
  
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.innerHTML = translations[lang][key] || translations["en"][key];
    });
  }
    
  window.addEventListener('DOMContentLoaded', () => {
    fetch('/auth-status')
        .then(res => res.json())
        .then(data => {
            const authLink = document.getElementById('authLink');
            if (data.loggedIn) {
                authLink.innerHTML = '<a href="#" onclick="logout()">Logout</a>';
            } else {
                authLink.innerHTML = '<a href="login.html">Login</a>';
            }
        });
});

function logout() {
    fetch('/logout').then(() => {
        alert('Logged out!');
        window.location.reload();
    });
}
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

// Run on page load
updateAuthLink();

async function loadPosts() {
  try {
    const response = await fetch(apiUrl);
    const posts = await response.json();

    if (posts.length === 0) {
      postsGrid.innerHTML = '<p>No posts to display.</p>';
      return;
    }

    postsGrid.innerHTML = ''; // Clear previous content

    posts.forEach(p => {
      const img = p.images && p.images.length ? p.images[0] : 'uploads/placeholder.jpg';
      const card = document.createElement('a');
      card.href = `view-post.html?id=${p.id}`;
      card.className = 'post-card';
      card.innerHTML = `
        <img src="${img}" alt="${p.name}">
        <div class="description">
          <strong>${p.name}</strong><br>
          <span>SDGs: ${p.sdgNumbers}</span>
        </div>
      `;
      postsGrid.appendChild(card);
    });

    // Optional SRP card
    const srpCard = document.createElement('a');
    postsGrid.appendChild(srpCard);
  } catch (error) {
    postsGrid.innerHTML = '<p>Error loading posts.</p>';
  }
}

// Call it on page load
window.addEventListener('DOMContentLoaded', loadPosts);

posts.forEach(project => {
  const card = document.createElement('div');
  card.className = 'post-card';
  card.innerHTML = `
      <a href="view-post.html?id=${project.id}">
          <img src="${project.images[0]}" alt="Project Image">
          <h3>${project.name}</h3>
          <p>${project.username}</p>
          <p>SDGs: ${project.sdgNumbers.join(', ')}</p>
      </a>
  `;
  postsGrid.appendChild(card);
});