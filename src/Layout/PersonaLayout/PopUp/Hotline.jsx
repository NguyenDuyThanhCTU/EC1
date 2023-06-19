import React from "react";
import { IoCall } from "react-icons/io5";
function Hotline() {
  return (
    <div className="fixed bottom-0 left-0 z-[9999px] box-border">
      <div>
        <a
          class="text-white absolute bottom-[100px] left-2 bg-blue-500 rounded-2xl  py-1 px-5 font-semibold"
          href="http://zalo.me/0933384866"
          target="_blank"
          rel="noreferrer"
        >
          Chat zalo
        </a>
      </div>
      <div>
        <div className="h-10 w-10 absolute top-10 left-2 ml-3  call-animation">
          <IoCall className=" " />
        </div>
        <div className="text-white ml-6 mb-8 font-semibold flex justify-center items-center rounded-3xl w-[180px] h-[40px] bg-[rgb(221,51,51,.7)]">
          <a href="tel:0971706658">
            <span>0971706658</span>
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Hotline;
