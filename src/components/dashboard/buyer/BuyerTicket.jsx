import React from "react"
import {
  FaArrowLeft,
  FaArrowRight,
  FaDownload,
  FaEye,
  FaPlayCircle,
  FaPlusCircle,
  FaTicketAlt,
  FaTrashAlt,
} from "react-icons/fa"

const BuyerTicket = () => {
  return (
    <div className="adminMain dashcolor w-full mt-3 rounded-md">
      <div className="productsCompareHeader flex flex-row justify-between p-3">
        <span className="productsCompareTitle font-semibold">
          Support Ticket
        </span>
        <input
          type="text"
          placeholder="Search Product To Compare"
          className="searchRequestInput px-2 rounded-lg opacity-90 font-semibold text-gray-700"
        />
      </div>
      <div className="buyerTicketDiv w-full p-2 flex flex-col gap-2">
        <div className="sellerSupportTicketsCards grid grid-cols-4 w-full gap-5">
          {/*  */}
          <div className="sellerSupportTicketCard rounded-xl h-32 bg-green-800 flex flex-col items-center justify-center">
            <span className="numberOfTickets font-black text-2xl">09</span>
            <span className="ticketTitle font-semibold"> Solved Tickets</span>
          </div>
          {/*  */}
          <div className="sellerSupportTicketCard rounded-xl h-32 bg-green-800 flex flex-col items-center justify-center">
            <span className="numberOfTickets font-black text-2xl">01</span>
            <span className="ticketTitle font-semibold"> Pending Ticket</span>
          </div>
          {/*  */}
          <div className="sellerSupportTicketCard rounded-xl h-32 bg-green-800 flex flex-col items-center justify-center">
            <span className="numberOfTickets font-black text-2xl">09</span>
            <span className="ticketTitle font-semibold">Open Ticket</span>
          </div>
          {/*  */}
          <div className="sellerSupportTicketCard rounded-xl h-32 bg-green-800 flex flex-col items-center justify-center">
            <span className="createTicketIcon font-black text-2xl">
              <FaTicketAlt />
            </span>
            <span className="ticketTitle font-semibold flex flex-row items-center gap-3 bg-red-700 p-1 rounded-lg">
              <FaPlusCircle /> Create Ticket
            </span>
          </div>
          {/*  */}
        </div>
        {/* tables for tickets */}
        <div className="sellerWalletTable flex flex-col bg-green-800">
          <table>
            <tr>
              <td>ID</td>
              <td>Subject</td>
              <td>Sending Date & Time</td>
              <td>Status</td>
              <td>Options</td>
            </tr>
            <tr>
              <td>#6701</td>
              <td>I did not receive my good yet I'm see oreder completed</td>
              <td>09/09/2022, 8:00AM</td>
              <td>Solved</td>
              <td>Appoved</td>
              <td className="flex flex-row gap-1">
                <FaEye />
              </td>
            </tr>
          </table>
        </div>
        {/* footerNag=viagtion */}
        <div className="sellerSuppportTicketNavigation flex flex-row items-center gap-1 justify-end px-5">
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
    </div>
  )
}

export default BuyerTicket
