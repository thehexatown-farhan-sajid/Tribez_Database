const HexaMarketplace = require("../Abis/HexaMarketplace.sol/HexaMarketplace.json");
const hexaMarketplaceAddress = "0xDE231EB639BE504Da2AF0F0C7dAa672C21a2F926";
const Web3 = require("web3");
const url = "wss://goerli.infura.io/ws/v3/88ea565950b74e9ba7a55114f96e8b64";
const web3 = new Web3(url);
const marketcontract = new web3.eth.Contract(
  HexaMarketplace.abi,
  hexaMarketplaceAddress
);

const cancellist = require("../models/cancellist.model");
const listing = require("../models/listing.model");
exports.cancelListFun = async () => {
  marketcontract.events
    .ItemCanceled(
      {
        fromBlock: 0,
      },
      (error, event) => {}
    )
    .on("connected", (subscriptionId) => {
      // console.log(subscriptionId);
    })
    .on("data", async (event, error) => {
      const cancellistExist = await cancellist.findOne({
        tokenId: event.returnValues.tokenId,
      });
      // const deleteList = await listing.findOneAndRemove({
      //   tokenId: event.returnValues.tokenId,
      // },{new:true});
      // console.log("deleteList", deleteList)
      if (!cancellistExist) {
        const { nft, owner, tokenId } = event.returnValues;
        await cancellist.create({ nft, owner, tokenId });
      }
    });
};
