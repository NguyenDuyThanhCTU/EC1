import React, { useEffect } from "react";
import { useAuth } from "../../Context/AuthProviders";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";

import { useStateProvider } from "../../Context/StateProvider";
import Sidebar from "./Sidebar/Sidebar";

const Admin = ({ children }) => {
  const { verify } = useAuth();
  const { isUploadProduct } = useStateProvider();
  const navigate = useNavigate();
  const logo1 = "https://image-sn.s3.amazonaws.com/Russo+Tech.png";
  const logo2 = "https://image-sn.s3.amazonaws.com/NDTh.png";

  useEffect(() => {
    if (!verify) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex justify-start font-LexendDeca">
      <Sidebar />
      <Header />
    </div>
  );
};

export default Admin;
