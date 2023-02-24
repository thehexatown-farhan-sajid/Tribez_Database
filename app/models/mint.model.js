const mongoose = require("mongoose");
const mintSchema = mongoose.Schema({
  tokenId: {
    type: String,
    required: true,
  },
  beneficiary: {
    type: String,
    required: true,
  },
  tokenUri: {
    type: String,
  },
  minter: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    default:"0",
    required: true,
  },
});
const MINT = mongoose.model("MINT", mintSchema);
module.exports = MINT;
