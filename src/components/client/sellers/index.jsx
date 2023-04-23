import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import apiList from "../../../lib/apiList"

const itemsPerPage = 16

export default function GridWithPagination() {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [sellers, setSellers] = useState([])
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const visibleData = sellers?.slice(startIndex, endIndex)

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1)
  }

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const viewSeller = (_id) => {
    navigate(`/sellers/${_id}`)
  }

  const getAllSellers = async () => {
    try {
      const { data } = await axios.get(apiList.getAllSellers)
      setSellers(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllSellers()
  }, [])

  return (
    <div className="w-full p-3 px-10 relative myheight flex flex-col items-center">
      <div className="py-0 flex flex-row w-full justify-between">
        <span className="rounded-md border border-gray-700 p-3 normalbg">
          Top Sellers
        </span>
        <span className="rounded-md border border-gray-700 p-3 normalbg">
          Best Selling 🔽
        </span>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-4  mt-3 w-full">
        {visibleData.map((item, index) => {
          const { _id, username, profileImage, totalEarned } = item
          return (
            <div
              onClick={() => viewSeller(_id)}
              className="singleSellerItem w-full border border-gray-700 py-14 h-24 flex flex-row gap-3 items-center px-3 rounded-md normalbg"
              key={_id}>
              <img
                src={profileImage}
                alt="proImg"
                className="h-16 w-16 rounded-full border-4 border-gray-700"
              />
              <span className="nameAndSalesMade flex flex-col gap-0 px-5">
                <span className="username font-bold opacity-90">
                  {username}
                </span>
                <span className="sales text-sm opacity-80">{totalEarned}</span>
              </span>
              <span className="flex-1 flex flex-row justify-end text-[55px] font-bold opacity-30 right-0">
                {index + 1}
              </span>
            </div>
          )
        })}
      </div>
      {sellers?.length > itemsPerPage && (
        <nav className="flex justify-between mt-4 py-2 absolute ml-auto mr-auto bottom-3 w-[85vw]">
          <span className="flex flex-row justify-center items-center">
            {[...Array(Math.ceil(sellers?.length / itemsPerPage)).keys()].map(
              (p) => (
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
              )
            )}
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
              disabled={page === Math.ceil(sellers?.length / itemsPerPage)}
              className="px-4 py-2 mx-1 rounded-md bg-gray-300 text-gray-700">
              <FiChevronRight />
            </button>
          </span>
        </nav>
      )}
    </div>
  )
}
