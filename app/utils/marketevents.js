const HexaMarketplace = require("../Abis/HexaMarketplace.sol/HexaMarketplace.json");
const hexaMarketplaceAddress = "0xDE231EB639BE504Da2AF0F0C7dAa672C21a2F926";
const Web3 = require("web3");
const url = "wss://goerli.infura.io/ws/v3/88ea565950b74e9ba7a55114f96e8b64";
const web3 = new Web3(url);
const marketcontract = new web3.eth.Contract(
  HexaMarketplace.abi,
  hexaMarketplaceAddress
);

const listing = require("../models/listing.model");
const update = require("../models/update.model");
const cancellist = require("../models/cancellist.model");
const buy = require("../models/buy.model");

exports.listingfun = async () => {
  marketcontract.events
    .ItemListed(
      {
        fromBlock: 0,
      },
      (error, event) => {}
    )
    .on("connected", (subscriptionId) => {
      // console.log(subscriptionId);
    })
    .on("data", async (event, error) => {
      const listingExist = await listing.findOne({
        tokenId: event.returnValues.tokenId,
      });
      // console.log("listingExist", listingExist)
      if (!listingExist) {
        const { nft, owner, pricePerItem, quantity, startingTime, tokenId } =
          event.returnValues;
        await listing.create({
          nft,
          owner,
          pricePerItem,
          quantity,
          startingTime,
          tokenId,
        });
      }
      const listupdate = await update.findOne({
        tokenId: event.returnValues.tokenId,
      });
      if (listupdate) {
        // console.log("listupdate", listupdate.newPrice)
        const updateprice = await listing.findOneAndUpdate(
          {
            tokenId: event.returnValues.tokenId,
          },
          {
            pricePerItem: listupdate.newPrice,
          },
          { new: true }
        );
        //  console.log("updateprice", updateprice)
      }
      const listdelete = await cancellist.findOne({
        tokenId: event.returnValues.tokenId,
      });
      if (listdelete) {
        const deleteList = await listing.findOneAndRemove(
          {
            tokenId: listdelete.tokenId,
          },
          { new: true }
        );
        // console.log("deleteList", deleteList)
      }

      const buydelete = await buy.findOne({
        tokenId: event.returnValues.tokenId,
      });
      if (buydelete) {
        const buydeleteList = await listing.findOneAndRemove(
          {
            tokenId: buydelete.tokenId,
          },
          { new: true }
        );
        // console.log("buydeleteList", buydeleteList)
      }
    });
};
