const CANCELLIST = require("../models/cancellist.model");

exports.cancellist = async(req, res) =>{
    const data= await CANCELLIST.create(req.body);
        res.status(201).send({
         data
          }); 
    }

    exports.cancelData = async(req, res) => {
        const data = await CANCELLIST.find()
        res.status(200).send({data});
      };
    