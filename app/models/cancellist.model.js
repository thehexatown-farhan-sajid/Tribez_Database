const mongoose = require("mongoose");
const cancellistSchema = mongoose.Schema({
  nft: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  tokenId: {
    type: String,
    required: true,
  },
});
const CANCELLIST = mongoose.model("CANCELLIST", cancellistSchema);
module.exports = CANCELLIST;
