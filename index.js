const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const path = require("path");
const fileUpload = require("express-fileupload");
app.use(fileUpload());
app.use(cors());
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", require("./routes/auth.route"));

http.listen(3000, () => {
  console.log("listen....");
});
