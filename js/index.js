import scrollTopBottom from "./dom/Boton_scroll.js";
import conteoRegresivo from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import{moverBall, shortcuts} from "./dom/teclado.js"
import darkTheme from "./dom/tema_oscuro.js";

const d = document;


d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
  alarm("assets/graciosos-alarma-es-tu-mujer-.mp3","#activar-alarma", "#desactivar-alarma");

  conteoRegresivo("conteoRegresivo","May 23, 2023 03:23:19",
  "Feliz cumpleños Johmircha el mejor docente");

  scrollTopBottom(".scroll-top-btn");
  responsiveMedia(
  "youtube",
  "(min-width:1024px)", 
  `<a href="https://youtu.be/6IwUl-4pAzc" target="_bank" rel="noopener"> Ver Video</a>`,
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

  responsiveMedia(
  "gmaps",
  "(min-width:1024px)", 
    `<a href="https://goo.gl/maps/LkdodFdLauaYaaD27" target="_bank" rel="noopener"> Ver Video</a>`,
  `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.108032256096!2d-70.6969188491426!3d19.45090848680953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1cf5ddf76a483%3A0x1eee2f130a34921b!2sMonument%20to%20the%20Heroes%20of%20the%20Restoration!5e0!3m2!1sen!2sdo!4v1662601036153!5m2!1sen!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);


});


d.addEventListener("keydown",(e) =>{
shortcuts(e);
moverBall(e,".ball",".stage")
});


darkTheme(".dark-theme-btn", "dark-mode");