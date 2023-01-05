
const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

let users = ["ki", "nah", "meh"]

app.get('/', function (req, res) {
  res.send('welcome')
})
app.get('/user', function (req, res) {
  res.send({users})
})
app.post("/create", (req, res) => {
   users.unshift(req.body.user)
   res.send({users})
})
app.delete("/delete", (req, res) => {
   let delUser = req.body.user
   res.send({users: users.filter(u => u !== delUser)})
})
app.put("/update/:usr", (req, res) => {
   let param = req.params.usr
   let newUser = req.body.user
   users.forEach((u, i) => {
    if(u == param){
        users[i] = newUser
    }
   })
   res.send({users})
})
app.listen(3000, () => {
  console.log('')
})