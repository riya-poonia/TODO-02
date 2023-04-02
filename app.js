const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("https");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
var items = ["Buy food", "Cook food", "Eat food"];
var workItems = [];

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    listTitle: day,
    newListItems: items,
  });
});

app.post("/", function (req, res) {
  //console.log(req.body);
  var item = req.body.newItem;
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems,
  });
});
app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function (req, res) {
  res.render("about");
});
app.listen(4000, function () {
  console.log("Server started at port 4000");
});
