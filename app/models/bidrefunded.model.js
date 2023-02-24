const mongoose = require("mongoose");
const bidrefundedSchema = mongoose.Schema({
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
const BIDREFUNDED = mongoose.model("BIDREFUNDED", bidrefundedSchema);
module.exports = BIDREFUNDED;
