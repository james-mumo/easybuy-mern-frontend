import { Button } from "@material-tailwind/react"
import React from "react"
import { useContext, useEffect } from "react"
import { commonContext } from "../context/common/commonContext"
import { AiOutlineExclamationCircle } from "react-icons/ai"

const PopMessage = ({ message }) => {
  const { togglePopUp } = useContext(commonContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      togglePopUp({ open: false, message: "" })
    }, 3000)

    return () => clearTimeout(timer)
  }, [message, togglePopUp])

  return (
    <Button
      onClick={() => togglePopUp({ open: false, message: "" })}
      className="mt-0 w-fit  h-7 flex flex-row text-[16px] font-thin justify-start rounded-none items-center gap-5 bg-[#ff0f17] hover:bg-red-600 hover:shadow-deep-orange-800">
      <AiOutlineExclamationCircle /> {message}
    </Button>
  )
}

export default PopMessage
