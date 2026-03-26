/* ───── Event Data ───── */
const pastEvents = [
  {
    title: "Master in Cloud: Your Career Journey with AWS",
    date: "Sep 27, 2023",
    summary:
      "A grand success of the first event “Your Career Journey with AWS”, powered by the incredible efforts of the College Cloud Champs team!",
    images: [
      "images/AWS Events Photos/AWS First Event/poster.jpg",
      "images/AWS Events Photos/AWS First Event/pic1.jpg",
      "images/AWS Events Photos/AWS First Event/pic2.jpg",
      "images/AWS Events Photos/AWS First Event/pic3.jpg",
    ],
  },
  {
    title: "AWS Cloud Quest Bootcamp 24",
    date: "May 29, 2024",
    summary:
      "A three-day immersive workshop focused on AWS fundamentals and hands-on cloud learning through Cloud Quest.",
    images: [
      "images/AWS Events Photos/AWS Cloud Quest Bootcamp 24/poster.jpg",
      "images/AWS Events Photos/AWS Cloud Quest Bootcamp 24/pic1.jpg",
      "images/AWS Events Photos/AWS Cloud Quest Bootcamp 24/pic2.jpg",
      "images/AWS Events Photos/AWS Cloud Quest Bootcamp 24/pic3.jpg",
      "images/AWS Events Photos/AWS Cloud Quest Bootcamp 24/pic4.jpg",
      "images/AWS Events Photos/AWS Cloud Quest Bootcamp 24/pic5.jpg",
    ],
  },
  {
    title: "AWS Cloud Cross Club Event",
    date: "Feb 09, 2024",
    summary:
      "A successful virtual AWS Cloud Cross Club event featuring inspiring talks by Sheen Brisals and Eric Johnson.",
    images: [
      "images/AWS Events Photos/AWS Cloud Cross Club Event/pic1.jpg",
      "images/AWS Events Photos/AWS Cloud Cross Club Event/pic2.jpg",
      "images/AWS Events Photos/AWS Cloud Cross Club Event/pic3.jpg",
      "images/AWS Events Photos/AWS Cloud Cross Club Event/pic4.jpg",
      "images/AWS Events Photos/AWS Cloud Cross Club Event/pic5.jpg",
      "images/AWS Events Photos/AWS Cloud Cross Club Event/pic6.jpg",
    ],
  },
  {
    title: "AWS Tech Nova Day",
    date: "Sep 02, 2024",
    summary:
      "A successful AWS Tech Nova Day featuring insightful sessions, hands-on learning, and highlighted by an interactive PartyRock app development experience.",
    images: [
      "images/AWS Events Photos/AWS Tech Nova Day/poster.jpg",
      "images/AWS Events Photos/AWS Tech Nova Day/pic1.jpg",
      "images/AWS Events Photos/AWS Tech Nova Day/pic2.jpg",
      "images/AWS Events Photos/AWS Tech Nova Day/pic3.jpg",
      "images/AWS Events Photos/AWS Tech Nova Day/pic4.jpg",
    ],
  },
  {
    title: "Introduction to AWS Community",
    date: "Mar 14, 2025",
    summary:
      "Introduction to AWS Community session for first-year students at Anna University Regional Campus, Madurai!",
    images: [
      "images/AWS Events Photos/Introduction to AWS Community/poster.jpg",
      "images/AWS Events Photos/Introduction to AWS Community/pic1.jpg",
      "images/AWS Events Photos/Introduction to AWS Community/pic2.jpg",
      "images/AWS Events Photos/Introduction to AWS Community/pic3.jpg",
      "images/AWS Events Photos/Introduction to AWS Community/pic4.jpg",
    ],
  },
  {
    title: "Amazon Q Workshop",
    date: "Apr 25, 2025",
    summary:
      "Amazon Q Workshop successfully hosted at Anna University Regional Campus Madurai with 60+ students exploring AWS services through hands-on learning.",
    images: [
      "images/AWS Events Photos/Amazon Q Workshop/poster.jpg",
      "images/AWS Events Photos/Amazon Q Workshop/pic1.jpg",
      "images/AWS Events Photos/Amazon Q Workshop/pic2.jpg",
      "images/AWS Events Photos/Amazon Q Workshop/pic3.jpg",
      "images/AWS Events Photos/Amazon Q Workshop/pic4.jpg",
      "images/AWS Events Photos/Amazon Q Workshop/pic5.jpg",
      "images/AWS Events Photos/Amazon Q Workshop/pic6.jpg",
      "images/AWS Events Photos/Amazon Q Workshop/pic7.jpg",
      "images/AWS Events Photos/Amazon Q Workshop/pic8.jpg",
    ],
  },
  {
    title: "Amazon Q CLI Bootcamp",
    date: "June 29, 2025",
    summary:
      "Amazon Q CLI Bootcamp introducing students to Amazon Q CLI, enabling them to build practical applications and games within minutes.",
    images: [
      "images/AWS Events Photos/Amazon Q CLI Bootcamp/poster.jpg",
      "images/AWS Events Photos/Amazon Q CLI Bootcamp/pic1.jpg",
    ],
  },
  {
    title: "Cloud Quest 25",
    date: "Sep 3-4, 2025",
    summary:
      "A successful two-day AWS Cloud Quest event led by the Tech Team and Cloud Champs who ensured engaging, hands-on learning for all participants.",
    images: [
      "images/AWS Events Photos/AWS Cloud Quest 25/poster.jpg",
      "images/AWS Events Photos/AWS Cloud Quest 25/pic1.jpeg",
      "images/AWS Events Photos/AWS Cloud Quest 25/pic2.jpeg",
      "images/AWS Events Photos/AWS Cloud Quest 25/pic3.jpeg",
      "images/AWS Events Photos/AWS Cloud Quest 25/pic4.jpeg",
      "images/AWS Events Photos/AWS Cloud Quest 25/pic5.jpeg",
      "images/AWS Events Photos/AWS Cloud Quest 25/pic6.jpeg",
      "images/AWS Events Photos/AWS Cloud Quest 25/pic7.jpeg",
    ],
  },
  {
    title: "Amazon EC2 & S3 Bootcamp",
    date: "Jan 30, 2026",
    summary:
      "Hands-On Experience in Real-World Cloud Deployment with EC2, Application Hosting, and S3",
    images: [
      "images/AWS Events Photos/Amazon EC2 & S3 Bootcamp/poster.jpeg",
      "images/AWS Events Photos/Amazon EC2 & S3 Bootcamp/pic1.jpeg",
      "images/AWS Events Photos/Amazon EC2 & S3 Bootcamp/pic2.jpeg",
      "images/AWS Events Photos/Amazon EC2 & S3 Bootcamp/pic3.jpeg",
      "images/AWS Events Photos/Amazon EC2 & S3 Bootcamp/pic4.jpeg",
    ],
  },
];

