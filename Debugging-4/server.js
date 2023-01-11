const express = require("express");
const app = express();
const lodash = require("lodash");

const port = 3009;

const quotes = require("./quotes.json");

app.get("/", function (request, response) {
  response.send(
    "Madiha's Quote Generator!  Ask me for /quotes/random, or /quotes"
  );
});

// Get all quotes.
app.get("/quotes", function (request, response) {
  response.send(quotes);
});


//Get random quotes.
app.get("/quotes/random", function (request, response) {
  response.send(lodash.sample(quotes));
});

const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
