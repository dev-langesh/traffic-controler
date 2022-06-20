const http = require("http");
const { app } = require("./app");
const { connectDB } = require("./config/db");
const cluster = require("node:cluster");

const PORT = process.env.PORT || 9999;

connectDB();

const server = http.createServer(app);

if (cluster.isPrimary) {
  cluster.fork();
  cluster.fork();
} else {
  server.listen(PORT, () => console.log(`Server is running at ${PORT}`));

  console.log(`Worker ${process.pid} started`);
}
