const BUY = require("../models/buy.model");

exports.buy = async(req, res) =>{
    const data= await BUY.create(req.body);
        res.status(201).send({
         data
          }); 
    }

    exports.buyData = async(req, res) => {
        const data = await BUY.find()
        res.status(200).send({data});
      };
    