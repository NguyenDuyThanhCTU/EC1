import React, { useState } from "react";
import { ProductSection2 } from "../../../Utils/item";
import { ProductSection2Card } from "../../../Utils/temp";
import Card from "../../Item/Card";

const Section2 = () => {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div className="relative mb-10 ">
      <div className="">
        <div className="text-[#68737a] d:flex italic gap-4 cursor-pointer justify-center mb-10 p:grid grid-cols-3">
          {ProductSection2.map((items, idx) => (
            <div>
              <div
                className={` px-4 py-3 rounded-3xl  ${
                  isSelected === idx ? "bg-[#1b365d] text-white " : "bg-white"
                }`}
                onClick={() => setIsSelected(idx)}
              >
                {items.name}
              </div>
            </div>
          ))}
        </div>
        <div className="d:grid grid-cols-3 gap-10 d:mx-20 p:mx-0 p:flex flex-col items-center">
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
