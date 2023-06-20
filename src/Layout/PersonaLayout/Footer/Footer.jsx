import React from "react";
import { FooterItems } from "../../../Utils/item";
const Footer = () => {
  return (
    <div className=" bg-primary font-LexendDeca text-white">
      <div className=" bg-[#1f1f1f]">
        <div className="grid grid-cols-6 text-[#e5eaef] gap-10 px-20 py-10">
          {FooterItems.map((items) => (
            <div className="flex flex-col gap-5">
              <h3 className="text-[18px]">{items.title}</h3>
              <div className="flex flex-col gap-3 text-[#b4b4b4] ">
                {items.content.map((items) => (
                  <p className="text-[12px] hover:text-[#e5eaef] cursor-pointer ">
                    {items.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-5">
            <h3 className="text-[18px]">Liên hệ</h3>
            <div className="flex flex-col gap-3 text-[#b4b4b4] ">
              <p className="text-[12px] hover:text-[#e5eaef] cursor-pointer ">
                Tầng 25, Tòa nhà Sài Gòn Trade Center, 37 Tôn Đức Thắng, Phường
                Bến Nghé, Quận 1, Tp. Hồ Chí Minh
              </p>
              <p className="text-[12px] hover:text-[#e5eaef] cursor-pointer ">
                Điện thoại trụ sở chính: 028.3910.1660
              </p>
              <p className="text-[12px] hover:text-[#e5eaef] cursor-pointer ">
                Văn phòng Giao dịch gần bạn nhất
              </p>
              <p className="text-[12px] hover:text-[#e5eaef] cursor-pointer ">
                Miễn trừ trách nhiệm & Quyền sở hữu
              </p>
              <p className="text-[12px] hover:text-[#e5eaef] cursor-pointer ">
                Chính sách bảo mật thông tin
              </p>
              <p className="text-[12px] hover:text-[#e5eaef] cursor-pointer ">
                Quay lại Trang chủ
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-[14px] font-poppins font-normal py-5 bg-black">
        <p className="pr-2">©2023 All Rights reserved ADS Company</p>
        <p className="pl-2 border-l-[1px] border-gray-400">
          Designed by Thanh Dev ADS Company
        </p>
      </div>{" "}
    </div>
  );
};

export default Footer;
