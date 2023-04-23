import { Button } from "@material-tailwind/react"
import axios from "axios"
import React, { useState, useEffect, useContext } from "react"
import {
  FaArrowLeft,
  FaArrowRight,
  FaDownload,
  FaEye,
  FaPlayCircle,
  FaTrashAlt,
  FaUserAstronaut,
} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { commonContext } from "../../../context/common/commonContext"
import apiList from "../../../lib/apiList"

const AccountProfile = () => {
  const navigate = useNavigate()

  const { handleFormSubmit, formUserInfo } = useContext(commonContext)

  // to get from the local-storage
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null

  // const [profileData, setProfileData] = useState({
  //   _id: userInfo?._id || "",
  //   name: userInfo?.fullname || "",
  //   email: userInfo?.email || "",
  //   password: userInfo?.password || "",
  //   address: userInfo?.address || "",
  //   phone: userInfo?.phone || "",
  // })

  // const handleInput = (key, value) => {
  //   setProfileData({
  //     ...profileData,
  //     [key]: value,
  //   })
  // }

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault()
  //   // console.log(profileData);
  //   try {
  //     const { data } = await axios.put(apiList.updateUserInfo, profileData)

  //     localStorage.setItem("userInfo", JSON.stringify(data))
  //     localStorage.setItem("userType", JSON.stringify(data.userType))

  //     console.log(data)
  //   } catch (err) {
  //     console.log(err.response.data.msg)
  //   }
  // }

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo")
      navigate("/")
    }
    // getUserProfileData();
  }, [])

  return (
    <div className="adminPage flex flex-row bg-transparent py-2 min-h-[90vh]">
      {/*  */}
      <form
        onSubmit={handleFormSubmit}
        className=" flex flex-col items-center dashcolor w-[40%] h-full rounded-md p-4">
        <div className="formheader py-5 flex flex-col justify-center items-center">
          <img
            src="../../img/Kong.png"
            alt="userProfilePic"
            className="userProfileImage w-28 h-28 rounded-md relative"
          />
          <span className="username font-semibold py-3 text-[rgba(228,230,244,0.87)]">
            {userInfo?.username}
          </span>
          <span className="username bg-[rgb(28, 31, 53)] font-semibold py-0 text-[rgba(228,230,244,0.68)]">
            Admin
          </span>

          <div className="accountHistorySummary flex flex-row gap-5">
            <span className="overview flex flex-row justify-center items-center gap-1">
              <FaTrashAlt className="text-2xl" />
              <span className="flex flex-col text-lg p-0">
                20
                <span className="text-sm font-semibold opacity-90">
                  Sales Made
                </span>
              </span>
            </span>
            <span className="overview flex flex-row justify-center items-center gap-1">
              <FaTrashAlt className="text-2xl" />
              <span className="flex flex-col text-lg p-0">
                20, 000
                <span className="text-sm font-semibold p-0 opacity-90">
                  Payments Made
                </span>
              </span>
            </span>
          </div>
        </div>

        <hr className="text-red-900" />

        <h3 className="pt-5 flex-1 w-full px-8 font-bold opacity-90 text-lg border-t">
          Details
        </h3>

        <div className="userInfo flex w-full flex-col py-3 gap-3">
          <span className="infoItem flex flex-row px-8 font-semibold gap-5 opacity-80">
            Name <span className="name font-normal">{userInfo?.username}</span>
          </span>
          <span className="infoItem flex flex-row px-8 font-semibold gap-5 opacity-80">
            Billing Email{" "}
            <span className="name font-thin">{userInfo?.email}</span>
          </span>
          <span className="infoItem flex flex-row px-8 font-semibold gap-5 opacity-80">
            Status{" "}
            <span className="name font-thin">
              {userInfo?.status || "Active"}
            </span>
          </span>
          <span className="infoItem flex flex-row px-8 font-semibold gap-5 opacity-80">
            Role{" "}
            <span className="name font-thin">
              {userInfo?.fullname || "Admin"}
            </span>
          </span>
          <span className="infoItem flex flex-row px-8 font-semibold gap-5 opacity-80">
            Contact{" "}
            <span className="name font-thin">
              {userInfo?.contact || "No number entred"}
            </span>
          </span>
          <span className="infoItem flex flex-row px-8 font-semibold gap-5 opacity-80">
            Language{" "}
            <span className="name font-thin">
              {userInfo?.fullname || "English"}
            </span>
          </span>
          <span className="infoItem flex flex-row px-8 font-semibold gap-5 opacity-80">
            Country{" "}
            <span className="name font-thin">
              {userInfo?.fullname || "Kenya"}
            </span>
          </span>
        </div>
        <div className="bottomBtns flex flex-row gap-8">
          <Button
            type="submit"
            onClick={handleFormSubmit}
            className="bg-[rgb(115,103,240)]">
            Edit
          </Button>
          <Button
            type="submit"
            onClick={handleFormSubmit}
            className="bg-red-800">
            Suspend
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AccountProfile
