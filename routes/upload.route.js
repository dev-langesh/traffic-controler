const { upload } = require("../middlewares/multer.middleware");
const { uploadController } = require("./upload.controller");

const uploadRoute = require("express").Router();

uploadRoute.post("/", upload, uploadController);

module.exports = { uploadRoute };
