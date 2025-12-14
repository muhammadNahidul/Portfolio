// Navbar mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// --- Customize User Info Here ---
const userInfo = {
  heroName: "MD Nahidul Islam",
  heroTitle: "Aspiring Backend Developer | Python, Django, DRF",
  heroImg: "img/1.jpg",
  aboutImg: "img/1.jpg",
  aboutText: `<p>I am a motivated Backend Developer skilled in Python, Django, and Django REST Framework. I enjoy creating efficient and scalable web applications with robust APIs.</p>
              <p>I am passionate about technology, problem-solving, and continuously improving my skills to contribute to innovative projects.</p>`,
  skills: [
    "Python",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "JavaScript",
    "HTML",
    "CSS / Tailwind",
    "React",
    "Node.js",
  ],
  projects: [
    {
      name: "Blog API",
      desc: "A Django REST Framework project to manage blog posts with full CRUD functionality.",
      link: "https://github.com/muhammadNahidul/Blog-Api",
    },
    {
      name: "Finance Tracker",
      desc: "A personal finance tracker built with Django to manage income and expenses.",
      link: "https://github.com/muhammadNahidul/Finance-Tracker",
    },
    {
      name: "Weather App",
      desc: "A dynamic weather application built with JavaScript and OpenWeatherMap API. Users can view real-time weather information for any city, including temperature, weather conditions, and icons. Designed with TailwindCSS for a responsive and modern UI.",
      link: "https://github.com/muhammadNahidul/Weather-App",
    },
    {
      name: "Social Media API",
      desc: "Developed a social media app with features like user registration, posts, likes, an comments. Designed database models and implemented CRUD functionality using Django.",
      link: "https://github.com/muhammadNahidul/social-media-API",
    },
        {
      name: "IMDB API",
      desc: "Created an Developed a web application/API to fetch and display movie and TV show data using the IMDb API.",
      link: "https://github.com/muhammadNahidul/IMDB-API",
    },
  ],
};

// --- Populate Hero Section ---
const heroNameEl = document.getElementById("hero-name");
const heroTitleEl = document.getElementById("hero-title");
const heroImg = document.getElementById("hero-img");
const heroButtons = document.getElementById("hero-buttons");

heroNameEl.textContent = userInfo.heroName;
heroTitleEl.textContent = userInfo.heroTitle;
heroImg.src = userInfo.heroImg;

// --- Animate Hero Section ---
setTimeout(() => {
  heroNameEl.classList.remove("opacity-0", "translate-y-6");
}, 100);

setTimeout(() => {
  heroTitleEl.classList.remove("opacity-0", "translate-y-6");
}, 400);

setTimeout(() => {
  heroButtons.classList.remove("opacity-0", "translate-y-6");
}, 700);

setTimeout(() => {
  heroImg.classList.remove("opacity-0", "scale-90");
}, 1000);

// --- Populate About Section ---
document.getElementById("about-img").src = userInfo.aboutImg;
document.getElementById("about-text").innerHTML = userInfo.aboutText;

// --- Populate Skills Section ---
const skillsContainer = document.getElementById("skills-container");
userInfo.skills.forEach((skill) => {
  const badge = document.createElement("span");
  badge.textContent = skill;
  badge.className =
    "bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-5 py-3 rounded-full shadow-md transform hover:scale-105 transition-transform";
  skillsContainer.appendChild(badge);
});

// --- Populate Projects Section ---
const projectsContainer = document.getElementById("projects-container");
userInfo.projects.forEach((project) => {
  const card = document.createElement("div");
  card.className =
    "bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform";
  card.innerHTML = `
    <h3 class="text-2xl font-semibold mb-2 text-blue-400">${project.name}</h3>
    <p class="mb-4 text-gray-300">${project.desc}</p>
    <a href="${project.link}" class="text-blue-300 font-semibold hover:underline">View Project</a>
  `;
  projectsContainer.appendChild(card);
});

// --- EmailJS Contact Form ---
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent reload

  emailjs
    .sendForm("service_jrdc8n2", "template_o1csn6d", this)
    .then(() => {
      alert("Message sent successfully!");
      form.reset(); // clear form
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send message. Please try again.");
    });
});
