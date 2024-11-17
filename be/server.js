const express = require('express');
const path = require("path")
const app = express();
const port = 9999;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-access-token");
    next();
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.use(express.static(path.resolve(__dirname, "dist")))
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"))
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
