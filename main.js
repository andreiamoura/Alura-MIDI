function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla')



//enquanto - while
//para - for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //const idAudio = '#som_'+instrumento;
    //template string - uma das formas de concatenar uma variavel na string
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    //console.log(contador);

}
