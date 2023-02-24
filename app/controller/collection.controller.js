const COLLECTION = require("../models/collection.model");

exports.collection = async(req, res) =>{
    const data= await COLLECTION.create(req.body);
        res.status(201).send({
         data
          }); 
    }

    exports.allData = async(req, res) => {
        const data = await COLLECTION.find()
        res.status(200).send({data});
      };
    