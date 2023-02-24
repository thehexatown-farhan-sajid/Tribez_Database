const UPDATEAUCTIONSTARTTIME = require('../models/updateauctionstarttime.model')

exports.updateauctionstarttime = async(req, res) =>{
const data= await UPDATEAUCTIONSTARTTIME.create(req.body);
    res.status(201).send({
     data
      }); 
}

exports.updateauctionstarttimeData = async(req, res) => {
    const data = await UPDATEAUCTIONSTARTTIME.find()
    res.status(200).send({data});
  };

