const express = require("express");
const router = express.Router();

const controller = require("../controller/auctionresult.controller");

router.post("/api/auctionresultdata", controller.auctionresult);
router.get("/api/auctionresult", controller.auctionresultData);

module.exports = router;
