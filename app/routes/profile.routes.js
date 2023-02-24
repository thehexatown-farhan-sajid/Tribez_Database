const express = require("express");
const router = express.Router();
const { upload } = require("../midleware/fileupload");

const controller = require("../controller/profile.controller");

router.post(
  "/api/createprofile",

  upload.fields([
    {
      name: "profileimage",
      maxCount: 1,
    },
    {
      name: "coverimage",
      maxCount: 1,
    },
  ]),
  controller.createProfile
);
router.get("/api/profiledata", controller.profileData);

module.exports = router;
