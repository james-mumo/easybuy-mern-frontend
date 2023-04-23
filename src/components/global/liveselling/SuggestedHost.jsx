import React from "react";

const SuggestedHost = () => {
  return (
    <div className="suggestedHostCard flex flex-col">
      <div className="suggestedHostItem flex flex-row gap-3 items-center justify-between">
        <div className="hostInfoDiv flex flex-row  gap-3">
          <img
            src="https://res.cloudinary.com/djv535hkn/image/upload/v1682279300/easybuy/Ape_Kids_Club3_unkcpw.png"
            alt=""
            className="hostShopLogo h-10 w-10 rounded-lg overflow-hidden border-[1px] border-gray-600"
          />
          <div className="hostInfo text-sm flex flex-col">
            <span className="showOwnerName font-semibold">Njoki Murira</span>
            <span className="shopCategory">Kid's Clothes</span>
          </div>
        </div>
        <span className="viewersCount">765</span>
      </div>
    </div>
  )
};

export default SuggestedHost;
