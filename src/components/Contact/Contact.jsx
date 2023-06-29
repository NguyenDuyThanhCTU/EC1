import React, { useState } from "react";
import Input from "./Input.jsx/Input";
import { IconMapping, SocialMediaDashboard } from "../../Utils/item";
import { notification } from "antd";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Feedback, setFeedback] = useState("");

  const HandleSubmit = () => {
    if (!name || !email || !phone || !Feedback) {
      notification["error"]({
        message: "Lỗi",
        description: `Vui lòng nhập đầy đủ THÔNG TIN`,
      });
    } else {
      notification["success"]({
        message: "Thành công",
        description: `Tôi sẽ liên hệ hỗ trợ bạn trong thời gian sớm nhất!`,
      });
    }
  };
  return (
    <div className=" py-20 font-OpenSans ">
      <div className="p-2 p:flex-col d:flex-row flex justify-center gap-5">
        <div>
          <img
            src="https://qhomedecor.vn/wp-content/uploads/2020/10/img-lienhe.png"
            alt="img"
            className="w-[685px]"
          />
        </div>
        <div>
          <div>
            <h3 className="text-content font-light ">
              <strong className="font-bold">Liên hệ</strong> với tôi
            </h3>
            <div className="flex flex-col gap-3 my-3">
              <strong>Địa chỉ:</strong>
              <p className="w-[655px]"></p>

              <p>
                <strong>Hotline:</strong>
              </p>
              <div>
                <strong>Liên hệ:</strong>
                <div className="flex gap-5">
                  {SocialMediaDashboard.slice(0, 4).map((items, idx) => {
                    let Icon = IconMapping[items.icon];

                    return (
                      <>
                        {Icon && (
                          <a
                            href={`${
                              items.icon === "SiZalo"
                                ? `https://zalo.me/${items.data}`
                                : items.data
                            }`}
                            target="_blank"
                          >
                            <Icon className="text-[30px] cursor-pointer hover:bg-white p-1  hover:text-blue-600" />
                          </a>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
              <p>
                <strong>Website:</strong>
              </p>
            </div>
            <div className=" py-3 flex flex-col gap-3">
              <p className="font-normal p:w-auto d:w-[500px]">
                Hãy để lại thông tin đầy đủ theo mẫu bên dưới, Tôi sẽ liên hệ hỗ
                trợ bạn trong thời gian sớm nhất.
              </p>
              <p className="text-redPrimmary font-thin">
                * là các thông tin bắt buộc
              </p>
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <Input placeholder="Họ Tên(*)" setData={setName} />
              <Input placeholder="Email(*)" setData={setEmail} />
              <Input placeholder="Điện thoại(*)" setData={setPhone} />
              <textarea
                placeholder="Hãy cho tôi biết câu hỏi hoặc phản hồi của bạn(*)"
                className="outline-none border rounded-md p-2 w-full"
                onChange={(e) => {
                  setFeedback(e.target.value);
                }}
              />
            </div>
            <div
              className="cursor-pointer "
              onClick={() => {
                HandleSubmit();
              }}
            >
              <span className="uppercase py-2 px-6 bg-red-400 hover:bg-redPrimmary text-white">
                gửi đi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
