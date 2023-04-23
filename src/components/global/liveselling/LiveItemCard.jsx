import { Button } from "@material-tailwind/react"
import React from "react"
import { NavLink } from "react-router-dom"

const LiveItemCard = () => {
  return (
    <div className="liveItemCardDiv h-full w-full flex flex-col overflow-hidden border-gray-700 border rounded-md mt-1">
      <div className="liveItemHeader flex flex-row justify-around p-4 opacity-90 font-semibold ">
        <span className="category">Kid's Clothes</span>
        <span className="itemName">Kid's Nikey Shoe</span>
      </div>
      <div className="liveItemBody h-5/6 bg-slate-600 relative">
        <NavLink
          to={"/products/id"}
          className="absolute cursor-pointer items-end right-2 top-2 text-semibold p-1 rounded-lg border-blue-900 border bg-blue-800 hover:bg-blue-700">
          See details
        </NavLink>
        <img
          src="https://res.cloudinary.com/djv535hkn/image/upload/v1682279403/easybuy/Crypto_bull_zbztfi.png"
          alt=""
          className="itemImageOnFocus h-80 w-full"
        />
        <div className="itemImages flex flex-row gap-3 justify-center items-center border-emerald-50 mt-2 border border-gray-700 rounded-md">
          <img
            src="https://res.cloudinary.com/djv535hkn/image/upload/v1682279403/easybuy/Crypto_bull_zbztfi.png"
            alt=""
            className="itemImage h-14 w-14"
          />
          <img
            src="https://res.cloudinary.com/djv535hkn/image/upload/v1682279403/easybuy/Crypto_bull_zbztfi.png"
            alt=""
            className="itemImage h-14 w-14"
          />
          <img
            src="https://res.cloudinary.com/djv535hkn/image/upload/v1682279403/easybuy/Crypto_bull_zbztfi.png"
            alt=""
            className="itemImage h-14 w-14"
          />
        </div>
      </div>
      <div className="liveItemFooter flex flex-col h-max p-2 justify-center items-center">
        <div className="liveItemPrice flex flex-row justify-around items-center p-2 w-full">
          <div className="priceTag opacity-90">
            <span className="priceTag">Item Price:</span>
            <span className="itemAmount font-semibold">Ksh 7, 200</span>
          </div>
          <Button className="addToCartLive p-2">Add to Cart</Button>
        </div>
        <div className="w-full flex flex-row justify-around items-center opacity-80 font-semibold">
          <span className="selectReactionEmoji">34 ❤</span>
          <span className="selectReactionEmoji">34 Comments</span>
          <span className="selectReactionEmoji">34 Reviews 4.5</span>
        </div>
      </div>
    </div>
  )
}

export default LiveItemCard
