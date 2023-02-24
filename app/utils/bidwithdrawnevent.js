const HexaAuction = require("../Abis/HexaAuction.sol/HexamAuction.json");
const hexaAuctionAddress = "0x2e9a76aFA9FA4C4B0Ebe7aDB76C5dF281e9aead3";
const Web3 = require("web3");
const url = "wss://goerli.infura.io/ws/v3/88ea565950b74e9ba7a55114f96e8b64";
const web3 = new Web3(url);
const auctioncontract = new web3.eth.Contract(
  HexaAuction.abi,
  hexaAuctionAddress
);

const bidwithdrawn = require("../models/bidwithdrawn.model");

exports.bidwithdrawnfun = async () => {
  auctioncontract.events
    .BidWithdrawn(
      {
        fromBlock: 0,
      },
      (error, event) => {}
    )
    .on("connected", (subscriptionId) => {
      // console.log(subscriptionId);
    })
    .on("data", async (event, error) => {
      const bidwithdrawnExist = await bidwithdrawn.findOne({
        tokenId: event.returnValues.tokenId,
      });
      // console.log("bidwithdrawnExist", bidwithdrawnExist)
      if (!bidwithdrawnExist) {
        const { nftAddress, tokenId, bidder, bid } = event.returnValues;
        await bidwithdrawn.create({ nftAddress, tokenId, bidder, bid });
      }
    });
};
