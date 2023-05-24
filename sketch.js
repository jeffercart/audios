let esp1, esp2, esp3, esp4;
let pagina;
let izquierda,
  noarte,
  falsas,
  porfa,
  quitar,
  todos,
  trabajo,
  alumnos,
  estudiar,
  fakeyou,
  fantasma,
  demicabeza,
  maquina,
  mcauto,
  modazapatos,
  planeta,
  politica,
  controla,
  suba,
  sueldo;
let mov1, mov2;

function preload() {
  esp5 = loadImage("img/rizomitas.png");

  izquierda = loadSound("son/izquierda.mp3");
  noarte = loadSound("son/noarte.mp3");
  falsas = loadSound("son/noticiasfalsas.mp3");
  porfa = loadSound("son/porfavorygracias.mp3");
  quitar = loadSound("son/quitarmeeltrabajo.mp3");
  todos = loadSound("son/todospuedenserartistas.mp3");
  trabajo = loadSound("son/trabajosenelmundo.mp3");
  alumnos = loadSound("son/alumnos.mp3");
  estudiar = loadSound("son/estudiarconia.mp3");
  fakeyou = loadSound("son/fakeyounoticia1.mp3");
  fantasma = loadSound("son/fantasma.mp3");
  demicabeza = loadSound("son/iaquesaquedemicabeza.mp3");
  maquina = loadSound("son/maquinaredapinal.mp3");
  mcauto = loadSound("son/mcauto.mp3");
  modazapatos = loadSound("son/modazapatos.mp3");
  planeta = loadSound("son/nuevoplaneta.mp3");
  politica = loadSound("son/politica.mp3");
  controla = loadSound("son/quiencontrolalossistemas.mp3");
  suba = loadSound("son/subadeprecios.mp3");
  sueldo = loadSound("son/sueldoafinaldemes.mp3");
}

function setup() {
  createCanvas(984, 728);
  frameRate(1);
  pagina=0;
  canvas = document.querySelector('canvas');
  canvas.addEventListener('contextmenu', botonDerecho);
}

function draw() {
  background(0);
  movA = random(-80, 80);
  movB = random(-80, 80);

  //primer fila
  image(esp5, 80 + movA, 100, 100, 100);
  image(esp5, 230 + movB, 100 + movA, 100, 100);
  image(esp5, 380 + movA, 100, 100, 100);
  image(esp5, 530, 100 + movA, 100, 100);
  image(esp5, 680 + movB, 100, 100, 100);
  image(esp5, 830, 100 + movB, 100, 100);

  //segunda fila
  image(esp5, 80, 250 + movA, 100, 100);
  image(esp5, 230 + movB, 250, 100, 100);
  image(esp5, 380 + movA, 250, 100, 100);
  image(esp5, 530, 250 + movA, 100, 100);
  image(esp5, 680 + movB, 250 + movB, 100, 100);
  image(esp5, 830, 250 + movB, 100, 100);

  //tercer fila
  image(esp5, 80 + movB, 400 + movA, 100, 100);
  image(esp5, 230, 400 + movA, 100, 100);
  image(esp5, 380 + movA, 400, 100, 100);
  image(esp5, 530 + movB, 400 + movA, 100, 100);
  image(esp5, 680 + movB, 400 + movB, 100, 100);
  image(esp5, 830, 400 + movA, 100, 100);

  //cuarta fila
  image(esp5, 80 + movB, 550 + movA, 100, 100);
  image(esp5, 230, 550 + movB, 100, 100);
  image(esp5, 380 + movA, 550, 100, 100);
  image(esp5, 530, 550 + movA, 100, 100);
  image(esp5, 680 + movB, 550, 100, 100);
  image(esp5, 830 + movA, 550 + movB, 100, 100);

  if (frameCount > 6) {
    if      (pagina == 1){
                window.open("https://jeffercart.github.io/galeria/", "_top");} //galeria
    else if (pagina == 3){
               window.open("https://jeffercart.github.io/cubos/", "_top");} //cubos
    else if (pagina == 2) {
               window.open("https://jeffercart.github.io/ojos/", "_top");}//ojos
    }
}

