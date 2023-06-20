import React, { useState } from "react";
import Card from "./Card/Card";
import { PersonaSection4Card } from "../../../../routes/Temp";
import { PersonaSection4 } from "../../../../Utils/item";
import { BsArrowRightShort } from "react-icons/bs";
const Section4 = () => {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div className="pb-20">
      <div className="relative ">
        <div className="flex  relative">
          <div className="flex-1"></div>
          <div className="flex-1 h-[900px] bg-slate-200"></div>
        </div>

        <div className="flex flex-col  absolute top-16  w-full items-center gap-16">
          <div className="flex justify-between w-full pr-16">
            <h3 className="text-content">
              <strong>Kiến thức</strong> bảo hiểm
            </h3>
            <div className="text-[#68737a] flex italic gap-3 cursor-pointer">
              {PersonaSection4.map((items, idx) => (
                <div>
                  {" "}
                  <a
                    className={` px-4 py-3 rounded-3xl  ${
                      isSelected === idx
                        ? "bg-[#1b365d] text-white "
                        : "bg-white"
                    }`}
                    onClick={() => setIsSelected(idx)}
                  >
                    {items.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-0 w-full">
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
          <div className="font-bold bg-redPrimmary hover:scale-110 duration-300 hover:shadow-2xl  text-white w-[150px] rounded-3xl py-3 px-6 ">
            Xem chi tiết
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="ml-24">
          <img
            src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/pulse-nhip-song-khoe/tim-hieu-pulse/pulse-promotion-desktop-vietnam-new_756x680.jpg"
            alt="img"
          />
        </div>
        <div className="absolute right-6 top-72 w-[500px] flex flex-col gap-5">
          <h3 className="text-content">
            <strong>Pulse</strong> Sống Cân Bằng
          </h3>
          <p className="text-normal">
            Ứng dụng chăm sóc và quản lý sức khỏe toàn diện từ thể chất tới tinh
            thần, giúp bạn có một cuộc sống cân bằng, tích cực và hiệu quả.{" "}
          </p>
          <div className="flex items-center gap-1 font-bold text-normal">
            <p>Xem chi tiết</p>{" "}
            <BsArrowRightShort className="text-redPrimmary text-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
