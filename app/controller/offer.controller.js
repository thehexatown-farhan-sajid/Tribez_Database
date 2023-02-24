const OFFER = require('../models/offer.model')

exports.offer = async(req, res) =>{
const data= await OFFER.create(req.body);
    res.status(201).send({
     data
      }); 
}

exports.offerdata = async(req, res) => {
    const data = await OFFER.find()
    res.status(200).send({data});
  };

