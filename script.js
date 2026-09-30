/*
=======================================================
SLIDER AUTOMÁTICO
=======================================================

Esse script faz:
- trocar automaticamente os banners
- deixar apenas um slide visível
- criar animação automática

=======================================================
*/

/* 
Seleciona TODOS os elementos que possuem a classe "slide"
*/
const slides = document.querySelectorAll('.slide');

/*
Variável que guarda qual slide está ativo
*/
let slideAtual = 0;

/*
Função responsável por trocar o banner
*/
function trocarSlide(){

  /*
  Remove a classe ATIVO do slide atual
  */
  slides[slideAtual].classList.remove('ativo');

  /*
  Avança para o próximo slide

  Se chegar no último:
  volta para o primeiro

  Exemplo:
  0 -> 1 -> 2 -> 0
  */
  slideAtual = (slideAtual + 1) % slides.length;

  /*
  Adiciona a classe ativo
  no novo slide
  */
  slides[slideAtual].classList.add('ativo');

}

/*
Executa a função automaticamente
a cada 4 segundos
*/
setInterval(trocarSlide,4000);