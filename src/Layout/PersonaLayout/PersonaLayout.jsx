import React from "react";
import { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import OnTop from "./PopUp/OnTop";
import Hotline from "./PopUp/Hotline";

const PersonaLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="font-OpenSans">
      <Header Login={setIsLogin} />

      <main className="z-0 mx-[400px] mt-10">{children}</main>
      <Footer />
      <div className="z-50 fixed">
        <OnTop />
        <Hotline />
      </div>
    </div>
  );
};

export default PersonaLayout;
