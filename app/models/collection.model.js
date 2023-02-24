const mongoose = require("mongoose");
const collectionSchema = mongoose.Schema({
  collectionName: {
    type: String,
    required: true,
  },
  logoImage: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
    required: true,
  },
  bannerImage: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  blockchain: {
    type: String,
    required: true,
  },
});
const COLLECTION = mongoose.model("COLLECTION", collectionSchema);
module.exports = COLLECTION;
