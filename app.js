const express = require("express");
const { title } = require("process");
const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.use(express.static('public'));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "A title 1",
      snippets:
        " a random body of text is being displayed to be seen for every one 1",
    },
    {
      title: "A title 2",
      snippets:
        " a random body of text is being displayed to be seen for every one 2",
    },
    {
      title: "A title 3",
      snippets:
        " a random body of text is being displayed to be seen for every one 3",
    },
    {
      title: "A title 4",
      snippets:
        " a random body of text is being displayed to be seen for every one 4",
    },
  ];

  res.render("index", {
    title: "Home",
    blogs,
  });
});
app.get("/about", (req, res) => {
  // res.send('Hello World')
  res.render("about", {
    title: "About",
  });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", {
    title: "Create a Blog",
  });
});

//redirect
// app.get("/about-me", (req, res) => {
//   res.sendStatus(301).redirect("/about");
// });

//404 page

app.use((req, res) => {
  res.sendStatus(404).render("404", {
    title: "404",
  });
});
