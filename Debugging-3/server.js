const express = require("express");
const app = express();


const port = 4444;

const quotes = require("./quotes.json");

app.get("/", function (request, response) {
  response.sendStatus(200).send("Ask me for /quotes");
});

app.get("/quotes", function (request, response) {
  response.json(quotes);
});

const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
