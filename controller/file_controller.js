const Files = require("../model/csv");
const fs = require("fs");
const csv = require("csvtojson");

// Handle file upload
module.exports.upload = async (req, res) => {
  try {
    // Check if file is present
    if (!req.file) {
      return res.status(400).send("No files were uploaded.");
    }
    // Check if file is not CSV
    if (req.file.mimetype !== "text/csv") {
      return res.status(400).send("Select CSV files only.");
    }

    // Create a new file record in the database
    const file = await Files.create({
      fileName: req.file.originalname,
      filePath: req.file.path,
    });

    return res.redirect("/");
  } catch (error) {
    console.log("Error in fileController/upload", error);
    res.status(500).send("Internal server error");
  }
};

// View file content
module.exports.view = async (req, res) => {
  try {
    // Find the file in the database
    const file = await Files.findOne({ _id: req.params.id });

    if (!file) {
      return res.status(404).send("File not found.");
    }

    // Convert CSV file to JSON and render the fileView template
    csv()
      .fromFile(file.filePath)
      .then((jsonObj) => {
        res.render("fileView", { file: jsonObj, id: req.params.id });
      });
  } catch (error) {
    console.log("Error in fileController/view", error);
    res.status(500).send("Internal server error");
  }
};

// Delete file
module.exports.delete = async (req, res) => {
  try {
    const fileId = req.params.id;

    // Find the file in the database
    const file = await Files.findOne({ _id: fileId });

    if (!file) {
      return res.status(404).send("File not found.");
    }

    const filePath = file.filePath;

    // Delete the physical file from the file system
    fs.unlinkSync(filePath);

    // Delete the file from the database
    await Files.deleteOne({ _id: fileId });

    return res.status(200).redirect("back");
  } catch (error) {
    console.log("Error in fileController/delete", error);
    return res.status(500).send("Internal server error");
  }
};
