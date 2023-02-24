const UPDATEAUCTIONRESERVEPRICE = require('../models/updateauctionreserveprice.model')

exports.updateauctionreserveprice = async(req, res) =>{
const data= await UPDATEAUCTIONRESERVEPRICE.create(req.body);
    res.status(201).send({
     data
      }); 
}

exports.updateauctionreservepriceData = async(req, res) => {
    const data = await UPDATEAUCTIONRESERVEPRICE.find()
    res.status(200).send({data});
  };

