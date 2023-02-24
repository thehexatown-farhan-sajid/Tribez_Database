const mongoose = require("mongoose");
const updateauctionreservepriceSchema = mongoose.Schema({
  nftAddress: {
    type: String,
    required: true,
  },
  tokenId: {
    type: String,
    required: true,
  },
  reservePrice: {
    type: String,
    required: true,
  },
});
const UPDATEAUCTIONRESERVEPRICE = mongoose.model(
  "UPDATEAUCTIONRESERVEPRICE",
  updateauctionreservepriceSchema
);
module.exports = UPDATEAUCTIONRESERVEPRICE;
