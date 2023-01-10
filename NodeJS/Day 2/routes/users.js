const { Router } = require("express");
const route = Router();
const fs = require("fs");
const filePath = "./public/index.json";
route.get("/", async (req, res) => {
  const d = await read(filePath);
  console.log(d);
  res.send(JSON.stringify(d));
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
route.post("/create", async (req, res, next) => {
  const data = await read(filePath);
  data.push(req.body);
  try {
    write(filePath, data);
    res.send("Success");
  } catch (err) {
    next({ status: 502, message: "Message Passed as data" });
  }
});
route.delete("/delete/:id", async (req, res, next) => {
  const data = await read(filePath);
  console.log(req.params.id);
  try {
    write(
      filePath,
      data.filter((d, i) => i != req.params.id)
    );
    res.send("Successfully Deleted " + req.params.id);
  } catch (err) {
    next({ status: 502, message: "Message Passed as data" });
  }
});
route.put("/put/:id", async (req, res, next) => {
  const data = await read(filePath);
  console.log(req.params.id);
  let mutateData = [...data];
  data.forEach((d, i) => {
    if (d.username == req.params.id) mutateData[i] = req.body;
  });
  console.log(mutateData);
  try {
    write(filePath, mutateData);
    res.send("Successfully Updated " + req.params.id);
  } catch (err) {
    next({ status: 502, message: "Message Passed as data" });
  }
});
module.exports = route;
