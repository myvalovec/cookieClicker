const Pnames = ["Vojtik", "Karl"];
const Pimages = ["./obrazky/vojtik.jpg", "./obrazky/karl.jpg"];
const Pprices = [10, 50]
Pprogress = [0, 0]
Pincomes = [0.5, 2]



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
    t1.innerHTML = Pnames[number];
    t2.innerHTML = Pprices[number]+"$";

    textPart.appendChild(t1);
    textPart.appendChild(t2);

    const imagePart = document.createElement('div');
    imagePart.style.flex = '1';
    imagePart.style.display = 'flex';
    imagePart.style.alignItems = 'center';
    imagePart.style.justifyContent = 'center';

    const img = document.createElement('img');
    img.src = Pimages[number];
    img.style.width = '50px';
    img.style.height = '50px';
    imagePart.appendChild(img);

    square.appendChild(imagePart);
    square.appendChild(textPart);

    container.appendChild(square);
    square.onclick = function () {
        clicked(number);
    };
    

}
function update() {
  for(i = 0; i < names.length; i++) {
    createSquare(i);
    console.log(i);
  }
  
}

function init() {
  setInterval(otroci, 1000);
  update()
  
}

function otroci() {
  for(i = 0; i < Pincomes.length; i++) {
    body += Pincomes
  }
  document.getElementById("body").innerText = body;
}

function clicked(number) {
  if(Pprices[number] <= body && Pprogress[number] < 10) {
    //square.remove();
    document.getElementById('lp').innerHTML = "";
    body -= Pprices[number]
    document.getElementById("body").innerText = body;
    Pprogress[number] += 1;
    Pprices[number] *= 2;
    update();
  }
}

init();