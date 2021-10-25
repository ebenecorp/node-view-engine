const { render } = require("ejs");
const express = require("express");
const { result } = require("lodash");
// const { title } = require("process");
const mongoose = require("mongoose");
// const Blogs = require("./models/blogs");
const Blog = require("./models/blogs");
const app = express();

const dbUrl = "mongodb://localhost:27017/NewTest";

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

app.use(express.urlencoded({ extended: true }));

app.get("/about-us", (req, res) => {
  const blog = new Blog({
    title: "new blog ",
    snippet: "A new blog input",
    body: "This is a new blog input",
  });

  blog
    .save()
    .then((result) => {
     return res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      return res.send(result);
    })
    .then((err) => {
      console.log(err);
    });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("616f319637479c1ac9855e5a")
    .then((result) => {
      return res.send(result);
    })
    .then((err) => {
      console.log(err);
    });
});



app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      return res.render("index", {
        title: "All Blogs",
        blogs: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      console.log(result);
      return res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/blog/:id", (req, res) => {
  // console.log(req.params.id);
  Blog.findByIdAndDelete(req.params.id)
    .then((result) => {
      return res.json({ redirect: "/blogs/" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  return res.render("create", {
    title: "Create a Blog",
  });
});

app.get("/blogs/:id", (req, res) => {
  // console.log(req.params.id)
  Blog.findById(req.params.id)
    .then((result) => {
     return res.render("details", {
        blog: result,
        title: "Blog Details",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// app.get("delete/:id", (req, res) => {
//   Blog.findById(id).then((result) => {
//     res.send(result).catch((err) => console.log(err));
//   });
// });



app.get("/about", (req, res) => {
  // res.send('Hello World')
  return res.render("about", {
    title: "About",
  });
});


app.get("/", (req, res) => {
  return res.redirect("/blogs");
});

app.use((req, res) => {
  return res.sendStatus(404).render("404", {
    title: "404",
  });
});
