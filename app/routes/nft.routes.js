const express = require("express");
const router = express.Router();

const controller = require("../controller/nft.controller");

router.post("/api/nftdata", controller.nftform);
router.get("/api/nft", controller.allAccess);
module.exports = router;
