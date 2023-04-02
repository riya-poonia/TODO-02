const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tueday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

    default:
      day = "holiday";
      break;
  }
  res.render("list", { kindOfDay: day });

  // if (currentDay == 0) {
  //   day = "Sun";
  //   // res.send(__dirname + "/weekend.html");
  //   // res.render("list", { kindOfDay: day });
  // }
  // if (currentDay == 1) {
  //   day = "Mon";
  // }
  // if (currentDay == 2) {
  //   day = "tue";
  // }
  // if (currentDay == 3) {
  //   day = "Wed";
  // }
  // if (currentDay == 4) {
  //   day = "Thurs";
  // }
  // if (currentDay == 5) {
  //   day = "Fri";
  // }
  // if (currentDay == 6) {
  //   day = "Sat";
  // }
  // else {
  //   day = "Weekday";
  //   // res.send(__dirname + "/weekday.html");
  //   // res.render("list", { kindOfDay: day });
  // }
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
