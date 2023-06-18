import React from "react";
import { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import OnTop from "./PopUp/OnTop";
import Hotline from "./PopUp/Hotline";

const DefaultLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="relative">
      <Header Login={setIsLogin} />
      <main className="z-0">{children}</main>
      <Footer />
      <div className="z-50 fixed">
        <OnTop />
        <Hotline />
      </div>
    </div>
  );
};

export default DefaultLayout;
