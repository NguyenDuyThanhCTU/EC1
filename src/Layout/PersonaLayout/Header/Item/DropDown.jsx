import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { BiBookAlt, BiCalculator } from "react-icons/bi";
import { RxMagicWand } from "react-icons/rx";
import { Link } from "react-router-dom";

const DropDown = ({ option, login }) => {
  return (
    <>
      {option === 1 ? (
        <div className="p-3 min-w-[260px] border-colortopdownBlue border border-solid rounded bg-white relative z-30 ">
          <ul className="text-colortopdownGray leading-6 text-[13px] font-semibold">
            <li className=" hover:bg-colortopdownBlue1  duration-300 element-dropdown">
              <BsEmojiSmile className="inline-block text-colortopdownBlue mr-2" />
              Trắc ngiệm tính cách
            </li>
            <li className="hover:bg-colortopdownBlue1  duration-300 element-dropdown">
              <BiCalculator className="inline-block text-colortopdownBlue mr-2" />
              Tính lương Gross sang Net
            </li>
            <li className="hover:bg-colortopdownBlue1  duration-300 element-dropdown">
              <RxMagicWand className="inline-block text-colortopdownBlue mr-2 " />
              Trang trí CV
            </li>
            <li className="hover:bg-colortopdownBlue1  duration-300 element-dropdown">
              <BiBookAlt className="inline-block text-colortopdownBlue mr-2" />
              Cẩm nang nghề nghiệp
            </li>
          </ul>

          <div className="absolute w-4 h-4 border border-b-0 border-r-0 bg-white border-solid border-colortopdownBlue -top-2 right-[50%] transform rotate-45 z-0"></div>
          <div className="w-full h-4 bg-none absolute -top-3"> </div>
        </div>
      ) : option === 2 ? (
        <>
          {" "}
          <div className="p-3  border-colortopdownBlue border border-solid rounded bg-white relative z-10 ">
            <ul className="text-colortopdownGray leading-6 text-[13px] font-semibold">
              <li className=" hover:bg-colortopdownBlue1  duration-300 element-dropdown">
                Miền Bắc
              </li>
              <li className="hover:bg-colortopdownBlue1  duration-300 element-dropdown">
                Miền Nam
              </li>
            </ul>

            <div className="absolute w-4 h-4 border border-b-0 border-r-0 bg-white border-solid border-colortopdownBlue -top-2 right-[50%] transform rotate-45 z-0"></div>
            <div className="w-full h-4 bg-none absolute -top-3"> </div>
          </div>
        </>
      ) : (
        <>
          <div className="p-3  border-colortopdownBlue border border-solid rounded bg-white relative z-10 ">
            <ul className="text-colortopdownGray leading-6 text-[13px] font-semibold">
              <Link to="profile">
                <li className=" hover:bg-colortopdownBlue1  duration-300 element-dropdown">
                  Tài khoản
                </li>
              </Link>
              <li
                className="hover:bg-colortopdownBlue1  duration-300 element-dropdown"
                onClick={() => login(false)}
              >
                Đăng xuất
              </li>
            </ul>

            <div className="absolute w-4 h-4 border border-b-0 border-r-0 bg-white border-solid border-colortopdownBlue -top-2 right-[50%] transform rotate-45 z-0"></div>
            <div className="w-full h-4 bg-none absolute -top-3"> </div>
          </div>
        </>
      )}
    </>
  );
};

export default DropDown;
