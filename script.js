let body = 0;
function klikniNaCookie() {
    body++;
    document.getElementById("body").innerText = body;
    const lp = document.getElementById('lp');

const square = document.createElement('div');
square.style.width = '200px';
square.style.height = '80px';
square.style.border = '1px solid black';
square.style.display = 'flex';
square.style.justifyContent = 'space-between';
square.style.alignItems = 'center';
square.style.padding = '10px';
square.style.cursor = 'pointer';

// Texty
const texts = document.createElement('div');
texts.style.textAlign = 'left';

texts.innerHTML = `
  <div>Text 1</div>
  <div>Text 2</div>
  <div>Text 3</div>
`;

// Obrázek
const img = document.createElement('img');
img.src = './obrazky/vojtik.jpg';
img.style.width = '20px';
img.style.height = '50px';

// Přidání do čtverce
square.appendChild(img);
square.appendChild(texts);


// Kliknutí
square.onclick = () => alert('Kliknuto!');

// Přidání do stránky
lp.appendChild(square);

}

function naPana() {
    document.getElementById("cookie").src = "./obrazky/ministr.jpg"
}

function spink() {
    document.getElementById("cookie").src = "./obrazky/spink.jpg"
}