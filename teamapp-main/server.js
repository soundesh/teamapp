const express =require('express')
const fileUploader=require('express-fileupload')
const cors =require('cors')
const cookiePaser=require('cookie-parser')
const mongoose =require('mongoose')
const path=require('path')
require('dotenv').config()


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



const URI = process.env.MONGODB_URL   //conection monog db 
mongoose.connect(URI, { 

    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true

}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})
// const PORT=3033
// app.listen(PORT,()=>{
    // console.log("port is listening 5000")
// })

// app.listen(3000);

app.listen(process.env.PORT, function () {
    console.log('Example app listening on port',process.env.PORT)
  })