const express = require("express");
const router = express.Router();

const controller = require("../controller/updateauctionendtime.controller");

router.post("/api/updateauctionendtime", controller.updateauctionendtime);
router.get(
  "/api/updateauctionendtimedata",
  controller.updateauctionendtimeData
);
module.exports = router;
