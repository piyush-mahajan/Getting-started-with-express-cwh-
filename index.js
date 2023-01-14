const express = require("express");
const app = express();
const path = require("path");

// const piyushmiddleware = (req, res, next) => {
//   console.log(req);
//   console.log("piyush middleware");
//   next();
// };

app.use(express.static(path.join(__dirname, "public")));
// app.use(piyushmiddleware);

app.get("/:name", (req, res) => {
  res.send("hello world " + req.params.name);
});
app.get("/about", (req, res) => {
  //   res.send("hello about");
  //   res.sendFile(path.join(__dirname, "index.html"));
  res.json({ piyush: 69 });
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
