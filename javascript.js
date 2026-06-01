// ============================================================
// PORTFOLIO — Shared interactions
// ============================================================
document.addEventListener("DOMContentLoaded", function () {

  // ===== Scroll Reveal =====
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  revealElements.forEach((el) => revealObserver.observe(el));

  // ===== Navbar shadow on scroll =====
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ===== Scroll Progress Bar =====
  const progressBar = document.getElementById("scrollProgress");
  if (progressBar) {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + "%";
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
  }

  // ===== Custom Cursor =====
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (dot && ring && window.matchMedia("(hover: hover)").matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    });

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      requestAnimationFrame(animateRing);
    };
    animateRing();

    const hoverables = document.querySelectorAll(
      "a, button, .projects-nav, .feature-card, .timeline-card, .stat-card, .skill-cat, .language-badge, .tab-chip, .icon-btn, .resume-box"
    );
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
    });

    document.addEventListener("mouseleave", () => {
      dot.style.opacity = 0;
      ring.style.opacity = 0;
    });
    document.addEventListener("mouseenter", () => {
      dot.style.opacity = 1;
      ring.style.opacity = 1;
    });
  }

  // ===== Typewriter on hero =====
  const typewriter = document.getElementById("typewriter");
  if (typewriter) {
    const words = [
      "thoughtful interfaces",
      "reliable web apps",
      "user-friendly experiences",
      "well-tested features",
      "clean, careful code",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const current = words[wordIndex];
      typewriter.textContent = current.slice(0, charIndex);

      if (!deleting && charIndex < current.length) {
        charIndex++;
        setTimeout(tick, 90);
      } else if (deleting && charIndex > 0) {
        charIndex--;
        setTimeout(tick, 45);
      } else if (!deleting && charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1700);
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(tick, 250);
      }
    };
    tick();
  }

  // ===== Animated Stat Counters =====
  const statNums = document.querySelectorAll(".stat-num[data-count]");
  if (statNums.length) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10) || 0;
          const duration = 1400;
          const start = performance.now();

          const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(eased * target);
            if (t < 1) requestAnimationFrame(step);
            else el.textContent = target + "+";
          };
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    statNums.forEach((el) => counterObserver.observe(el));
  }

  // ===== About hero — scroll-linked exit animation =====
  const aboutGrid = document.querySelector("#about .about-card-grid");
  if (aboutGrid && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const aboutHead = document.querySelector("#about > .section-head");
    const profileCard = aboutGrid.querySelector(".profile-card");
    const aboutStory = aboutGrid.querySelector(".about-story");

    // Targets: each gets an inline transform driven by exit progress (0 -> 1)
    const targets = [
      { el: aboutHead,    x:    0, y: -40, rot:   0, scaleEnd: 0.92 },
      { el: profileCard,  x: -240, y: -80, rot: -14, scaleEnd: 0.82 },
      { el: aboutStory,   x:  180, y: -60, rot:   8, scaleEnd: 0.94 },
    ].filter((t) => t.el);

    // After each element's entrance transition completes, swap its slow .reveal
    // transition for a snappy one so scroll-linked updates feel immediate.
    targets.forEach(({ el }) => {
      el.addEventListener(
        "transitionend",
        () => {
          el.style.transition = "transform 0.06s linear, opacity 0.06s linear";
        },
        { once: true }
      );
      el.style.willChange = "transform, opacity";
    });

    let pending = false;
    const apply = () => {
      pending = false;
      const rect = aboutGrid.getBoundingClientRect();
      const winH = window.innerHeight || document.documentElement.clientHeight;
      // Exit begins when the grid's top reaches 40% of viewport height,
      // finishes when the grid has scrolled ~40% of its own height past the top.
      const exitStart = winH * 0.4;
      const exitEnd = -rect.height * 0.4;
      let p = (exitStart - rect.top) / (exitStart - exitEnd);
      p = Math.max(0, Math.min(1, p));

      targets.forEach(({ el, x, y, rot, scaleEnd }) => {
        if (!el.classList.contains("visible")) return;
        const s = 1 + (scaleEnd - 1) * p;
        el.style.transform = `translate3d(${x * p}px, ${y * p}px, 0) rotate(${rot * p}deg) scale(${s})`;
        el.style.opacity = String(Math.max(0, 1 - p * 1.05));
      });
    };

    const onScroll = () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(apply);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
  }

  // ===== Magnetic effect on primary buttons =====
  if (window.matchMedia("(hover: hover)").matches) {
    const magnets = document.querySelectorAll(".btn-primary-soft, .btn-ghost, .action-hyperlink");
    magnets.forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
  }

  // ===== Projects Filter =====
  const filterBar = document.querySelector(".filter-bar");
  const bentoItems = document.querySelectorAll(".bento-item");
  const bentoEmpty = document.querySelector(".bento-empty");
  const bentoGrid = document.querySelector(".bento-grid");
  if (filterBar && bentoItems.length) {
    const applyFilter = (cat) => {
      let visible = 0;
      bentoItems.forEach((item) => {
        const match = cat === "all" || item.dataset.category === cat;
        item.classList.toggle("is-hidden", !match);
        if (match) visible++;
      });
      if (bentoEmpty) bentoEmpty.hidden = visible > 0;
      if (bentoGrid) bentoGrid.classList.toggle("is-filtered", cat !== "all");
      filterBar.querySelectorAll(".filter-chip").forEach((chip) => {
        chip.classList.toggle("active", chip.dataset.filter === cat);
      });
    };

    filterBar.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => applyFilter(chip.dataset.filter));
    });

    const initial = filterBar.dataset.defaultFilter || "all";
    applyFilter(initial);
  }

  // ===== Bento Tilt Effect (subtle) =====
  if (window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".bento-item").forEach((item) => {
      item.addEventListener("mousemove", (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 4.5;
        const rotateX = ((y / rect.height) - 0.5) * -4.5;
        item.style.transform = `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      item.addEventListener("mouseleave", () => {
        item.style.transform = "";
      });
    });
  }

  // ===== Auto-play video media on visible bento items =====
  document.querySelectorAll(".bento-item video").forEach((vid) => {
    const tryPlay = () => vid.play().catch(() => { });
    if (vid.readyState >= 2) tryPlay();
    else vid.addEventListener("loadeddata", tryPlay, { once: true });
  });

  // ===== Copy email on home finale =====
  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    const valueEl = copyBtn.querySelector(".contact-value");
    const labelEl = copyBtn.querySelector(".contact-label");
    const iconEl = copyBtn.querySelector(".contact-action .material-symbols-outlined");
    const originalValue = valueEl ? valueEl.textContent : "";
    const originalLabel = labelEl ? labelEl.textContent : "";
    const originalIcon = iconEl ? iconEl.textContent : "content_copy";

    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email || "";
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const ta = document.createElement("textarea");
          ta.value = email;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        }
        copyBtn.classList.add("is-copied");
        if (valueEl) valueEl.textContent = "Copied to clipboard!";
        if (labelEl) labelEl.textContent = "Email";
        if (iconEl) iconEl.textContent = "check";
        setTimeout(() => {
          copyBtn.classList.remove("is-copied");
          if (valueEl) valueEl.textContent = originalValue;
          if (labelEl) labelEl.textContent = originalLabel;
          if (iconEl) iconEl.textContent = originalIcon;
        }, 2200);
      } catch (e) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // ===== Year in footer =====
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
