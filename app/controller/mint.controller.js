const MINT = require('../models/mint.model')

exports.mintnft = async(req, res) =>{
const data= await MINT.create(req.body);
    res.status(201).send({
     data
      }); 
}

exports.allAccess = async(req, res) => {
    const data = await MINT.find()
    res.status(200).send({data});
  };

