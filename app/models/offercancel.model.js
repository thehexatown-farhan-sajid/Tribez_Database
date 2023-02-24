const mongoose = require("mongoose");
const offercancelSchema = mongoose.Schema({
  creator: {
    type: String,
    required: true,
  },
  nft: {
    type: String,
  },
  tokenId: {
    type: String,
    required: true,
  },
});
const OFFERCANCEL = mongoose.model("OFFERCANCEL", offercancelSchema);
module.exports = OFFERCANCEL;
