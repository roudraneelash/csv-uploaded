const Files = require("../model/csv");

//fetch all the uploaded files and render it
module.exports.home = async (req, res) => {
  try {
    const files = await Files.find({});
    res.render("home", { files });
  } catch (error) {
    console.log("Error in fileController/home", error);
    res.status(500).send("Internal server error");
  }
};
