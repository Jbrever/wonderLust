const mongo = require('mongoose')
const schema = new mongo.Schema({
    title:{
       type:String,
       required: true
    } ,
    description:{
        type:String,
    },
    image:{
        type:String,
        required: true,
        default:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        set:(link)=> link===''? 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' :link
    },
    price:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required: true
    }
})

const model = mongo.model('listing',schema);

module.exports = model