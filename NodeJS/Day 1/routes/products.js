const { Router } = require("express");
const route = Router();
const fs = require("fs");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri ="mongodb+srv://dbUser1:<password>@cluster0.3nptx2z.mongodb.net/?retryWrites=true&w=majority"
  
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const collection = client.db("Project").collection("addresses");
const filePath = "./public/index.json";
route.get("/", async (req, res) => {
  const d = await read(filePath);
  console.log(d);
  res.send();
});
route.get("/db", (req, res) => {
  collection
    .find()
    .toArray()
    .then((data) => console.log("Testings", res.json(data)));
});
route.post("/insertdb", (req, res, next) => {
  collection.insertOne({ City: "Chennai" }, (err) => {
    if (err) next(err);
    else res.send("Inserted Successfully");
  });
});
route.put("/updatedb", (req, res, next) => {
  collection.updateOne(
    { City: "Chennai" },
    {
      $set: {
        no: "No 98",
        AddressLine1: "3rd Cross ",
        AddressLine2: "Ponnagar",
        State: "TamilNadu",
        Country: "India",
        Pincode: "620001",
      },
    },
    (err) => {
      if (err) next(err);
      else res.send("Updated Successfully");
    }
  );
});
route.delete("/deletedb", (req, res, next) => {
 
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
