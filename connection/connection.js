const mongo = require('mongoose');
async function mongoConnection(url){
    mongo
       .connect(url, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
       })  
   }
   
   module.exports = {mongoConnection};
