const express = require('express')
const mongoose = require('mongoose')
const {readdirSync} = require('fs')
const dotenv = require('dotenv')

dotenv.config()

const app = express();
app.use(express.json())

readdirSync('./routes').map((r) => app.use("/", require("./routes/" + r)))

//database
mongoose.connect(process.env.DATABASE_URL)
.then(()=>console.log("Database is Connected"))
.catch((err)=>console.log("Error in Database Connection"))
//server connection
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
})