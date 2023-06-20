import React, { useState } from "react";
import { useAuth } from "../../../Context/AuthProviders";
import DropDown from "../Item/DropDown";
import { useStateProvider } from "../../../Context/StateProvider";

const Header = () => {
  const { users } = useAuth();

  const { setSelectedRole, isSelectedRole } = useStateProvider();
  return (
    <div className=" h-14 bg-Blue3D font-LexendDeca text-white flex w-screen">
      <div className="flex justify-between w-full mx-10 items-center relative ">
        <div className="flex gap-32 cursor-pointer">
          <div className="flex items-center">
            <div className="group relative">
              <img
                src={users?.photoURL}
                alt="logo"
                className="w-12 h-12 inline-block"
              />
              <div className="absolute right-[-115px] top-[75px] hidden  group-hover:block ">
                <DropDown />
              </div>
            </div>

            <p className="inline-block ml-3">{users?.displayName}</p>
          </div>
        </div>

        <div className="cursor-pointer flex gap-20 ">
          <div onClick={() => setSelectedRole(1)}>
            <p className="hover:scale-110 duration-300">Doanh nghiệp</p>
          </div>
          <div onClick={() => setSelectedRole(0)}>
            <p className="hover:scale-110 duration-300">Cá nhân</p>
          </div>
        </div>
        <div
          className={`w-5 h-1 bg-red-500 absolute right-14 bottom-3 ${
            isSelectedRole === 0
              ? "translate-x-[12px] transform  transition duration-700"
              : isSelectedRole === 1
              ? "-translate-x-[175px] transform  transition duration-700"
              : null
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Header;
