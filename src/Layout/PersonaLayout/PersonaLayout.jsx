import React from "react";
import { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hotline from "./PopUp/Hotline";

const PersonaLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="font-OpenSans bg-[#e8edef] relative w-screen">
      <div className="z-50 relative">
        <Header Login={setIsLogin} />
      </div>

      <main className="d:mx-[250px] p:mx-2">
        {children}
        <div>
          <Footer />
        </div>
      </main>

      <div className="z-40 fixed">
        <Hotline />
      </div>
    </div>
  );
};

export default PersonaLayout;
