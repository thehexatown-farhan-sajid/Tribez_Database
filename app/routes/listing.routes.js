const express = require("express");
const router = express.Router();

const controller = require("../controller/listing.controller");

router.post("/api/listingdata", controller.listingnft);
router.get("/api/listing", controller.allAccess);
module.exports = router;
