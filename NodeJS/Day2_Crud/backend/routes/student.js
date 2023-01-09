const express = require("express")
const app = express()
const router = express.Router()

const fs = require("fs")

router.get("/", (res, req) => {
    fs.readFile("./data/student.json", (err, results) => {
        
    })
})
