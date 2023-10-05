const model = require('../model/listing')

const home = (req,resp)=>{
    resp.render('home')
}

const allListing= async (req,resp)=>{
    const data = await model.find({})
    resp.render('listing',{data})
  }

const specificListing = async(req,resp)=>{
    const id = req.params.id;
    const data = await model.findById(id)
    resp.render('specificList',{data})
}  

const editForm = async (req,resp)=>{
    const id = req.params.id;
    const data = await model.findById(id)
    resp.render('editForm',{data});
}

const patchData= async (req,resp)=>{
    const id = req.params.id;
    const updateData = req.body
    const data = await model.findByIdAndUpdate(id,updateData)
    resp.redirect('/')
}

const addList = (req,resp) =>{
      resp.render('addList')
}

const postAddList = async (req,resp) =>{
     const data = req.body;
     await model.insertMany(data)
     resp.redirect('/')
}

const deleteList = async (req,resp) =>{
    const id = req.params.id;
    const data = await model.findByIdAndDelete(id)
    resp.redirect('/')
}

  module.exports ={home,allListing,specificListing,editForm,patchData,addList,postAddList,deleteList}
