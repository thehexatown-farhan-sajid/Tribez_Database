const HexaAuction = require("../Abis/HexaAuction.sol/HexamAuction.json");
const hexaAuctionAddress = "0x2e9a76aFA9FA4C4B0Ebe7aDB76C5dF281e9aead3";
const Web3 = require("web3");
const url = "wss://goerli.infura.io/ws/v3/88ea565950b74e9ba7a55114f96e8b64";
const web3 = new Web3(url);
const auctioncontract = new web3.eth.Contract(
  HexaAuction.abi,
  hexaAuctionAddress
);

const bidplaced = require("../models/bidplaced.model");
const bidrefund = require("../models/bidrefunded.model");
const bidwith = require("../models/bidwithdrawn.model");

exports.bidplacedfun = async () => {
  auctioncontract.events
    .BidPlaced(
      {
        fromBlock: 0,
      },
      (error, event) => {}
    )
    .on("connected", (subscriptionId) => {
    })
    .on("data", async (event, error) => {
      const bidplacedExist = await bidplaced.findOne({
        bidder: event.returnValues.bidder,
      });
      if (!bidplacedExist) {
        const { nftAddress, tokenId, bidder, bid } = event.returnValues;
        await bidplaced.create({ nftAddress, tokenId, bidder, bid });
      }
      const bidrefundExist = await bidrefund.findOne({
        $and: [
          {
            bidder: event.returnValues.bidder,
          },
          { tokenId: event.returnValues.tokenId },
        ],
      });

      if (bidrefundExist) {
        const bidDel = await bidplaced.findOneAndRemove({
          $and: [
            { bidder: bidrefundExist.bidder },
            { tokenId: bidrefundExist.tokenId },
          ],
        });
      }

      const bidwithdrawnExist = await bidwith.findOne({
        $and: [
          {bidder: event.returnValues.bidder},
          {tokenId: event.returnValues.tokenId },
        ],
      });
      if (bidwithdrawnExist) {
        const bidDele = await bidplaced.findOneAndRemove({
          $and: [
            { bidder: bidwithdrawnExist.bidder },
            { tokenId: bidwithdrawnExist.tokenId },
          ],
        });
      }
    });
};
