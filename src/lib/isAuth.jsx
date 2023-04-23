let checkIsAuth
let userInfo

if (localStorage.getItem("userInfo")) {
  checkIsAuth = true
  userInfo = JSON.parse(localStorage.getItem("userInfo"))
} else {
  checkIsAuth = false
}

// export const userType = () => {
//   return localStorage.getItem("userType")
// }

export default checkIsAuth
export { userInfo }
