const fs = require("fs");
const PROFILECREATE = require("../models/profile.model");

exports.createProfile = async (req, res) => {
  let { username, name, email, links, walletAddress } = req.body;
  let profileimage;
  let coverimage;
  if (req?.files?.profileimage) {
    profileimage = req.files.profileimage[0].filename;
  }
  if (req?.files?.coverimage) {
    coverimage = req.files.coverimage[0].filename;
  }
  const dataExist = await PROFILECREATE.findOne({
    walletAddress: walletAddress,
  });
  console.log(dataExist);
  if (dataExist) {
    const fileName = profileimage;
    const fileName1 = coverimage;
    console.log(`../../uploads/${fileName}`);
    console.log(`../../uploads/${fileName1}`);

    if (req.files) {
      fs.unlink(req.files.profileimage[0].path, (err) => {
        console.log(err);
      });
      fs.unlink(req.files.coverimage[0].path, (err) => {
        console.log(err);
      });
    }

    return res.status(201).send({
      message: "aalready exist",
    });
  }
  const data = await PROFILECREATE.create({
    username,
    name,
    email,
    links,
    walletAddress,
    profileimage,
    coverimage,
  });
  res.status(201).send({
    data,
  });
};

exports.profileData = async (req, res) => {
  const data = await PROFILECREATE.find();
  res.status(200).send({ data });
};
