const UPDATEAUCTIONENDTIME = require('../models/updateauctionendtime.model')

exports.updateauctionendtime = async(req, res) =>{
const data= await UPDATEAUCTIONENDTIME.create(req.body);
    res.status(201).send({
     data
      }); 
}

exports.updateauctionendtimeData = async(req, res) => {
    const data = await UPDATEAUCTIONENDTIME.find()
    res.status(200).send({data});
  };

