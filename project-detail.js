// ============================================================
// PROJECT DETAIL — Renders the project keyed by ?id=<slug>
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  const projects = {
    manulife: {
      title: "Manulife Web Automation",
      subtitle: "Work · Test Automation",
      category: "Work Contribution",
      tags: ["TypeScript", "Playwright", "Node.js"],
      meta: {
        role: "Automation Tester",
        team: "QA Automation Team, <br>TF Systems",
        year: "2024",
        status: "In production",
      },
      media: { type: "image", src: "assets/playwright-example.gif", alt: "Playwright automation example", caption: "Image is for reference only — actual project content is confidential." },
      body: `
        <p>Automation suites for the Manulife web application — covering regression, functional and visual comparison tests. Built with <strong>TypeScript</strong> and the <strong>Playwright</strong> framework to keep the app reliable across releases.</p>

        <h4>What I built</h4>
        <ul>
          <li><strong>Regression suites</strong> — repeatable, deterministic checks across critical user flows.</li>
          <li><strong>Functional tests</strong> — end-to-end coverage of business-logic-driven scenarios.</li>
          <li><strong>Visual comparison</strong> — pixel-diff checks that catch unintended UI regressions early.</li>
          <li><strong>Stable selectors & helpers</strong> — reusable utilities that keep tests resilient as the app evolves.</li>
        </ul>

        <p>The outcome: faster feedback, reduced regression risk, and greater confidence in every release.</p>
      `,
    },

    banners: {
      title: "Animated Ad Banners",
      subtitle: "Work · Digital Advertising",
      category: "Work Contribution",
      tags: ["HTML", "CSS", "JavaScript", "Google Ads Studio"],
      meta: {
        role: "Web Developer Intern",
        team: "Tech Team, <br>MBCS",
        year: "Multi-campaign",
        status: "Delivered across 5 brands",
      },
      media: { type: "image", src: "assets/banner-example.gif", alt: "Animated banner example", caption: "Example banner — one of many client campaigns delivered." },
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
      meta: {
        role: "Front-end Developer",
        team: "Front-end Team, <br>TF Systems",
        year: "2024",
        status: "Live demo tool",
      },
      media: { type: "image", src: "assets/insurance-demo.png", alt: "Insurance Demo App" },
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
      gallery: {
        title: "Demo Screens",
        subtitle: "Selected screens from the internal insurance demo app.",
        groups: [
          {
            label: "Screens",
            tone: "neutral",
            columns: 3,
            shots: [
              { src: "assets/insurance-demo-1.png", alt: "Insurance demo — screen 1" },
              { src: "assets/insurance-demo-2.png", alt: "Insurance demo — screen 2" },
              { src: "assets/insurance-demo-3.png", alt: "Insurance demo — screen 3" },
              { src: "assets/insurance-demo-4.png", alt: "Insurance demo — screen 4" },
              { src: "assets/insurance-demo-5.png", alt: "Insurance demo — screen 5" },
            ],
          },
        ],
      },
    },

    website: {
      title: "Company Website of TF Systems",
      subtitle: "Work · Website Development",
      category: "Work Contribution",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      meta: {
        role: "Website Developer",
        team: "TF Systems",
        year: "2024",
        status: "Refined & shipped",
      },
      media: { type: "image", src: "assets/tfsystems.png", alt: "TF Systems website — refined homepage" },
      body: `
        <p>Contributed to refining and enhancing the company website by translating project requirements into responsive and maintainable front-end experiences. Implemented improvements across layout, styling and interactions using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>Bootstrap</strong>.</p>

        <h4>What I worked on</h4>
        <ul>
          <li><strong>Website refinement</strong> — improved existing pages to enhance usability, visual consistency and overall user experience.</li>
          <li><strong>Responsive implementation</strong> — adapted layouts and components to provide a seamless experience across different screen sizes.</li>
          <li><strong>UI enhancement</strong> — refined styling, spacing and interface elements to align with project requirements and design direction.</li>
          <li><strong>Front-end development</strong> — implemented interactive behaviours and reusable structures using HTML, CSS, JavaScript and Bootstrap.</li>
        </ul>

        <p>The outcome is a more polished and consistent website experience while supporting project goals through practical front-end improvements.</p>
      `,
      gallery: {
        title: "Before & After",
        subtitle: "The original website first, followed by the refined version I worked on.",
        groups: [
          {
            label: "Before",
            tone: "before",
            shots: [
              { src: "assets/tfsystems-biz.png", alt: "Homepage — original", caption: "Homepage" },
              { src: "assets/tfsystems-biz-about-html.png", alt: "About page — original", caption: "About page" },
              { src: "assets/tfsystems-biz-contact-html.png", alt: "Contact page — original", caption: "Contact page" },
              { src: "assets/tfsystems-biz-qsconfiguration-html.png", alt: "QS Configuration — original", caption: "QS Configuration page" },
            ],
          },
          {
            label: "After",
            tone: "after",
            shots: [
              { src: "assets/tfsystems-biz-refined.png", alt: "Homepage — refined", caption: "Homepage" },
              { src: "assets/tfsystems-biz-about-html-refined.png", alt: "About page — refined", caption: "About page" },
              { src: "assets/tfsystems-biz-contact-html-refined.png", alt: "Contact page — refined", caption: "Contact page" },
              { src: "assets/tfsystems-biz-qsconfiguration-html-refined.png", alt: "QS Configuration — refined", caption: "QS Configuration page" },
            ],
          },
        ],
      },
    },
  };

  // ===== Resolve project from URL =====
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("id");
  const project = projects[slug];

  const hero = document.getElementById("detail-hero");
  const heroImg = document.getElementById("detail-image");
  const heroVideo = document.getElementById("detail-video");
  const heroCaption = document.getElementById("detail-media-caption");
  const elCategory = document.getElementById("detail-category");
  const elSubtitle = document.getElementById("detail-subtitle");
  const elTitle = document.getElementById("detail-title");
  const elTags = document.getElementById("detail-tags");
  const elBody = document.getElementById("detail-body");
  const elGallery = document.getElementById("detail-gallery");
  const elMeta = document.getElementById("detail-meta");

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

  if (elBody) {
    elBody.innerHTML = project.body;
    // Drop-cap on the first paragraph
    const firstP = elBody.querySelector("p");
    if (firstP) firstP.classList.add("detail-lede");
  }

  if (elTags) {
    elTags.innerHTML = project.tags
      .map((t) => `<span class="tech-tag">${t}</span>`)
      .join("");
  }

  // ===== Meta sidebar =====
  if (elMeta) {
    const meta = project.meta || {};
    const stack = (project.tags || []).slice(0, 5);
    const items = [
      meta.role && { label: "Role", value: meta.role, icon: "person" },
      meta.team && { label: "Team", value: meta.team, icon: "groups" },
      meta.year && { label: "Year", value: meta.year, icon: "calendar_month" },
      meta.status && { label: "Status", value: meta.status, icon: "rocket_launch" },
    ].filter(Boolean);

    if (items.length || stack.length) {
      elMeta.innerHTML = `
        <div class="detail-meta-inner">
          ${items.map((it) => `
            <div class="detail-meta-item">
              <span class="detail-meta-icon material-symbols-outlined">${it.icon}</span>
              <div class="detail-meta-text">
                <div class="detail-meta-label">${it.label}</div>
                <div class="detail-meta-value">${it.value}</div>
              </div>
            </div>
          `).join("")}
          ${stack.length ? `
            <div class="detail-meta-stack">
              <div class="detail-meta-label">Stack</div>
              <div class="detail-meta-stack-list">
                ${stack.map((t) => `<span class="detail-meta-chip">${t}</span>`).join("")}
              </div>
            </div>
          ` : ""}
        </div>
      `;
      elMeta.hidden = false;
    } else {
      elMeta.hidden = true;
    }
  }

  // Media
  if (hero) {
    if (project.media.type === "video") {
      heroVideo.src = project.media.src;
      heroVideo.hidden = false;
      heroImg.hidden = true;
      heroVideo.play().catch(() => { });
    } else if (project.media.type === "pattern") {
      hero.classList.add("detail-media-pattern");
      heroImg.hidden = true;
      heroVideo.hidden = true;
    } else {
      heroImg.src = project.media.src;
      heroImg.alt = project.media.alt || project.title;
      heroImg.hidden = false;
      heroVideo.hidden = true;
    }

    if (heroCaption) {
      if (project.media.caption) {
        heroCaption.textContent = project.media.caption;
        heroCaption.hidden = false;
      } else {
        heroCaption.hidden = true;
      }
    }
  }

  // Grouped gallery (e.g. TF Systems — all Before shots, then all After shots)
  if (elGallery) {
    if (project.gallery && Array.isArray(project.gallery.groups) && project.gallery.groups.length) {
      const { title, subtitle, groups } = project.gallery;
      elGallery.innerHTML = `
        <header class="detail-gallery-head">
          ${title ? `<h4>${title}</h4>` : ""}
          ${subtitle ? `<p>${subtitle}</p>` : ""}
        </header>
        ${groups.map((g) => `
          <section class="detail-gallery-group detail-gallery-group--${g.tone || "neutral"}">
            <header class="detail-gallery-group-head">
              <span class="detail-gallery-tag detail-gallery-tag--${g.tone || "neutral"}">${g.label}</span>
            </header>
            <div class="detail-gallery-stack${g.columns ? ` detail-gallery-stack--cols-${g.columns}` : ""}">
              ${g.shots.map((s) => `
                <figure class="detail-gallery-shot">
                  <img src="${s.src}" alt="${s.alt || ""}" loading="lazy" />
                  ${s.caption ? `<figcaption class="detail-gallery-caption">${s.caption}</figcaption>` : ""}
                </figure>
              `).join("")}
            </div>
          </section>
        `).join("")}
      `;
      elGallery.hidden = false;
    } else {
      elGallery.hidden = true;
      elGallery.innerHTML = "";
    }
  }
});
