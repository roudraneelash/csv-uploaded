const express = require("express");
const router = express.Router();
const multer = require("multer");

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}-${Date.now()}`);
  },
});

// Initialize multer upload
const upload = multer({ storage: storage });

const fileController = require("../controller/file_controller");
const homeController = require("../controller/home_controller");

// Home route
router.get("/", homeController.home);

// View file route
router.get("/view/:id", fileController.view);

// Delete file route
router.get("/delete/:id", fileController.delete);

// Upload file route
router.post("/upload", upload.single("file"), fileController.upload);

module.exports = router;
