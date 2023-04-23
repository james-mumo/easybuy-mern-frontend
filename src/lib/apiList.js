export const server = "http://localhost:5000"

const apiList = {
  login: `${server}/api/user/auth`,
  register: `${server}/api/user/auth/signup`,
  userProfileData: `${server}/api/user/profile`,
  updateUserInfo: `${server}/api/user/update`,
  getSingleUser: `${server}/api/user/`,
  getAllUsers: `${server}/api/user`,
  getAllSellers: `${server}/api/user?usertype=seller`,
  getAllProds: `${server}/api/products/`,
  getAllSellerProds: `${server}/api/products/`,
  getSingleProdById: `${server}/api/products/view/`,
  addOrder: `${server}/api/orders/add`,
  getMyOrders: `${server}/api/orders/`,
  addReview: `${server}/api/reviews/add`,
  getProdReviewsById: `${server}/api/reviews/`,
  // jobs: `${server}/api/jobs`,
  // applications: `${server}/api/applications`,
  // rating: `${server}/api/rating`,
  // user: `${server}/api/user`,
  // applicants: `${server}/api/applicants`,
}

export default apiList
