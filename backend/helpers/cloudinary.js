const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "ds6ej9ul4",
  api_key: "175197474794786",
  api_secret: "_3V4pIHk1UR10_o59a2TjrBpWRM",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}

const upload = multer({ storage });
module.exports = { upload, imageUploadUtil };
