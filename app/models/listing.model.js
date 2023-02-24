const mongoose = require("mongoose");
const listingSchema = mongoose.Schema({
  nft: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  pricePerItem: {
    type: String,
  },
  quantity: {
    type: String,
    required: true,
  },
  startingTime: {
    type: String,
    required: true,
  },
  tokenId: {
    type: String,
    required: true,
  },
});
const LISTING = mongoose.model("LISTING", listingSchema);
module.exports = LISTING;
