const express = require("express");
const router = express.Router();

const controller = require("../controller/offercancel.controller");

router.post("/api/offercanceldata", controller.offercancel);
router.get("/api/offercancel", controller.offercancelData);
module.exports = router;
