const fs = require("fs");

fs.writeFile("test.txt", "NodeJS writing succesfully.\nRishabh Tripathi", (err) => {
    if (err) throw err;
    console.log("File written.");
});

fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("File Content: ", data);
})