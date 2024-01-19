import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req);
    res.send("<h1>Hello Ren.</h1>");
});
app.get("/login", (req, res) => {
    res.send("Login.");
});
app.get("/signup", (req, res) => {
    res.send("Sign up.");
});

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});