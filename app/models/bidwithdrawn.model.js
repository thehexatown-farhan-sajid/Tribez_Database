const mongoose = require("mongoose");
const bidwithdrawnSchema = mongoose.Schema({
  nftAddress: {
    type: String,
    required: true,
  },
  tokenId: {
    type: String,
    required: true,
  },
  bidder: {
    type: String,
    required: true,
  },
  bid: {
    type: String,
    required: true,
  },
});
const BIDWITHDRAWN = mongoose.model("BIDWITHDRAWN", bidwithdrawnSchema);
module.exports = BIDWITHDRAWN;
