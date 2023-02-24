const OFFERCANCEL = require('../models/offercancel.model')

exports.offercancel = async(req, res) =>{
const data= await OFFERCANCEL.create(req.body);
    res.status(201).send({
     data
      }); 
}

exports.offercancelData = async(req, res) => {
    const data = await OFFERCANCEL.find()
    res.status(200).send({data});
  };

