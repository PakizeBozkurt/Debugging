const express = require("express");
const app = express();

const port = 5555;
const quotes = require("./quotes.json");

app.get("/", function (request, response) {
  response.send(
    "Debugging exercise.  GET for /quotes/search?word=the returns an empty array!  Why?"
  );
});

//Displays all quotes
app.get("/quotes", function (request, response) {
  response.json(quotes);
});

//Display quote matching an id
app.get("/quotes/:id", function (request, response) {
  const inputId = request.params.id;
  if (inputId) {
    const quote = quotes.filter((res) => res.id == inputId);
    response.json(quote);
  }
});

//Search by a term
function search(word) {
  return quotes.filter((quote) => quote.quote.includes(word));
}

app.get("/quotes/search", function (request, response) {
  const searchWord = request.query.word;
  const result = search(searchWord);
  response.send(result);
});

const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
