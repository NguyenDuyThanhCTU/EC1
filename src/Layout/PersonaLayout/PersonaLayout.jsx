import React from "react";
import { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hotline from "./PopUp/Hotline";

const PersonaLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="font-OpenSans bg-[#e8edef]">
      <Header Login={setIsLogin} />

      <main className="z-0 mx-[250px] ">
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
