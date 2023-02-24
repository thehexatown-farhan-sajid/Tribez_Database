const NFT = require('../models/nft.model')

exports.nftform = async(req, res) =>{
const data= await NFT.create(req.body);
    res.status(201).send({
     data
      }); 
}

exports.allAccess = async(req, res) => {
    const data = await NFT.find()
    res.status(200).send({data});
  };

