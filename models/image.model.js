const mongoose = require("mongoose");

const imageSchema = mongoose.Schema(
  {
    image: { type: String, required: true, unique: true },
  },
  { collection: "uploads", timeStamps: true }
);

const imageModel = mongoose.model("images", imageSchema);

module.exports = { imageModel };
