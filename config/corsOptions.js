const whitelist = [
  "http://localhost",
  "http://localhost:8000",
  "http://localhost:8001",
  "http://localhost:8002",
  "http://localhost:8003",
];

const options = {
  origin: (origin, callback) => {
    if (
      whitelist.includes(origin) ||
      (process.env.NODE_ENV === "production" ? null : !origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
};

module.exports.corsOptions = options;
