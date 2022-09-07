function desplegar(){
    let ancla = document.getElementsByClassName("etiquetas");
    for(let i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle("ocultar");
    }
}
