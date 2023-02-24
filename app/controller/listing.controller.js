const LISTING = require('../models/listing.model')

exports.listingnft = async(req, res) =>{
const data= await LISTING.create(req.body);
    res.status(201).send({
     data
      }); 
}

exports.allAccess = async(req, res) => {
  const {min,max}=req.query;
  if(min, max){ 
  const price = await LISTING.find({pricePerItem: {$gte : min}, pricePerItem : {$lte : max}})
    // const data = await LISTING.find()
    res.status(200).send({price});
  }else{
    const data = await LISTING.find()
    res.status(200).send({data});
  }
  };