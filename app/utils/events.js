const HexaNFTs = require("../Abis/HexaNFTs.sol/HexaNFTs.json");
const hexanftAddress = "0xB366b1758Bb8045c5ea17667Dd82C92e1907925E";
const Web3 = require("web3");
const url = "wss://goerli.infura.io/ws/v3/88ea565950b74e9ba7a55114f96e8b64";
const web3 = new Web3(url);
const nftcontract = new web3.eth.Contract(HexaNFTs.abi, hexanftAddress);

const mint = require("../models/mint.model");
const listing = require("../models/listing.model");

// exports.contract = async () => {
//   const nftcontract = new web3.eth.Contract(HexaNFTs.abi, hexanftAddress);
//   let options = {
//     filter: {
//       value: ['100', '100000']    //Only get events where transfer value was 1000 or 1337
//     },
//     fromBlock: 0, //Number || "earliest" || "pending" || "latest"
//     toBlock: "latest",
//   };
//   console.log("option",options)
//   nftcontract
//     .getPastEvents("Minted", options)
//     .then(async (results) => {
//       // const data = await mint.find()
//       // console.log(results)
//       console.log({ results });
// for (i = 0; i <= results.length; i++) {
//   // console.log(data[i].tokenId)
//   const mintExist = await mint.findOne({
//     tokenId: results[i].returnValues.tokenId,
//   });
//         console.log(mintExist);
//         if (!mintExist) {
// const { tokenId, beneficiary, tokenUri, minter } =
//   results[i].returnValues;
// await mint.create({ tokenId, beneficiary, tokenUri, minter });
//         }
//       }
//     })
//     .catch((err) => err);
//   }
// exports.myf = async() => {
//   console.log("first")
//   const data = await mint.find()
//   console.log(data)
// }

exports.myfunction = async () => {
  // const data = await mint.find()
  // console.log(data)
  // let aa
  nftcontract.events
    .Minted(
      {
        fromBlock: 0,
      },
      (error, event) => {}
    )
    .on("connected", (subscriptionId) => {
      // console.log(subscriptionId);
    })
    .on("data", async (event, error) => {
      // console.log(event.returnValues.tokenUri);
      // aa = event.returnValues.tokenUri;
      // console.log(aa)
      const mintExist = await mint.findOne({
        tokenId: event.returnValues.tokenId,
      });
      // console.log("mintExist", mintExist)
      if (!mintExist) {
        const { tokenId, beneficiary, tokenUri, minter } = event.returnValues;
        await mint.create({ tokenId, beneficiary, tokenUri, minter });
      }
      // }
      const priceupdate = await listing.findOne({
        tokenId: event.returnValues.tokenId,
      });
      if (priceupdate) {
        // console.log("listupdate", listupdate.newPrice)
        const updateprice = await mint.findOneAndUpdate(
          {
            tokenId: event.returnValues.tokenId,
          },
          {
            price: priceupdate.pricePerItem
          },
          { new: true }
        );
        //  console.log("updateprice", updateprice)
      }
    });
};
