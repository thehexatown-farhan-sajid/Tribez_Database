const BIDREFUNDED = require("../models/bidrefunded.model");

exports.bidrefunded = async(req, res) =>{
    const data= await BIDREFUNDED.create(req.body);
        res.status(201).send({
         data
          }); 
    }

    exports.bidrefundedData = async(req, res) => {
        const data = await BIDREFUNDED.find()
        res.status(200).send({data});
      };
    