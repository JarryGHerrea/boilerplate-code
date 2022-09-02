const d = document;
export default function darkTheme(btn, claseDark){
const $themeBtn = d.querySelector(btn),
$selectors = d.querySelectorAll("[data-dark]");

let moon = "🌙",
sun = "☀️";

d.addEventListener("click",(e)=>{
    if (e.target.matches(btn)) {
        console.log($themeBtn.textContent);
        if ($themeBtn.textContent === moon) {
           $selectors.forEach((el) => el.classList.add(claseDark));
           $themeBtn.textContent = sun; 
        }else{
            $selectors.forEach((el) => el.classList.remove(claseDark));
            $themeBtn.textContent = moon; 

        }
    }
});
}