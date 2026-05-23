// ============================================================
// PROJECT DETAIL — Renders the project keyed by ?id=<slug>
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  const order = ["fyp", "magazine", "manulife", "animation", "banners", "insurance"];

  const projects = {
    fyp: {
      title: "Web-Based Music Player",
      subtitle: "Personal · Final-Year Project",
      category: "Personal Project",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP", "phpMyAdmin"],
      media: { type: "image", src: "./assets/fyp.png", alt: "Web-based music player" },
      body: `
        <p>A full-stack web-based music player designed to make listening hands-free, social, and personal. Built end-to-end as my final-year project — from database schema to UI polish.</p>

        <h4>Highlights</h4>
        <ul>
          <li><strong>Voice-controlled playback</strong> — play, pause, skip and search using speech commands.</li>
          <li><strong>Playlist & track management</strong> — users can curate libraries, create playlists, and organise tracks.</li>
          <li><strong>Profiles & accounts</strong> — registration, login, profile customisation and persistent preferences.</li>
          <li><strong>Sort, search & share</strong> — filter by artist, genre or length; share favourites with others.</li>
          <li><strong>Contact support</strong> — built-in flow for issue reports and inquiries.</li>
        </ul>

        <h4>Stack</h4>
        <ul>
          <li><strong>Frontend</strong> — HTML, CSS and vanilla JavaScript for a responsive, interactive UI.</li>
          <li><strong>Backend</strong> — PHP for server-side logic and request handling.</li>
          <li><strong>Database</strong> — phpMyAdmin / MySQL for user, playlist and track storage.</li>
          <li><strong>Local server</strong> — XAMPP for development and testing.</li>
        </ul>
      `,
    },

    magazine: {
      title: "ROSE & REVERIE",
      subtitle: "Personal · Editorial Design",
      category: "Personal Project",
      tags: ["Adobe InDesign", "Photoshop", "Illustrator"],
      media: { type: "image", src: "./assets/magazine1.png", alt: "ROSE & REVERIE magazine" },
      body: `
        <p>An editorial magazine project exploring the meaning, symbolism and quiet poetry of the rose — designed from the ground up across layout, imagery and bespoke vector illustration.</p>

        <h4>What went into it</h4>
        <ul>
          <li><strong>Layout & composition</strong> — structured grids, columns and balanced whitespace in <strong>Adobe InDesign</strong>.</li>
          <li><strong>Typography</strong> — carefully chosen typefaces and hierarchy for readability and rhythm.</li>
          <li><strong>Image editing</strong> — retouched and colour-graded photos in <strong>Adobe Photoshop</strong>.</li>
          <li><strong>Vector graphics</strong> — custom icons, infographics and illustrations in <strong>Adobe Illustrator</strong>.</li>
        </ul>

        <p>The end result is a piece that feels considered, editorial and quietly poetic — a slow read in print.</p>
      `,
    },

    manulife: {
      title: "Manulife Web Automation",
      subtitle: "Work · Test Automation",
      category: "Work Contribution",
      tags: ["TypeScript", "Playwright", "Node.js"],
      media: { type: "image", src: "assets/playwright-example.gif", alt: "Playwright automation example" },
      body: `
        <p>Automation suites for the Manulife web application — covering regression, functional and visual comparison tests. Built with <strong>TypeScript</strong> and the <strong>Playwright</strong> framework to keep the app reliable across releases.</p>

        <h4>What I built</h4>
        <ul>
          <li><strong>Regression suites</strong> — repeatable, deterministic checks across critical user flows.</li>
          <li><strong>Functional tests</strong> — end-to-end coverage of business-logic-driven scenarios.</li>
          <li><strong>Visual comparison</strong> — pixel-diff checks that catch unintended UI regressions early.</li>
          <li><strong>Stable selectors & helpers</strong> — reusable utilities that keep tests resilient as the app evolves.</li>
        </ul>

        <p>The outcome: faster feedback, fewer surprises in production, and confidence that ship-day changes don't break anything quietly.</p>
      `,
    },

    animation: {
      title: "2D Animation",
      subtitle: "Personal · Motion Design",
      category: "Personal Project",
      tags: ["Adobe Animate"],
      media: { type: "video", src: "./assets/animation.mp4", alt: "2D animation reel" },
      body: `
        <p>A 2D animation built in <strong>Adobe Animate</strong>, focused on storytelling through expressive character motion and visually balanced scenes.</p>

        <h4>The craft</h4>
        <ul>
          <li><strong>Character animation</strong> — designed and animated with attention to facial expression, gesture and weight.</li>
          <li><strong>Scene composition</strong> — backgrounds and transitions that carry the narrative forward.</li>
          <li><strong>Timeline management</strong> — synchronised motion, dialogue and effects across the timeline.</li>
          <li><strong>Sound integration</strong> — layered music and effects to support tone and pacing.</li>
        </ul>
      `,
    },

    banners: {
      title: "Animated Ad Banners",
      subtitle: "Work · Digital Advertising",
      category: "Work Contribution",
      tags: ["HTML", "CSS", "JavaScript", "Google Ads Studio"],
      media: { type: "image", src: "assets/banner-example.gif", alt: "Animated banner example" },
      body: `
        <p>Built dynamic, animated digital ad banners across the standard ad sizes (<strong>300×250</strong>, <strong>160×600</strong>, <strong>300×600</strong>, <strong>728×90</strong>) for a roster of client campaigns.</p>

        <h4>Campaigns shipped</h4>
        <ul>
          <li>Stitch Fix</li>
          <li>Tremfya</li>
          <li>Vemlidy</li>
          <li>Ulta Beauty</li>
          <li>American Express</li>
        </ul>

        <h4>Focus areas</h4>
        <ul>
          <li><strong>Engaging visuals</strong> — animations timed for the all-important first few seconds.</li>
          <li><strong>Performance</strong> — banners optimised to meet ad-network file-size limits without losing fidelity.</li>
          <li><strong>Brand consistency</strong> — staying on-brand across every size, every campaign.</li>
        </ul>
      `,
    },

    insurance: {
      title: "Insurance Demo App",
      subtitle: "Work · Internal Tool",
      category: "Work Contribution",
      tags: ["Angular", "Tailwind CSS", "TypeScript"],
      media: { type: "pattern" },
      body: `
        <p>A responsive internal web app simulating insurance workflows — built for live demos with stakeholders. Modular <strong>Angular</strong> components combined with <strong>Tailwind CSS</strong> for a fast, clean UI.</p>

        <h4>What it does</h4>
        <ul>
          <li><strong>Policy management</strong> — view, edit and simulate policy lifecycles.</li>
          <li><strong>Quote generation</strong> — guided flows for generating example quotes.</li>
          <li><strong>Form handling & validation</strong> — robust, accessible inputs with friendly error states.</li>
          <li><strong>Responsive design</strong> — works clean from laptops to large demo screens.</li>
        </ul>

        <p>Useful both as a sales tool and a working sandbox to experiment with new ideas before they touch production.</p>
      `,
    },
  };

  // ===== Resolve project from URL =====
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("id");
  const project = projects[slug];

  const hero = document.getElementById("detail-hero");
  const heroImg = document.getElementById("detail-image");
  const heroVideo = document.getElementById("detail-video");
  const elCategory = document.getElementById("detail-category");
  const elSubtitle = document.getElementById("detail-subtitle");
  const elTitle = document.getElementById("detail-title");
  const elTags = document.getElementById("detail-tags");
  const elBody = document.getElementById("detail-body");
  const elPrev = document.getElementById("detail-prev");
  const elNext = document.getElementById("detail-next");

  if (!project) {
    if (elTitle) elTitle.textContent = "Project not found";
    if (elSubtitle) elSubtitle.textContent = "— please pick one from the showcase —";
    if (elBody) elBody.innerHTML = `<p>This project doesn't exist or has moved. Head back to the <a href="projects.html" style="color: var(--color-dark-green); font-weight: 600;">projects showcase</a> to explore.</p>`;
    if (hero) hero.style.display = "none";
    if (elTags) elTags.style.display = "none";
    return;
  }

  // ===== Render =====
  document.title = `${project.title} · Than Yun Qi`;

  if (elCategory) elCategory.textContent = project.category;
  if (elSubtitle) elSubtitle.textContent = project.subtitle;
  if (elTitle) elTitle.textContent = project.title;
  if (elBody) elBody.innerHTML = project.body;

  if (elTags) {
    elTags.innerHTML = project.tags
      .map((t) => `<span class="tech-tag">${t}</span>`)
      .join("");
  }

  // Media
  if (hero) {
    if (project.media.type === "video") {
      heroVideo.src = project.media.src;
      heroVideo.hidden = false;
      heroImg.hidden = true;
      heroVideo.play().catch(() => { });
    } else if (project.media.type === "pattern") {
      hero.classList.add("detail-hero-pattern");
      heroImg.hidden = true;
      heroVideo.hidden = true;
    } else {
      heroImg.src = project.media.src;
      heroImg.alt = project.media.alt || project.title;
      heroImg.hidden = false;
      heroVideo.hidden = true;
    }
  }

  // Prev / Next
  const elPrevTitle = document.getElementById("detail-prev-title");
  const elNextTitle = document.getElementById("detail-next-title");
  const idx = order.indexOf(slug);
  if (idx !== -1) {
    const prevSlug = order[(idx - 1 + order.length) % order.length];
    const nextSlug = order[(idx + 1) % order.length];
    if (elPrev) elPrev.href = `project-detail.html?id=${prevSlug}`;
    if (elNext) elNext.href = `project-detail.html?id=${nextSlug}`;
    if (elPrevTitle && projects[prevSlug]) elPrevTitle.textContent = projects[prevSlug].title;
    if (elNextTitle && projects[nextSlug]) elNextTitle.textContent = projects[nextSlug].title;
  }
});
