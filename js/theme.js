var theme = document.getElementById("theme-icon");
theme.addEventListener("click", themeChanger);

function themeChanger() {
  theme.innerHTML = `<i class="fa fa-moon-o theme" aria-hidden="true"></i>`;
  document.body.classList.toggle("dark-theme");
}
