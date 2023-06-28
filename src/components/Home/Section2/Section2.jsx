import React, { useState } from "react";
import Card from "../../Job/Section2/Card/Card";
import { PersonaSection2 } from "../../../Utils/item";
import { PersonaSection2Card } from "../../../routes/Temp";

const Section2 = () => {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div className="relative ">
      <div className="flex  relative">
        <div className="flex-1"></div>
        <div className="flex-1 h-[900px] bg-grayBg"></div>
      </div>

      <div className="flex flex-col  absolute top-16  w-full items-center gap-16">
        <div className="flex justify-between w-full pr-16">
          <h3 className="text-content">
            <strong>Thông tin</strong> mới nhất
          </h3>
          <div className="text-[#68737a] flex italic gap-3 cursor-pointer">
            {PersonaSection2.map((items, idx) => (
              <div>
                <a
                  className={` px-4 py-3 rounded-3xl  ${
                    isSelected === idx ? "bg-[#1b365d] text-white " : "bg-white"
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
          {PersonaSection2Card.slice(0, 3).map((items) => (
            <>
              <Card
                image={items.image}
                date={items.date}
                type={items.type}
                title={items.title}
                content={items.content}
                link={items.link}
              />
            </>
          ))}
        </div>
        <div className="font-bold bg-redPrimmary hover:scale-110 duration-300 hover:shadow-2xl  text-white w-[150px] rounded-3xl py-3 px-6 ">
          Xem chi tiết
        </div>
      </div>
    </div>
  );
};

export default Section2;
