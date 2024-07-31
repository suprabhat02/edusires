document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.querySelector(".toggleThemeButton");

  // Check saved theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  } else {
    // Default theme
    document.body.classList.add("light-theme");
  }

  themeToggleBtn.addEventListener("click", function () {
    if (document.body.classList.contains("light-theme")) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light-theme");
    }
  });
});
