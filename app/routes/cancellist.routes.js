const express = require("express");
const router = express.Router();

const controller = require("../controller/cancellist.controller");

router.post("/api/cancellistingdata", controller.cancellist);
router.get("/api/cancellisting", controller.cancelData);
module.exports = router;
