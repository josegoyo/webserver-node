require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.use("/", (req, res) => {
    res.render("home", {
        nombre: "Jose Gregorio",
        titulo: "Ejemplo Node 1",
    });
});

app.get("/generic", (req, res) => {
    res.render("generic", {
        nombre: "Jose Gregorio",
        titulo: "Ejemplo Node 2",
    });
});

app.get("/elements", (req, res) => {
    res.render("elements", {
        nombre: "Jose Gregorio",
        titulo: "Ejemplo Node 3",
    });
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
    console.log(`server app listening on port ${port}`);
});
