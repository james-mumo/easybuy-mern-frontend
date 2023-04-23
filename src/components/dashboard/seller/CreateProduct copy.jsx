import React from "react";
import ProductCard from "../../../../components/cards/ProductCard";
import { Button } from "@material-tailwind/react";

const CreateProduct = () => {
  return (
    <div className="createProductDiv flex flex-row justify-around">
      <div className="leftProdDiv createdProdImg relative flex flex-col w-80 h-[450px] border justify-around items-center">
        <div className="cardContainer w-[18rem] h-54 flex flex-col border border-red-800">
          <ProductCard />
        </div>
        <div className="otherProdImages flex flex-row items-center justify-center gap-5 absolute bottom-0 w-full">
          <img
            src="./images/img/Crypto bull.png"
            alt=""
            className="createdProdImg flex flex-col border h-12 w-10"
          />
          <img
            src="./images/img/Crypto bull.png"
            alt=""
            className="createdProdImg flex flex-col border h-12 w-10"
          />
          <img
            src="./images/img/Crypto bull.png"
            alt=""
            className="createdProdImg flex flex-col border h-12 w-10"
          />
        </div>
      </div>
      {/*  */}
      <div className="rightProdDiv w-[60vw] border flex flex-col">
        <div className="itemCreationDiv flex flex-row">
          <div className="itemDetails flex flex-col w-4/6 gap-2 border p-4 items-center">
            <div className="topDetailsDiv flex flex-row justify-around border border-green-700 w-full">
              <div className="itemInput flex flex-col">
                <label htmlFor="Title">Title</label>
                <input type="text" placeholder="Enter Your Product Name..." />
              </div>
              <div className="itemInput flex flex-col">
                <label htmlFor="Title">Category</label>
                <input type="text" placeholder="This should be a dropdown." />
              </div>
            </div>
            <div className="itemDesc flex flex-col w-5/6 border border-green-700">
              <label htmlFor="itemDesc">Description</label>
              <textarea name="itemDesc" id="" cols="100" rows="5"></textarea>
            </div>

            <div className="itemBottomDetails w-full flex flex-row justify-around border border-green-700">
              <div className="itemInput flex flex-col">
                <label htmlFor="Title">Price</label>
                <input type="number" placeholder="This should Number Only." />
              </div>
              <div className="itemInput flex flex-col ">
                <label htmlFor="stock">Stock</label>
                <input type="number" name="stock" id="" />
              </div>
            </div>
            {/*  */}
            <Button className="publishItemBtn px-5 cursor-pointer">
              Save Item
            </Button>
            {/*  */}
          </div>
          {/*  */}
          <div className="itemImagesAndVidDiv w-2/6 border border-green-700">
            <div className="mainImage py-4 px-5">
              <label class="uploadFile">
                <input
                  type="file"
                  className="inputfile"
                  id="upload-img2"
                  name="file"
                />
              </label>
            </div>
            <div className="otherImages flex flex-col gap-2">
              <label class="uploadFile">
                <input
                  type="file"
                  className="inputfile"
                  id="upload-img2"
                  name="file"
                />
              </label>

              <label
                htmlFor="otherImagesImg"
                className="uploadFile w-[20vw] otherImagesImg "
              >
                <input
                  type="file"
                  className="inputfile"
                  name="otherImages1 cursor-pointer"
                  id=""
                />
              </label>
              <label
                htmlFor="otherImagesImg"
                className="uploadFile w-[20vw] otherImagesImg "
              >
                <input
                  type="file"
                  className="inputfile"
                  name="otherImages1 cursor-pointer"
                  id=""
                />
              </label>
            </div>
            <div className="uploadReelVideoDiv w-full py-5 flex justify-center items-center border">
              <label
                htmlFor="otherImagesImg"
                className="uploadReelVideo w-[20vw] otherImagesImg "
              >
                <input
                  type="file"
                  className="inputfile"
                  name="otherImages1 cursor-pointer"
                  id=""
                />
              </label>
            </div>
            <div className="fileUploadSuceessDiv w-full flex justify-center items-center py-4">
              <span>
                All Files Uploaded Successfully, you can publsih your item now!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
