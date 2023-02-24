const mongoose = require("mongoose");
const offerSchema = mongoose.Schema({
  creator: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  nft: {
    type: String,
  },
  payToken: {
    type: String,
    required: true,
  },
  pricePerItem: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  tokenId: {
    type: String,
    required: true,
  },
});
const OFFER = mongoose.model("OFFER", offerSchema);
module.exports = OFFER;
