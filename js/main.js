(function () {
  "use strict";

  var root = document.documentElement;
  // The address is stored in pieces so it never appears whole in the page source.
  var EMAIL_PARTS = ["pchmielewski", "projects", "gmail", "com"];

  function emailAddress() {
    return EMAIL_PARTS[0] + "." + EMAIL_PARTS[1] + "@" + EMAIL_PARTS[2] + "." + EMAIL_PARTS[3];
  }

  function emailObfuscated() {
    return EMAIL_PARTS[0] + "[dot]" + EMAIL_PARTS[1] + "[at]" + EMAIL_PARTS[2] + "[dot]" + EMAIL_PARTS[3];
  }

  // ---------- Theme toggle ----------
  var themeBtn = document.querySelector(".theme-toggle");
  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    return root.dataset.theme || (darkQuery.matches ? "dark" : "light");
  }

  if (themeBtn) {
    themeBtn.hidden = false;
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // ---------- Mobile menu ----------
  var menuBtn = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");

  function setMenu(open) {
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (menuBtn && nav) {
    menuBtn.hidden = false;
    menuBtn.addEventListener("click", function () {
      setMenu(!nav.classList.contains("open"));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setMenu(false);
        menuBtn.focus();
      }
    });
  }

  // ---------- Reveal on scroll + active nav link ----------
  var reveals = document.querySelectorAll(".reveal");
  var navLinks = document.querySelectorAll(".site-nav a");

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          // Stagger siblings in a grid so cards cascade in.
          var delay = el.parentElement.classList.contains("grid")
            ? Array.prototype.indexOf.call(el.parentElement.children, el) * 120
            : 0;
          el.style.transitionDelay = delay + "ms";
          el.classList.add("visible");
          revealObserver.unobserve(el);
          // Drop the reveal transition afterwards so hover effects stay snappy.
          setTimeout(function () {
            el.classList.remove("reveal");
            el.style.transitionDelay = "";
          }, delay + 700);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(function (el) { revealObserver.observe(el); });

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          var active = link.getAttribute("href") === "#" + id;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) {
      sectionObserver.observe(s);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Hero word rotator (typewriter) ----------
  var word = document.querySelector(".rotator-word");
  if (word && !reduceMotion) {
    var words = word.dataset.words.split("|");
    var w = 0;
    var text = words[0];
    var deleting = true;

    var tick = function () {
      var delay;
      if (deleting) {
        text = text.slice(0, -1);
        delay = 45;
        if (!text) {
          deleting = false;
          w = (w + 1) % words.length;
          delay = 300;
        }
      } else {
        text = words[w].slice(0, text.length + 1);
        delay = 90;
        if (text === words[w]) {
          deleting = true;
          delay = 2200;
        }
      }
      word.textContent = text;
      setTimeout(tick, delay);
    };
    setTimeout(tick, 2500);
  }

  // ---------- Cursor-following glow on cards ----------
  if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".glow").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left) + "px");
        card.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
  }

  // ---------- Contact form ----------
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var subject = form.elements.subject.value.trim();
      var body = form.elements.content.value.trim();
      window.location.href = "mailto:" + emailAddress() +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

  // ---------- Click-to-reveal email ----------
  var showEmail = document.getElementById("show-email");
  if (showEmail) {
    showEmail.hidden = false;
    showEmail.addEventListener("click", function () {
      var text = document.createElement("span");
      text.className = "email-text";
      text.textContent = emailObfuscated();
      showEmail.replaceWith(text);
    });
  }

  // ---------- Footer year ----------
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
