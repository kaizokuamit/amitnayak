// ===== Project Cards Rendering =====
const projects = [
  {
    title: "MY BUDDY",
    description: "An online platform for buying and selling products.",
    image: "assets/ecommerce.jpg",
    github: "https://github.com/your-username/ecommerce-project",
    live: "https://yourwebsite.com/ecommerce"
  },
  {
    title: "PORTFOLIO SITE",
    description: "A personal website to showcase my skills and resume.",
    image: "assets/portfolio.jpg",
    github: "https://github.com/your-username/portfolio-site",
    live: "https://yourwebsite.com/portfolio"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  console.log("Amit's Portfolio Loaded Successfully 🚀");

  // Render Project Cards
  const container = document.getElementById("projects-container");
  if (container) {
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="buttons">
          <a href="${project.github}" target="_blank">GitHub</a>
          <a href="${project.live}" target="_blank">Live</a>
        </div>
      `;

      container.appendChild(card);
    });
  }
});
