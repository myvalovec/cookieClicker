//pasivni prijem, pole
const names = ["Vojtik", "Karl", "Tade","Kubicek","𝓯𝓻𝓮𝓪𝓴𝔂 Mára", "(っ◔◡◔)っ matejicek"];
const images = ["./obrazky/vojtik.jpg", "./obrazky/karl.jpg", "./obrazky/tade.jpg", "./obrazky/kubicek.jpg", "./obrazky/marecek.jpg", "./obrazky/matejicek.jpg"];
const prices = [10, 50, 150, 400, 1000, 2500]
const additives = [1, 2, 3, 5, 8, 10]
let progress = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let incomes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let incomesSum = 0;
let boughtImages = [];


let clickNames = ["Kliknutí +2"]
let clickImages = ["./obrazky/vojtik.jpg"]
let clickPrices = [50]
let clickAdditives = [1]
let clickProgress = [0]
let clickIncomes = 1

let body = 0; //zakladni kapital

function clickAnimation() {
  image = document.getElementById("cookie");
  image.style.transform = "scale(0.98)";
  const rect = image.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Vytvoření více částic
  for (let i = 0; i < 50; i++) {
    createParticle(centerX, centerY);
  }
  setTimeout(() => {
    image.style.transform = "scale(1)";
  }, 50);
}

function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Náhodný směr
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 80 + 20;

    const xOffset = Math.cos(angle) * distance + "px";
    const yOffset = Math.sin(angle) * distance + "px";

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.setProperty("--x", xOffset);
    particle.style.setProperty("--y", yOffset);

    document.body.appendChild(particle);

    // Odstranit po animaci
    setTimeout(() => {
      particle.remove();
    }, 600);
  }

//pridani bodu po kliknuti na ministra
function klikniNaCookie() {
  clickAnimation();
  body += clickIncomes;
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
function reloadRp(number) {
  const container = document.getElementById('rp');
  container.innerHTML = '';
  for(i = 0; i < boughtImages.length; i++) {
    const img = document.createElement('img');
    img.src = images[number];
    img.style.width = '50px';
    img.style.height = '50px';

    container.append(img);d
  }
  
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

//vytvoreni ctverecku pro upgrade
function createSquare(number, names, prices, type) {
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
        clicked(number, type);
    };
    

}
//update leveho panelu
function update() {
  const container = document.getElementById("lp");

  let clicks = document.createElement('div');
  clicks.style.justifyContent = 'center';
  clicks.style.alignItems = 'center';
  clicks.style.fontSize = "20px";
  clicks.innerHTML = "klikání (+" + clickIncomes + "/klik)";
  clicks.style.width = '18vw';
  clicks.style.height = '30px';
  clicks.style.display = 'flex';
  container.appendChild(clicks);

  for(i = 0; i < clickNames.length; i++) {
    createSquare(i, clickNames, clickPrices, 1);
    console.log(i);
  }

  let passive = document.createElement('div');
  passive.style.justifyContent = 'center';
  passive.style.alignItems = 'center';
  passive.style.fontSize = "20px";
  passive.innerHTML = "pasivní příjem (+" + incomesSum + "/s)"
  passive.style.width = '18vw';
  passive.style.height = '30px';
  passive.style.display = 'flex';
  container.appendChild(passive);

  for(i = 0; i < names.length; i++) {
    createSquare(i, names, prices, 0);
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
  incomesSum = 0;
  for(i = 0; i < incomes.length; i++) {
    body += incomes[i];
    incomesSum += incomes[i];
    if(incomesSum != 0) {
      clickAnimation();
    }
  }
  
  document.getElementById("body").innerText = body;
  document.getElementById('lp').innerHTML = "";
  update();
}

//kliknuti na upgrade v levem panelu
function clicked(number, type) {
  if(type == 0 && prices[number] <= body) {
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
  else if (type == 1 && clickPrices[number] <= body) {
    document.getElementById('lp').innerHTML = "";
    body -= clickPrices[number];
    document.getElementById("body").innerText = body;
    clickProgress[number] += 1;
    clickPrices[number] = Math.floor(clickPrices[number] * 2.00);
    clickIncomes += clickAdditives[number];
    update();
  }
}
//slideshow
let postavy = document.getElementById("postavy")
let interval = setInterval(intervalFunc, 1250)
let obrazek = 0
function intervalFunc(){
  if(obrazek < images.length){
    postavy.src = images[obrazek]
    obrazek++
  }
  else{
    obrazek = 0
    postavy.src = "./obrazky/vojtik.jpg"
  }
}
init();