import React, { useContext } from "react"
import { TbTrash } from "react-icons/tb"
import { FaPlus, FaMinus, FaToggleOn } from "react-icons/fa"
import cartContext from "../../../context/cart/cartContext"

const CartItemCard = ({ ...item }) => {
  const {
    id,
    _id,
    mainImg,
    name,
    description,
    price,
    quantity,
    rating,
    category,
    subcategory,
    brand,
  } = item
  const { removeItem, incrementItem, decrementItem } = useContext(cartContext)

  return (
    <div className="cartItemDiv flex flex-row gap-2 px-5 py-5 h-fit w-full border-b border-gray-700 items-center">
      <img
        src={mainImg}
        alt="image"
        className="cartItemImage h-[150px] w-[150px] rounded-lg overflow-hidden"
      />

      <span className="cartItemTitleAndInfo p-2 px-4 flex-1 flex flex-col justify-between items-center">
        <span className="title w-full font-semibold opacity-90">{name}</span>
        <span className="title w-full font-semibold text-sm opacity-90">
          {brand}
        </span>
        <span className="cartItemInfo p-0 w-full opacity-80 h-[70px] overflow-y-scroll border-r border-gray-700">
          {description}
        </span>
        <span className="flex flex-row gap-2 w-full py-2 justify-start items-start font-semibold">
          <span className="cartItemPrice font-semibold opacity-90 text-[27px]">
            KSH {Math.floor(price)}
          </span>
          <del className="cartItemTax opacity-60 font-semibold text-lg">
            You save : KSH
            {Math.floor(price + 0.2 * price - price)}
          </del>
        </span>
        {/* <span className="cartItemRating w-full text-sm">⭐⭐⭐⭐⭐ (4.7)</span> */}
      </span>

      <div className="cartOptions flex flex-col justify-center relative h-[120px]">
        <TbTrash
          className="text-2xl absolute top-0 right-0 cursor-pointer"
          onClick={() => removeItem(_id)}
        />

        <div className="cartItemQuantity p-0 flex flex-row border opacity-90 border-gray-700 justify-evenly font-bold text-xl">
          <span
            onClick={() => decrementItem(_id)}
            className="increment flex flex-row items-center w-10 justify-center bg-blue-gray-700 opacity-80 cursor-pointer">
            <FaMinus />
          </span>
          <span className="text-2xl text-red-600 flex flex-row items-center justify-center w-10">
            {quantity}
          </span>

          {quantity > 6 ? (
            <>
              <span className="decrement flex flex-row items-center w-10 justify-center bg-blue-gray-700 opacity-80 cursor-not-allowed">
                ⛔
              </span>
            </>
          ) : (
            <>
              <span
                onClick={() => incrementItem(_id)}
                className="decrement flex flex-row items-center w-10 justify-center bg-blue-gray-700 opacity-80 cursor-pointer">
                <FaPlus />
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartItemCard
