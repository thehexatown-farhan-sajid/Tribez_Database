const AUCTIONCANCEL = require("../models/auctioncancel.model");

exports.auctioncancel = async(req, res) =>{
    const data= await AUCTIONCANCEL.create(req.body);
        res.status(201).send({
         data
          }); 
    }

    exports.auctioncancelData = async(req, res) => {
        const data = await AUCTIONCANCEL.find()
        res.status(200).send({data});
      };
    