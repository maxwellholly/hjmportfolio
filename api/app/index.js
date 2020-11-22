// load in imports
const error = require("debug")("api:error");
const express = require("express");
const morganDebug = require("morgan-debug");
const cors = require("cors");
const path = require("path");

// routes
const postsRouter = require("./routes/posts");
const authRouter = require("./routes/auth");

// create an express app
const app = express();

// makes sure content type is json and then parses it into req.body
app.use(express.json());
// log all requests to api
app.use(morganDebug("api:request", "dev"));
// open cors
app.use(cors());

// app setup to use router at /asks, /reviews, /categories
app.use("/posts", postsRouter);
app.use("/auth", authRouter);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../../hjmportfolio-app/build")));

  // Handle React routing, return all requests to React app
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../hjmportfolio-app/build", "index.html"));
  });
}

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  error("ERROR FOUND:", err);
  res.sendStatus(500);
});

// export express app
module.exports = app;
