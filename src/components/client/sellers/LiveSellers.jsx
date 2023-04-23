import { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const itemsPerPage = 8
const data = [
  { id: 1, color: "bg-red-200" },
  { id: 2, color: "bg-blue-200" },
  { id: 3, color: "bg-green-200" },
  { id: 4, color: "bg-yellow-200" },
  { id: 5, color: "bg-pink-200" },
  { id: 6, color: "bg-purple-200" },
  { id: 7, color: "bg-indigo-200" },
  { id: 8, color: "bg-gray-200" },
  { id: 9, color: "bg-red-200" },
  { id: 10, color: "bg-blue-200" },
  { id: 11, color: "bg-green-200" },
  { id: 12, color: "bg-yellow-200" },
  { id: 13, color: "bg-pink-200" },
  { id: 14, color: "bg-purple-200" },
  { id: 15, color: "bg-indigo-200" },
  { id: 16, color: "bg-gray-200" },
]

export default function GridWithPagination() {
  const [page, setPage] = useState(1)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const visibleData = data.slice(startIndex, endIndex)

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1)
  }

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        {visibleData.map((item) => (
          <div className={`h-16 ${item.color}`} key={item.id}></div>
        ))}
      </div>

      {data.length > itemsPerPage && (
        <nav className="flex justify-center mt-4">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="px-4 py-2 mx-1 rounded-md bg-gray-300 text-gray-700">
            <FiChevronLeft />
          </button>

          {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map((p) => (
            <button
              key={p + 1}
              onClick={() => setPage(p + 1)}
              className={`px-4 py-2 mx-1 rounded-md ${
                page === p + 1
                  ? "bg-gray-900 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}>
              {p + 1}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            disabled={page === Math.ceil(data.length / itemsPerPage)}
            className="px-4 py-2 mx-1 rounded-md bg-gray-300 text-gray-700">
            <FiChevronRight />
          </button>
        </nav>
      )}
    </div>
  )
}

