// Create a new header element
const header = document.createElement('header');


const leftDiv = document.createElement('div');
leftDiv.classList.add('left');

const rightDiv = document.createElement('div');
rightDiv.classList.add('right');


const locationImg = document.createElement('img');
locationImg.src = "./img/[removal.ai]_40ac7fcd-e03f-4afc-820b-db51e9a8c2fd-location.png";
locationImg.alt = "";


leftDiv.appendChild(locationImg);


const nav = document.createElement('nav');


const maLink = document.createElement('a');
maLink.href = "#";
maLink.textContent = "Махачкала";

const storesLink = document.createElement('a');
storesLink.href = "#";
storesLink.textContent = "Магазины";

const deliveryLink = document.createElement('a');
deliveryLink.href = "#";
deliveryLink.textContent = "Доставка";


nav.appendChild(maLink);
nav.appendChild(storesLink);
nav.appendChild(deliveryLink);


leftDiv.appendChild(nav);


const blogLink = document.createElement('a');
blogLink.href = "#";
blogLink.textContent = "Блог «М.Клик»";

const clubLink = document.createElement('a');
clubLink.href = "#";
clubLink.textContent = "M.Club";

const themesLink = document.createElement('a');
themesLink.href = "#";
themesLink.textContent = "Для темок";

const phoneLink = document.createElement('a');
phoneLink.href = "#";
phoneLink.textContent = "+998-88-898-84-21";


rightDiv.appendChild(blogLink);
rightDiv.appendChild(clubLink);
rightDiv.appendChild(themesLink);
rightDiv.appendChild(phoneLink);


header.appendChild(leftDiv);
header.appendChild(rightDiv);


document.body.appendChild(header);

const secondHeaderDiv = document.createElement('div');
secondHeaderDiv.classList.add('second_header');


const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
secondHeaderDiv.appendChild(containerDiv);


const logoImgDiv = document.createElement('div');
logoImgDiv.classList.add('logo_img');
const logoImg = document.createElement('img');
logoImg.src = "./img/logo.svg";
logoImg.alt = "";
logoImgDiv.appendChild(logoImg);
secondHeaderDiv.appendChild(logoImgDiv);

const chtotoDiv = document.createElement('div');
chtotoDiv.classList.add('chtoto');
const button = document.createElement('button');
const buttonImage = document.createElement('img');
buttonImage.src = "./img/[removal.ai]_d637720d-984e-4109-898d-d413546a0277-7550331-middle.png";
buttonImage.alt = "";
const buttonText = document.createElement('h4');
buttonText.textContent = 'Каталог';
button.appendChild(buttonImage);
button.appendChild(buttonText);
chtotoDiv.appendChild(button);
secondHeaderDiv.appendChild(chtotoDiv);


const inputDiv = document.createElement('div');
inputDiv.classList.add('input');
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Рональдо лучше Месси это факт 100%');
inputDiv.appendChild(input);
secondHeaderDiv.appendChild(inputDiv);


const timeDiv = document.createElement('div');
timeDiv.classList.add('time');
const timeImage = document.createElement('img');
timeImage.src = "./img/oclock dontbg.png";
timeImage.alt = "";
const timeText = document.createElement('h4');
timeText.textContent = 'Статус заказа';
timeDiv.appendChild(timeImage);
timeDiv.appendChild(timeText);
secondHeaderDiv.appendChild(timeDiv);


const enterDiv = document.createElement('div');
enterDiv.classList.add('enter');
const enterImage = document.createElement('img');
enterImage.src = "./img/enter.png";
enterImage.alt = "";
const enterText = document.createElement('h4');
enterText.textContent = 'Войти';
enterDiv.appendChild(enterImage);
enterDiv.appendChild(enterText);
secondHeaderDiv.appendChild(enterDiv);

