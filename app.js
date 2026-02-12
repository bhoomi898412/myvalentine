const express = require("express");
const app = express();
const port = process.env.PORT || 3000;;
const path = require("path");
const ejsMate = require("ejs-mate");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname , "/public")));

app.get("/", (req, res) => {
    res.render("listings/homepeg.ejs");
});

app.get("/myvelentine" , (req , res) => {
    res.render("listings/homepeg.ejs");
});

app.get("/myvelentine/alldays" , (req , res) => {
    res.render("listings/alldays.ejs");
});

app.listen(port , () => {
    console.log("listening");
})