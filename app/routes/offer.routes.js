const express = require("express");
const router = express.Router();

const controller = require("../controller/offer.controller");

router.post("/api/offerdata", controller.offer);
router.get("/api/offer", controller.offerdata);
module.exports = router;
