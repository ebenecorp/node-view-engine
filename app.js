const express = require("express");
const { result } = require("lodash");
// const { title } = require("process");
const mongoose = require("mongoose");
const Blog = require("./models/blogs");
const app = express();

const dbUrl =
  "mongodb://localhost:27017/NewTest";

mongoose
  .connect(dbUrl)
  .then((result) => {
    console.log("connected to DB");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");

// app.listen(3000);

app.use(express.static("public"));

app.get("/about-us", (req, res) => {
  const blog = new Blog({
    title: "new blog ",
    snippet: "A new blog input",
    body: "This is a new blog input",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res)=>{
    Blog.find().then(result=>{
        res.send(result)
    }).then(err =>{
        console.log(err)
    })
})

app.get('/single-blog', (req, res)=>{
    Blog.findById('616f319637479c1ac9855e5a').then(result=>{
        res.send(result)
    }).then(err =>{
        console.log(err)
    })
})



app.get("/", (req, res) => {
    res.redirect('/blogs')
});

app.get('/blogs', (req, res) => {
      Blog.find().sort({createdAt: -1}).then((result)=>{
            res.render('index', {
                title: "All Blogs",
                blogs: result
              })
            }).catch(err=>{
              console.log(err)
            })
      }) 


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

app.use((req, res) => {
  res.sendStatus(404).render("404", {
    title: "404",
  });
});
