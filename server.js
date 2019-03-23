// Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

// Your server.js file should require the basic npm packages we've used in class: express and path.

var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
//// Routes
// Your htmlRoutes.js file should include two routes:


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// A GET Route to /survey which should display the survey page.

// app.get("/survey", function (req, res) {
//     res.render("survey.html");
// });

// // A default, catch-all route that leads to home.html which displays the home page.
// app.get("/", function (req, res) {
//     // res.render("", { thing: data })
// });
// // Your apiRoutes.js file should contain two routes:



// // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// app.get("/api/friends", function (req, res) {

//     res.render("friends", friends[0]);
// });
// // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// app.post("/api/friends", function (req, res) {
//     res.json
// });
////
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//listener
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost: " + PORT)
})