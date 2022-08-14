const express = require('express')

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
    return res.json({
        message: "hello"
    })
})

app.get("/login", (req, res) => {
    return res.json({
        message: "Hitting login route"
    })
})

app.get("/signup", (req, res) => {
    return res.json({
        message: "Hitting signup route"
    })
})

app.get("/logout", (req, res) => {
    return res.json({
        message: "Hitting logout route"
    })
})


app.listen(PORT, () => {
    console.log("Listening to port : ", PORT);
})