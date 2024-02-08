function tocaSom(seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        //alert('elemento não encontrado');
        console.log('elemento não encontrado');
    }

    if (elemento != null) {

        if(elemento.localName === 'audio') {
            elemento.play();
        }

    }
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

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') { // if - se - condição
            tecla.classList.add('ativa');
        }
      
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }



}
