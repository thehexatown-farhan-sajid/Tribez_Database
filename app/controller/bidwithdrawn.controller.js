const BIDWITHDRAWN = require("../models/bidwithdrawn.model");

exports.bidwithdrawn = async(req, res) =>{
    const data= await BIDWITHDRAWN.create(req.body);
        res.status(201).send({
         data
          }); 
    }

    exports.bidwithdrawnData = async(req, res) => {
        const data = await BIDWITHDRAWN.find()
        res.status(200).send({data});
      };
    