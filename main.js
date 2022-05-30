function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

/*o que tem de semelhante nos códigos é a parte final do nome da classe;
dessa forma, podemos pegar sempre o indice 1, que é a parte variável e passá-lo via template string
para o idAudio que será executado, sendo trocado dinamicamente conforme necessário
*/
while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = () =>{
        tocaSom(idAudio);
    }
    contador++;
}