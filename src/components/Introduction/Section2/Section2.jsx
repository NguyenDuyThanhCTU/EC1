import React from "react";
import { BsDot } from "react-icons/bs";
import "swiper/css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IntroSection2Items1, IntroSection2Items2 } from "../../../Utils/temp";

const Section2 = () => {
  return (
    <div className="flex flex-col justify-center items-center font-LexendDeca">
      <div className="w-full">
        <div className="flex items-center justify-start gap-2 ">
          <div className="h-1 w-[70px] bg-[#40b2b5]"></div>
          <h3 className="text-[44px] font-normal uppercase">
            Thành tựu cá nhân
          </h3>
        </div>
      </div>

      {/* <-- FirstCard --> */}
      <div className="w-[1150px] h-[1000px] rounded-xl bg-white mt-20">
        <div className="p-6 flex items-center justify-center">
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper "
          >
            {IntroSection2Items1.map((items) => (
              <SwiperSlide>
                <div className=" ">
                  <img
                    src={items.image}
                    alt="slide"
                    className="w-[1100px] h-[688px]
                  rounded-xl
                  object-contain
                  "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div></div>
        </div>
        <div className="p-10 flex gap-20">
          <div className="text-[14px]">
            <div className="border rounded-xl">
              <div className="flex flex-col justify-between">
                <div className="flex p-5  justify-between">
                  <p className="">Năm sinh</p>
                  <span className=""></span>
                  <p className="">1985</p>
                </div>

                <div className="flex p-5 justify-between gap-10 border-t">
                  <p>Ngày gia nhập ngành</p>
                  <span className=""></span>
                  <p className="">26/12/2017</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[30px]">HUỲNH THANH NAM</h3>
            <p className="text-gray-500 ">
              <span className="font-semibold text-black">Trình độ:</span> Đại
              học Luật - Kế Toán
            </p>
            <p className="text-gray-500 ">
              <span className="font-semibold text-black">Đơn vị công tác:</span>{" "}
              CÔNG TY TNHH BHNT PRUDENTIAL VIỆT NAM
            </p>
            <span className="font-semibold text-black">
              Vị trí và chức vụ hiện tại:
            </span>
            <div className="flex gap-5">
              <div className="">
                <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                  <BsDot className="text-[15px] text-gray-500" />
                  Chuyên viên tư vấn tài chính
                </p>
              </div>
              <div>
                <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                  <BsDot className="text-[15px] text-gray-500" />
                  Quản lý kinh doanh và phát triển nguồn nhân lực
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <-- SecondCard --> */}
      <div className="w-[1150px] h-[1000px] rounded-xl bg-white my-20">
        <div className="p-6 flex items-center justify-center">
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {IntroSection2Items2.map((items) => (
              <SwiperSlide>
                <div className=" ">
                  <img
                    src={items.image}
                    alt="slide"
                    className="w-[1100px] h-[688px]
                  rounded-xl
                  object-contain
                  "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div></div>
        </div>
        <div className="p-10 flex gap-20">
          <div className="text-[14px]">
            <div className="border rounded-xl">
              <div className="flex flex-col justify-between">
                <div className="flex p-5  justify-between">
                  <p className="">Năm sinh</p>
                  <span className=""></span>
                  <p className="">1985</p>
                </div>

                <div className="flex p-5 justify-between gap-10 border-t">
                  <p>Ngày gia nhập ngành</p>
                  <span className=""></span>
                  <p className="">26/12/2017</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[32px] font-light uppercase">
              Các <strong className="font-semibold uppercase">danh hiệu</strong>{" "}
              đã đạt được <br />
              trong những năm qua
            </h3>

            <div className="overflow-y-scroll flex flex-col h-[100px] gap-3 shadow-lg p-2 ">
              <div className="flex gap-5 ">
                <div className="">
                  <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                    <BsDot className="text-[15px] text-gray-500" />
                    MDRT(CLB Bàn Tròn Triệu Đô Châu Á)
                  </p>
                </div>
                <div>
                  <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                    <BsDot className="text-[15px] text-gray-500" />
                    Pru Elite (Tư vấn viên Xuất sắc)
                  </p>
                </div>
              </div>
              <div className="flex gap-5 ">
                <div className="">
                  <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                    <BsDot className="text-[15px] text-gray-500" />
                    Life Club (Đại sứ Bảo vệ Tổ ấm)
                  </p>
                </div>
                <div>
                  <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                    <BsDot className="text-[15px] text-gray-500" />
                    Pru Service Mark (Hiệp sĩ Bảo vệ)
                  </p>
                </div>
              </div>
              <div className="flex gap-5 ">
                <div className="">
                  <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                    <BsDot className="text-[15px] text-gray-500" />
                    Pru Champion (Nhà Quản lý xuất sắc)
                  </p>
                </div>
                <div>
                  <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                    <BsDot className="text-[15px] text-gray-500" />
                    Alpha Leader (Nhà Quản lý Tiên phong)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
