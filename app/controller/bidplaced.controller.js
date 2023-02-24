const BIDPLACED = require("../models/bidplaced.model");

exports.bidplaced = async(req, res) =>{
    const data= await BIDPLACED.create(req.body);
        res.status(201).send({
         data
          }); 
    }

    exports.bidplacedData = async(req, res) => {
        const data = await BIDPLACED.find()
        res.status(200).send({data});
      };
    