// import express from "express";

// const app = express();
// const port = 3000;

// app.listen(port, () => {
//     console.log(`Server running on port ${port}.`);
// });

import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000.");
});