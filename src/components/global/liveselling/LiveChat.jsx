import { Button } from "@material-tailwind/react"
import React from "react"
import LiveChatItemCard from "./LiveChatItemCard"
import { userInfo } from "../../../lib/isAuth"

const LiveChat = () => {
  return (
    <div className="liveChatDiv flex flex-col gap-3 px-4 pb-3 normalbg rounded-md border-gray-700 border h-full">
      <div className="chatHeader w-full sticky top-0 flex flex-row px-3 items-center py-2 justify-between">
        <Button className="closeSearchBtn flex justify-center items-center w-14">
          👉
        </Button>
        <span className="liveChatTitle font-bold px-5">Live Chat</span>
      </div>
      <hr />
      <div className="liveChatBody flex flex-col gap-3 h-full overflow-y-scroll">
        {userInfo ? (
          <>
            <LiveChatItemCard info={userInfo} />
            <LiveChatItemCard info={userInfo} />
            <LiveChatItemCard info={userInfo} />
            <LiveChatItemCard info={userInfo} />
            <LiveChatItemCard info={userInfo} />
            <LiveChatItemCard info={userInfo} />
            <LiveChatItemCard info={userInfo} />
            <LiveChatItemCard info={userInfo} />
            <LiveChatItemCard info={userInfo} />
            <LiveChatItemCard info={userInfo} />
            <LiveChatItemCard info={userInfo} />
          </>
        ) : (
          <>jh</>
        )}
      </div>
      <hr />

      <input
        type="text"
        placeholder="Enter comment...."
        className="chatCommentEntry px-3 py-1 rounded-md "
      />
      {/* if one is not logged they shudl esee this button below */}
      <span className="alert p-0 h-3 w-full flex justify-center text-sm">
        Login for full experince
      </span>
      <Button className="chatLoginBtn ">Log In</Button>
    </div>
  )
}

export default LiveChat
