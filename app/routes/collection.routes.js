const express = require("express");
const router = express.Router();

const controller = require("../controller/collection.controller");

router.post("/api/collectiondata", controller.collection);
router.get("/api/collection", controller.allData);

module.exports = router;