/* ───── Members Data ───── */
const memberCategories = [
  {
    title: "Captain",
    emoji: "",
    highlight: true,
    members: [{ name: "Ramanan M", role: "Club Captain" }],
  },
  {
    title: "Cloud Champs",
    emoji: "",
    highlight: true,
    members: [
      { name: "Dharanidharan K", role: "Cloud Champion" },
      { name: "Balalochini L", role: "Cloud Champion" },
    ],
  },
  {
    title: "Core Team",
    emoji: "",
    highlight: true,
    members: [
      {
        name: "Mohammed Sheik Ashraf",
        role: "Events and Operation Team Head (EOT)",
      },
      { name: "Maheshkumar", role: "Design Team Head (DT)" },
      { name: "Dhivya", role: "Tech Team Head (TT)" },
      {
        name: "John Wesley Smith ",
        role: "Community Engagement Team Head (CET)",
      },
      { name: "Dakshayani", role: "Content Team Head(CT)" },
    ],
  },
  {
    title: "Members & Volunteers",
    emoji: "",
    highlight: true,
    members: [
      { name: "Rajarathinam", role: "Events and Operation Team" },
      { name: "Vinesh kumar ", role: "Tech team " },
      { name: "Sanjay", role: "Tech team " },
      { name: "Mahesh", role: "Community Engagement Team" },
      { name: "Karthick Sankar", role: "Design Team" },
      { name: "Prawin", role: "Tech team " },
      { name: "Lokesh Kannan", role: "Content Team" },
      { name: "Harini M", role: "Content Team" },
      { name: "Dharshine", role: "Community Engagement Team" },
      { name: "Uva Sara Sri ", role: "Community Engagement Team" },
      { name: "Bhavadharani", role: "Community Engagement Team" },
      { name: "Mukesh", role: "Content Team" },
      { name: "Harish Kumar", role: "Content Team" },
      { name: "Jawahar", role: "Design Team" },
      { name: "Kaviya", role: "Events and Operation Team" },
      { name: "Jerin Froshna", role: "Events and Operation Team" },
      { name: "Harini sri", role: "Tech team" },
      { name: "Logesh", role: "Design Team" },
      { name: "Praveen Kumar", role: "Design Team" },
    ],
  },
];

