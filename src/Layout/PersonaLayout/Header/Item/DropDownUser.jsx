import React from "react";
import { Link } from "react-router-dom";

const DropDownUser = () => {
  return (
    <div>
      <div className="p-3  border-colortopdownBlue border border-solid rounded bg-white relative z-10 ">
        <ul className="text-colortopdownGray leading-6 text-[13px] font-semibold">
          <Link to="/profile">
            {" "}
            <li className="hover:bg-colortopdownBlue1  duration-300 element-dropdown">
              Tài khoản
            </li>
          </Link>
          <li className=" hover:bg-colortopdownBlue1  duration-300 element-dropdown">
            Đăng xuất
          </li>
        </ul>

        <div className="absolute w-4 h-4 border border-b-0 border-r-0 bg-white border-solid border-colortopdownBlue -top-2 right-[50%] transform rotate-45 z-0"></div>
        <div className="w-full h-4 bg-none absolute -top-3"> </div>
      </div>
    </div>
  );
};

export default DropDownUser;
