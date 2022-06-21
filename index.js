import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();


// SEARCH
const search = document.getElementById('search')

search.addEventListener('input', ()=>{
    if (search.value == "") {
        mostrarProductos(stockProductos)
    }else{
        mostrarProductos(stockProductos.filter(el => el.nombre.toLowerCase().includes(search.value.toLowerCase())))
    }
})