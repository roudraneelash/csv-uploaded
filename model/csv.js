const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    uploadDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Files = mongoose.model("Files", fileSchema);

module.exports = Files;
