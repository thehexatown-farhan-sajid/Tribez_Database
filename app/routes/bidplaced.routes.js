const express = require("express");
const router = express.Router();

const controller = require("../controller/bidplaced.controller");

router.post("/api/bidplaceddata", controller.bidplaced);
router.get("/api/bidplaced", controller.bidplacedData);

module.exports = router;
