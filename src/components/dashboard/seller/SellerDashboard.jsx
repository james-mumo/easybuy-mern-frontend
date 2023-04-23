import React from "react";
import TransactionsCard from "../components/dashboardcards/TransactionsCard";
import SideNav from "../../common/SideNav";
import {
  FaBell,
  FaBullseye,
  FaEye,
  FaMailBulk,
  FaTrashAlt,
} from "react-icons/fa";

const SellerDashboard = () => {
  return (
    <div className="adminPage flex flex-row justify-between">
      <div className=" adminSideNav sticky top-20 border flex justify-center h-[80vh] w-[15vw]">
        <SideNav />
      </div>
      <div className="adminMain flex-1 float-right right-0 margin-auto bg-orange-800 ">
        <div className="dashBoard grid grid-cols-5 gap-5 p-2">
          <div className="greetingCard col-span-2 ">
            <div className="greetingCardDiv flex flex-row p-2 gap-3 bg-orange-900 rounded-lg ">
              <div className="leftCardDiv border">
                <div className="merchantName text-xl font-bold py-3">
                  Hello James 🖐
                </div>
                <span className="summaryOfAdminEvents text-md py-3 font-semibold text-sm">
                  Planning on going live Today?
                </span>
                <div className="headsUpInfo flex flex-col gap-[2px]">
                  <span className="notifictions flex flex-row items-center gap-2">
                    <FaBell /> 56 Notifications
                  </span>
                  <span className="notifictions flex flex-row items-center gap-2">
                    <FaMailBulk /> 56 Messages
                  </span>
                  <span className="notifictions flex flex-row items-center gap-2">
                    <FaBullseye /> 56 New Orders
                  </span>
                </div>
              </div>
              <div className="rightCardDiv border rounded-md">
                Big Verified Tick Logo
              </div>
              <div className="rightCardDiv border rounded-md">
                You are on free package
                <hr />
                Upgrade
              </div>
            </div>
            {/*  */}
          </div>
          <div className="miniStatsCard flex flex-col justify-around border bg-orange-900 px-5 py-7 rounded-md">
            <div className="cardHeader flex flex-row justify-between">
              <div className="iconSpan ">icon here</div>
              <span className="options">...</span>
            </div>
            <span className="cardTitle w-full text-sm font-bold border">
              Total Products
            </span>
            <span className="cardAmount text-2xl font-bold">660</span>
            <div className="cardPercentage flex flex-row gap-3">
              <span className="arrowIcon">⭐</span>
              <span className="percentageValue"></span>
            </div>
          </div>
          {/*  */}
          <div className="miniStatsCard flex flex-col justify-around border bg-orange-900 px-5 py-7 rounded-md">
            <div className="cardHeader flex flex-row justify-between">
              <div className="iconSpan ">icon here</div>
              <span className="options">.see earnings..</span>
            </div>
            <span className="cardTitle w-full text-sm font-bold border">
              Total Earnings
            </span>
            <span className="cardAmount text-2xl font-bold">Ksh 20,300</span>
            <div className="cardPercentage flex flex-row gap-3">
              <span className="arrowIcon">⭐</span>
              <span className="percentageValue">-14.67%</span>
            </div>
          </div>
          {/*  */}
          <div className="miniStatsCard flex flex-col justify-around border bg-orange-900 px-5 py-7 rounded-md">
            <div className="cardHeader flex flex-row justify-between">
              <div className="iconSpan ">icon here</div>
              <span className="options">...</span>
            </div>
            <span className="cardTitle w-full text-sm font-bold border">
              Total Sales
            </span>
            <span className="cardAmount text-2xl font-bold">98 Sales</span>
            <div className="cardPercentage flex flex-row gap-3">
              <span className="arrowIcon">⭐</span>
              <span className="percentageValue">-14.67%</span>
            </div>
          </div>
          {/*  */}

          <div className="transactionsSummaryCard col-span-2 ">
            <TransactionsCard />
          </div>
          {/*  */}
          <div className="sellerDashSummary col-span-2 flex flex-col px-5 py-5 gap-5 bg-green-900 rounded-2xl">
            {/* order summary table */}
            {/* here you can add fancy charts */}
            <div className="categorySummaryTable flex flex-col">
              <div className="summaryTableHeader flex justify-between font-semibold py-1">
                <span>Category</span>
                <span>see all</span>
              </div>
              <div className="summaryTableBody flex flex-col">
                <span className="summaryItem flex flex-row justify-between px-2">
                  <span>Kids</span>
                  <span>566</span>
                </span>
                <span className="summaryItem flex flex-row justify-between px-2">
                  <span>Kids</span>
                  <span>566</span>
                </span>
                <span className="summaryItem flex flex-row justify-between px-2">
                  <span>Kids</span>
                  <span>566</span>
                </span>
                <span className="summaryItem flex flex-row justify-between px-2">
                  <span>Women</span>
                  <span>86</span>
                </span>
                <span className="summaryItem flex flex-row justify-between px-2">
                  <span>Men</span>
                  <span>26</span>
                </span>
                <span className="summaryItem flex flex-row justify-between px-2">
                  <span>Work</span>
                  <span>455</span>
                </span>
              </div>
            </div>
            {/* category wise table */}
            <div className="ordersSummaryTable">
              <div className="summaryTableHeader flex justify-between font-semibold py-1">
                <span>Orders</span>
                <span>see all</span>
              </div>
              <div className="summaryTableBody">
                <span className="summaryItem flex flex-row justify-between px-2">
                  <span>Total Orders</span>
                  <span>566</span>
                </span>
                <span className="summaryItem flex flex-row justify-between px-2">
                  <span>Pending Orders</span>
                  <span>86</span>
                </span>
                <span className="summaryItem flex flex-row justify-between px-2">
                  <span>Cancelled Orders</span>
                  <span>26</span>
                </span>
                <span className="summaryItem flex flex-row justify-between px-2">
                  <span>Succesfull Orders</span>
                  <span>455</span>
                </span>
              </div>
            </div>
            {/*  */}
          </div>
          {/* recentReviews and Cmment Card */}
          <div className="recentReviewsAndComment col-span-1 flex flex-col gap-3 bg-yellow-600 rounded-lg py-2 px-1">
            <span className="reviewsSummaryHeader font-semibold flex flex-row justify-between px-2 border-b">
              {/* slider */}
              <span className="text-sm">Recent Comments</span>
              <span className="text-[12px]">See All</span>
            </span>
            <div
              className="recentReviewCard flex flex-row gap-3 bg-slate-600 p-1
             rounded-md items-center"
            >
              <span className="reviewImg">
                <img
                  src=""
                  alt="img"
                  className="reviewImg h-9 w-9 border rounded-full overflow-hidden"
                />
              </span>
              <span className="reviewsDiv flex flex-col p-1">
                <span className="ratingStarsAndReviewer flex flex-row justify-between px-1 text-sm">
                  <span>⭐(3.5)</span>
                  <span className="font-semibold">Alaine</span>
                </span>
                <span className="commentText text-sm">
                  I love Your Products James...especcilay the Kids Toys
                </span>
              </span>
            </div>{" "}
            <div
              className="recentReviewCard flex flex-row gap-3 bg-slate-600 p-1
             rounded-md items-center"
            >
              <span className="reviewImg">
                <img
                  src=""
                  alt="img"
                  className="reviewImg h-9 w-9 border rounded-full overflow-hidden"
                />
              </span>
              <span className="reviewsDiv flex flex-col p-1">
                <span className="ratingStarsAndReviewer flex flex-row justify-between px-1 text-sm">
                  <span>⭐(3.5)</span>{" "}
                  <span className="font-semibold">Alaine</span>
                </span>
                <span className="commentText text-sm">
                  I love Your Products James...especcilay the Kids Toys
                </span>
              </span>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="yourBestSellingDiv col-span-5 w-full flex flex-col border gap-3 p-3">
          <span className="bestSellingDivTitle">
            Your Best Selling Products
          </span>
          <table>
            <tr>
              <td>
                <img src="./images/img/Hoodlum.png" alt="img" />
              </td>
              <td>Shoes</td>
              <td>Ksh 1200</td>
              <td>6Starst</td>
              <td>Add To Cart</td>
              <td className="flex flex-row gap-2">
                <FaEye />
                <FaTrashAlt />
              </td>
            </tr>
            <tr>
              <td>
                <img src="./images/img/Hoodlum.png" alt="img" />
              </td>
              <td>Shoes</td>
              <td>Ksh 1200</td>
              <td>6Starst</td>
              <td>Add To Cart</td>
              <td className="flex flex-row gap-2">
                <FaEye />
                <FaTrashAlt />
              </td>
            </tr>
          </table>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default SellerDashboard;
