import React from "react"
import {
  FaArrowLeft,
  FaArrowRight,
  FaDownload,
  FaEye,
  FaTrashAlt,
} from "react-icons/fa"

const BuyerDownload = () => {
  return (
    <div className="w-full py-3 flex flex-col gap-2 dashcolor rounded-md mt-3">
      <div className="buyerDownloadsHeader flex flex-row justify-between p-3 ">
        <span className="allOrdersTitle font-semibold">
          All Digital Ordered
        </span>
        <input
          type="text"
          placeholder="Search Orders"
          className="searchOrdersInput px-2 rounded-lg focus:outline-none text-gray-700 font-semibold opacity-90"
        />
      </div>
      <hr />
      {/*  */}
      <div className="buyersDigitalOrdersTable flex flex-col px-3">
        <table>
          <tr>
            <td>Order No.</td>
            <td>Name</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Payment Status</td>
            <td>Options</td>
          </tr>
          <tr>
            <td>09880</td>
            <td>Adobe CC</td>
            <td>09/09/2022</td>
            <td>Ksh 1200</td>
            <td>Unpaid</td>
            <td className="flex flex-row gap-1">
              <FaEye />
              <FaDownload />
            </td>
          </tr>
        </table>
      </div>
      {/* footerNag=viagtion */}
      <div className="allOrderTableNaviagation flex flex-row items-center gap-1 justify-end px-5">
        <span>
          <FaArrowLeft />
        </span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>
          <FaArrowRight />
        </span>
      </div>

      {/*  */}

      <div className="otherDownloadOptionsDiv">
        her you can add other buttons to download your prev purchases or orders
        and profile info in pdf format
      </div>
    </div>
  )
}

export default BuyerDownload
