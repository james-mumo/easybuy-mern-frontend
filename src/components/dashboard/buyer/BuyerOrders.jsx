import axios from "axios"
import React, { useState, useEffect } from "react"
import {
  FaArrowLeft,
  FaArrowRight,
  FaDownload,
  FaEye,
  FaTrashAlt,
} from "react-icons/fa"
import apiList from "../../../lib/apiList"
import MyTable from "./MyTable"

const BuyerOrders = () => {
  const [myOrders, setOrders] = useState([])
  console.log(myOrders)

  const data = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      viewUser: "View",
    },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ]

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    { field: "viewUser", headerName: "View", width: 130 },
  ]

  console.log(myOrders.length)

  useEffect(() => {
    const getMyOrders = async () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"))
      const { data } = await axios.get(apiList.getMyOrders + userInfo._id)
      if (data.data.length > 0) {
        setOrders(data.data)
      }
    }
    getMyOrders()
  }, [0])

  return (
    <div className="buyerOrdersDiv w-full py-3 rounded-m  overflow-hidden dashcolor rounded-md mt-3 flex flex-col gap-2">
      <div className="buyerOrderHeader flex flex-row justify-between p-3 ">
        <span className="allOrdersTitle font-semibold">
          All orders histories
        </span>
        <input
          type="text"
          placeholder="Search Orders"
          className="searchOrdersInput px-2 rounded-lg focus:outline-none text-gray-700 font-semibold opacity-90"
        />
      </div>
      <hr />
      <div className="buyersOrdersTable flex flex-col ">
        <table>
          <tr>
            <td>Order No.</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Delivery Status</td>
            <td>Payment Status</td>
            <td>Options</td>
          </tr>
          {myOrders.length == 0 ? (
            <>
              <span className="w-full border">No nothing</span>
            </>
          ) : (
            myOrders.map((item, i) => (
              <tr key={i}>
                <td>{item._id}</td>
                <td>{item.total}</td>
                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                <td>{item.deliveryStatus}</td>
                <td>{item.paymentStatus}</td>
                <td>{item.quantity}</td>
              </tr>
            ))
          )}
          <tr>
            <td>09880</td>
            <td>Ksh 1200</td>
            <td>09/09/2022</td>
            <td>Pending</td>
            <td>Unpaid</td>
            <td className="flex flex-row gap-1">
              <FaEye />
              <FaDownload />
              <FaTrashAlt />
            </td>
          </tr>
        </table>
        <MyTable data={myOrders} columns={columns} />
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
    </div>
  )
}

export default BuyerOrders