const sravDiv = document.createElement('div');
sravDiv.classList.add('srav');
const sravImage = document.createElement('img');
sravImage.src = "./img/[removal.ai]_430b8f8f-30e9-4154-b50c-1a19c384cace-graphic.png";
sravImage.alt = "";
const sravText = document.createElement('h4');
sravText.textContent = 'Сравнение';
sravDiv.appendChild(sravImage);
sravDiv.appendChild(sravText);
secondHeaderDiv.appendChild(sravDiv);

const izbDiv = document.createElement('div');
izbDiv.classList.add('izb');
const izbImage = document.createElement('img');
izbImage.src = "./img/serdcemoyo.png";
izbImage.alt = "";
const izbText = document.createElement('h4');
izbText.textContent = 'Избранное';
izbDiv.appendChild(izbImage);
izbDiv.appendChild(izbText);
secondHeaderDiv.appendChild(izbDiv);

const korzinaDiv = document.createElement('div');
korzinaDiv.classList.add('korzina');
const korzinaImage = document.createElement('img');
korzinaImage.src = "./img/chalaaravacha.png";
korzinaImage.alt = "";
const korzinaText = document.createElement('h4');
korzinaText.textContent = 'Корзина';
korzinaDiv.appendChild(korzinaImage);
korzinaDiv.appendChild(korzinaText);
secondHeaderDiv.appendChild(korzinaDiv);


document.body.appendChild(secondHeaderDiv);

var thirdHeaderDiv = document.createElement("div");


thirdHeaderDiv.className = "third_header"
let linksText = ["Все акции", "Скидки на подарки", "Samsung S24 + Кэшбек 10.000$", "Ноутбуки", "Успей купить", "Холодильники", "Телевизоры", "Premium", "Стиральные Машины", "Др"]
for (let i = 0; i < linksText.length; i++) {
    let link = document.createElement("a");
    link.href = "#";
    link.textContent = linksText[i];
    thirdHeaderDiv.appendChild(link);
}

document.body.appendChild(thirdHeaderDiv);


let productsDiv = document.createElement("div");
productsDiv.className = "products";


let productDiv = document.createElement("div");
productDiv.className = "product";
productDiv.id = "fen";

let img = document.createElement("img");
img.className = "car";
img.src = "./img/carrera.avif";
img.alt = "";

let h3 = document.createElement("h3");
h3.className = "names";
h3.textContent = "Фен Carrera №535";

let cenaDiv = document.createElement("div");
cenaDiv.className = "cena";
let h2 = document.createElement("h2");
h2.textContent = "3 999$";
cenaDiv.appendChild(h2);

let garyDiv = document.createElement("div");
garyDiv.className = "gary";
let h5 = document.createElement("h5");
h5.textContent = "Кэшбек +200";
garyDiv.appendChild(h5);

let btnsDiv = document.createElement("div");
btnsDiv.className = "btns";

let firstBtn = document.createElement("button");
firstBtn.id = "telejka";
let img1 = document.createElement("img");
img1.src = "./img/chalaaravacha.png";
img1.alt = "";
firstBtn.appendChild(img1);

let secondBtn = document.createElement("button");
let img2 = document.createElement("img");
img2.src = "./img/serdcemoyo.png";
img2.alt = "";
secondBtn.appendChild(img2);

let thirdBtn = document.createElement("button");
let img3 = document.createElement("img");
img3.src = "./img/[removal.ai]_430b8f8f-30e9-4154-b50c-1a19c384cace-graphic.png";
img3.alt = "";
thirdBtn.appendChild(img3);

productDiv.appendChild(img);
productDiv.appendChild(h3);
productDiv.appendChild(document.createElement("br"));
productDiv.appendChild(cenaDiv);
productDiv.appendChild(garyDiv);
productDiv.appendChild(btnsDiv);

btnsDiv.appendChild(firstBtn);
btnsDiv.appendChild(secondBtn);
btnsDiv.appendChild(thirdBtn);

productsDiv.appendChild(productDiv);

document.body.appendChild(productsDiv);
