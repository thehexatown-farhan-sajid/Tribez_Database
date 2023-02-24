const UPDATE = require('../models/update.model')

exports.updateList = async(req, res) =>{
const data= await UPDATE.create(req.body);
    res.status(201).send({
     data
      }); 
}

exports.updateData = async(req, res) => {
    const data = await UPDATE.find()
    res.status(200).send({data});
  };

