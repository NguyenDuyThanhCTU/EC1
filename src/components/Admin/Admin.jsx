import React, { useEffect } from "react";
import { useAuth } from "../../Context/AuthProviders";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";

import { useStateProvider } from "../../Context/StateProvider";
import Sidebar from "./Sidebar/Sidebar";
import Persona from "./Content/Persona/Persona";
import Businesses from "./Content/Businesses/Businesses";

const Admin = () => {
  const { verify } = useAuth();
  const { isUploadProduct, isSelectedRole } = useStateProvider();
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
      <div className="w-[350px]">
        <Sidebar />
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
