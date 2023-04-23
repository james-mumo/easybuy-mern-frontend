import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaDownload,
  FaEye,
  FaPlayCircle,
  FaTrashAlt,
  FaUserAstronaut,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import apiList from "../../../lib/apiList";
import SideNav from "../../common/SideNav";

const BuyerProfile = () => {
  const navigate = useNavigate();

  // to get from the local-storage
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const [profileData, setProfileData] = useState({
    _id: userInfo._id || "",
    name: userInfo.fullname || "",
    email: userInfo.email || "",
    password: userInfo.password || "",
    address: userInfo.address || "",
    phone: userInfo.phone || "",
  });

  const handleInput = (key, value) => {
    setProfileData({
      ...profileData,
      [key]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log(profileData);
    try {
      const { data } = await axios.put(apiList.updateUserInfo, profileData);

      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("userType", JSON.stringify(data.userType));

      console.log(data);
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate("/");
    }
    // getUserProfileData();
  }, []);

  return (
    <div className="adminPage flex flex-row justify-between">
      <div className=" adminSideNav sticky top-20 border flex justify-center h-[80vh] w-[15vw]">
        <SideNav />
      </div>
      {/*  */}
      <div className="adminMain w-[85vw] float-right right-0 margin-auto bg-green-900 flex flex-col items-center">
        <div className="sellerProfileDiv w-full p-4 flex items-center flex-col gap-2 border">
          <form
            onSubmit={handleFormSubmit}
            className="border w-[60vw]  flex items-center"
          >
            <div className="profileItems flex flex-col gap-5">
              <div className="profileItem flex flex-row gap-5">
                <label htmlFor="">buyer profile</label>
                <span className="profileImg h-28 w-28">
                  <FaUserAstronaut className="h-28 w-28 rounded-full border border-double p-2" />
                </span>
              </div>
              <div className="profileItem  flex flex-row gap-5">
                <label htmlFor="">buyer name</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleInput("name", e.target.value)}
                  className="text-blue-900"
                />
              </div>
              <div className="profileItem  flex flex-row gap-5">
                <label htmlFor="">buyer email</label>
                <input
                  type="text"
                  name=""
                  id="email"
                  className="text-blue-900"
                  value={profileData.email}
                  onChange={(e) => handleInput("email", e.target.value)}
                />
              </div>
              <div className="profileItem  flex flex-row gap-5">
                <label htmlFor="">buyer address</label>
                <input
                  type="text"
                  name=""
                  id="address"
                  className="text-blue-900"
                  value={profileData.address}
                  onChange={(e) => handleInput("address", e.target.value)}
                />
              </div>
              <div className="profileItem  flex flex-row gap-5">
                <label htmlFor="">buyer phone</label>
                <input
                  type="text"
                  name=""
                  id="phone"
                  className="text-blue-900"
                  value={profileData.phone}
                  onChange={(e) => handleInput("phone", e.target.value)}
                />
              </div>

              <div className="profileItem  flex flex-row gap-5">
                <label htmlFor="">buyer password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={profileData.password}
                  onChange={(e) => handleInput("password", e.target.value)}
                  className="text-blue-900"
                />
              </div>
              <button
                type="submit"
                onClick={handleFormSubmit}
                className="bg-green-800"
              >
                Update Info
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;
