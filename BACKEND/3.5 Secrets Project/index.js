//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();
const port = 3000;
let passwordAuth = false;

app.use(bodyParser.urlencoded({extended : true}));

function openSecret(req, res, next) {
    console.log(req.bodyParser);
    if (req.body["password"] == "@alienforce") {
        passwordAuth = true;
    }
    next();
}

app.use(openSecret);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (passwordAuth) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.redirect("/");
    }
});

app.listen(port, (req, res) => {
    console.log("Listening to port: " +port);
});