import React from "react"
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined"

const HeroCard = ({ bg }) => {
  return (
    <div className="heroCardContainer w-[18rem] h-96 flex flex-col p-2 rounded-lg transform transition duration-500 hover:scale-110">
      <div
        style={{ background: bg, backgroundSize: "cover" }}
        className="cardHeader h-[350px] bg-cover flex flex-col w-full relative">
        <span className="likes flex flex-row items-center text-[12px] absolute top-2 right-1 px-2 rounded-md bg-blue-500 ">
          200
        </span>
        <div className="timeLeft absolute bottom-[-27px] items-center w-full justify-center">
          <div className="timeSpan border border-indigo-900 h-14 w-14 rounded-[2.5rem] bg-indigo-700 px-1 flex flex-row m-auto items-start justify-center">
            <LocalFireDepartmentOutlinedIcon fontSize="large" className="" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="cardBody z-10 flex flex-col justify-center p-0 h-10 m-0 bg-indigo-700 ">
        <div className="topBody flex flex-row justify-between items-center">
          <div className="itemTitle font-bold">New Balance</div>
          <div className="shopInitial bg-indigo-700 rounded-sm font-bold text-sm px-1">
            NBC
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
