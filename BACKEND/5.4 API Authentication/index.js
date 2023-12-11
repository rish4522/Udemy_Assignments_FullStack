import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const yourUsername = "rish4522";
const yourPassword = "@alienforce";
const yourAPIKey = "8d3151d2-8663-4add-b141-30c7fd6ef637";
const yourBearerToken = "cb03bfec-a985-481f-ab6c-7ae3fcc625fd";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", {content : JSON.stringify(result.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async(req, res) => {
    try {
      const result = await axios.get(API_URL + "/all?page=2", 
      {},
      {
        auth: {
          username: yourUsername,
          password: yourPassword,
        },
      }
    );
      res.render("index.ejs", {content : JSON.stringify(result.data)});
    } catch (error) {
      res.status(404).send(error.message);
    }
});

app.get("/apiKey", async(req, res) => {
  try {
    const result = await axios.get(API_URL + "/filter", {
      params : {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async(req, res) => {
 try {
  const result = await axios.get(API_URL + "/secrets/2", {
    headers: {
      Authorization: `Bearer ${yourBearerToken}`
    },
  });
  res.render("index.ejs", {content : JSON.stringify(result.data)});
 } catch (error) {
  res.status(404).send(error.message);
 }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
