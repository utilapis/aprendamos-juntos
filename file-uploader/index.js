const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

// default options
app.use(fileUpload());

app.post("/upload", function (req, res) {
  if (!req.files || !req.files.file) {
    return res.status(400).send("No files were uploaded.");
  }

  let folder = __dirname + "/uploads";
  let files = req.files.file;
  for (const i in files) {
    let file = files[i];
    file.mv(`${folder}/${file.name}`, function (err) {
      if (err) return res.status(500).send(err);
    });
  }

  res.send("File uploaded!");
});

app.use("/", express.static("fe"));

app.listen(3000);
