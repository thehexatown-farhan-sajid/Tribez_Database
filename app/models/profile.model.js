const mongoose = require("mongoose");
const profilecreateSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require:true,
    lowercase: true,
  },
  links: {
    type: String,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
  },
  profileimage:
    {
      type: String,
    },
  coverimage:
    {
      type: String,
    },
});
const PROFILECREATE = mongoose.model("PROFILECREATE", profilecreateSchema);
module.exports = PROFILECREATE;
