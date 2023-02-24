const mongoose = require("mongoose");
const auctionSchema = mongoose.Schema({
  nftAddress: {
    type: String,
    required: true,
  },
  tokenId: {
    type: String,
    required: true,
  },
});
const AUCTION = mongoose.model("AUCTION", auctionSchema);
module.exports = AUCTION;
