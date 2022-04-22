require('dotenv').config();
const express = require ('express')
const mongoose = require('mongoose')
const cors = require ('cors');
const app=express();
const userRoutes = require ('./route/userRoute');
const adminRoutes = require ('./route/adminRoute');
const movieRoute = require ('./route/movieRoute')
const bodyParser = require('body-parser');
const orderRoute = require ('./route/orderRoute')
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb Successfully....appp")
    console.log("======================================================");
})

const PORT = process.env.PORT || 3000

app.use('/user',userRoutes)
app.use('/admin',adminRoutes)
app.use('/movie',movieRoute)
app.use('/order',orderRoute)


app.listen(PORT, function(err) {
    if (err) console.log("Error in server setup:",err)
    console.log('listening on 3000')
  }); 