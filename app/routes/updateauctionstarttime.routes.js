const express = require("express");
const router = express.Router();

const controller = require("../controller/updateauctionstarttime.controller");

router.post("/api/updateauctionstarttime", controller.updateauctionstarttime);
router.get(
  "/api/updateauctionstarttimedata",
  controller.updateauctionstarttimeData
);
module.exports = router;
