import React from "react"
import { Button } from "@material-tailwind/react"
// import { FaHome, FaShare, FaUser } from "react-icons/fa"
import { HomeOutlined } from "@mui/icons-material"
import LiveChat from "./LiveChat"
import LiveItemCard from "./LiveItemCard"
import SuggestedHost from "./SuggestedHost"
import VideoStream from "./VideoStream"

const LiveSellingPage = () => {
  return (
    <div className="liveSellingContainer flex flex-row items-center justify-center gap-2">
      <div className="liveSellingOptions flex flex-col w-[17vw] h-[85vh] p-5 gap-4 bg-slate-600">
        <div className="topOptions flex flex-col gap-5 py-3">
          <span className="optionBtn flex flex-row items-center gap-5 ">
            <HomeOutlined /> For You
          </span>
          <span className="optionBtn flex flex-row items-center gap-5">
            <HomeOutlined /> Following
          </span>
          <span className="optionBtn flex flex-row items-center gap-5">
            <HomeOutlined /> LIVE
          </span>
        </div>
        <hr />
        <div className="middleLiveOptions flex flex-col py-3 gap-3">
          <span className="loginDiv text-sm opacity-80">
            Login to follow creators, like and comment.
          </span>
          <Button className="loginOptionBtn bg-transparent border-[2px] text-sm border-red-600 text-red-500">
            Log in
          </Button>
        </div>
        <hr />
        <div className="bottomSuggestedHostsDiv flex flex-col gap-5 py-2 px-2">
          <div className="suggestedHostsHeader w-full flex flex-row justify-between items-center">
            <span className="suggestedHosts font-semibold ">
              Suggested Hosts
            </span>
            <span className="seeAllLiveSellers py-1">See all</span>
          </div>
          {/* slice to get only the fisrt five or top five  */}
          {/* then implemete scroll for these */}
          <SuggestedHost />
          <SuggestedHost />
          <SuggestedHost />
          <SuggestedHost />
        </div>
      </div>
      {/*  */}
      <div className="liveVideoStreamDiv w-[60vw]  h-[85vh] bg-emerald-900">
        <div className="liveContainerHeader flex flex-row border border-gray-500 justify-between p-2 h-1/6">
          <div className="div flex flex-col justify-center gap-2 w-full">
            <div className="curentHostInfo flex flex-row gap-3 items-center">
              <img
                src="./images/img/Hooligan.png"
                alt=""
                className="cureentHostShopImg w-10 h-10 border-[2px] border-red-500 overflow-hidden rounded-2xl"
              />
              <div className="hostTitleAndDetails flex flex-col">
                <span className="hostShopTitle font-bold">BenaWaLines</span>
                <span className="hostName text-sm">Benard Njuguna</span>
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
              <div className="hostCurentViewers flex flex-row items-center gap-1 px-3">
                <FaUser /> 78
              </div>
            </div>
            <span className="currentHostPromotionalMessage flex items-center justify-center font-semibold w-full">
              Hey Guys, everything is 20% off...hurry and buy while stock
              lasts!!!
            </span>
          </div>
          <div className="currentHostOptionsDiv p-5 flex flex-row gap-3">
            <Button className="shareLive px-5 bg-transparent border">
              <FaShare />
            </Button>
            <Button className="moreOptions px-4 bg-transparent border">
              ...
            </Button>
            <Button className="followBtn px-5">Follow</Button>
          </div>
        </div>
        {/* header ends */}
        <div className="videoStreamDiv flex flex-row h-5/6">
          <div className="videoStreamItem w-3/5 bg-slate-500 relative">
            <div className="liveAndStockTag flex flex-col absolute w-fit top-2 right-3 ">
              <span className="live right-0 flex flex-row items-end justify-end font-semibold text-red-500 text-lg">
                Live
              </span>
              <span className="stockKeeper font-semibold opacity-80">
                34 Items Left
              </span>
            </div>
            {/* <VideoStream /> */}
          </div>
          <div className="itemOnDisplayDiv w-2/5 bg-emerald-700">
            {/* <LiveItemCard /> */}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="liveChatDiv w-[20vw] max-h-[85vh] h-[85vh] bg-indigo-900">
        {/* <LiveChat /> */}
      </div>
    </div>
  )
}

export default LiveSellingPage
