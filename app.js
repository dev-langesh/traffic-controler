const express = require("express");
const path = require("node:path");
const cors = require("cors");
const { log } = require("./middlewares/access.middleware");
const helmet = require("helmet");

const { rateLimiter } = require("./middlewares/rateLimiter.middleware");
const { uploadRoute } = require("./routes/upload.route");
const { corsOptions } = require("./config/corsOptions");

const app = express();

const PORT = process.env.PORT || 9999;

if (!PORT) {
  throw new Error("PORT Not defined");
}

// middlewares
app.use(helmet());
app.use(cors());
app.use(log);
app.use(express.json());
app.use(rateLimiter);
app.use("/uploads", express.static("uploads"));

// routes
app.use("/post", uploadRoute);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
  console.log(`Server at ${PORT} is responding`);
});

app.get("/check-port", (req, res) => {
  const data = `Server of port ${PORT}`;
  console.log(`Server at ${PORT} is responding`);
  res.send(data);
});

module.exports = { app };
