const express = require("express");
const router = express.Router();

const controller = require("../controller/update.controller");

router.post("/api/updatelist", controller.updateList);
router.get("/api/updatedata", controller.updateData);
module.exports = router;
