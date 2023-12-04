import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let dayType = "weekday";
    let moodType = "work hard";

    if (day == 0 || day == 6) {
        dayType = "weekend";
        moodType = "have fun";
    }

    res.render("index.ejs",
    {dayCheck : dayType,
    moodCheck : moodType    ,
    });
});

app.listen(port, () => {
    console.log("Listening to port: " + port);
});