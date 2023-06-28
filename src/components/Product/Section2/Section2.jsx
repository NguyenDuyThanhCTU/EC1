import React, { useState } from "react";
import { ProductSection2 } from "../../../Utils/item";
import { ProductSection2Card } from "../../../Utils/temp";
import Card from "../../Job/Section2/Card/Card";

const Section2 = () => {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div className="relative mb-10 p:hidden d:block">
      <div className="">
        <div className="text-[#68737a] flex italic gap-4 cursor-pointer justify-center mb-10 ">
          {ProductSection2.map((items, idx) => (
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
        <div className="grid grid-cols-3 gap-10 mx-20">
          {ProductSection2Card.map((items) => (
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
      </div>
    </div>
  );
};

export default Section2;
