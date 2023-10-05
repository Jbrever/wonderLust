const mongo =require('mongoose')
const model = require('../model/listing')
const data = require('./listingData')
mongo.connect('mongodb://localhost:27017/wonderLust').then(()=>console.log("mongoDB Connected123")).catch((err)=>console.log(err))

insertData();

async function insertData (){
 await model.deleteMany({});
 await model.insertMany(data)
}
