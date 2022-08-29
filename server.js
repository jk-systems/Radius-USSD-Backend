const express = require("express")
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const cors = require('cors')
dotenv.config()

const router = require("./routes/router.js")
const port = process.env.PORT

mongoose.connect(`mongodb+srv://jksystems:${process.env.KEY}@radius.netzr80.mongodb.net/?retryWrites=true&w=majority`);

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors({
  origin: '*'
}));

app.use("/", router)

app.listen(port, () => {
  console.log(`The server is now running on Port : ${port}`)
})
//EOF