const express = require("express");
const router = express.Router();

const controller = require("../controller/buy.controller");

router.post("/api/buydata", controller.buy);
router.get("/api/buy", controller.buyData);

module.exports = router;
