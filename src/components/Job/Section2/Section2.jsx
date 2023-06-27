import React, { useState } from "react";
import { JobSection2Card } from "../../../Utils/item";
import Card from "./Card/Card";

const Section2 = () => {
  return (
    <div className="relative mb-60">
      <div className="w-[556px] h-[226px] bg-[#d5dce3] "></div>
      <div className="bg-white rounded-2xl w-[1166px] absolute top-10 left-20">
        <div className="flex flex-col gap-2 p-10 ">
          <strong>
            Chúng tôi hiện đang trong quá trình chuyển đổi kinh doanh. Thông qua
            tất cả những thay đổi này, chúng tôi đã xác định tôn chỉ mục đích
            của tập đoàn, đó là giúp mọi người đạt được những điều tốt đẹp nhất
            trong cuộc sống.
          </strong>
          <p>
            Chúng tôi muốn thu hút và giữ chân những người được truyền cảm hứng
            bởi tôn chỉ mục đích này, những người chia sẻ chung giá trị cốt lõi
            và những người được thúc đẩy bởi khát vọng của chúng tôi.
          </p>
          <p>
            Đó chính là niềm tin để chúng ta cùng nhau đạt được những mục tiêu
            lớn - và bằng tất cả sự cố gắng, thất bại và không ngừng học hỏi,
            những điều tốt có thể trở nên tuyệt vời. Và những điều tuyệt vời có
            thể trở nên vĩ đại.
          </p>
        </div>
      </div>

      <div className="relative mx-24">
        <div className="flex relative -bottom-52">
          <div className="flex-1"></div>
          <div className="flex-1 h-[600px] bg-slate-200"></div>
        </div>

        <div className="flex flex-col  absolute top-16  w-full items-center gap-16 mt-20">
          <div className="flex justify-between w-full pr-16">
            <h3 className="text-content w-[500px] font-thin">
              <strong className="font-bold">Chúng tôi</strong> tồn tại vì điều
              gì?
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-0 w-full">
            {JobSection2Card.slice(0, 3).map((items) => (
              <>
                <Card
                  image={items.image}
                  content={items.content}
                  title={items.title}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
