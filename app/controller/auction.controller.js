const AUCTION = require("../models/auction.model");

exports.auction = async(req, res) =>{
    const data= await AUCTION.create(req.body);
        res.status(201).send({
         data
          }); 
    }

    exports.auctionData = async(req, res) => {
        const data = await AUCTION.find()
        res.status(200).send({data});
      };
    