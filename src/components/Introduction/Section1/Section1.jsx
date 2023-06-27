import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import logo from "./1.jpg";
import { BsPhone } from "react-icons/bs";
import { IconMapping, SocialMediaDashboard } from "../../../Utils/item";
import { GoMail } from "react-icons/go";
const Section1 = () => {
  return (
    <div className="my-24 ">
      <div className="relative">
        <div className="flex justify-center ">
          <img
            src={logo}
            alt="avatar"
            className="rounded-full shadow-xl h-[500px] w-[500px] object-cover object-top"
          />
        </div>

        <div>
          <div className="flex  gap-2 bg-redPrimmary text-white rounded-full items-center py-5  px-10 text-[28px] absolute top-0 left-48 shadow-lg">
            <FaLaptopCode />
            <p>UX/UI</p>
          </div>
        </div>
        <div>
          <div className="flex  gap-2 bg-redPrimmary text-white rounded-full items-center py-5  px-10 text-[28px] absolute bottom-0 left-48 shadow-lg">
            <FaLaptopCode />
            <p>UX/UI</p>
          </div>
        </div>
        <div>
          <div className="flex  gap-2 bg-redPrimmary text-white rounded-full items-center py-5  px-10 text-[28px] absolute top-[40%] left-20">
            <FaLaptopCode />
            <p>UX/UI</p>
          </div>
        </div>
        <div>
          <div className="flex  gap-2 bg-redPrimmary text-white rounded-full items-center py-5  px-10 text-[28px] absolute top-0 right-48 shadow-lg">
            <FaLaptopCode />
            <p>UX/UI</p>
          </div>
        </div>
        <div>
          <div className="flex  gap-2 bg-redPrimmary text-white rounded-full items-center py-5  px-10 text-[28px] absolute bottom-0 right-48 shadow-lg">
            <FaLaptopCode />
            <p>UX/UI</p>
          </div>
        </div>
        <div>
          <div className="flex  gap-2 bg-redPrimmary text-white rounded-full items-center py-5  px-10 text-[28px] absolute top-[40%] right-20">
            <FaLaptopCode />
            <p>UX/UI</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-14 flex  justify-center  ">
        <div className=" w-[870px] flex flex-col gap-5">
          <h3 className="uppercase text-[#ff753f] font-semibold text-[14px]">
            Hi there, I'm Huynh Thanh Nam
          </h3>
          <p className="font-medium text-[60px] leading-[72px] ">
            Gương mặt <strong>Prudential</strong> Million Dollar Round Table
          </p>
          <p className="text-[20px] text-gray-500">
            Xin chào! Tôi là một Gương mặt Prudential Million Dollar Round Table
            (MDRT), chuyên về tư vấn và giải pháp bảo hiểm luôn cam kết hỗ trợ
            khách hàng đạt được mục tiêu tài chính và bảo vệ cho tương lai của
            họ.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-20">
        <div className="">
          <h3 className="text-[15px] mb-2 text-gray-400">Contact me</h3>
          <div className="flex gap-5 text-[40px]  cursor-pointer w-[310px]">
            <BsPhone className=" hover:scale-125 duration-300" />
            {SocialMediaDashboard.slice(0, 2).map((items) => {
              let Icon = IconMapping[items.icon];

              return (
                <>
                  {Icon && (
                    <Icon className=" hover:text-blue-500 hover:scale-125 duration-300 border  " />
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div className="text-[35px]">
          <div className="bg-[#f68d63] text-white rounded-full py-3 px-8 border-4 hover:border-[8px] duration-300 shadow-xl border-[#f1c7a9]">
            <GoMail />
          </div>
        </div>
        <div className="">
          <h3 className="text-end text-[15px] mb-5 text-gray-400">Follow me</h3>
          <div className="flex gap-5 text-[35px]  cursor-pointer">
            {SocialMediaDashboard.slice(2).map((items) => {
              let Icon = IconMapping[items.icon];

              return (
                <>
                  {Icon && (
                    <Icon
                      className={`${
                        items.icon === "AiFillInstagram"
                          ? "hover:text-pink-500"
                          : items.icon === "FaTiktok"
                          ? "hover:text-black"
                          : items.icon === "BsYoutube"
                          ? "hover:text-redPrimmary"
                          : "hover:text-blue-500"
                      }  hover:scale-125 duration-300 border`}
                    />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
