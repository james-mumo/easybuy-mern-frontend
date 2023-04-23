import { Button } from "@material-tailwind/react"
import React from "react"

const LiveSellingCard = () => {
  return (
    <div className="cardContainer flex flex-col gap-2 items-center justify-center p-2 bg-blue-600 w-fit rounded-xl">
      <div className="cardHeader relative">
        <img
          src="./img/Kong.png"
          alt=""
          className="liveCardImg w-60 rounded-xl "
        />
        <span className="inStockCounter absolute text-[13px] font-semibold left-3 top-1 bg-indigo-900 p-0.5 px-2 rounded-md">
          7 in Stock
        </span>
      </div>
      <div className="cardBody flex flex-col justify-center items-center rounded-md bg-blue-900 p-1 w-full">
        <span className="itemTitle">Sony Ps3</span>

        <div className="ownerInfo flex flex-row items-center justify-center ">
          <img
            src="./img/Kongz.png"
            alt=""
            className="itemOwnerImg w-8 h-8 rounded-md"
          />
          <div className="itemOwnerInfo flex flex-col px-1 items-center ">
            <span className="shopName h-fit p-0 ">
              <span className="opacity-80"> By </span>
              <span className="font-bold">TheeElectrons</span>
            </span>
            <span className="itemCategory h-fit p-0">
              <span className="opacity-80">in</span>
              <span className="font-semibold">@3D Electronics</span>
            </span>
          </div>
        </div>
        <div className="itemPrice flex flex-row p-2 items-center justify-evenly w-full">
          <span className="itemAmount font-bold">Ksh 41,300</span>
          <Button className="h-7 p-0 px-1">Place A Bid</Button>
        </div>
        <hr />
        <span className="cardFooter  bg-blue-900 p-1">
          Ending Time - 2: 09:31:56
        </span>
      </div>
    </div>
  )
}

export default LiveSellingCard
