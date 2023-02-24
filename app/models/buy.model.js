const mongoose = require("mongoose");
const buySchema = mongoose.Schema({
  buyer: {
    type: String,
    required: true,
  },
  nft: {
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
  seller: {
    type: String,
    required: true,
  },
  tokenId: {
    type: String,
    required: true,
  },
});
const BUY = mongoose.model("BUY", buySchema);
module.exports = BUY;
