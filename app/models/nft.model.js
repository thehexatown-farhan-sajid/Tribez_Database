const mongoose = require("mongoose");
const nftSchema = mongoose.Schema(
  {
    assetName: {
      type: String,
      required: true,
    },
    assetSymbol: {
      type: String,
      required: true,
    },
    externalLinks: {
      type: String,
    },
    assetDescription: {
      type: String,
      required: true,
    },
    assetRoyalty: {
      type: String,
      required: true,
    },
    assetFile: {
      type: String,
      required: true,
    }
  }
);
const NFT = mongoose.model("NFT", nftSchema);
module.exports = NFT;