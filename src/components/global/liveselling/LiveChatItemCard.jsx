import React from "react"

const LiveChatItemCard = ({ info }) => {
  const { username, comment, createdAt, profileImage } = info
  return (
    <div className="chatItem flex flex-row gap-3 items-center w-full">
      <img
        src={profileImage || "../../img/Hooligan.png"}
        alt=""
        className="customerImg rounded-full overflow-hidden border w-[50px] h-[50px] "
      />
      <div className="flex flex-col flex-1">
        <span className="customerNameAndDate flex flex-row justify-between pr-5 text-[14px]">
          <span className="username font-semibold opacity-90">
            {username || "James98"}
          </span>
          <span className="date text-sm italic opacity-80">
            {new Date(createdAt).toLocaleDateString() || "23 / 3 / 2023"}
          </span>
        </span>
        <span className="customerComment flex-1 h-18 text-[14px] opacity-90">
          {comment ||
            "pesa ngapi io yasa ngapi io yasa ngapi io yasa ngapio yasa"}
        </span>
      </div>
    </div>
  )
}

export default LiveChatItemCard
