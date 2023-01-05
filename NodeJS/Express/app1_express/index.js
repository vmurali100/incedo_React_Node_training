const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.send("Hi , this is rupendra ")
})
app.get('/users', function (req, res) {
    const users = ["Siva", "Rupendra", "jay"]
    res.json(users)
})
app.post('/users', function (req, res) {
    console.log("body", req.body)
    res.json("rup")
})
const users = ["rupendra", "Jay"]
app.delete("/users", (req, res) => {
    let deluser = req.body.user
    console.log(deluser)
    res.json({
        users: users.filter((user) => user !== deluser)
    })
})

    app.put("/update/:usr", (req, res) => {
        let userToUpdate = req.params.usr;
        console.log(userToUpdate)
        let newUser = req.body.user;
        users.forEach((myUser, i) => {
            if (myUser == userToUpdate) {
                users[i] = newUser;
            }
        });
        res.json({ users });
    });



app.listen(5000, () => {
    console.log("app listening in 5000")
});