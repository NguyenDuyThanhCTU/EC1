import { Link } from "react-router-dom";
import React, { useState } from "react";
import { BsBellFill, BsList, BsListTask } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import DropDown from "./Item/DropDown";
import DropDownS from "./Item/DropDownS";
import DropDownUser from "./Item/DropDownUser";
import PhoneDropDown from "./Item/PhoneDropDown";

const Header = ({ Login, Click }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDropDown, setIsDropDown] = useState(false);
  const [DropDownMainHeader, setDropDownMainHeader] = useState(false);
  const itemDropDown = [
    { id: 1, name: "Cơ hội việc làm", link: "/job" },
    { id: 2, name: "Công cụ", link: "/" },
    { id: 3, name: "Gói đăng tin miễn phí", link: "/" },
    { id: 4, name: "Nhà tuyển dụng", link: "/employer" },
  ];
  return (
    <div className="font-LexendDeca h-16 bg-primary bg-pri">
      <div className="bg-primary flex flex-row  justify-evenly h-16 text-white items-center cursor-pointer ">
        <div className=" flex justify-between p:w-full d:w-auto mx-6">
          <Link to="/">
            <div className="h-16  pr-4 d:border-r d:border-[#5C27D6] w-[144px]  text-center">
              <img
                className=" w-1/2"
                src="https://firebasestorage.googleapis.com/v0/b/sanvieclamcantho-1d6c5.appspot.com/o/logosanvieclamcantho.jpg?alt=media&token=ef1995a4-47a5-4741-9908-05a60c4ddb62"
              />
            </div>
          </Link>
          <div className="d:hidden p:flex items-center relative">
            {isLoggedIn ? (
              <div className="pl-[5px]  h-16  flex justify-between gap-5 items-center ">
                <BsBellFill className="hover:bg-colorBlueBoldHover text-[30px] p-2 text-white rounded-full" />
                <div
                  className="flex flex-row justify-between items-center h-16 px-2 gap-2 hover:bg-colorBlueBoldHover group relative"
                  onClick={() => setIsDropDown(!isDropDown)}
                >
                  <img
                    src="https://vieclam24h.vn/img/default_avatar.svg"
                    alt="img"
                    className="w-[40px] h-[40px]"
                  />
                  <p>Thanh</p>
                  <IoMdArrowDropdown className="text-white  text-[20px] inline-block" />
                  <div
                    className={`absolute right-[-0px] top-[75px] ${
                      isDropDown ? "block" : "hidden"
                    }  group-hover:block `}
                  >
                    <DropDownUser />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="flex flex-col justify-center h-16 leading-[32px] hover:bg-privaryhover pl-[28px] pr-[20px]"
                onClick={() => Login(true)}
              >
                <p className=" text-[10px] leading-[16px] font-semibold">
                  Người tìm việc
                </p>
                <h3 className=" text-[14px]  leading-[24px] font-semibold">
                  Đăng ký/Đăng nhập
                </h3>
              </div>
            )}
            <div
              className="
            "
              onClick={() => {
                setDropDownMainHeader(!DropDownMainHeader);
              }}
            >
              {" "}
              <BsList className="text-[40px] " />
              {DropDownMainHeader && <PhoneDropDown Items={itemDropDown} />}
            </div>
          </div>

          <div className="  text-[13px] font-semibold d:flex p:hidden">
            <Link
              className="h-16 leading-[64px] hover:bg-privaryhover pl-[28px] pr-[20px]"
              to="/job"
            >
              Cơ hội việc làm
            </Link>
            <div className="h-16 leading-[64px] hover:bg-privaryhover px-4 group">
              <div className="inline-block  relative">
                Công cụ
                <div className="absolute right-[-130px] top-[75px] hidden  group-hover:block ">
                  <DropDown option={1} />
                </div>
              </div>
              <p className="inline-block hover:scale-125 duration-300 ml-[5px] text-[10px] font-medium text-white bg-[#FC5434] px-2 rounded-lg leading-4	">
                MỚI
              </p>
              <IoMdArrowDropdown className="text-white ml-1 text-[20px] inline-block" />
            </div>
            <Link
              className="h-16 leading-[64px] hover:bg-privaryhover px-2"
              href="/"
            >
              Gói đăng tin miễn phí
            </Link>
          </div>
        </div>
        <div className="d:flex p:hidden  text-[13px] font-semibold ">
          <div className="h-16 leading-[64px] hover:bg-privaryhover pl-[28px] pr-[20px] relative  group">
            Miền nam
            <IoMdArrowDropdown className="text-white ml-1 text-[20px] inline-block" />
            <div className="absolute right-0 top-[75px] hidden  group-hover:block ">
              <DropDownS />
            </div>
          </div>
          {isLoggedIn ? (
            <div className="pl-[5px]  h-16  flex justify-between gap-5 items-center ">
              <BsBellFill className="hover:bg-colorBlueBoldHover text-[30px] p-2 text-white rounded-full" />
              <div className="flex flex-row justify-between items-center h-16 px-2 gap-2 hover:bg-colorBlueBoldHover group relative">
                <img
                  src="https://vieclam24h.vn/img/default_avatar.svg"
                  alt="img"
                  className="w-[40px] h-[40px]"
                />
                <p>Thanh</p>
                <IoMdArrowDropdown className="text-white  text-[20px] inline-block" />
                <div className="absolute right-[-0px] top-[75px] hidden  group-hover:block ">
                  <DropDownUser />
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex flex-col justify-center h-16 leading-[32px] hover:bg-privaryhover pl-[28px] pr-[20px]"
              onClick={() => Login(true)}
            >
              <p className=" text-[10px] leading-[16px] font-semibold">
                Người tìm việc
              </p>
              <h3 className=" text-[14px]  leading-[24px] font-semibold">
                Đăng ký/Đăng nhập
              </h3>
            </div>
          )}
          <Link to="/employer">
            <div className="h-16 text-[14px]  leading-[64px] hover:bg-privaryhover pl-[28px] pr-[20px] border-l border-[#5C27D6]">
              Nhà Tuyển Dụng
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
