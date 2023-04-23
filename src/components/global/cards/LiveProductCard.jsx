import React, { useContext, useEffect, useState } from "react"
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import cartContext from "../../../context/cart/cartContext"

const LiveProductCard = ({ sellerName, ...item }) => {
  const navigate = useNavigate()
  const { addItem, removeItem, products } = useContext(cartContext)
  const [isInCart, setIsInCart] = useState(false)

  const handleNavigate = () => {
    navigate(`/products/${item._id}`)
    navigate(0)
  }

  useEffect(() => {
    const prod = products.find((prod) => prod._id === item._id)
    if (prod) {
      setIsInCart(true)
    } else if (!prod) {
      setIsInCart(false)
    }
  }, [products, isInCart])

  return (
    <div className="liveProductCardContainer w-[17rem] h-[23rem] flex-1 flex flex-col p-2 rounded-lg transform transition duration-500 hover:scale-[105%] bg-[#15153fc7] border-[#00000065]">
      <div
        onClick={handleNavigate}
        style={{
          backgroundImage: `url(${item.mainImg})`,
          backgroundSize: "cover",
        }}
        className="cardHeader h-[350px]  overflow-hidden rounded-md bg-cover flex flex-col w-full relative">
        <span className="likes flex flex-row items-center text-[12px] absolute top-2 right-1 px-2 rounded-md bg-[#4b50e6] ">
          {item.stock || 1} in Stock
        </span>
        {/*  */}
        <span className="likes flex flex-row items-center text-[12px] absolute top-2 left-1 px-2 rounded-md bg-[#4b50e6] ">
          <FavoriteBorderOutlinedIcon fontSize="18px" /> 200
        </span>

        {/* <div className="timeLeft absolute bottom-[-27px] items-center w-full justify-center">
          <div className="timeSpan border border-indigo-900 h-14 w-14 rounded-[2.5rem] bg-indigo-700 px-1 flex flex-row m-auto items-start justify-center">
            <LocalFireDepartmentOutlinedIcon fontSize="large" className="" />
          </div>
        </div> */}
      </div>
      {/*  */}
      {/*  */}
      <span className="addToCart flex flex-row items-center text-[12px] absolute bottom-24 right-5 p-1 transition duration-700 hover:scale-110 rounded-full">
        {isInCart && (
          <>
            <FaMinusCircle
              onClick={() => removeItem(item._id)}
              className="text-4xl rounded-full  hover:bg-[#4b50e6] bg-red-500 transition duration-700"
            />
          </>
        )}

        {!isInCart && (
          <>
            <FaPlusCircle
              onClick={() => addItem(item)}
              className="text-4xl rounded-full bg-[#4b50e6] hover:bg-red-500 transition duration-700"
            />
          </>
        )}
      </span>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="cardBody px-3 py-0 z-10 flex flex-col justify-center p-0 h-10 m-0 bg-[#2227c47e] ">
        <div className="topBody flex flex-row justify-between items-center">
          <div className="itemTitle font-bold w-[380px]">
            {" "}
            {item?.shopname || "AddOne"}
          </div>
          <div className="shopInitial bg-[#4b50e6] rounded-sm font-bold text-sm px-1">
            {item?.shopInitials || "BDB"}
          </div>
        </div>
      </div>
      {/* card Footer */}
      <span className="bottomBody paddingBottom px-2 flex flex-row justify-between bg-[#2227c47e]">
        <span className="creator flex flex-row items-center ">
          <img src={item.mainImg} alt="" className="w-9 h-9 rounded-lg" />
          <span className="creatorInfo px-2 flex flex-col">
            <span className="creatorTag text-[11px] opacity-80 h-3 m-0 p-0 ">
              Creator
            </span>
            <span className="title font-bold h-fit">{sellerName}</span>
          </span>
        </span>

        <span className="priceSpan flex flex-col">
          <span className="priceTag  text-[11px] opacity-80 h-3 m-0 p-0">
            Price
          </span>
          <span className="price font-bold">{item.price} KSh</span>
        </span>
      </span>
    </div>
  )
}

export default LiveProductCard
