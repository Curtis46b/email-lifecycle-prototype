const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

document.querySelectorAll(".accordion-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("open");
  });
});

const comparisonContent = {
  before: {
    title: "Current State",
    items: [
      "One long time-based welcome loop",
      "High early cadence and daily sends",
      "Mixed intent and multiple CTAs",
      "GM and AF treated too similarly",
      "Success measured mainly by opens and clicks"
    ]
  },
  after: {
    title: "Future State",
    items: [
      "Four distinct programs organized by intent",
      "Lower volume with behavior-triggered sends",
      "One message, one job, one primary CTA",
      "GM and AF journeys designed for different business roles",
      "Success measured by user actions and system health"
    ]
  }
};

const panel = document.getElementById("comparisonPanel");
document.querySelectorAll(".toggle").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".toggle").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");

    const view = button.dataset.view;
    const content = comparisonContent[view];

    panel.innerHTML = `
      <h3>${content.title}</h3>
      <ul>
        ${content.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .hero").forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});
