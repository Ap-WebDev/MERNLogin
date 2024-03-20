const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const multer = require("multer");
const jwt = require("jsonwebtoken");

const app = express();

const upload = multer({ dest: "uploads/" });

const port = process.env.PORT || 3000;

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.fhovkko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Define User model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  image:String,
});

const User = mongoose.model("User", userSchema);


app.post("/signup", upload.single("image"), async (req, res) => {

  const { username, email, password } = req.body;
  const image = req.file.path;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword, image });
  await user.save();
  res.send("User created successfully");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ _id: user._id }, "SECRET_KEY");
    res.send({ message: "Login successful", token });
  } else {
    res.status(401).send("Invalid username or password");
  }
});

app.get("/", (req, res) => {
  res.send("Hello backend");
});

app.listen(port, () => {
  console.log(`server is Running : http://localhost:${port}`);
});
