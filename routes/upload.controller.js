const { imageModel } = require("../models/image.model");

async function uploadController(req, res) {
  console.log(req.file);

  if (!req.file) {
    return res.status(400).json({ error: "File is required" });
  }

  const PORT = process.env.PORT;

  const imageUrl = `http://localhost:${PORT}/${req.file.path}`;

  await imageModel.create({
    image: imageUrl,
  });

  res.send("Image created");
}

module.exports = { uploadController };
