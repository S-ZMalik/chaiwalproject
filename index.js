require('dotenv').config()
const express = require("express");

const firstObj = {
    "name" : "shamaz",
    "age" : "21",
     "date of birth" : "18-10-2002",
     "address" : "korangi karachi",
     "education": "nala"
}

const app = express();

const port = 1000;

app.get('/', (req, res) => {
    res.send("this is first project");
})

app.get('/youtube', (req, res) => res.send("this is a youtube clone."))

app.get('/twitter', (req, res) => res.send("<h1>this is twitter clone.</h1>"))

app.get('/obj', (req, res) => {
    res.json(firstObj)
})

app.listen(process.env.PORT,() => {
    console.log(`my server is running port ${port}`)
})
