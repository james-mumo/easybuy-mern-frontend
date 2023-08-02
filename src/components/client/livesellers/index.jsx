import React from "react"
import { Button } from "@material-tailwind/react"
import SuggestedHost from "../../global/liveselling/SuggestedHost"
import VideoStream from "../../global/liveselling/VideoStream"
import LiveItemCard from "../../global/liveselling/LiveItemCard"
import LiveChat from "../../global/liveselling/LiveChat"
import AccountBoxRounded from "@mui/icons-material/AccountBoxRounded"

const LiveSellingPage = () => {
  return (
    <div className="liveSellingContainer flex flex-row mt-2 h-[90vh] items-center justify-center gap-2 p-2">
      <div className="liveSellingOptions flex flex-col w-[17vw] max-h-[90vh] p-2 gap-2 rounded-md normalbg">
        <div className="topOptions flex flex-col gap-5 opacity-90 font-semibold mb-2">
          <span className="optionBtn cursor-pointer flex flex-row items-center gap-5 ">
            🏠 For You
          </span>
          <span className="optionBtn cursor-pointer flex flex-row items-center gap-5">
            🏠 Following
          </span>
          <span className="optionBtn cursor-pointer flex flex-row items-center gap-5">
            🏠 Live
          </span>
        </div>
        <hr />
        <div className="middleLiveOptions flex flex-col py-3 gap-3">
          <span className="loginDiv text-sm opacity-80">
            Login to follow creators, like videos and view comments.
          </span>
          <Button className="loginOptionBtn bg-transparent border-[2px] text-sm border-red-600 text-red-500">
            Log in
          </Button>
        </div>
        <hr />
        <div className="bottomSuggestedHostsDiv overflow-y-scroll flex flex-col gap-3 pb-3 px-2">
          <div className="suggestedHostsHeader w-full flex flex-row sticky normalbg shadow-lg top-0 justify-between items-center opacity-80">
            <span className="suggestedHosts font-semibold cursor-pointer">
              Suggested Hosts
            </span>
            <span className="seeAllLiveSellers py-1 hover:underline cursor-pointer">
              See all
            </span>
          </div>
          <SuggestedHost />
          <SuggestedHost />
          <SuggestedHost />
          <SuggestedHost />
          <SuggestedHost />
          <SuggestedHost />
          <SuggestedHost />
          <SuggestedHost />
          <SuggestedHost />
          <SuggestedHost />
          <SuggestedHost />
          <SuggestedHost />
          <SuggestedHost />
        </div>
      </div>
      {/*  */}
      <div className="liveVideoStreamDiv w-[60vw]  min-h-[90vh] normalbg">
        <div className="liveContainerHeader flex flex-row border border-gray-800 rounded-md justify-between p-2 h-1/6">
          <div className="div flex flex-col justify-center gap-2 w-full">
            <div className="curentHostInfo flex flex-row gap-3 items-center">
              <img
                src="https://res.cloudinary.com/djv535hkn/image/upload/v1682279341/easybuy/Hooligan_cqzakd.png"
                alt=""
                className="cureentHostShopImg w-10 h-10 border-[2px] border-gray-700 overflow-hidden rounded-2xl"
              />
              <div className="hostTitleAndDetails flex flex-col opacity-90">
                <span className="hostShopTitle font-bold">JamesMumo</span>
                <span className="hostName text-sm">James Mumo</span>
              </div>
              <div className="hostSellDetailsHeader flex flex-col">
                <span className="typeOfLive text-md font-semibold">
                  Sale!!!
                </span>
                <div className="flex flex-row h-18 gap-2">
                  <span className="paymentOption">Mpesa</span>
                  <span className="hostPaymentNumberorDetails">0743597456</span>
                </div>
              </div>
              <div className="text-[24px] border h-max flex flex-row items-center gap-1 px-3">
                <AccountBoxRounded className="text-[38px]" /> 78
              </div>
            </div>
            <span className="currentHostPromotionalMessage opacity-90 flex items-center justify-start pl-3 font-semibold w-full">
              Hey Guys, everything is 20% off...hurry and buy while stock
              lasts!!!
            </span>
          </div>
          <div className="currentHostOptionsDiv p-5 flex flex-row gap-3">
            <Button className="shareLive px-5 bg-transparent border opacity-95">
              ShareIcon
            </Button>
            <Button className="moreOptions px-4 bg-transparent border">
              ...
            </Button>
            <Button className="followBtn px-5">Follow</Button>
          </div>
        </div>
        {/* header ends */}
        <div className="videoStreamDiv flex flex-row h-5/6 ">
          <div className="videoStreamItem w-3/5 bg-slate-500 relative">
            <div className="liveAndStockTag flex flex-col absolute w-fit top-2 right-3 ">
              <span className="live right-0 flex flex-row items-end justify-end font-semibold text-red-500 text-lg">
                Live
              </span>
              <span className="stockKeeper font-semibold opacity-80">
                34 Items Left
              </span>
            </div>
            <VideoStream />
          </div>
          <div className="itemOnDisplayDiv w-2/5 bg-emerald-700 flex items-center ">
            <LiveItemCard />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="liveChatDiv w-[20vw] h-[90vh] overflow-auto">
        <LiveChat />
      </div>
    </div>
  )
}

export default LiveSellingPage