function mouseClicked() {
  //primer fila
  if (
    mouseX > 80 + movA &&
    mouseX < 180 + movA &&
    mouseY > 100 &&
    mouseY < 200
  ) {
    izquierda.play();
  } else if (
    mouseX > 230 + movB &&
    mouseX < 330 + movB &&
    mouseY > 100 + movA &&
    mouseY < 200 + movA
  ) {
    noarte.play();
  } else if (
    mouseX > 530 &&
    mouseX < 630 &&
    mouseY > 100 + movA &&
    mouseY < 200 + movA
  ) {
    falsas.play();
  } else if (
    mouseX > 680 + movB &&
    mouseX < 780 + movB &&
    mouseY > 100 &&
    mouseY < 200
  ) {
    porfa.play();
  } else if (
    mouseX > 830 &&
    mouseX < 930 &&
    mouseY > 100 + movB &&
    mouseY < 200 + movB
  ) {
    quitar.play();
  }

  //segunda fila
  else if (
    mouseX > 80 &&
    mouseX < 180 &&
    mouseY > 250 + movA &&
    mouseY < 350 + movA
  ) {
    todos.play();
  } else if (
    mouseX > 380 + movA &&
    mouseX < 480 + movA &&
    mouseY > 250 &&
    mouseY < 350
  ) {
    trabajo.play();
  } else if (
    mouseX > 530 &&
    mouseX < 630 &&
    mouseY > 250 + movA &&
    mouseY < 350 + movA
  ) {
    alumnos.play();
  } else if (
    mouseX > 680 + movB &&
    mouseX < 780 + movB &&
    mouseY > 250 + movB &&
    mouseY < 350 + movB
  ) {
    estudiar.play();
  } else if (
    mouseX > 830 &&
    mouseX < 930 &&
    mouseY > 250 + movB &&
    mouseY < 350 + movB
  ) {
    fakeyou.play();
  }

  //tercer fila
  else if (
    mouseX > 80 + movB &&
    mouseX < 180 + movB &&
    mouseY > 400 + movA &&
    mouseY < 500 + movA
  ) {
    fantasma.play();
  } else if (
    mouseX > 230 &&
    mouseX < 330 &&
    mouseY > 400 + movA &&
    mouseY < 500 + movA
  ) {
    demicabeza.play();
  } else if (
    mouseX > 380 + movA &&
    mouseX < 480 + movA &&
    mouseY > 400 &&
    mouseY < 500
  ) {
    maquina.play();
  } else if (
    mouseX > 530 + movB &&
    mouseX < 630 + movB &&
    mouseY > 400 + movA &&
    mouseY < 500 + movA
  ) {
    mcauto.play();
  } else if (
    mouseX > 830 &&
    mouseX < 930 &&
    mouseY > 400 + movA &&
    mouseY < 500 + movA
  ) {
    modazapatos.play();
  }

  //cuarta fila
  else if (
    mouseX > 80 + movB &&
    mouseX < 180 + movB &&
    mouseY > 550 + movA &&
    mouseY < 650 + movA
  ) {
    planeta.play();
  } else if (
    mouseX > 230 &&
    mouseX < 330 &&
    mouseY > 550 + movB &&
    mouseY < 650 + movB
  ) {
    politica.play();
  } else if (
    mouseX > 380 + movA &&
    mouseX < 480 + movA &&
    mouseY > 550 &&
    mouseY < 650
  ) {
    controla.play();
  } else if (
    mouseX > 530 &&
    mouseX < 630 &&
    mouseY > 550 + movA &&
    mouseY < 650 + movA
  ) {
    suba.play();
  } else if (
    mouseX > 830 + movA &&
    mouseX < 930 + movA &&
    mouseY > 550 + movB &&
    mouseY < 650 + movB
  ) {
    sueldo.play();
  }
}

function botonDerecho(event) {
  // Evitar que aparezca el menú contextual del botón derecho del mouse
  event.preventDefault();

  // cuando se hace clic con el botón derecho pagina cambia por un numero random entero entre 1 y 3
  pagina = floor(random(4));
}