const stats = [
  { label: "Members & Volunteers", value: 25, icon: "👥" },
  { label: "Events & Workshops Hosted", value: 10, icon: "🏆" },
];

/* ───── Helpers ───── */
function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("");
}

function createEventCard(event, index, clickable) {
  const card = document.createElement("article");
  card.className = "glass-card event-card";
  card.style.animationDelay = `${index * 100}ms`;
  card.innerHTML = `
    <div class="event-card-img">
      <img src="${event.images[0]}" alt="${event.title}" loading="lazy" />
      <span class="event-card-icon">📅</span>
    </div>
    <div class="event-card-body">
      <p class="event-card-date">${event.date}</p>
      <h3 class="event-card-title">${event.title}</h3>
      <p class="event-card-summary">${event.summary}</p>
      ${
        clickable
          ? `<p class="event-card-photos">📸 ${event.images.length} photos — Click to view</p>`
          : ""
      }
    </div>
  `;
  if (clickable) {
    card.addEventListener("click", () => openGallery(event));
  }
  return card;
}

/* ───── Render: Home page events (first 3) ───── */
const eventsGrid = document.getElementById("eventsGrid");
if (eventsGrid) {
  pastEvents.slice(0, 3).forEach((e, i) => {
    eventsGrid.appendChild(createEventCard(e, i, false));
  });
}

/* ───── Render: All events page ───── */
const allEventsGrid = document.getElementById("allEventsGrid");
if (allEventsGrid) {
  pastEvents.forEach((e, i) => {
    allEventsGrid.appendChild(createEventCard(e, i, true));
  });
}

/* ───── Render: Members ───── */
const membersContainer = document.getElementById("membersContainer");
if (membersContainer) {
  memberCategories.forEach((cat) => {
    const section = document.createElement("div");
    section.className = "member-category";
    section.innerHTML = `
      <div class="member-category-header">
        <span>${cat.emoji}</span>
        <h3>${cat.title}</h3>
      </div>
      <div class="members-grid">
        ${cat.members
          .map(
            (m) => `
          <div class="glass-card member-card ${
            cat.highlight ? "highlight" : ""
          }">
            <div class="member-avatar ${
              cat.highlight ? "primary" : "muted"
            }">${getInitials(m.name)}</div>
            <div class="member-name">${m.name}</div>
            <div class="member-role">${m.role}</div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    membersContainer.appendChild(section);
  });
}

