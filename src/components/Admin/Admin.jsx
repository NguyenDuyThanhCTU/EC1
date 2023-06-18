import React, { useEffect } from "react";
import { useAuth } from "../../Context/AuthProviders";
import { useNavigate } from "react-router-dom";
import Header from "./UI/Header";
import Webconfig from "./UI/WebConfig";

const Admin = () => {
  const { verify } = useAuth();
  const navigate = useNavigate();
  const logo1 = "https://image-sn.s3.amazonaws.com/Russo+Tech.png";
  const logo2 = "https://image-sn.s3.amazonaws.com/NDTh.png";

  useEffect(() => {
    if (!verify) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <Webconfig />
    </>
  );
};

export default Admin;
