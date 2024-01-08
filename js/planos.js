document.addEventListener('DOMContentLoaded', function () {
    var imagens = document.querySelectorAll('.imagemEsquerdaComSombra');
  
    imagens.forEach(function (imagem) {
      imagem.addEventListener('mouseover', function () {
        imagem.classList.add('sombra-imagem-direita-baixo');
      });
  
      imagem.addEventListener('mouseout', function () {
        imagem.classList.remove('sombra-imagem-direita-baixo');
      });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var imagens = document.querySelectorAll('.imagemDireitaComSombra');

    imagens.forEach(function (imagem) {
        imagem.addEventListener('mouseover', function () {
        imagem.classList.add('sombra-imagem-esquerda-baixo');
        });

        imagem.addEventListener('mouseout', function () {
        imagem.classList.remove('sombra-imagem-esquerda-baixo');
        });
    });
});  



var botao = document.querySelector(".botao-meio-periodo");

botao.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#CA2C20";
});

botao.addEventListener("mouseout", function() {
    this.style.backgroundColor = "#17B806";    
});


var botao = document.querySelector(".botao-periodo-integral");

botao.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#17B806";
});

botao.addEventListener("mouseout", function() {
    this.style.backgroundColor = "#CA2C20";    
});