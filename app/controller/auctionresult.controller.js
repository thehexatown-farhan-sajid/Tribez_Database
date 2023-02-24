const AUCTIONRESULT = require("../models/auctionresulted.model");

exports.auctionresult = async(req, res) =>{
    const data= await AUCTIONRESULT.create(req.body);
        res.status(201).send({
         data
          }); 
    }

    exports.auctionresultData = async(req, res) => {
        const data = await AUCTIONRESULT.find()
        res.status(200).send({data});
      };
    