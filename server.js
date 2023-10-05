const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const mongo = require("mongoose");
const {mongoConnection} = require('./connection/connection')
const data = require('./data/listingData')
const router = require('./routes/listingRoute')
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate')
const path  = require('path')


mongoConnection("mongodb://localhost:27017/wonderLust")
.then(() => console.log("mongoDB connected"))
.catch(() => console.log("monogDB not connect"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.engine('ejs',ejsMate)
app.use(express.static(path.join(__dirname ,'/public')))
app.set('view engine','ejs')
app.use('/',router)  

app.listen(port,() => {
  console.log("server listing at port number-: ", port);
});
