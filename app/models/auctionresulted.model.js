const mongoose = require("mongoose");
const auctionresultSchema = mongoose.Schema({
  oldOwner: {
    type: String,
    required: true,
  },
  nftAddress: {
    type: String,
    required: true,
  },
  tokenId: {
    type: String,
    required: true,
  },
  winner: {
    type: String,
    required: true,
  },
  winningBid: {
    type: String,
    required: true,
  },
});
const AUCTIONRESULT = mongoose.model("AUCTIONRESULT", auctionresultSchema);
module.exports = AUCTIONRESULT;
