import React from "react";

const DropDownS = () => {
  return (
    <div>
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
    </div>
  );
};

export default DropDownS;
