const express = require("express");
const router = express.Router();

const controller = require("../controller/bidwithdrawn.controller");

router.post("/api/bidwithdrawndata", controller.bidwithdrawn);
router.get("/api/bidwithdrawn", controller.bidwithdrawnData);

module.exports = router;
