import { useContext, useState } from "react"
import axios from "axios"
import { commonContext } from "../context/common/commonContext"
import apiList from "../lib/apiList"
import { useNavigate } from "react-router-dom"

const useForm = () => {
  const navigate = useNavigate()
  const { toggleForm, setFormUserInfo, togglePopUp, isPopUpOpen } =
    useContext(commonContext)
  const [inputValues, setInputValues] = useState({})
  const [error, setError] = useState(false)

  // handling input-values
  const handleInputValues = (e) => {
    const { name, value } = e.target

    setInputValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      }
    })
  }

  //   const handleInputValues = (key, value) => {
  //     setInputValues({
  //       ...profileData,
  //       [key]: value,
  //     })
  //   }

  // handling form-submission
  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!inputValues?.email || !inputValues?.password) {
      togglePopUp({ open: true, message: `Enter all fields` })
    } else {
      const loggedUserInfo = inputValues.email.split("@")[0].toUpperCase()

      setFormUserInfo(loggedUserInfo)

      if (inputValues?.username) {
        if (
          !inputValues?.email ||
          !inputValues?.password ||
          !inputValues?.conf_password
        ) {
          togglePopUp({ open: true, message: `Enter all fields` })
        } else {
          try {
            console.log("sign up")
            console.log(inputValues)
            const { data } = await axios.post(apiList.register, inputValues)
            console.log(data)
            if (data?._id) {
              localStorage.setItem("userInfo", JSON.stringify(data))
              navigate("/account")
              toggleForm(false)
              togglePopUp({ open: false, message: "" })
            } else {
              togglePopUp({ open: true, message: `Error : ${data}` })
            }
          } catch (error) {
            console.log(error)
          }
        }
      } else {
        console.log("sign in")
        const { data } = await axios.post(apiList.login, inputValues)
        if (data?._id) {
          localStorage.setItem("userInfo", JSON.stringify(data))
          navigate("/account")
          toggleForm(false)
          togglePopUp({ open: false, message: "" })
        } else {
          togglePopUp({ open: true, message: `Error : ${data}` })
        }
      }
      setInputValues({})
    }
  }

  return { inputValues, handleInputValues, handleFormSubmit }
}

export default useForm
