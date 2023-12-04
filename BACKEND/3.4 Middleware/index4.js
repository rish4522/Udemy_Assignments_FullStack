import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandname = '';

app.use(bodyParser.urlencoded({extended : true}));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandname = req.body["street"] + " " + req.body["pet"];
  next();
}

app.use(bandNameGenerator);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send("<h1>Band Name Generator</h1><br>"+`<h2>Your Band Name is : </h2><h3>${bandname}</h3>`);
});

app.listen(port, () => {
  console.log("Listening to port: " + port);
});