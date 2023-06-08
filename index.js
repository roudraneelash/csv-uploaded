// Require necessary modules
const db = require("./config/mongoose");
const express = require("express");

// Set the port number
const port = 8080;

// Create an instance of Express
const app = express();

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Set the view engine and views directory
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./assets"));

// Set up routes
app.use("/", require("./routes"));

// Start the server
app.listen(port, () => {
  console.log("Server is up and running on port", port);
});
