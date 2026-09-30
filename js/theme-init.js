// Mark JS as available and apply a saved theme before first paint to avoid a flash.
document.documentElement.classList.add("js");
try {
  var t = localStorage.getItem("theme");
  if (t === "light" || t === "dark") document.documentElement.dataset.theme = t;
} catch (e) {}
