require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.Port || 7000;
app.use(express.static("./client/public"));
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");

//conection to database
mongoose.connect("mongodb://localhost:27017/TIL", {
  userNewUrlParser: true,
  useUnifiedTopology: true,
});

//DB schema
const UserSchema = new mongoose.Schema({
  //named like the form varibales name
  title: String,
  textArea: String,
  author: String,
  category: String,
  date: Date,
});

//userModel is a class and needs new when generating
const UserModel = mongoose.model("entries", UserSchema);
let formSub;
app.post("/entry", async (request, response) => {
  formSub = request.body;

  //creat new user in the database and generated database after we created a new user
  let seedUser = new UserModel({
    title: formSub.title,
    textArea: formSub.textArea,
    author: formSub.author,
    category: formSub.category,
    date: new Date(),
  });
  seedUser.save();
  response.redirect("/Redirecting");
});

//search with title
app.post("/search", async (request, response) => {
  let SearchSub = request.body.title;
  console.log(SearchSub);
  response.redirect(`/ExistingEntry/search/${SearchSub}`);
 
});
//fetching search result
app.get("/title/:title" , async (request,response) =>{
  let SearchTitle = request.params.title;
  const searchResult = UserModel.findOne({ title: SearchTitle }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Result : ", docs);
      response.json(docs)
    }
  });
})


//filter with category
app.post("/filter", async (request, response) => {
  let FilterSub = request.body.category
  console.log(FilterSub);
  response.redirect(`/ExistingEntry/filter/${FilterSub}`);
 
});
//fetching filter result
app.get("/categories/:category" , async (request,response) =>{
  let CategoryFilter = `${request.params.category}`;
  console.log(CategoryFilter)
  const filterResult = UserModel.find({ category: CategoryFilter}, function (err, docs) { 
    if (err){ 
        console.log(err); 
    } 
    else{ 
        console.log("Result : ", docs); 
        response.json(docs)
    } 
}); 
 
})

//editing post
app.post("/editEntry", async (request, response) => {
  formSub = request.body;

  let updateId = `${formSub.id}`;
  console.log("id", updateId);

  UserModel.findByIdAndUpdate(
    updateId,
    {
      title: formSub.title,
      textArea: formSub.textArea,
      author: formSub.author,
      category: formSub.category,
      date: new Date(),
    },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Updated User : ", docs);
      }
    }
  );
  response.redirect("/ExistingEntry");
});

//Deleting post
app.get("/delete/:id", async (request, response) => {
  let deleteId = request.params.id;
  console.log("id", deleteId);
  UserModel.findByIdAndDelete(deleteId, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted : ", docs);
    }
  });
});

// fetching entries
app.get("/allEntries", async (request, response) => {
  const cursor = await UserModel.find({});
  response.json(cursor);
});

app.get("*", (request, res) => {
  res.sendfile(path.resolve("./client/public/index.html"));
});

app.listen(port, () => {
  console.log("listening on port: ", port);
});
