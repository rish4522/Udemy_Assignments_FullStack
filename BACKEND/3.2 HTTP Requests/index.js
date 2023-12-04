import express from 'express';
const app = express();

app.get("/", (req, res) => {
    res.send("<html>Nodemon working properly.</html>");
    console.log(req.rawHeaders);
});

app.get("/about", (req, res) => {
    res.send("<html><h2>ABOUT PAGE</h2></html>")
    console.log("About handled");
});

app.get("/contact", (req, res) => {
    res.send("<html><h3>CONTACT PAGE</h3></html>");
    console.log("Contact handled.");
});

app.listen(3000, () => {
    console.log("Express Server Running Succesfully.");
});