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

  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("postContainer");
  
    // Dummy data
    const posts = [
      {
        image: "https://via.placeholder.com/300",
        description: "Planting trees in rural areas to combat climate change."
      },
      {
        image: "https://via.placeholder.com/300",
        description: "Youth-led water conservation project."
      },
      {
        image: "https://via.placeholder.com/300",
        description: "Clean-up drive near coastal areas for SDG 14."
      }
    ];
  
    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "post-card";
      card.innerHTML = `
        <img src="${post.image}" alt="Shared project">
        <div class="description">${post.description}</div>
      `;
      container.appendChild(card);
    });
  });

  const imageLinks = [
    "Act for Impact Final.jpg",
    "Act for Impact Final (1).jpg",
    "Act for Impact Final (2).jpg",
    "Act for Impact Final (3).jpg",
  ];
  
  let currentIndex = 0;
  
  function showImage(index) {
    const img = document.getElementById("carouselImage");
    if (img) {
      img.src = imageLinks[index];
    }
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + imageLinks.length) % imageLinks.length;
    showImage(currentIndex);
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % imageLinks.length;
    showImage(currentIndex);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    showImage(currentIndex); // Initial load
  
    // Load rest of posts below the SDG post
    const container = document.getElementById("postContainer");
    const posts = [
      {
        image: "https://via.placeholder.com/300",
        description: "Youth SDG project: Community clean-up in parks."
      },
      {
        image: "https://via.placeholder.com/300",
        description: "Rainwater harvesting system for Goal 6."
      }
    ];
  
    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "post-card";
      card.innerHTML = `
        <img src="${post.image}" alt="Shared project">
        <div class="description">${post.description}</div>
      `;
      container.appendChild(card);
    });
  });

  const translations = {
    en: {
      srpProjectTitle: "Our SRP Project",
      srpProjectDescription: `<strong>Our SDG Project:</strong> As part of our SRP (Social Responsibility Project), we organized a tree planting activity with school students, with support from the Ministry of Ecology and Natural Resources. First, we reached out to different organizations, and the Ministry of Ecology agreed to help us. Then we contacted several schools and found one that allowed us to take their students to the tree planting area provided by the Ministry.
  
      Together with the students, we planted trees and raised awareness about protecting nature. We also created a website about the 17 Sustainable Development Goals (SDGs), available in both English and Azerbaijani. On the website, we shared our tree planting project as an example to inspire others. <br>
      
      With this project, we supported the following SDGs:<br>
      SDG 4 – Quality Education<br>
      SDG 13 – Climate Action<br>
      SDG 15 – Life on Land<br>
      SDG 17 – Partnerships for the Goals`
    },
    az: {
      srpProjectTitle: "SRP Layihəmiz",
      srpProjectDescription: `<strong>SDG Layihəmiz:</strong> SRP (Sosial Məsuliyyət Layihəsi) çərçivəsində məktəb şagirdləri ilə birlikdə Ekologiya və Təbii Sərvətlər Nazirliyinin dəstəyi ilə ağacəkmə aksiyası təşkil etdik. Əvvəlcə müxtəlif təşkilatlarla əlaqə saxladıq və Nazirlik bizə dəstək oldu. Daha sonra bir neçə məktəblə əlaqə saxladıq və bir məktəb bizimlə bu aksiyada iştirak etməyə razılıq verdi.
  
      Şagirdlərlə birlikdə ağaclar əkdik və təbiətin qorunması barədə maarifləndirmə apardıq. Eyni zamanda, 17 Davamlı İnkişaf Məqsədi (SDG) haqqında veb sayt yaratdıq. Saytda bu layihəni paylaşaraq başqalarını da ruhlandırmaq istədik. <br>
      
      Bu layihə ilə biz aşağıdakı SDG-ləri dəstəklədik:<br>
      SDG 4 – Keyfiyyətli Təhsil<br>
      SDG 13 – İqlim Dəyişikliyinə Qarşı Mübarizə<br>
      SDG 15 – Quru Ekosistemlərinin Mühafizəsi<br>
      SDG 17 – Məqsədlər üçün Tərəfdaşlıq`
    }
  };
  function setLanguage(lang) {
    localStorage.setItem("language", lang);
  
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.innerHTML = translations[lang][key] || translations["en"][key];
    });
  }
    
  