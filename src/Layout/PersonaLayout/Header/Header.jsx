import React, { useState } from "react";
import { BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HeaderItems } from "../../../Utils/item";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSelected, setIsSelected] = useState(10);
  const [Hidden, setHidden] = useState(false);

  const HandleSelected = (idx) => {
    if (isSelected === idx) {
      setHidden(!Hidden);
    } else {
      setIsSelected(idx);
      setHidden(true);
    }
  };

  return (
    <div className=" mb-96 ">
      <div className="bg-[#e8edef] ">
        <div className=" bg-none h-[126px] relative z-50 bg-[#e8edef] ">
          <div className="mx-[400px] flex justify-between  items-center  italic text-[#1b365d] h-[92px]">
            <Link to="/">
              <img
                src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/trang-chu/prudential-logo-181x32.png"
                alt="img"
              />
            </Link>
            <div className="flex gap-5 items-center font-bold cursor-pointer">
              <BsSearch className="text-normal" />
              <BsFillTelephoneFill className="text-normal" />
              <a className=" flex items-center gap-1 ">
                <HiOutlineShoppingBag className="text-normal" />
                <span className="">Mua bảo hiểm trên ePru</span>
              </a>
              <div className="">
                <span className="border-2 rounded-l-3xl border-gray-200 px-3 py-1 w-[90px]">
                  Cá nhân
                </span>
                <span className="border-2 rounded-r-3xl bg-gray-200 px-1 py-1 w-[90px] text-gray-400">
                  Doanh nghiệp
                </span>
              </div>
              <div>
                <span className="border-2 rounded-3xl border-gray-200 py-1 px-3">
                  Đăng nhập
                </span>
              </div>
            </div>
          </div>

          <div className=" mx-[400px] w-[1103px] bg-redPrimmary  absolute h-[69px] rounded-lg flex justify-center  items-center text-normal text-white font-semibold gap-7 ">
            {HeaderItems.map((items, idx) => (
              <div className="relative">
                <button
                  className=""
                  onClick={() => {
                    HandleSelected(idx);
                  }}
                >
                  {items.Content}
                </button>
                <div
                  className={`bg-white ${
                    isSelected === idx ? "w-full" : "w-0"
                  }  duration-500 h-2 rounded-3xl absolute -bottom-[23px]`}
                ></div>
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </div>
      <div
        className={`bg-white ${
          Hidden ? "translate-y-0 " : "-translate-y-[302px]"
        } duration-700 transition`}
      >
        <div className="">
          <div className="bg-white  shadow-md">
            <div className=" mx-[400px] grid text-[22px] pt-[70px] pb-[60px]  grid-cols-4 gap-10 ">
              {HeaderItems[isSelected]?.title.map((items) => (
                <p className="w-[250px] ">
                  {items.name}
                  <AiOutlineRight className="inline-block text-redPrimmary text-[15px] ml-1 " />
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
