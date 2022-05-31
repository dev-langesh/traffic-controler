const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 9999;

const log = (req, res, next) => {
  fs.appendFile(
    path.resolve(__dirname, "../logs/access.log"),
    `${req.ip} -- [${new Date()}] -- responding server port -> ${PORT}\n`,
    (err) => {
      if (err) console.log(err);
    }
  );
  next();
};

module.exports = { log };
