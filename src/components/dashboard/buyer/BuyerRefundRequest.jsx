import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaDownload,
  FaEye,
  FaTrashAlt,
} from "react-icons/fa";

const BuyerRefundRequest = () => {
  return (
    <div className="refundsDiv w-full p-4 flex flex-col gap-2 dashcolor rounded-md mt-3">
          <div className="refundsHeader flex flex-row justify-between">
            <span className="refundsTitle font-semibold">
              All Refund Requiries
            </span>
            <input
              type="text"
              placeholder="Search Refunds Request"
              className="searchRequestInput px-2 rounded-lg opacity-90 font-semibold text-gray-700"
            />
      </div>
      <hr />
          <div className="buyersRefundsTable flex flex-col mt-2">
            <table>
              <tr>
                <td>Order ID:</td>
                <td>Products</td>
                <td>Amount</td>
                <td>Date</td>
                <td>Status</td>
                <td>Options</td>
              </tr>
              <tr>
                <td>09880</td>
                <td>Nike Shoes 67t</td>
                <td>Ksh 1200</td>
                <td>09/09/2022</td>
                <td>Pending/Approved</td>
                <td className="flex flex-row gap-1">
                  <FaEye />
                  <FaTrashAlt />
                </td>
              </tr>
            </table>
          </div>
          {/* footerNag=viagtion */}
          <div className="allRefundsTableNaviagation flex flex-row items-center gap-1 justify-end px-5">
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
          {/* start a new refund request ticket */}
          here add a link to the ticket pae
          {/*  */}
        </div>
  );
};

export default BuyerRefundRequest;
