const mongoose = require("mongoose");
const updateauctionendtimeSchema = mongoose.Schema({
  nftAddress: {
    type: String,
    required: true,
  },
  tokenId: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
});
const UPDATEAUCTIONENDTIME = mongoose.model(
  "UPDATEAUCTIONENDTIME",
  updateauctionendtimeSchema
);
module.exports = UPDATEAUCTIONENDTIME;
