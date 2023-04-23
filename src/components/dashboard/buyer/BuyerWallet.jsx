import { Button } from "@material-tailwind/react"
import React from "react"
import {
  FaArrowLeft,
  FaArrowRight,
  FaDollarSign,
  FaDownload,
  FaEye,
  FaPlayCircle,
  FaPlusCircle,
  FaTrashAlt,
  FaWallet,
} from "react-icons/fa"

const BuyerWallet = () => {
  return (
    <div className="sellerWalletDiv w-full dashcolor rounded-md mt-3 px-3">
      <div className="productsCompareHeader flex flex-row justify-between py-3 mb-2">
        <span className="productsCompareTitle font-semibold">My Wallet</span>
        <input
          type="text"
          placeholder="Search Product To Compare"
          className="searchRequestInput px-2 rounded-lg opacity-90 font-semibold text-gray-700"
        />
      </div>
      <hr />
      <div className="walletCardContainer grid grid-cols-4 gap-10 p-3 bg-green-900 mt-2 rounded-md overflow-hidden h-32 ">
        {/*  */}
        <div className="walletCard border bg-green-800 flex flex-row items-center justify-center gap-5">
          <span className="walletIcon">
            <FaDollarSign className="text-[30px]" />
          </span>
          <div className="rightCardRow">
            <span className="walletAmount">Ksh 65,000</span>
            <span className="walletTitle flex flow-row items-center gap-2 text-sm">
              <FaWallet /> <span>Wallet Balance</span>
            </span>
          </div>
        </div>
        {/*  */}
        <div className="walletCard border bg-green-800 flex flex-row items-center justify-center gap-5">
          <span className="walletIcon">
            <FaDollarSign className="text-[30px]" />
          </span>
          <div className="rightCardRow">
            <span className="walletAmount">Ksh 10,000</span>
            <span className="walletTitle flex flow-row items-center gap-2 text-sm">
              <FaWallet /> <span>Wallet Pending</span>
            </span>
          </div>
        </div>
        {/*  */}
        <div className="walletCard border bg-green-800 flex flex-row items-center justify-center gap-5">
          <span className="walletIcon">
            <FaDollarSign className="text-[30px]" />
          </span>
          <div className="rightCardRow">
            <span className="walletAmount">Ksh 75,000</span>
            <span className="walletTitle flex flow-row items-center gap-2 text-sm">
              <FaWallet /> <span>Total Balance</span>
            </span>
          </div>
        </div>
        {/*  */}
        <div className="walletCard border bg-green-800 flex flex-col items-center justify-center gap-3">
          <FaDollarSign className="text-[30px]" />
          <span className="walletTitle flex flow-row items-center gap-2 text-sm">
            <FaPlusCircle /> <span>Add New Amount</span>
          </span>
        </div>
        {/*  */}
      </div>
      {/* tables for deposits */}
      <div className="sellerWalletTable flex flex-col bg-green-800 mt-3 rounded-md p-3">
        <table>
          <tr>
            <td>SL.</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Payment Method</td>
            <td>Approval</td>
            <td>Options</td>
          </tr>

          <tr>
            <td>01</td>
            <td>Ksh 1200</td>
            <td>09/09/2022</td>
            <td>PayPal</td>
            <td>Appoved</td>
            <td className="flex flex-row gap-1">
              <FaEye />
              <FaDownload />
            </td>
          </tr>
        </table>
      </div>
      {/* footerNag=viagtion */}
      <div className="sellerWalletNaviagation flex flex-row items-center gap-1 justify-end px-5">
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
      {/*  */}
    </div>
  )
}

export default BuyerWallet
