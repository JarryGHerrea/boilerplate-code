const d = document,
 ls = localStorage;
export default function darkTheme(btn, claseDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  let moon = "🌙",
    sun = "☀️";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(claseDark));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(claseDark));
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
    //   console.log($themeBtn.textContent);
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else{
        lightMode();
      }
   
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null)ls.setItem("theme", "light");

    if (ls.getItem("theme") === "light")lightMode();

    if (ls.getItem("theme") === "dark")darkMode();
  });
}
