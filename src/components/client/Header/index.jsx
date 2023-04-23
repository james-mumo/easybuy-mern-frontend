import React from "react"
import { Button } from "@material-tailwind/react"
import HeroCard from "./HeroCard"

const Header = () => {
  return (
    <div className="header flex flex-col h-[100vh]">
      {/* <Navbar /> */}
      {/* hero */}
      <div className="heroSection flex flex-row h-[90vh] items-center">
        {/*  */}
        <div className="leftHeroContainer w-2/6 h-auto flex flex-col justify-end ml-20">
          <span className="titleSpan flex flex-col  ">
            <span className="tittleIntro text-[50px] font-bold leading-[80px]">
              Buy And Sell <br /> Real Time{" "}
              <span className="text-md">with</span>
            </span>
            <span className="titleOfApp p-0 m-0 ">
              <span className="leading-[60px] text-[90px]">Easy Buy</span>
              <br />
              <span className="  font-md text-[40px]">Live Sessions</span>
            </span>
            <span className=" titleInfo w-3/4 text-[18px] font-semibold text-[#acacac] py-6">
              With EasyBuy you can tap the power of Technology and leverage it
              into world class shopping experience.
            </span>
          </span>
          <div className="headerBottomButtons flex flex-row gap-5 w-full">
            <Button variant="filled" size="md" className="">
              Explore
            </Button>
            <Button size="md" className="">
              Get Started
            </Button>
          </div>
          <div className="w-full">
            <div className="appStats flex flex-row px-6 py-4 gap-5 w-fit mt-3">
              <div className="statItem">
                <span className="statNo font-semibold text-2xl">2000</span>
                <span
                  className="statTitle text-sm text-blue-600 font-thin
                ">
                  Sellers
                </span>
              </div>
              <div className="statItem">
                <span className="statNo font-semibold text-2xl">2000</span>
                <span
                  className="statTitle text-sm text-blue-600 font-thin
              ">
                  Sellers
                </span>
              </div>
              <div className="statItem">
                <span className="statNo font-semibold text-2xl">2000</span>
                <span
                  className="statTitle text-sm text-blue-600 font-thin
                ">
                  Sellers
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* right div */}
        <div className="rightHeroContainer flex-1 flex relative flex-row align-middle h-full ">
          <div className="headerCardsDiv relative">
            <div className="absolute flex z-10 mt-20 ml-80">
              <HeroCard
                bg={
                  "url('https://res.cloudinary.com/djv535hkn/image/upload/v1682278942/easybuy/a_nz6ojn.webp')"
                }
              />
            </div>
            <div className="absolute flex mt-60 ml-96">
              <HeroCard
                bg={
                  "url('https://res.cloudinary.com/djv535hkn/image/upload/v1682278942/easybuy/boxess_tipbzg.webp')"
                }
              />
            </div>
            <div className="absolute flex mt-48 ml-36">
              <HeroCard
                bg={
                  "url('https://res.cloudinary.com/djv535hkn/image/upload/v1682278942/easybuy/cubess_a5zlso.webp')"
                }
              />
            </div>
          </div>
          {/*  */}
          <div className="appStats absolute right-10 mt-800 flex flex-col px-6 py-4 gap-5 w-fit mt-3">
            <div className="border border-red-200">
              <div className="statItem">
                <span className="statNo font-semibold text-2xl">2000</span>
                <span className="statTitle text-sm text-blue-600 font-thin">
                  Sellers
                </span>
              </div>
              <div className="statItem">
                <span className="statNo font-semibold text-2xl">2000</span>
                <span className="statTitle text-sm text-blue-600 font-thin">
                  Sellers
                </span>
              </div>
              <div className="statItem">
                <span className="statNo font-semibold text-2xl">2000</span>
                <span className="statTitle text-sm text-blue-600 font-thin">
                  Sellers
                </span>
              </div>
            </div>
          </div>
          {/*  */}

          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default Header
