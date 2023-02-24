const express = require("express");
const router = express.Router();

const controller = require("../controller/bidrefunded.controller");

router.post("/api/bidrefundeddata", controller.bidrefunded);
router.get("/api/bidrefunded", controller.bidrefundedData);

module.exports = router;
