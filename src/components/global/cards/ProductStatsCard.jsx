import React from "react"
import { AiFillCalculator } from "react-icons/ai"

const ProductStatsCard = () => {
  return (
    <div className="dashcolor w-60 h-32 flex flex-row flex-1 border rounded-md p-0">
      <AiFillCalculator className="prodStatsIcon h-16 text-[20rem]" />
      <div className="prodStatsInfo flex flex-col">
        <span className="categoryName">Electronics</span>
        <span className="categoryAmount">67</span>
      </div>
    </div>
  )
}

export default ProductStatsCard
