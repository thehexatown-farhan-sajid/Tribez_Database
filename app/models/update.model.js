const mongoose = require("mongoose");
const updateSchema = mongoose.Schema({
  newPrice: {
    type: String,
    required: true,
  },
  nft: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
  },
  tokenId: {
    type: String,
    required: true,
  },
});
const UPDATE = mongoose.model("UPDATE", updateSchema);
module.exports = UPDATE;
