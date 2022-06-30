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
      console.log(Quote);
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
