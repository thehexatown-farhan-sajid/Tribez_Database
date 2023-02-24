const HexaMarketplace = require("../Abis/HexaMarketplace.sol/HexaMarketplace.json");
const hexaMarketplaceAddress = "0xDE231EB639BE504Da2AF0F0C7dAa672C21a2F926";
const Web3 = require("web3");
const url = "wss://goerli.infura.io/ws/v3/88ea565950b74e9ba7a55114f96e8b64";
const web3 = new Web3(url);
const marketcontract = new web3.eth.Contract(
  HexaMarketplace.abi,
  hexaMarketplaceAddress
);

const buy = require("../models/buy.model");

exports.buyfun = async () => {
  marketcontract.events
    .ItemSold(
      {
        fromBlock: 0,
      },
      (error, event) => {}
    )
    .on("connected", (subscriptionId) => {
      // console.log(subscriptionId);
    })
    .on("data", async (event, error) => {
      const buyExist = await buy.findOne({
        tokenId: event.returnValues.tokenId,
      });
      // console.log("buyExist", buyExist)
      if (!buyExist) {
        const { buyer, nft, pricePerItem, quantity, seller, tokenId } =
          event.returnValues;
        await buy.create({
          buyer,
          nft,
          pricePerItem,
          quantity,
          seller,
          tokenId,
        });
      }
    });
};
