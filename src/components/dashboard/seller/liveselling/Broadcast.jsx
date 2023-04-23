import React, { useState } from "react"
import { Button } from "@material-tailwind/react"
import { FaArrowDown, FaUser } from "react-icons/fa"
import VideoStream from "../../../global/liveselling/VideoStream"
import AdminLiveItemCard from "../../../global/cards/AdminLiveItemCard"
// import LiveChat from "../../../global/liveSelling/LiveChat"

const Broadcast = () => {
  const [remotePeerId, setRemotePeerId] = useState("")

  const handleIdChange = (event) => {
    setRemotePeerId(event.target.value)
  }

  const handleCall = (event) => {
    event.preventDefault()
    console.log(`Calling remote peer ${remotePeerId}`)
  }

  return (
    <div>
      <div className="main">
        <div className="adminMain w-full bg-transparent py-3">
          <div className="brodcastContainer flex flex-row gap-3">
            <div className="videoBroadCastDiv flex flex-col w-4/6  h-[85vh]">
              <div className="videoBroadcastHeader w-full rounded-md p-3 dashcolor flex flex-row justify-between items-center">
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
              <div className="flex flex-row dashcolor mt-3 rounded-md overflow-hidden">
                <div className="broadCastViewAsSeen relative w-3/5 border-gray-700 border rounded-md">
                  {remotePeerId && <VideoStream remotePeerId={remotePeerId} />}
                  <VideoStream />
                  {/*  */}
                  <form onSubmit={handleCall} className="absolute bottom-2 flex gap-3 ">
                    <label>
                      Remote peer ID:
                      <input
                        className=" text-gray-700 font-semibold"
                        type="text"
                        value={remotePeerId}
                        onChange={handleIdChange}
                      />
                    </label>
                    <button type="submit" className=" p-1 px-4 rounded-sm normalbg">Call</button>
                  </form>
                  {/*  */}
                  {/*  */}
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
                <div className="setItemOnSaleDetailsDiv w-2/5">
                  <AdminLiveItemCard />
                </div>
                {/*  */}
              </div>
            </div>
            {/*  */}
            <div className="liveChatView dashcolor flex-1 overflow-scroll max-h-[85vh] rounded-md border">
              {/* here well'set that since the seller is live login button is removed and also make the comment input optional for the seller */}
              <LiveChat />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const LiveChat = () => {
  return (
    <div className="liveChatDiv flex flex-col gap-3 px-4 dashcolor">
      <div className="chatHeader z-10 shadow-lg shadow-teal-900 sticky top-0 dashcolor w-full flex flex-row px-3 items-center py-2 justify-between">
        <Button className="closeSearchBtn flex justify-center items-center w-14">
          👉
        </Button>
        <span className="liveChatTitle opacity-90 text-lg font-bold px-5">
          Live Chat
        </span>
      </div>
      <hr />
      <div className="liveChatBody flex flex-col gap-3">
        <LiveChatItemCard />
        <LiveChatItemCard />
        <LiveChatItemCard />
        <LiveChatItemCard />
        <LiveChatItemCard />
        <LiveChatItemCard />
        <LiveChatItemCard />
        <LiveChatItemCard />
      </div>
      <hr />

      <input
        type="text"
        placeholder="Enter comment...."
        className="chatCommentEntry px-3 py-1 rounded-md sticky mt-3 bottom-3 focus:outline-none text-gray-600 "
      />
    </div>
  )
}

const LiveChatItemCard = () => {
  return (
    <div className="chatItem flex flex-row gap-3 px-2 justify-between items-center">
      <img
        src="../../img/Hooligan.png"
        alt=""
        className="customerImg p-0 flex flex-row justify-center items-center overflow-hidden border rounded-[100%] w-[70px]  h-[70px] "
      />
      <div className="flex flex-col flex-1 ">
        <span className="customerNameAndDate flex flex-row justify-between pr-5">
          <span className="username font-semibold opacity-90">James98</span>
          <span className="date text-sm italic opacity-80">23/3/2023</span>
        </span>
        <span className="customerComment  overflow-y-auto h-14">
          pesa ngapi io yasa ngapi io yasa ngayapi io yasa ngapi io yasa ngapi
          io ya
        </span>
      </div>
    </div>
  )
}

export default Broadcast
