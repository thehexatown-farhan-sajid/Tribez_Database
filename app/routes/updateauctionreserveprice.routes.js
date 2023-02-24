const express = require("express");
const router = express.Router();

const controller = require("../controller/updateauctionreserveprice.controller");

router.post(
  "/api/updateauctionreserveprice",
  controller.updateauctionreserveprice
);
router.get(
  "/api/updateauctionreservepricedata",
  controller.updateauctionreservepriceData
);
module.exports = router;
