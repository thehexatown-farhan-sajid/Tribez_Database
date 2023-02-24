const mongoose = require("mongoose");
const auctioncancelSchema = mongoose.Schema({
  nftAddress: {
    type: String,
    required: true,
  },
  tokenId: {
    type: String,
    required: true,
  },
});
const AUCTIONCANCEL = mongoose.model("AUCTIONCANCEL", auctioncancelSchema);
module.exports = AUCTIONCANCEL;
