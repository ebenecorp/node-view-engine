const express = require("express");
const app = express();

app.set('view engine', 'ejs' )

app.

app.listen(3000);

app.get("/", (req, res) => {
  // res.send('Hello World')
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  // res.send('Hello World')
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirect
app.get("/about-me", (req, res) => {
  res.sendStatus(301).redirect("/about");
});

//404 page

app.use((req, res) => {
  res.sendStatus(404).sendFile("./views/404.html", { root: __dirname });
});
