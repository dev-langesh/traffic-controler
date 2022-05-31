const http = require("http");
const { app } = require("./app");
const { connectDB } = require("./config/db");

const PORT = process.env.PORT || 9999;

connectDB();

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server is running at ${PORT}`));
