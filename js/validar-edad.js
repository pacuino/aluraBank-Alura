export default function esMayorDeEdad (campo){
    const fechaDeNacimiento = new Date(campo.value);
    if(!validarEdad(fechaDeNacimiento)){
        campo.setCustomValidity("Necesitas ser mayor de edad");
    }
}

function validarEdad(fecha){
    const fechaActual = new Date();
    const fechaMas18 = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());

    return fechaActual >= fechaMas18;
}