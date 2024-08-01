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

document.addEventListener("DOMContentLoaded", function () {
  const texts = ["destination", "achievement", "success", "fulfillment"];
  let index = 0;
  const changingText = document.querySelector(".changingtext");

  function switchText() {
    // Fade out and move up
    changingText.classList.add("fade-out");

    // Change text after fade-out transition
    setTimeout(() => {
      index = (index + 1) % texts.length;
      changingText.textContent = texts[index];
      // Move text down
      changingText.classList.remove("fade-out");
      changingText.classList.add("fade-in");
    }, 500); // 500ms matches the transition duration in CSS

    // Remove fade-in class after transition
    setTimeout(() => {
      changingText.classList.remove("fade-in");
    }, 1000); // 1000ms allows time for fade-in transition
  }

  // Switch text every 2 seconds
  setInterval(switchText, 2000);
});
