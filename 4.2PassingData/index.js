import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  // const fullName = req.body['fName'] + req.body['lName'];
  const numOfName = req.body['fName'].length + req.body['lName'].length;
  // console.log(numOfName);
  res.render("index.ejs", {
    fullNameNum: numOfName,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
