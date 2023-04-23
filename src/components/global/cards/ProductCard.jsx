import React from "react"
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"

const ProductCard = ({
  bg,
  itemPrice,
  authorName,
  itemTitle,
  itemMake,
  authorImg,
}) => {
  return (
    <div className="productCardContainer w-[17rem] h-[25rem] flex flex-col p-2 rounded-lg transform transition duration-500 hover:scale-[105%] bg-[#15153fc7] border-[#00000065]">
      <div
        style={{ background: bg, backgroundSize: "cover" }}
        className="cardHeader h-[350px]  overflow-hidden rounded-md bg-cover flex flex-col w-full relative">
        <span className="likes flex flex-row items-center text-[12px] absolute top-2 right-1 px-2 rounded-md bg-[#4b50e6] ">
          <FavoriteBorderOutlinedIcon fontSize="18px" /> 200
        </span>
        {/* <div className="timeLeft absolute bottom-[-27px] items-center w-full justify-center">
          <div className="timeSpan border border-indigo-900 h-14 w-14 rounded-[2.5rem] bg-indigo-700 px-1 flex flex-row m-auto items-start justify-center">
            <LocalFireDepartmentOutlinedIcon fontSize="large" className="" />
          </div>
        </div> */}
      </div>
      {/*  */}
      <div className="cardBody px-3 py-0 z-10 flex flex-col justify-center p-0 h-10 m-0 bg-[#2227c47e] ">
        <div className="topBody flex flex-row justify-between items-center">
          <div className="itemTitle font-bold"> {itemTitle}</div>
          <div className="shopInitial bg-[#4b50e6] rounded-sm font-bold text-sm px-1">
            {itemMake}
          </div>
        </div>
      </div>
      {/* card Footer */}
      <span className="bottomBody paddingBottom px-2 flex flex-row justify-between bg-[#2227c47e]">
        <span className="creator flex flex-row items-center ">
          <img src={authorImg} alt="" className="w-9 h-9 rounded-lg" />
          <span className="creatorInfo px-2 flex flex-col">
            <span className="creatorTag text-[11px] opacity-80 h-3 m-0 p-0 ">
              Creator
            </span>
            <span className="title font-bold h-fit">{authorName}</span>
          </span>
        </span>

        <span className="priceSpan flex flex-col">
          <span className="priceTag  text-[11px] opacity-80 h-3 m-0 p-0">
            Price
          </span>
          <span className="price font-bold">{itemPrice} KSh</span>
        </span>
      </span>
    </div>
  )
}

export default ProductCard
