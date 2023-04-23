import React from "react"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment"

const POSProductCard = () => {
  return (
    <div className="cardContainer posProductCardBG w-[15rem] h-90 flex flex-col p-2 rounded-lg transform transition duration-500 hover:scale-105">
      <div className="cardHeader flex flex-col w-full h-3/4 relative">
        <img
          src="https://res.cloudinary.com/djv535hkn/image/upload/v1682278942/easybuy/boxess_tipbzg.webp"
          alt=""
          className="rounded-lg w-full object-contain h-full bg-blue-800"
        />
        <span className="likes flex flex-row items-center text-[12px] absolute top-2 right-1 px-2 rounded-md bg-blue-500 ">
          200
          <FavoriteBorderIcon />
        </span>

        <div className="timeLeft absolute bottom-1 items-center w-full justify-center">
          <div className="timeSpan  bg-blue-500 rounded-md px-1 flex flex-row w-fit m-auto items-center">
            06:03:44
            <LocalFireDepartmentIcon />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="cardBody flex flex-col p-2">
        <div className="topBody flex flex-row justify-between items-center">
          <div className="itemTitle font-bold">New Balance</div>
          <div className="shopInitial bg-indigo-700 rounded-sm font-bold text-sm px-1">
            NBC
          </div>
        </div>

        <span className="bottomBody flex flex-row justify-between">
          <span className="creator flex flex-row items-center ">
            <img src="/boxess.webp" alt="" className="w-9 h-9 rounded-lg" />
            <span className="creatorInfo px-2 flex flex-col">
              <span className="creatorTag text-sm opacity-80 h-3 m-0 p-0 ">
                Creator
              </span>
              <span className="title font-bold h-fit">James Franco</span>
            </span>
          </span>

          <span className="priceSpan flex flex-col">
            <span className="priceTag text-sm opacity-80 h-3 m-0 p-0">
              Price
            </span>
            <span className="price font-bold">5600 KSh</span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default POSProductCard
