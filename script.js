let Quote = [];
let randomSite;
let Author = [];

function getApi() {
  let min = 1;
  let max = 7268;
  randomSite = Math.floor(Math.random() * (max - min + 1) + min);
  fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/?page=${randomSite}`)
    .then((response) => response.json())
    .then((data) => {
      data.pagination.currentPage = 4;
      Quote = data.data;
      Author = data.data;
      CreateRandomQuote();
    });
}

function CreateRandomQuote() {
  let random = Quote[Math.floor(Math.random() * Quote.length)];
  let randomQuote = random.quoteText;
  let randomAuthor = random.quoteAuthor;
  const quoteOutput = document.getElementById("quote");
  const AuthorOutput = document.getElementById("quote-author");
  quoteOutput.innerHTML = `"${randomQuote}"`;
  AuthorOutput.innerHTML = randomAuthor;
}
getApi();
const quoteTextFont = document.getElementById("quote");
const quoteAuthorFont = document.getElementById("quote-author");
function changeFontColor(Fontcolor) {
  quoteTextFont.style.color = Fontcolor;
  quoteAuthorFont.style.color = Fontcolor;
  closeWindow();
}
const quoteBox = document.querySelector(".quote-box");
function changeBackgroundColor(Backcolor) {
  quoteBox.style.backgroundImage = "url()";
  quoteBox.style.backgroundColor = Backcolor;
  closeWindow();
}
function textAlign(layout) {
  quoteTextFont.style.textAlign = layout;
  quoteAuthorFont.style.textAlign = layout;
  closeWindow();
}

function textStyle(toggleClass) {
  quoteTextFont.classList.toggle(toggleClass);
  quoteAuthorFont.classList.toggle(toggleClass);
  closeWindow();
}
function changeFont(font) {
  quoteTextFont.style.fontFamily = font.value;
  quoteAuthorFont.style.fontFamily = font.value;
  closeWindow();
}
const numImagesAvailable = 414;
function randomBG() {
  let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
  fetch(
    `https://source.unsplash.com/collection/158642/nature/?sig=${randomImageIndex}`
  ).then((response) => {
    quoteBox.style.backgroundImage = `url('${response.url}')`;
    closeWindow();
  });
}
const personalizeBox = document.querySelector(".personalize");
function personalizeQuote() {
  personalizeBox.style.display = "flex";
}
function closeWindow() {
  personalizeBox.style.display = "none";
}
