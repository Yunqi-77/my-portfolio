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
      "a, button, .language-badge, .bento-item"
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

  // ===== About hero — scroll-linked exit animation =====
  const aboutGrid = document.querySelector("#about .about-card-grid");
  if (aboutGrid && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const aboutHead = document.querySelector("#about > .section-head");
    const profileCard = aboutGrid.querySelector(".profile-card");
    const aboutStory = aboutGrid.querySelector(".about-story");

    // Targets: each gets an inline transform driven by exit progress (0 -> 1)
    const targets = [
      { el: aboutHead, x: 0, y: -40, rot: 0, scaleEnd: 0.92 },
      { el: profileCard, x: -240, y: -80, rot: -14, scaleEnd: 0.82 },
      { el: aboutStory, x: 180, y: -60, rot: 8, scaleEnd: 0.94 },
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
    const magnets = document.querySelectorAll(".btn-primary-soft, .btn-ghost");
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

  // ===== Copy email button (contact section) =====
  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    const iconEl = copyBtn.querySelector(".material-symbols-outlined");
    let resetTimer;

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
        if (iconEl) iconEl.textContent = "check";
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          copyBtn.classList.remove("is-copied");
          if (iconEl) iconEl.textContent = "content_copy";
        }, 2000);
      } catch (e) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // ===== Self-typing contact terminal =====
  const term = document.getElementById("contactTerm");
  if (term && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Script of lines — mirrors the static HTML fallback inside #contactTerm.
    const script = [
      { type: "cmd", text: "whoami" },
      { type: "out", name: "Than Yun Qi — Web Developer & QA Tester" },
      { type: "cmd", text: "cat contact.txt" },
      { type: "out", key: "email:", pad: "    ", href: "mailto:yunqi.tyq@gmail.com", value: "yunqi.tyq@gmail.com" },
      { type: "out", key: "location:", pad: " ", value: "Malaysia" },
      { type: "out", key: "status:", pad: "   ", value: "open to opportunities" },
      { type: "cmd", text: "./say-hello.sh", last: true },
    ];

    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
    const cursor = document.createElement("span");
    cursor.className = "term-cursor";

    const newLine = (extraClass) => {
      const el = document.createElement("div");
      el.className = "term-line" + (extraClass ? " " + extraClass : "");
      term.appendChild(el);
      term.scrollTop = term.scrollHeight;
      return el;
    };

    const run = async () => {
      term.innerHTML = "";
      for (const line of script) {
        if (line.type === "cmd") {
          const el = newLine();
          const prompt = document.createElement("span");
          prompt.className = "term-prompt";
          prompt.textContent = "$";
          el.appendChild(prompt);
          el.appendChild(document.createTextNode(" "));
          const cmd = document.createElement("span");
          cmd.className = "term-cmd";
          el.appendChild(cmd);
          el.appendChild(cursor);
          for (const ch of line.text) {
            cmd.textContent += ch;
            await sleep(60);
          }
          if (line.last) break;          // leave the caret blinking here
          cursor.remove();
          await sleep(320);
        } else {
          const el = newLine("term-out is-revealing");
          if (line.name) {
            const n = document.createElement("span");
            n.className = "term-name";
            n.textContent = line.name;
            el.appendChild(n);
          } else {
            const k = document.createElement("span");
            k.className = "term-key";
            k.textContent = line.key;
            el.appendChild(k);
            el.appendChild(document.createTextNode(line.pad || " "));
            if (line.href) {
              const a = document.createElement("a");
              a.className = "term-email";
              a.href = line.href;
              a.textContent = line.value;
              el.appendChild(a);
            } else {
              el.appendChild(document.createTextNode(line.value));
            }
          }
          await sleep(line.name ? 360 : 200);
        }
      }
    };

    let started = false;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            obs.unobserve(term);
            run();
          }
        });
      },
      { threshold: 0.45 }
    );
    obs.observe(term);
  }

});