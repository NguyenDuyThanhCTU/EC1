import React, { useEffect, useState } from "react";
import { BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HeaderItems } from "../../../Utils/item";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSelected, setIsSelected] = useState(10);
  const [Hidden, setHidden] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [elementTop, setElementTop] = useState(95);
  const [IsTranslate, setTranslate] = useState(false);
  const targetPosition = 1;
  console.log(scrollPosition);
  useEffect(() => {
    if (Hidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [Hidden]);

  const HandleSelected = (idx) => {
    if (isSelected === idx) {
      setHidden(!Hidden);
    } else {
      setIsSelected(idx);
      setHidden(true);
    }
  };

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
          <div className="mx-[400px] flex justify-between  items-center  italic text-[#1b365d] h-[92px] z-50">
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

          <div className="flex flex-col 0">
            <div
              className={`fixed z-50 ${
                IsTranslate
                  ? "w-full bg-white text-black"
                  : "mx-[400px] w-[1103px] bg-redPrimmary text-white  "
              }   duration-300 h-[69px] rounded-lg flex justify-center  items-center text-normal font-semibold gap-14`}
              style={{ top: `${elementTop}px` }}
            >
              {/* <div
            className="scrollable-element h-[200px] w-[200px] bg-red-500 absolute top-[0] left-[0] transform transition-transform duration-300"
            style={{ top: `${elementTop}px` }}
          > */}
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
            </div>

            <div
              className={`bg-white  z-0
              ${
                Hidden
                  ? IsTranslate
                    ? "translate-y-[20px]"
                    : "translate-y-[10px]"
                  : IsTranslate
                  ? "-translate-y-[300px]"
                  : "-translate-y-[400px]"
              } 
              duration-700 transition fixed   w-screen mt-5 -z-50 `}
              style={{ top: `${elementTop}px` }}
            >
              <div className="">
                <div className="bg-white  ">
                  <div className=" mx-[400px] grid text-[22px] pt-[70px] pb-[60px]  grid-cols-4 gap-10 cursor-pointer ">
                    {HeaderItems[isSelected]?.title.map((items) => (
                      <p className="w-[250px] hover:scale-105 duration-300 ">
                        {items.name}
                        <AiOutlineRight className="inline-block text-redPrimmary text-[15px] ml-1 " />
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {Hidden ? (
                <div className="w-full h-[700px]   bg-[rgba(0,0,0,0.3)] absolute -bottom-[700px]"></div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
