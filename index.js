require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const name = "Sandip"

app.get('/', (req, res) => {
    res.send('Hello World!')

})

app.get('/bijay', (req, res) => {
    res.send("Hello Engineer Vijay babu")
})

app.get('/login', (req, res) => res.send(`<h1>Hello, ${name} your are logged in<h1>`))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})