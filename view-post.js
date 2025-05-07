const apiUrl = 'https://681a717317018fe50577d7a0.mockapi.io/ActForImpact/ActForImpact';

async function loadPost() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  if (!postId) {
    document.body.innerHTML = "<h2>Post not found</h2>";
    return;
  }

  try {
    const response = await fetch(`${apiUrl}/${postId}`);
    if (!response.ok) throw new Error("Post not found");

    const post = await response.json();

    document.getElementById("postTitle").textContent = post.name;
    document.getElementById("postUser").textContent = post.username || "Anonymous";
    document.getElementById("postSDGs").textContent = post.sdgNumbers;
    document.getElementById("postDescription").textContent = post.description;

    const carousel = document.getElementById("carousel");
    post.images.forEach((imgUrl, index) => {
      const img = document.createElement("img");
      img.src = imgUrl;
      img.alt = `${post.name} - Image ${index + 1}`;
      carousel.appendChild(img);
    });
  } catch (error) {
    document.body.innerHTML = `<h2>Error loading post: ${error.message}</h2>`;
  }
}

document.addEventListener("DOMContentLoaded", loadPost);

// Menu + Language Toggle
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}
function toggleDropdown(event) {
  event.preventDefault();
  document.querySelectorAll('.language-dropdown').forEach(d => d.classList.remove('open'));
  event.target.closest('.language-dropdown').classList.toggle('open');
}
document.addEventListener('click', function(event) {
  if (!event.target.closest('.language-dropdown')) {
    document.querySelectorAll('.language-dropdown').forEach(drop => drop.classList.remove('open'));
  }
});
function setLanguage(language) {
  localStorage.setItem("language", language);
  const allLangOptions = document.querySelectorAll('.language-options a');
  allLangOptions.forEach(link => link.classList.remove('active-lang'));
  const selectedLink = Array.from(allLangOptions).find(link =>
    link.textContent.toLowerCase().includes(language === 'az' ? 'azer' : 'english')
  );
  if (selectedLink) selectedLink.classList.add('active-lang');
}