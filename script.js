let body = 0;
function klikniNaCookie() {
    body++;
    document.getElementById("body").innerText = body;
    createSquare("Vojtik", "vojtisek bobicek", "200$", "./obrazky/vojtik.jpg");
}

function naPana() {
    document.getElementById("cookie").src = "./obrazky/ministr.jpg"
}

function spink() {
    document.getElementById("cookie").src = "./obrazky/spink.jpg"
}
function createSquare(text1, text2, text3, imageUrl) {
    const container = document.getElementById('lp');

    const square = document.createElement('div');
    square.style.width = '200px';
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
    t2.style.fontSize = "10px";
    const t3 = document.createElement('div');
    t1.textContent = text1;
    t2.textContent = text2;
    t3.textContent = text3;

    textPart.appendChild(t1);
    textPart.appendChild(t2);
    textPart.appendChild(t3);

  // Pravá část s obrázkem (menší)
    const imagePart = document.createElement('div');
    imagePart.style.flex = '1';
    imagePart.style.display = 'flex';
    imagePart.style.alignItems = 'center';
    imagePart.style.justifyContent = 'center';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.width = '50px';
    img.style.height = '50px';
    imagePart.appendChild(img);

  // Spojení částí
    square.appendChild(imagePart);
    square.appendChild(textPart);
    

  // Kliknutí
    square.onclick = () => alert('Kliknuto!');

    container.appendChild(square);
}

