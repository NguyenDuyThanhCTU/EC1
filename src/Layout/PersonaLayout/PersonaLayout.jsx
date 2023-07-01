import React from "react";
import { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hotline from "./PopUp/Hotline";

const PersonaLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="font-OpenSans bg-[#e8edef] relative ">
      <div className="z-50 relative">
        <Header Login={setIsLogin} />
      </div>
      <main>{children} </main>
      <div className="flex  justify-center">
        <Footer />
      </div>
      <div className="z-40 fixed">
        <Hotline />
      </div>
    </div>
  );
};

export default PersonaLayout;
