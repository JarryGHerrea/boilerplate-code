import scrollTopBottom from "./dom/Boton_scroll.js";
import conteoRegresivo from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import{moverBall, shortcuts} from "./dom/teclado.js"

const d = document;


d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
  alarm("assets/graciosos-alarma-es-tu-mujer-.mp3","#activar-alarma", "#desactivar-alarma");

  conteoRegresivo("conteoRegresivo","May 23, 2023 03:23:19",
  "Feliz cumpleños Johmircha el mejor docente");

  scrollTopBottom(".scroll-top-btn")
});


d.addEventListener("keydown",(e) =>{
shortcuts(e);
moverBall(e,".ball",".stage")
})