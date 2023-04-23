import React from "react";
import SideNav from "../../common/SideNav";
import LiveChat from "../../../components/liveSelling/LiveChat";
import { Button } from "@material-tailwind/react";
import VideoStream from "../../../components/liveSelling/VideoStream";
import { FaArrowDown, FaUser } from "react-icons/fa";
import AdminLiveItemCard from "../components/liveSellingCards/AdminLiveItemCard";

const BroadCast = () => {
  return (
    <div className="adminPage flex flex-row justify-between">
      <div className=" adminSideNav sticky top-20 border flex justify-center h-[80vh] w-[15vw]">
        <SideNav />
      </div>
      <div className="adminMain w-[85vw] bg-green-900 float-right right-0 margin-auto">
        <div className="brodcastContainer flex flex-row ">
          <div className="videoBroadCastDiv flex flex-col w-4/6  h-[85vh]">
            <div className="videoBroadcastHeader w-full border p-3  flex flex-row justify-between items-center">
              <div className="liveTypeOptionsContainer">
                <div className="liveTypeOptions flex gap-2 text-sm">
                  {/* here i'll use a dropdown */}
                  <Button className="px-2 h-8 flex flex-row items-center gap-1">
                    Select Live Sell Type <FaArrowDown />
                  </Button>
                  <Button className="px-2 h-8 flex flex-row items-center gap-1">
                    Select Payment Type <FaArrowDown />
                  </Button>
                  <Button className="px-2 h-8 flex flex-row items-center gap-1">
                    Add Payment Number <FaArrowDown />
                  </Button>
                  <Button className="selectItemBtn flex flex-row items-center gap-2 px-2 h-8">
                    Select item <FaArrowDown />
                  </Button>
                </div>
                <div className="setPromoMessageDiv flex flex-row gap-3 py-2 justify-center items-center w-full">
                  <input
                    type="text"
                    placeholder="Enter PromotionalMessage..."
                    className="promoMsgInput w-3/5 rounded-lg text-sm text-gray-600 border px-3 border-blue-900"
                  />
                  <Button className="sendPromoMessageBtn px-4 h-7 flex flex-row items-center justify-center text-sm">
                    Send
                  </Button>
                </div>
              </div>
              <Button className="startBroadcastBtn px-3 flex flex-row items-center justify-center h-11">
                Start BroadCast
                {/* EndBroadCast same button but red */}
                {/* we can limit the number of minutes one takes so that they pay for more after a trial */}
              </Button>
            </div>
            {/*  */}
            <div className="flex flex-row">
              <div className="broadCastViewAsSeen relative w-3/5">
                <VideoStream />
                <div className="liveAndStockTag flex flex-col absolute w-fit top-2 right-3 ">
                  <span className="live right-0 flex flex-row items-end justify-end font-semibold text-red-500 text-lg">
                    You are Live
                  </span>
                  <span className="stockKeeper font-semibold opacity-80">
                    34 Items Left
                  </span>
                </div>

                <span className="stockKeeper flex flex-row absolute top-3 left-2 items-center gap-2 font-semibold opacity-80">
                  <FaUser /> 34
                  {/* thus should blink */}
                </span>

                {/* <VideoBroadCast /> */}
              </div>
              {/*  */}
              <div className="setItemOnSaleDetailsDiv w-2/5 bg-lime-900">
                <AdminLiveItemCard />
              </div>
              {/*  */}
            </div>
          </div>
          {/*  */}
          <div className="liveChatView bg-green-800 w-2/6  max-h-[85vh] h-[85vh]">
            {/* here well'set that since the seller is live login button is removed and also make the comment input optional for the seller */}
            <LiveChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadCast;
