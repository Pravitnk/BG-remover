import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex items-center justify-between  max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/*....... left-side .......*/}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            Background
          </span>{" "}
          from <br className="max-md:hidden" />
          image for free.
        </h1>
        <p className="text-[14px] my-6 text-gray-700">
          Transform your images effortlessly with our AI-powered background
          removal tool.
          <br className="max-sm:hidden" /> In just a few clicks, remove unwanted
          backgrounds and make your visuals stand out.
          <br className="max-sm:hidden" /> Fast, accurate, and simple—designed
          for creators, businesses, and anyone looking
          <br className="max-sm:hidden" /> to enhance their photos with
          precision and ease.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
            htmlFor="upload1"
          >
            <img width={20} src={assets.upload_btn_icon} alt="file" />
            <p className="text-white text-sm">Upload Your Image</p>
          </label>
        </div>
      </div>

      {/*....... right-side .......*/}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
