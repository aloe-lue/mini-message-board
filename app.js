const express = require("express");
const app = express();
const path = require("node:path");
const newMessageRouter = require("./routes/newMessageRouter");
const indexRouter = require("./routes/indexRouter");
const errorRouter = require("./routes/errorRouter");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/new", newMessageRouter);
app.use("/", indexRouter);
app.use("*", errorRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
