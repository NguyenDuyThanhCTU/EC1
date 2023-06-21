import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthProviders";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";

import { useStateProvider } from "../../Context/StateProvider";
import Sidebar from "./Sidebar/Sidebar";
import Persona from "./Content/Persona/Persona";
import Businesses from "./Content/Businesses/Businesses";
import { RxCrossCircled } from "react-icons/rx";
import { FaList } from "react-icons/fa";

const Admin = () => {
  const { verify } = useAuth();
  const { isUploadProduct, isSelectedRole } = useStateProvider();
  const [Hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  const logo1 = "https://image-sn.s3.amazonaws.com/Russo+Tech.png";
  const logo2 = "https://image-sn.s3.amazonaws.com/NDTh.png";

  useEffect(() => {
    if (!verify) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="grid grid-flow-col font-LexendDeca">
      <div
        className={`${
          Hidden ? "w-[1px] " : "w-[350px] "
        }  duration-700  relative`}
      >
        <div className="p:block d:hidden absolute -right-10 top-0 bg-none text-white text-[30px] p-2 ">
          {Hidden ? (
            <FaList
              className="bg-gray-500"
              onClick={() => setHidden(!Hidden)}
            />
          ) : (
            <RxCrossCircled onClick={() => setHidden(!Hidden)} />
          )}
        </div>
        <div className="overflow-hidden">
          <Sidebar />
        </div>
      </div>

      <div className="w-[1570px] bg-[#292929]">
        <Header />
        <div>
          {isSelectedRole === 0 ? (
            <Persona />
          ) : isSelectedRole === 1 ? (
            <Businesses />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Admin;
