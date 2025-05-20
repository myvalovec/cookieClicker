//pasivni prijem, pole
const names = ["Vojtik", "Karl", "Tade","kubicek","𝓯𝓻𝓮𝓪𝓴𝔂 Mára", "(っ◔◡◔)っ matejicek"];
const images = ["./obrazky/vojtik.jpg", "./obrazky/karl.jpg", "./obrazky/tade.jpg", "./obrazky/kubicek.jpg", "./obrazky/marecek.jpg", "./obrazky/matejicek.jpg"];
const prices = [10, 50, 150, 400, 1000, 2500]
const additives = [1, 2, 3, 5, 8, 10]
progress = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
incomes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let body = 10000; //zakladni kapital

//pridani bodu po kliknuti na ministra
function klikniNaCookie() {
  body++;
  document.getElementById("body").innerText = body;
}

//ministr po najeti mysi
function naPana() {
  document.getElementById("cookie").src = "./obrazky/ministr.jpg"
}

//ministr kdyz je mys mimo
function spink() {
  document.getElementById("cookie").src = "./obrazky/spink.jpg"
}

//pridani obrazku vylepseni do praveho panelu
function addImage(number) {
  const container = document.getElementById('rp');

  const img = document.createElement('img');
  img.src = images[number];
  img.style.width = '50px';
  img.style.height = '50px';

  container.append(img);
}

//vytvoreni ctverecku pro upgrade na pasivni prijem
function createSquare(number) {
    const container = document.getElementById('lp');

    const square = document.createElement('div');
    square.style.width = '18vw';
    square.style.height = '80px';
    square.style.border = '1px solid black';
    square.style.display = 'flex';
    square.style.cursor = 'pointer';
    square.style.borderRadius = "10px";

    const textPart = document.createElement('div');
    textPart.style.flex = '2';
    textPart.style.display = 'flex';
    textPart.style.flexDirection = 'column';
    textPart.style.justifyContent = 'center';
    textPart.style.alignItems = 'flex-start';
    textPart.style.paddingRight = '10px';

    const t1 = document.createElement('div');
    const t2 = document.createElement('div');
    t1.style.fontSize = "20px";
    t2.style.fontSize = "15px";
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
    img.style.width = '70px';
    img.style.height = '70px';
    imagePart.appendChild(img);

    square.appendChild(imagePart);
    square.appendChild(textPart);

    container.appendChild(square);
    square.onclick = function () {
        clicked(number);
    };
    

}
//update leveho panelu
function update() {
  for(i = 0; i < names.length; i++) {
    createSquare(i);
    console.log(i);
  }
  
}

//inicializace
function init() {
  setInterval(otroci, 1000); //kazdou vterinu pridani penez z pasivniho prijmu
  update()
}

//pridavani penez za pasivni prijem
function otroci() {
  for(i = 0; i < incomes.length; i++) {
    body += incomes[i];
  }
  document.getElementById("body").innerText = body;
}

//kliknuti na upgrade v levem panelu
function clicked(number) {
  if(prices[number] <= body) {
    //square.remove();
    document.getElementById('lp').innerHTML = "";
    body -= prices[number]
    document.getElementById("body").innerText = body;
    progress[number] += 1;
    prices[number] = Math.floor(prices[number] * 1.50);
    incomes[number] += additives[number];
    addImage(number);
    update();
  }
}

init();