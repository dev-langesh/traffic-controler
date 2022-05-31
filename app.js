const express = require("express");

const { log } = require("./middlewares/access.middleware");

const { rateLimiter } = require("./middlewares/rateLimiter.middleware");
const { uploadRoute } = require("./routes/upload.route");

const app = express();

const PORT = process.env.PORT || 9999;

if (!PORT) {
  throw new Error("PORT Not defined");
}

// middlewares
app.use(log);
app.use(express.json());
app.use(rateLimiter);
app.use("/uploads", express.static("uploads"));

// routes
app.use("/post", uploadRoute);

app.get("/", (req, res) => {
  const data = `Server of port ${PORT}`;
  console.log(`Server at ${PORT} is responding`);
  res.send(data);
});

module.exports = { app };
