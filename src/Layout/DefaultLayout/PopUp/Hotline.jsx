import React from "react";
import { BsMessenger } from "react-icons/bs";

function Hotline() {
  return (
    <div className="fixed bottom-5 left-5  box-border">
      <div className=" mess-animation ">
        <BsMessenger className=" w-10 h-10 text-white" />
      </div>
    </div>
  );
}

export default Hotline;
