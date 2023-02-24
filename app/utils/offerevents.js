const HexaMarketplace = require("../Abis/HexaMarketplace.sol/HexaMarketplace.json");
const hexaMarketplaceAddress = "0xDE231EB639BE504Da2AF0F0C7dAa672C21a2F926";
const Web3 = require("web3");
const url = "wss://goerli.infura.io/ws/v3/88ea565950b74e9ba7a55114f96e8b64";
const web3 = new Web3(url);
const marketcontract = new web3.eth.Contract(
  HexaMarketplace.abi,
  hexaMarketplaceAddress
);

const offer = require("../models/offer.model");
const offercancel = require("../models/offercancel.model");

exports.offerfun = async () => {
  marketcontract.events
    .OfferCreated(
      {
        fromBlock: 0,
      },
      (error, event) => {}
    )
    .on("connected", (subscriptionId) => {
      // console.log(subscriptionId);
    })
    .on("data", async (event, error) => {
      const offerExist = await offer.findOne({
        tokenId: event.returnValues.tokenId,
      });
      // console.log("offerExist", offerExist)
      if (!offerExist) {
        const {
          creator,
          deadline,
          nft,
          payToken,
          pricePerItem,
          quantity,
          tokenId,
        } = event.returnValues;
        await offer.create({
          creator,
          deadline,
          nft,
          payToken,
          pricePerItem,
          quantity,
          tokenId,
        });
      }
      const canceldelete = await offercancel.findOne({
        tokenId: event.returnValues.tokenId,
      });
      if (canceldelete) {
        const canceldeleteData = await offer.findOneAndRemove(
          {
            tokenId: canceldelete.tokenId,
          },
          { new: true }
        );
        // console.log("canceldeleteData", canceldeleteData)
      }
    });
};
