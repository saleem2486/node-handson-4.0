const express = require("express")
const cors = require('cors')
const dotenv = require('dotenv')
const app=express()
const route = require('./routes/route')
dotenv.config()
// app.use(cors());
app.use(cors({
    origin:'*'
}))
app.use(express.json())
app.use('/user',route)
const port = process.env.PORT || 3030
app.listen(port,()=>{
    console.log(`${port} running fine`);
})