/* ───── Render: Stats ───── */
const statsGrid = document.getElementById("statsGrid");
if (statsGrid) {
  stats.forEach((s) => {
    const card = document.createElement("div");
    card.className = "glass-card stat-card";
    card.innerHTML = `
      <div class="stat-icon">${s.icon}</div>
      <div class="stat-value" data-target="${s.value}">0+</div>
      <p class="stat-label">${s.label}</p>
    `;
    statsGrid.appendChild(card);
  });
}

/* ───── Gallery ───── */
let currentImages = [];
let currentIndex = 0;

function openGallery(event) {
  currentImages = event.images;
  currentIndex = 0;

  document.getElementById("galleryTitle").textContent = event.title;
  document.getElementById("galleryDate").textContent = event.date;
  updateGalleryImage();
  renderThumbs();

  const overlay = document.getElementById("galleryOverlay");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  document.getElementById("galleryOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function updateGalleryImage() {
  const img = document.getElementById("galleryImage");
  img.src = currentImages[currentIndex];
  img.alt = `Photo ${currentIndex + 1}`;
  document.getElementById("galleryCounter").textContent = `${
    currentIndex + 1
  } / ${currentImages.length}`;

  // Update thumb active state
  document.querySelectorAll(".gallery-thumb").forEach((t, i) => {
    t.classList.toggle("active", i === currentIndex);
  });

  // Show/hide arrows
  const arrows = document.querySelectorAll(".gallery-arrow");
  arrows.forEach(
    (a) => (a.style.display = currentImages.length > 1 ? "flex" : "none")
  );
}

function renderThumbs() {
  const container = document.getElementById("galleryThumbs");
  container.innerHTML = "";
  currentImages.forEach((src, i) => {
    const btn = document.createElement("button");
    btn.className = `gallery-thumb ${i === 0 ? "active" : ""}`;
    btn.innerHTML = `<img src="${src}" alt="" loading="lazy" />`;
    btn.addEventListener("click", () => {
      currentIndex = i;
      updateGalleryImage();
    });
    container.appendChild(btn);
  });
}

// Gallery controls
const galleryClose = document.getElementById("galleryClose");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");
const galleryOverlay = document.getElementById("galleryOverlay");

if (galleryClose) galleryClose.addEventListener("click", closeGallery);
if (galleryPrev)
  galleryPrev.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateGalleryImage();
  });
if (galleryNext)
  galleryNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateGalleryImage();
  });
if (galleryOverlay)
  galleryOverlay.addEventListener("click", (e) => {
    if (e.target === galleryOverlay) closeGallery();
  });

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!galleryOverlay || !galleryOverlay.classList.contains("open")) return;
  if (e.key === "Escape") closeGallery();
  if (e.key === "ArrowLeft") {
    currentIndex =
      (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateGalleryImage();
  }
  if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateGalleryImage();
  }
});

/* ───── Particles ───── */
const canvas = document.getElementById("particles");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let particles = [];
  const COUNT = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(252, 100%, 69%, 0.3)";
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = p.x - particles[j].x;
        const dy = p.y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `hsla(252, 100%, 69%, ${0.1 * (1 - d / 120)})`;
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

/* ───── Navbar scroll ───── */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 40);
});

/* ───── Mobile nav toggle ───── */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks
    .querySelectorAll("a")
    .forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("open"))
    );
}

/* ───── Hero reveal ───── */
const heroContent = document.getElementById("heroContent");
if (heroContent) setTimeout(() => heroContent.classList.add("visible"), 100);

/* ───── Scroll reveal ───── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.15 }
);
document
  .querySelectorAll(".section-reveal")
  .forEach((el) => observer.observe(el));

/* ───── Animated counters ───── */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const duration = 2000;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + "+";
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
document
  .querySelectorAll("[data-target]")
  .forEach((el) => counterObserver.observe(el));

/* ───── Year ───── */
document
  .querySelectorAll("#year")
  .forEach((el) => (el.textContent = new Date().getFullYear()));
