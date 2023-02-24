const express = require("express");
const router = express.Router();

const controller = require("../controller/mint.controller");

router.post("/api/mintdata", controller.mintnft);
router.get("/api/mint", controller.allAccess);
module.exports = router;
