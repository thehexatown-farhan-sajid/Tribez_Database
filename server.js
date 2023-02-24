const express = require("express");
const multer  = require('multer');
const path = require('path')
const upload = multer();
const cors = require("cors");
var bodyParser = require('body-parser');
// const bodyparser = require('body-parser')

const PORT = process.env.PORT || 5000;
const app = express();

const connectDB = require("./app/config/config");
const updateEvent = require("./app/utils/updateevents");
const auctionEvent = require("./app/utils/auctionevent");
const auctioncancelEvent = require("./app/utils/auctioncancelevent");
const updateauctionendtimeEvent = require("./app/utils/updateauctionendtimeevent");
const updateauctionstarttimeEvent = require("./app/utils/updateauctionstarttimeevent");
const updateauctionreservepriceEvent = require("./app/utils/updateauctionreservepriceevent");
const auctionresultEvent = require("./app/utils/auctionresultevent");
const bidplacedEvent = require("./app/utils/bidplacedevent");
const bidrefundedEvent = require("./app/utils/bidrefundedevent");
const bidwithdrawnEvent = require("./app/utils/bidwithdrawnevent");
const offerEvent = require("./app/utils/offerevents");
const offerCancelEvent = require("./app/utils/offercancelevents");
const nftContractEvent = require("./app/utils/events");
const cancelListEvent = require("./app/utils/cancellistevents");
const buyEvents = require("./app/utils/buyevents");
const marketContractEvent = require("./app/utils/marketevents");
const ListingRoute = require("./app/routes/listing.routes");
const AuthRouter = require("./app/routes/nft.routes");
const UpdateRouter = require("./app/routes/update.routes");
const CancelListRouter = require("./app/routes/cancellist.routes");
const CreateProfileRouter = require("./app/routes/profile.routes")
const OfferCancelRouter = require("./app/routes/offercancel.routes");
const OfferRouter = require("./app/routes/offer.routes");
const AuctionRouter = require("./app/routes/auction.routes");
const UpdateAuctionEndTimeRouter = require("./app/routes/updateauctionendtime.routes");
const UpdateAuctionStartTimeRouter = require("./app/routes/updateauctionstarttime.routes");
const UpdateAuctionReservePriceRouter = require("./app/routes/updateauctionreserveprice.routes");
const AuctionCancelRouter = require("./app/routes/auctioncancel.routes");
const AuctionResultRouter = require("./app/routes/auctionresult.routes");
const BidPlacedRouter = require("./app/routes/bidplaced.routes");
const BidRefundedRouter = require("./app/routes/bidrefunded.routes");
const BidWithdrawnRouter = require("./app/routes/bidwithdrawn.routes");
const BuyRouter = require("./app/routes/buy.routes");
const CollectionRoute = require("./app/routes/collection.routes");
const MintRoute = require("./app/routes/mint.routes");

const corsOptions = {
  origin: "*",
};
// routes
connectDB();
cancelListEvent.cancelListFun();
nftContractEvent.myfunction();
updateEvent.updatefun();
marketContractEvent.listingfun();
updateEvent.updatefun();
buyEvents.buyfun();
offerEvent.offerfun();
offerCancelEvent.offercancelfun();
auctionEvent.auctionfun();
auctionresultEvent.auctionresultfun();
bidplacedEvent.bidplacedfun();
bidrefundedEvent.bidrefundedfun();
bidwithdrawnEvent.bidwithdrawnfun();
auctioncancelEvent.auctioncancelfun();
updateauctionendtimeEvent.updateauctionendtimeeventfun();
updateauctionstarttimeEvent.updateauctionstarttimeeventfun();
updateauctionreservepriceEvent.updateauctionreservepricefun();
app.use(cors(corsOptions));
app.use(express.static('public'));



app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/uploads', express.static(__dirname + '/uploads'));
// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({extended: true}))
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to hexa application." });
});
app.use("/", AuthRouter);
app.use("/", CollectionRoute);
app.use("/", MintRoute);
app.use("/", ListingRoute);
app.use("/", BuyRouter);
app.use("/", UpdateRouter);
app.use("/", OfferRouter);
app.use("/", CancelListRouter);
app.use("/", OfferCancelRouter);
app.use("/", AuctionRouter);
app.use("/", AuctionResultRouter);
app.use("/", BidPlacedRouter);
app.use("/", BidRefundedRouter);
app.use("/", BidWithdrawnRouter);
app.use("/", AuctionCancelRouter);
app.use("/", UpdateAuctionEndTimeRouter);
app.use("/", UpdateAuctionStartTimeRouter);
app.use("/", UpdateAuctionReservePriceRouter);
app.use("/", CreateProfileRouter);

app.listen(PORT, () => {
  console.log("Linting port 8000");
});
