const names = ["Vojtik", "Karl"];
const images = ["./obrazky/vojtik.jpg", "./obrazky/karl.jpg"];
const prices = [10, 50]
const progress = [0, 0]
const maxProgress = [10, 10]


let body = 0;
function klikniNaCookie() {
  body++;
  document.getElementById("body").innerText = body;
}

function naPana() {
  document.getElementById("cookie").src = "./obrazky/ministr.jpg"
}

function spink() {
  document.getElementById("cookie").src = "./obrazky/spink.jpg"
}



function createSquare(number) {
    const container = document.getElementById('lp');

    const square = document.createElement('div');
    square.style.width = '18vw';
    square.style.height = '80px';
    square.style.border = '1px solid black';
    square.style.display = 'flex';
    square.style.cursor = 'pointer';

    const textPart = document.createElement('div');
    textPart.style.flex = '2';
    textPart.style.display = 'flex';
    textPart.style.flexDirection = 'column';
    textPart.style.justifyContent = 'center';
    textPart.style.alignItems = 'flex-start';
    textPart.style.paddingRight = '10px';

    const t1 = document.createElement('div');
    const t2 = document.createElement('div');
    t1.style.fontSize = "30px";
    t2.style.fontSize = "20px";
    t1.innerHTML = names[number];
    t2.innerHTML = prices[number]+"$";

    textPart.appendChild(t1);
    textPart.appendChild(t2);

    const imagePart = document.createElement('div');
    imagePart.style.flex = '1';
    imagePart.style.display = 'flex';
    imagePart.style.alignItems = 'center';
    imagePart.style.justifyContent = 'center';

    const img = document.createElement('img');
    img.src = images[number];
    img.style.width = '50px';
    img.style.height = '50px';
    imagePart.appendChild(img);

    square.appendChild(imagePart);
    square.appendChild(textPart);

    container.appendChild(square);
    square.onclick = function () {
        clicked(square, number);
    };
    

}

function init() {
  setInterval(otroci, 1000);
  for(i = 0; i < names.length; i++) {
    createSquare(i);
    console.log(i);
  }
  
}

function otroci() {
  
  for(i = 0; i < progress.length; i++) {
    
    for(j = 0; j < progress[i]; j++) {
      body+=1;
    }
  }
  document.getElementById("body").innerText = body;
}

function clicked(square, number) {
  if(prices[number] <= body) {
    square.remove();
    body -= prices[number]
    document.getElementById("body").innerText = body;
    progress[number] += 1;
  
    if(progress[number] <= maxProgress[number]) {
      prices[number] *= 2;
      createSquare(number);
    }
  }
}
init();