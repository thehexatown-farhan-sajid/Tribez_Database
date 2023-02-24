const mongoose = require("mongoose");
const updateauctionstarttimeSchema = mongoose.Schema({
  nftAddress: {
    type: String,
    required: true,
  },
  tokenId: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
});
const UPDATEAUCTIONSTARTTIME = mongoose.model(
  "UPDATEAUCTIONSTARTTIME",
  updateauctionstarttimeSchema
);
module.exports = UPDATEAUCTIONSTARTTIME;
