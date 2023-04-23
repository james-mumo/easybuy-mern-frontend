import { Button } from "@material-tailwind/react"
import React, { useEffect, useState } from "react"
import LiveProductCard from "../../global/cards/LiveProductCard"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import axios from "axios"
import apiList from "../../../lib/apiList"

const SellerProfile = () => {
  const [sellerData, setSellerData] = useState({})
  const [sellerProds, setSellerProds] = useState([])

  const itemsPerPage = 10

  const [page, setPage] = useState(1)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const visibleData = sellerProds?.slice(startIndex, endIndex)

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1)
  }

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1)
  }

  useEffect(() => {
    let url = window.location.href.split("/")
    url = url[url.length - 1]
    url = url.toLocaleString()

    const getSellerData = async () => {
      try {
        const { data } = await axios.get(apiList.getSingleUser + url)
        setSellerData(data)
        console.log(data)
        //
        const allSellerProds = await axios.get(apiList.getAllSellerProds + url)
        setSellerProds(allSellerProds.data)
        console.log(allSellerProds.data)
      } catch (error) {
        console.log(error)
      }
    }

    getSellerData()
  }, [0])

  return (
    <div className="merchantContainer px-6 p-3 pt-0 flex flex-col w-full items-center min-h-[80vh]">
      <div className="merchantHeader w-full bg-green-800 h-[70px] flex flex-row rounded-bl-lg p-4 px-6 z-10 sticky top-12">
        <div className="merchantProfileImg relative">
          <img
            src={sellerData?.profileImage}
            alt=""
            className="h-[110px] w-[110px] rounded-full border-gray-700 overflow-hidden border-2"
          />
          <span className="verifedIcon absolute top-24 right-1 rounded-full bg-green-800 w-6 h-6 flex flex-col items-center ">
            ✔
          </span>
        </div>
        <div className="merchantDetails flex flex-col w-full  relative">
          <div className="merchantInfo flex flex-row items-center w-6/6 justify-between p-1 ml-0">
            <span className="sellerName font-bold text-[30px]">
              {sellerData?.username}
            </span>

            <span>
              <span className="font-bold px-3">
                {sellerData?.followers || 0} Followers
              </span>
              <Button className="px-4">Follow</Button>
              <Button className="px-4">Message Seller</Button>
            </span>
          </div>
          <div className="merchantProductsFilters  bg-green-800 ml-0 rounded-b-md justify-between  flex flex-row items-center w-6/6 gap-5 px-5 py-1">
            <div className="leftSellerOptions rounded-lg border border-gray-700 bg-blue-800 flex flex-row items-center gap-5 justify-between">
              <span className="cursor-pointer rounded-md p-3 hover:bg-blue-900">
                All
              </span>
              <span className="cursor-pointer  rounded-md p-3 hover:bg-blue-900">
                Kids
              </span>
              <span className="cursor-pointer  rounded-md p-3 hover:bg-blue-900">
                Sports
              </span>
              <span className="cursor-pointer  rounded-md p-3 hover:bg-blue-900">
                Men Wear
              </span>
              <span className="cursor-pointer  rounded-md p-3 hover:bg-blue-900">
                Women Wear
              </span>
            </div>
            <span className="sortdown  bg-blue-800  p-3 hover:bg-blue-900 rounded-lg border border-gray-700  flex flex-row items-center gap-5 justify-between ">
              Sort By
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="scrollable w-full flex justify-center items-center flex-col p-0 ">
        <div className="merchantProducts grid grid-cols-5 pt-20 w-fit p-0 items-center justify-center gap-5 ">
          {visibleData.slice(0, 10).map((item, i) => (
            <LiveProductCard
              key={item._id}
              {...item}
              sellerName={sellerData?.username}
            />
          ))}
        </div>
      </div>
      {sellerProds?.length > itemsPerPage && (
        <div className="flex justify-between mt-3 py-2 ml-auto mr-auto bottom-3 w-[85vw] ">
          <span className="flex flex-row justify-center items-center">
            {[
              ...Array(Math.ceil(sellerProds?.length / itemsPerPage)).keys(),
            ].map((p) => (
              <button
                key={p + 1}
                onClick={() => setPage(p + 1)}
                className={`px-4 py-1 mx-1 rounded-md ${
                  page === p + 1
                    ? "bg-gray-900 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}>
                {p + 1}
              </button>
            ))}
          </span>
          <span className="flex flex-row justify-center items-center">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className="px-4 py-2 mx-1 rounded-md bg-gray-300 text-gray-700">
              <FiChevronLeft />
            </button>
            <button
              onClick={handleNextPage}
              disabled={page === Math.ceil(sellerProds?.length / itemsPerPage)}
              className="px-4 py-2 mx-1 rounded-md bg-gray-300 text-gray-700">
              <FiChevronRight />
            </button>
          </span>
        </div>
      )}
    </div>
  )
}

export default SellerProfile
