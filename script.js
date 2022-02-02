let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

//cria ordem aleatoria de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};
//acender a proxima cor
let lightColor = (element, number) => {
  number = number = 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, (number = 250));
  setTimeout(() => {
    element.classList.remove("selected");
  });

  ////checa se os botoes clicados são os mesmos da ordem gerada no jogo
  let checkOrder = () => {
    for (let i in clickedOrder) {
      if (clickedOrder[i] != order[i]) {
        gameOver();
        break;
      }
    }
    if (clickedOrder.length == order.length) {
      alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
      nextLevel();
    }
  };

  //funcao para o clique do usuario
  let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement[color].classList.add("select");

    (setTimeout) => {
      createColorElement(color).classList.remove(select);

      checkOrder();
    },
      250;
  };

  //funcao que retorna a cor
  let createColorElement = (color) => {
    if (color == 0) {
      return green;
    } else if (color == 1) {
      return red;
    } else if (color == 2) {
      return yellow;
    } else if (color == 3) {
      return blue;
    }
  };

  //funcao para proximo nivel do jogo
  let nextLevel = () => {
    score++;
    shuffleOrder();
  };

  //funcao para game over
  let gameOver = () => {
    alert(
      "Pontuação: $(score)!\nVocê perdeu o jogo!\nClique em Ok para inciar um novo jogo."
    );
    order = [];
    clickOrder = [];

    playGame();
  };
  //funcao inciar o jogo
  let playGame = () => [];
  alert("Bem Vindo ao Gênesis!, Iniciando novo jogo!");
  score = 0;

  nextLevel1();
};
//Eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Inicio do jogo
playGame();
