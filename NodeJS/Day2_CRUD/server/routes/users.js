var express = require("express");
var router = express.Router();
const fs = require("fs");
const filePath = "./data/db.json";
var jwt = require("jsonwebtoken");
/* GET users listing. */

const checkToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    if (jwt.verify(token, "Incedo")) {
      next();
    }
  } catch (err) {
    res.send("Invalid Token");
  }
};
router.get("/", checkToken, function (req, res, next) {
  res.send("respond with a resource");
});
const read = (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      const buf = Buffer.from(data);
      let data1 = JSON.parse(buf.toString());
      resolve(data1);
    })
  );
};
const write = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data));
};
const userPresent = (user, newUser) => {
  return !!user.find((usr) => usr.email == newUser.email);
};
router.post("/login", async (req, res) => {
  const data = await read(filePath);
  if (userPresent(data, req.body)) {
    const token = jwt.sign(req.body, "Incedo");
    res.json({ message: "Login Sucess", token });
  } else {
    res.json({ message: "Error" });
  }
});
router.post("/register", async (req, res, next) => {
  const data = await read(filePath);
  console.log(req.body);
  if (!userPresent(data, req.body)) {
    data.push(req.body);
    try {
      write(filePath, data);
      res.send("Success");
    } catch (err) {
      next({ status: 502, message: "Message Passed as data" });
    }
  } else {
    res.send("User Exist");
  }
});

module.exports = router;
