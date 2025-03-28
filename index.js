const express = require('express')
const connectDB = require('./config/db')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
require('dotenv').config()




app.get("/", (req, res) => {
    res.send('Welcome To the E-commerce Platform')
})

const PORT = process.env.PORT || 8090
app.listen(PORT, () => {
    console.log(`Listening On Port ${PORT}`)
    connectDB()
})