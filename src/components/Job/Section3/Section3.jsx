import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Section3 = () => {
  return (
    <div className="flex flex-col gap-32 pb-20">
      <div className="flex justify-between items-center ">
        <div className="  w-[500px] flex flex-col gap-2">
          <h3 className="text-content">
            <strong>Kết nối, Phát triển, Thành Công</strong>
          </h3>
          <p className="text-[18px] ">
            Chúng tôi thấu hiểu niềm tin mà bạn trao cho chúng tôi bằng cách
            không ngừng đưa Prudential trở thành một nơi làm việc tuyệt vời, nơi
            mà bạn có thể Kết nối, Phát triển và Thành công.
          </p>
          <div className="flex items-center gap-1 font-bold text-normal">
            <p>Xem chi tiết</p>{" "}
            <BsArrowRightShort className="text-redPrimmary text-[40px]" />
          </div>
        </div>
        <div>
          <img
            className="w-[630px]"
            src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/trang-chu/promo-matchbook-666x444.jpg"
            alt="img"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <img
            className="w-[630px]"
            src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/trach-nhiem-xa-hoi/csr-hero-666x444.jpg"
            alt="img"
          />
        </div>
        <div className="  w-[500px] flex flex-col gap-2">
          <h3 className="text-content">
            <strong>Phát triển</strong> cộng đồng bền vững
          </h3>
          <p className="text-[18px] ">
            Bên cạnh hoạt động kinh doanh hiệu quả, Prudential đã và đang đầu tư
            vào các hoạt động xã hội với mục tiêu phát triển cộng đồng bền vững
            và kiến tạo một cuộc sống khỏe mạnh hơn, thịnh vượng hơn cho người
            dân Việt Nam, tập trung vào các lĩnh vực Giáo dục, Sống khỏe và An
            toàn.
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

export default Section3;
