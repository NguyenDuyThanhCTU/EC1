import React, { useEffect, useState } from "react";
import { BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HeaderItems } from "../../../Utils/item";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import DropDown from "./Item/DropDown";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  const [isSelected, setIsSelected] = useState(1);
  const [Hidden, setHidden] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [elementTop, setElementTop] = useState(95);
  const [IsTranslate, setTranslate] = useState(false);
  const targetPosition = 1;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > targetPosition) {
      setElementTop(0);
      setTranslate(true);
    } else {
      setElementTop(95);
      setTranslate(false);
    }
  }, [scrollPosition]);

  return (
    <div className="h-[126px] ">
      <div className="bg-white ">
        <div className=" bg-none h-[126px] relative  bg-white ">
          <div className=" mx-[400px] p:hidden d:flex justify-between  items-center  italic text-[#1b365d] h-[92px] z-50">
            <Link to="/">
              <img
                src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/trang-chu/prudential-logo-181x32.png"
                alt="img"
              />
            </Link>
            <div className="flex gap-5 items-center font-bold cursor-pointer ">
              <BsSearch className="text-normal" />
              <BsFillTelephoneFill className="text-normal" />
              <a className=" flex items-center gap-1 ">
                <HiOutlineShoppingBag className="text-normal" />
                <span className="">Mua bảo hiểm trên e-Prudential</span>
              </a>
            </div>
          </div>

          <div className="p:block d:hidden w-full  h-[60px] ">
            <div className="flex justify-end  items-center">
              <img
                src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/trang-chu/prudential-logo-181x32.png"
                alt="logo"
                className="h-[32px]"
              />
              <div className="flex items-center text-[60px]">
                <BsSearch className="p-5" />
                <BsFillTelephoneFill className="p-5" />
                {Hidden ? (
                  <RxCross1
                    className="bg-redPrimmary text-white p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                ) : (
                  <MdOutlineFormatListBulleted
                    className="bg-redPrimmary text-white p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                )}
              </div>
            </div>
            <div
              className={`${
                Hidden ? "h-screen" : "h-0 "
              } w-full duration-700 bg-[rgba(253,253,253,0.9)] overflow-hidden`}
            >
              {HeaderItems.map((items) => (
                <DropDown content={items.Content} title={items.title} />
              ))}
              <div className="mt-10">
                <div className="border-2 rounded-md flex gap-1 items-center justify-center py-3 mx-5 text-[18px] italic text-[#1b365d] font-semibold">
                  <BiUserCircle className="text-[25px]" />
                  <p>Đăng nhập</p>
                </div>
              </div>
            </div>
          </div>

          <div className="d:flex flex-col p:hidden">
            <div
              className={`fixed z-50 ${
                IsTranslate
                  ? "w-full bg-white text-black"
                  : "mx-[400px] w-[1103px] bg-redPrimmary text-white  "
              }   duration-300 h-[69px] rounded-lg flex justify-center  items-center text-normal font-semibold gap-20`}
              style={{ top: `${elementTop}px` }}
            >
              {/* <div
            className="scrollable-element h-[200px] w-[200px] bg-red-500 absolute top-[0] left-[0] transform transition-transform duration-300"
            style={{ top: `${elementTop}px` }}
          > */}
              {HeaderItems.map((items, idx) => (
                <div className="relative">
                  <Link to={items.link}>
                    <button
                      className=""
                      onClick={() => {
                        setIsSelected(idx);
                      }}
                    >
                      {items.Content}
                    </button>
                  </Link>
                  <div
                    className={` ${
                      isSelected === idx
                        ? IsTranslate
                          ? "w-full bg-black"
                          : "w-full bg-white"
                        : "w-0"
                    }  duration-500 h-2 rounded-3xl absolute -bottom-[23px]`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
