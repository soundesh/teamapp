const express =require('express')
const fileUploader=require('express-fileupload')
const cors =require('cors')
const cookiePaser=require('cookie-parser')
const mongoose =require('mongoose')
const path=require('path')
require('dotenv').config()
const mysql=require('mysql2')

const app=express()
app.use(express.json())
app.use(fileUploader({
    useTempFiles:false
}))
app.use(cors())
app.use(cookiePaser())

app.use('/user', require('./routes/userRouter'))
app.use('/app',require('./routes/IplDataRouter'))
app.use('/img', express.static('img'));

const db=mysql.createPool({
    host :'localhost',
    user:'root',
    password:'monkatwork',
    database:'ipldb',
})

app.listen(process.env.PORT, function () {
    console.log('Example app listening on port',process.env.PORT)
  })