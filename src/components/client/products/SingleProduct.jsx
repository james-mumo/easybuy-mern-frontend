import { Button, Textarea } from "@material-tailwind/react"
import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import LiveProductCard from "../../global/cards/LiveProductCard"
import apiList from "../../../lib/apiList"
import axios from "axios"
import { useAlert } from "react-alert"
import LiveChatItemCard from "../../global/liveselling/LiveChatItemCard"
import checkIsAuth, { userInfo } from "../../../lib/isAuth"
import { commonContext } from "../../../context/common/commonContext"
import { useContext } from "react"
import { useRef } from "react"
import useOutsideClose from "../../../hooks/useOutsideClose"
import useScrollDisable from "../../../hooks/useScrollDisable"
import cartContext from "../../../context/cart/cartContext"

const SingleProduct = () => {
  const [reviewInfo, setReviewInfo] = useState({})
  const [prodInfo, setProdInfo] = useState({})
  const [prodImgs, setProdImgs] = useState([])
  const [sellerID, setSellerID] = useState(null)
  const [prodSellerInfo, setProdSellerInfo] = useState(null)
  const [prodSellerOtherProds, setProdSellerOtherProds] = useState([])
  const [viewReviews, setViewReviews] = useState(false)
  const [allReviews, setAllReviews] = useState([])

  const { isModalOpen, toggleModal } = useContext(commonContext)

  const { addItem, removeItem, products } = useContext(cartContext)
  const [isInCart, setIsInCart] = useState(false)
  useEffect(() => {
    const prod = products.find((prodInfo) => prodInfo._id === prodInfo._id)
    if (prod) {
      setIsInCart(true)
    } else if (!prod) {
      setIsInCart(false)
    }
  }, [products, isInCart])
  const alert = useAlert()
  const formRef = useRef()

  useOutsideClose(formRef, () => {
    toggleModal(false)
  })

  useScrollDisable(isModalOpen)

  // handling input-values
  const handleInputValues = (e) => {
    const { name, value } = e.target

    setReviewInfo((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      }
    })
  }

  let prodCreationData = new Date(prodInfo?.createdAt)
    .toLocaleString()
    .split(",")[0]

  const location = useLocation()

  const submitReview = async () => {
    toggleModal(false)
    setReviewInfo({
      rating: reviewInfo.rating,
      comment: reviewInfo.comment,
    })

    try {
      const { data } = await axios.post(apiList.addReview, {
        comment: reviewInfo.comment,
        rating: reviewInfo.rating,
        userId: userInfo._id,
        productId: prodInfo._id,
        username: userInfo.username,
        profileImage: userInfo.profileImage,
        email: userInfo.email,
        address: userInfo.address,
        phone: userInfo.phone,
      })
      setAllReviews(data.reviews)
    } catch (error) {
      console.log(error)
    }

    alert.success("Review Added Successfully!")
  }

  useEffect(() => {
    const id = location.pathname.split("/")[2]

    const getProdInfo = async () => {
      const { data } = await axios.get(apiList.getSingleProdById + id)
      setProdInfo(data)
      setProdImgs(data.otherImgs)
      setSellerID(data.sellerID)
    }

    getProdInfo()
  }, [])

  useEffect(() => {
    const getProdReviews = async () => {
      const { data } = await axios.get(
        apiList.getProdReviewsById + prodInfo._id
      )
      setAllReviews(data)
      console.log(data)
    }

    getProdReviews()
  }, [prodInfo])

  useEffect(() => {
    const getProdSellerInfo = async () => {
      const { data } = await axios.get(
        apiList.getSingleUser + prodInfo.sellerID
      )
      setProdSellerInfo(data)
      console.log(data)
    }

    getProdSellerInfo()
  }, [sellerID])

  useEffect(() => {
    const getOtherProds = async () => {
      const { data } = await axios.get(
        apiList.getAllSellerProds + prodSellerInfo?._id
      )
      setProdSellerOtherProds(data)
      console.log(data)
    }

    getOtherProds()
  }, [prodSellerInfo, allReviews])

  return (
    <div className="singleProductContainer flex flex-col justify-around py-3 relative items-center">
      <div className="productDiv flex flex-row justify-center gap-3">
        <div className="productsImageDiv relative flex flex-col w-2/6 p-5 normalbg rounded-md items-center border-gray-700 border">
          <img
            src={prodInfo?.mainImg}
            alt="img"
            className="mainImageDiv rounded-lg overflow-hidden w-[430px] h-[500px]"
          />
          <div className="otherProductImages flex flex-row w-full justify-around p-2 pt-6">
            <img
              src={prodImgs[0]}
              alt=""
              className="otherProdImages h-[100px] w-[100px] rounded-md border-2 border-gray-700"
            />
            <img
              src={prodImgs[1]}
              alt=""
              className="otherProdImages h-[100px] w-[100px] rounded-md border-2 border-gray-700"
            />
            <img
              src={prodImgs[2]}
              alt=""
              className="otherProdImages h-[100px] w-[100px] rounded-md border-2 border-gray-700"
            />
          </div>
          <span className="stockLeftSpan bg-purple-800 font-semibold text-brown-50 p-3 rounded-xl absolute top-10 left-16">
            89 Left
          </span>
        </div>
        {/*  */}
        <div className="productInfo w-3/6 flex flex-col gap-2 py-16 px-10 border border-gray-700 normalbg rounded-md">
          <div className="productInfoHeader flex flex-col gap-1">
            <span className="productShopTitle text-blue-500 text-[35px] font-bold">
              {prodInfo.name}
            </span>
            <span className="productTitle text-blue-500 text-[20px] font-semibold">
              {prodInfo.category}
            </span>
            <div className="priceAndReviews w-3/6 pr-3 flex justify-between items-center">
              <span className="reviews opacity-80">
                <span className="">{allReviews?.length} Reviews</span>
                ⭐⭐⭐⭐
              </span>
              <span
                onClick={() => toggleModal(true)}
                className="addReview bg-red-500 hover:bg-red-600 p-1 rounded-lg cursor-pointer">
                {checkIsAuth ? "Review Item" : "Login To Review"}
              </span>
            </div>
          </div>
          <div className="productInfoBody flex gap-2 flex-col">
            <span className="prodDesc opacity-80">{prodInfo?.description}</span>
            <div className="prodSellerInfo flex flex-col py-4">
              <div className="prodSellerProfile flex flex-row justify-start items-center gap-2 ">
                <img
                  src={prodSellerInfo?.profileImage}
                  alt=""
                  className="sellerImg h-14 w-14 rounded-full overflow-hidden border"
                />
                <div className="sellerInfo flex flex-col justify-center ">
                  <span className="text-sm ">
                    By
                    <span className="sellerName font-semibold">
                      {prodSellerInfo?.username}
                    </span>
                  </span>
                  <span className="text-sm">
                    <span className="opacity-80">In </span>
                    <span className="shopCategory font-semibold">
                      {prodInfo.category}
                    </span>
                  </span>
                </div>
                <span className="dateAdded flex flex-col gap-0 text-sm px-5  opacity-80 font-semibold">
                  <span className="dateAdded opacity-90 font-semibold">
                    Created On:
                  </span>
                  {prodCreationData}
                </span>
                <span className="salesMade text-lg font-bold text-blue-600 px-3">
                  450 Sales Made(get from order table)
                </span>
                <div className="flex-1 flex justify-end ">
                  <span className="stockLeftSpan bg-green-700 font-semibold text-brown-50 p-2 text-sm rounded-sm">
                    In Stock ✔
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="price flex flex-row gap-4 py-3">
              <div className="priceLeftSide flex flex-col">
                <div className="priceTopDiv flex flex-row items-center">
                  <span className="initialPrice pr-3 font-bold text-2xl text-gray-400">
                    Ksh {prodInfo?.price}
                  </span>
                  <del className="initialPrice font-bold text-md stroke-black text-gray-400">
                    ksh {Math.floor(prodInfo?.price + 0.26 * prodInfo?.price)}
                  </del>
                </div>
                <span className="saveAmount text-green-700 font-semibold">
                  You save : ksh{" "}
                  {Math.floor(
                    prodInfo?.price + 0.2 * prodInfo?.price - prodInfo?.price
                  )}
                </span>
              </div>{" "}
              <div className="priceRightSide px-2 ml-5 flex justify-center flex-col bg-[#07072e75] font-semibold border rounded-md">
                Buy 12 Items Get 2 Free
              </div>
            </div>
            {/*  */}
            {/* {isInCart && (
              <>
                <FaMinusCircle
                  onClick={() => removeItem(item._id)}
                  className="text-4xl rounded-full  hover:bg-[#4b50e6] bg-red-500 transition duration-700"
                />
              </>
            )} */}
            <Button
              onClick={() => addItem(prodInfo?._id)}
              className="addToCartBtn w-3/6 my-3">
              {!isInCart ? " Add To Cart" : "Remove From Cart"}
            </Button>
            {/*  */}
            <hr />
          </div>
        </div>
      </div>
      <div className="itemAdditionnalInfo mt-3 px-5 w-full flex flex-col justify-center items-center">
        <div className="itemInfoHeaders normalbg w-full rounded-md border border-gray-700 flex flex-row gap-5 p-3 justify-center">
          <span className="specifications">Specifications</span>
          <span className="specifications">Overview</span>
          <span
            className="specifications"
            onClick={() => setViewReviews(!viewReviews)}>
            Reviews
          </span>
        </div>

        <div className="infoItemClicked py-0 border w-[40vw] p-2 flex flex-col items-center justify-center">
          {viewReviews && (
            <div className="allProdReviews py-5 border w-full h-60 overflow-y-scroll gap-3 flex flex-col ">
              {allReviews.length > 0 ? (
                <>
                  {allReviews.map((reviewItem, i) => (
                    <LiveChatItemCard key={i} info={reviewItem} />
                  ))}
                </>
              ) : (
                <div>"none"</div>
              )}
            </div>
          )}
        </div>
      </div>
      <hr />
      {/*  */}
      {/* this should have a slider man */}
      <div className="relatedProductsDiv flex w-full flex-col gap-2 justify-center px-6 mt-1">
        <span className="px-16 py-5 normalbg w-fit border rounded-md border-gray-700">
          Related Products
        </span>
        <div className="relatedProds w-full flex flex-row justify-around p-3 gap-2 overflow-scroll border scroll-m-0">
          {prodSellerOtherProds.map((item, i) => (
            <LiveProductCard
              id={i}
              key={i}
              {...item}
              authorImg={"../../img/Squish.png"}
              bg={"url('../../img/Ape Kids Club1.png')"}
              authorName={"James Ian"}
              itemPrice={"5700"}
              itemTitle={"New Balance"}
              itemMake={"NBC"}
            />
          ))}
        </div>
      </div>
      {/* review Modal */}
      {isModalOpen && (
        <div
          ref={formRef}
          className="reviewModal top-20 fixed border w-[60vw] m-auto bg-cyan-900 rounded-md p-4 border-cyan-900">
          <div className="modalHeader">Add A Review</div>
          <div className="modalBody">
            <Textarea
              label="Enter Review"
              className="text-gray-500"
              value={reviewInfo.comment || ""}
              name="comment"
              onChange={handleInputValues}></Textarea>
          </div>
          <input
            name="rating"
            value={reviewInfo.rating || 0}
            onChange={handleInputValues}
            type="number"
            className="text-black"
            max={5}
            min={1}
          />

          <span
            onClick={submitReview}
            className="addReview bg-red-500 hover:bg-red-600 p-1 rounded-lg cursor-pointer">
            Submit
          </span>
        </div>
      )}
      {/* review Modal */}
    </div>
  )
}

export default SingleProduct
