const HexaMarketplace = require("../Abis/HexaMarketplace.sol/HexaMarketplace.json");
const hexaMarketplaceAddress = "0xDE231EB639BE504Da2AF0F0C7dAa672C21a2F926";
const Web3 = require("web3");
const url = "wss://goerli.infura.io/ws/v3/88ea565950b74e9ba7a55114f96e8b64";
const web3 = new Web3(url);
const marketcontract = new web3.eth.Contract(
  HexaMarketplace.abi,
  hexaMarketplaceAddress
);

const update = require("../models/update.model");
const listing = require("../models/listing.model");

exports.updatefun = async () => {
  marketcontract.events
    .ItemUpdated(
      {
        fromBlock: 0,
      },
      (error, event) => {}
    )
    .on("connected", (subscriptionId) => {
      // console.log(subscriptionId);
    })
    .on("data", async (event, error) => {
      const updateExist = await update.findOne({
        tokenId: event.returnValues.tokenId,
      });
      if (!updateExist) {
        const { newPrice, nft, owner, tokenId } = event.returnValues;
        await update.create({ newPrice, nft, owner, tokenId });
      }
      const updateprice = await listing.findOneAndUpdate(
        {
          tokenId: event.returnValues.tokenId,
        },
        {
          pricePerItem: event.returnValues.newPrice,
        },
        { new: true }
      );
      // console.log("updateprice", updateprice)
      
    });
};
