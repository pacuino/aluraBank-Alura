import esUnCuil from "./validar-cuil.js";

const campoDeFormulario = document.querySelectorAll("[required]");

campoDeFormulario.forEach((campo)=>{
campo.addEventListener("blur",()=>verificarCampo(campo))
});

function verificarCampo(campo){
    //console.log("cambio", campo.name);
    if(campo.name == "cuil" && campo.value.length >= 11){
        esUnCuil(campo)
    }
}