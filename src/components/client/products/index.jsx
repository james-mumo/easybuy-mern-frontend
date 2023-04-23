import React, { useEffect, useState } from "react"
import LiveProductCard from "../../global/cards/LiveProductCard"
import FilterBar from "./FilterBar"
import productsData from "../../../data/productsData"
import ProductsFilterBar from "../../global/ProductsFilterBar"
import axios from "axios"
import apiList from "../../../lib/apiList"

const AllProducts = () => {
  const [prods, setProds] = useState([])

  useEffect(() => {
    const getAllProds = async () => {
      try {
        const { data } = await axios.get(apiList.getAllProds)
        console.log(data)
        setProds(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProds()
  }, [])
  return (
    <div className="flex flex-row justify-evenly gap-3 px-3 py-2">
      <div className="productsFilterSection sticky top-[60px] w-1/6 rounded-md border-gray-700 border opacity-90 flex justify-center h-[100vh] p-4 normalbg">
        <FilterBar />
      </div>
      {/*  */}
      {/*  */}
      <div className="productsItemsContainer flex-1 border-gray-700 border rounded-md">
        <div className="top-[60px] sticky z-10 normalbg mb-1 rounded-md overflow-hidden px-2">
          <ProductsFilterBar items={"90"} />
        </div>
        <div className="productsItems">
          <div className="flex flex-col gap-5  items-center justify-center">
            <div className="section items-center grid grid-cols-4 justify-center px-3 py-3 gap-5">
              {prods.map((item, i) => (
                <LiveProductCard
                  id={i}
                  key={item._id}
                  {...item}
                  sellerName={item.sellerName}
                  authorImg={"./img/Squish.png"}
                  bg={"url('./img/Ape Kids Club1.png')"}
                  authorName={"James Ian"}
                  itemPrice={"5700"}
                  itemTitle={"New Balance"}
                  itemMake={"NBC"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProducts
