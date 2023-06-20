import React from "react";
import { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hotline from "./PopUp/Hotline";

const PersonaLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="font-OpenSans bg-[#e8edef] relative w-[1920px]">
      <div className="z-50 relative">
        <Header Login={setIsLogin} />
      </div>

      <main className="mx-[250px] ">
        {children}
        <div>
          <Footer />
        </div>
      </main>

      <div className="z-50 fixed">
        <Hotline />
      </div>
    </div>
  );
};

export default PersonaLayout;
