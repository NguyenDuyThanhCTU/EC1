import React, { useRef, useState } from "react";

import { AiOutlineCloudUpload } from "react-icons/ai";

import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Empty, notification } from "antd";

import ListSlide from "./ListSlide/ListSlide";
import { useStateProvider } from "../../../../../Context/StateProvider";
import {
  addDocument,
  updateDocument,
} from "../../../../../Config/Services/Firebase/FireStoreDB";

const Section = ({ name, type }) => {
  const [imageUrl, setImageUrl] = useState();
  const [error, setError] = useState(false);
  const [Data, setData] = useState();
  const [isSelected, setSelected] = useState(false);
  const { setIsRefetch } = useStateProvider();

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const uploadImage = async (e) => {
    let selectImage = e.target.files[0];
    const filetypes = ["image/jpeg", "image/jpg", "image/png"];

    if (filetypes.includes(selectImage.type)) {
      const storage = getStorage();
      const storageRef = ref(storage, `img/slide/${selectImage.name}`);

      uploadBytes(storageRef, selectImage)
        .then((snapshot) => {
          console.log("Uploaded a blob or file!");

          getDownloadURL(snapshot.ref)
            .then((url) => {
              setImageUrl(url);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
            });
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      setError(true);
    }
  };
  setTimeout(() => {
    setError(false);
  }, 3000);

  const HandleUpload = () => {
    let Type = "";
    if (type === "persona") {
      Type = "Thành tựu";
    } else {
      Type = "Danh hiệu";
    }
    const data = {
      image: `${imageUrl ? imageUrl : Data}`,
      type: Type,
    };

    addDocument("slide", data).then(() => {
      notification["success"]({
        message: "Thành công !",
        description: `
        Thông tin đã được CẬP NHẬT !`,
      });
      setIsRefetch("personal title");
      setSelected(false);
    });
  };
  const SlideItems = [
    {
      name: "Số điện thoại",
      type: "input",
      placeholder: Phone,
    },
    {
      name: "Gmail",
      type: "input",
      placeholder: Gmail,
    },
    {
      name: "Địa chỉ",
      type: "textarea",
      placeholder: Address,
    },
    {
      name: "Vị trí",
      type: "input",
      placeholder: Location,
    },
  ];

  const HandleUpdate = (idx) => {
    if (Data === "") {
      notification["error"]({
        message: "Lỗi !",
        description: ` 
        Vui lòng nhập thông tin trước khi CẬP NHẬT !`,
      });
    } else {
      let newData;
      if (idx === 0) {
        newData = { phone: Data };
      } else if (idx === 1) {
        newData = { gmail: Data };
      } else if (idx === 2) {
        newData = { address: Data };
      } else if (idx === 3) {
        newData = { location: Data };
      }

      updateDocument("website", "Contact", newData).then(() => {
        notification["success"]({
          message: "Thành công !",
          description: `
          Thông tin đã được CẬP NHẬT !`,
        });
        setIsRefetch("contact");
      });
    }
  };

  return (
    <div className=" rounded-xl">
      <div className="p-4 flex gap-5 border flex-col">
        <div className="flex items-center justify-start gap-2 ">
          <div className="h-1 w-[70px] bg-[#40b2b5] d:block p:hidden"></div>
          <h3 className="text-[24px] font-normal uppercase text-center">
            {name}
          </h3>
        </div>
        <div className="flex gap-5">
          <div className="grid grid-cols-2 gap-10 cursor-pointer  h-[550px]  p-5 border">
            <div className="shadow-2xl bg-[#353535] h-[300px] hover:shadow-gray-700 duration-300">
              <div className="w-[480px] h-[320px]">
                {imageUrl ? (
                  <>
                    <img
                      src={imageUrl}
                      alt=""
                      className="w-[467px] h-full object-cover"
                    />
                  </>
                ) : (
                  <div className="text-white  bg-w w-full">
                    <Empty
                      imageStyle={{ height: 60 }}
                      description={
                        <span className="text-white">
                          Hình ảnh chưa được tải lên
                        </span>
                      }
                    />
                  </div>
                )}
              </div>
              <div className=" ml-3 ">
                <h3 className="py-3 text-[25px] font-bold ">
                  Thay đổi hình ảnh
                </h3>
                <div className="mb-5 flex  items-center gap-2">
                  <label className="cursor-pointer px-4 py-2 text-[20px] bg-[#6A35EE] rounded-full  text-center z-10 flex items-center gap-2">
                    <AiOutlineCloudUpload className="text-white " />
                    <p>Tải lên</p>
                    <input
                      type="file"
                      name="upload-video"
                      className="w-0 h-0"
                      onChange={(e) => uploadImage(e)}
                    />
                  </label>
                  <p>hoặc</p>
                  <div onClick={() => setSelected(true)}>
                    <input
                      type="text"
                      placeholder="Nhập liên kết hình ảnh"
                      className="py-3 px-4 text-black  border rounded-full outline-none"
                      onChange={(e) => setData(e.target.value)}
                    />
                  </div>
                </div>
                {error && (
                  <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[260px]">
                    Vui lòng chọn đúng định dạng
                  </p>
                )}
              </div>
              {isSelected ? (
                <div className="mt-5">
                  <div
                    className="text-center  uppercase py-2 border mx-2 bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-blueAdmin border-blueAdmin block group-hover:hidden"
                    onClick={() => HandleUpload()}
                  >
                    Cập nhật
                  </div>
                </div>
              ) : (
                <div className="text-center uppercase py-2 border mx-2 bg-purple  text-gray-400 border-gray-400 block ">
                  Cập nhật
                </div>
              )}
            </div>
            <div className=" shadow-2xl bg-[#353535]">
              <div className="p-4  ">
                <h3 className="text-[25px] text-center ">Thông tin liên hệ</h3>
                <div className="flex flex-col gap-3 mt-5">
                  {SlideItems.map((items, idx) => {
                    let Type = items.type;
                    return (
                      <>
                        <label>{items.name}</label>
                        <div className="flex gap-5">
                          {Type && (
                            <div onClick={() => setSelected(idx)}>
                              <Type
                                placeholder={items.placeholder}
                                type="text"
                                className="px-4 py-2 text-black outline-none rounded-2xl bg-gray-300 w-[240px] "
                                onChange={(e) => setData(e.target.value)}
                              />
                            </div>
                          )}
                          <div>
                            {isSelected === idx ? (
                              <button
                                className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 py-2 rounded-xl"
                                onClick={() => HandleUpdate(idx)}
                              >
                                Cập nhật
                              </button>
                            ) : (
                              <button className="text-white bg-gray-400 px-3 py-2 rounded-xl cursor-default">
                                Cập nhật
                              </button>
                            )}
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <iframe
                    src={Location}
                    width="300"
                    height="200"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <ListSlide type={type} />
        </div>
      </div>
    </div>
  );
};

export default Section;
