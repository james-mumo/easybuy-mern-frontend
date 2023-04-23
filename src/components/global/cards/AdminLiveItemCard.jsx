import { Button } from "@material-tailwind/react"
import React from "react"
import { NavLink } from "react-router-dom"

const AdminLiveItemCard = () => {
  return (
    <div className="selectedItemDiv border border-gray-700 rounded-md overflow-hidden">
      <div className="liveItemCardDiv h-full flex flex-col">
        <div className="libeItemHeader flex flex-row justify-around p-4 h-[0.5/6] font-semibold opacity-90 text-lg">
          <span className="category">Kid's Clothes</span>
          <span className="itemName">Kid's Nikey Shoes</span>
        </div>
        <div className="liveItemBody h-5/6 bg-slate-600 relative">
          <NavLink
            to={"/products/id"}
            className="absolute cursor-pointer items-end right-2 top-2 text-semibold p-1 rounded-lg border-blue-900 border bg-blue-800">
            See details
          </NavLink>
          <img
            src="../../img/Squish.png"
            alt=""
            className="itemImageOnFocus h-80 w-full"
          />
          <div className="itemImages flex flex-row gap-3 justify-center items-center border py-2 border-gray-600">
            <img
              className="itemImage h-10 w-10 rounded-lg overflow-hidden"
              src="../../img/Squish.png"
              alt=""
            />
            <img
              className="itemImage h-10 w-10 rounded-lg overflow-hidden"
              src="../../img/Squish.png"
              alt=""
            />
            <img
              className="itemImage h-10 w-10 rounded-lg overflow-hidden"
              src="../../img/Squish.png"
              alt=""
            />
          </div>
        </div>
        <div className="liveItemFooter flex flex-col h-max p-0 justify-center items-center">
          <div className="liveItemPrice flex flex-row justify-around items-center p-2 w-full opacity-90">
            <span className="priceTag font-semibold">Change Item Price:</span>
            <input
              type="text"
              className="itemAmount font-bold max-w-[170px] px-2 rounded-sm focus:outline-none text-gray-600"
              placeholder="Ksh 7,200"
            />
          </div>
          <div className="w-full flex flex-row justify-evenly items-center py-2">
            <Button className="setItemStockAsDepleted p-2 text-sm">
              Empty Stock
            </Button>
            <Button className="setItemStockAsDepleted p-2 text-sm">
              Add Item Stock
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLiveItemCard
