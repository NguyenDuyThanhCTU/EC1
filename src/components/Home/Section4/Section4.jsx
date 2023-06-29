import React, { useState } from "react";
import Card from "./Card/Card";

import { BsArrowRightShort } from "react-icons/bs";
import { PersonaSection4Card } from "../../../routes/Temp";
import { PersonaSection4 } from "../../../Utils/item";
const Section4 = () => {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div className="pb-20">
      <div className="relative ">
        <div className="d:flex  relative p:hidden">
          <div className="flex-1"></div>
          <div className="flex-1 h-[900px] bg-slate-200"></div>
        </div>

        <div className="flex flex-col  d:absolute p:relative top-16  w-full items-center gap-16">
          <div className="flex justify-between w-full pr-16 d:flex-row p:flex-col">
            <h3 className="text-content">
              <strong>Kiến thức</strong> bảo hiểm
            </h3>
            <div className="text-[#68737a] flex italic gap-3 cursor-pointer">
              {PersonaSection4.map((items, idx) => (
                <div>
                  {" "}
                  <div
                    className={` px-4 py-3 rounded-3xl  ${
                      isSelected === idx
                        ? "bg-[#1b365d]  text-white "
                        : "bg-white"
                    }`}
                    onClick={() => setIsSelected(idx)}
                  >
                    {items.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d:grid grid-cols-3 gap-0 w-full p:flex flex-col items-center">
            {PersonaSection4Card.slice(0, 3).map((items) => (
              <>
                <Card
                  image={items.image}
                  date={items.date}
                  type={items.type}
                  title={items.title}
                  content={items.content}
                />
              </>
            ))}
          </div>
          <div className="font-bold bg-redPrimmary hover:scale-110 duration-300 hover:shadow-2xl  text-white w-[150px] rounded-3xl py-3 px-6 cursor-pointer">
            Xem chi tiết
          </div>
        </div>
      </div>

      <div className="relative p:flex flex-col d:block p-2">
        <div className="d:ml-24 p:ml-0">
          <img
            src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/pulse-nhip-song-khoe/tim-hieu-pulse/pulse-promotion-desktop-vietnam-new_756x680.jpg"
            alt="img"
          />
        </div>
        <div className="d:absolute  p:static right-6 top-72 d:w-[500px] p:w-auto flex flex-col gap-5">
          <h3 className="text-content">
            <strong>Pulse</strong> Sống Cân Bằng
          </h3>
          <p className="text-normal">
            Ứng dụng chăm sóc và quản lý sức khỏe toàn diện từ thể chất tới tinh
            thần, giúp bạn có một cuộc sống cân bằng, tích cực và hiệu quả.{" "}
          </p>
          <div className="flex items-center gap-1 font-bold text-normal cursor-pointer">
            <p>Xem chi tiết</p>{" "}
            <BsArrowRightShort className="text-redPrimmary text-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
