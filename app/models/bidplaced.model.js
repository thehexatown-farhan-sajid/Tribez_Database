const mongoose = require("mongoose");
const bidplacedSchema = mongoose.Schema({
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
const BIDPLACED = mongoose.model("BIDPLACED", bidplacedSchema);
module.exports = BIDPLACED;
