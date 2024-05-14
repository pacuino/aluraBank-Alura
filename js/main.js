import esUnCuil from "./validar-cuil.js";
import esMayorDeEdad from "./validar-edad.js";

const campoDeFormulario = document.querySelectorAll("[required]");

campoDeFormulario.forEach((campo)=>{
campo.addEventListener("blur",()=>verificarCampo(campo))
});

function verificarCampo(campo){
    if(campo.name == "cuil" && campo.value.length >= 11){
        esUnCuil(campo)
    }
    if(campo.name == "fecha_nacimiento" && campo.value != ""){
        esMayorDeEdad(campo);
    }

}