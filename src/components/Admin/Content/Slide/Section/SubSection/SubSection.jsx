import React, { useState } from "react";
import { notification } from "antd";
import { updateDocument } from "../../../../../../Config/Services/Firebase/FireStoreDB";
import { useStateProvider } from "../../../../../../Context/StateProvider";
import { useData } from "../../../../../../Context/DataProviders";

const SubSection = (type) => {
  const { setIsRefetch } = useStateProvider();
  const [Data, setData] = useState("");
  const { userName, Academic, Work, YearOfBirth, StartJob } = useData();
  const [isSelected, setSelected] = useState(false);
  console.log(userName);
  let ContactDashboard = [];

  if (type.type === "persona") {
    ContactDashboard = [
      {
        name: "Tên cá nhân",
        type: "input",
        placeholder: userName,
      },
      {
        name: "Trình độ",
        type: "input",
        placeholder: Academic,
      },
      {
        name: "Đơn vị công tác",
        type: "textarea",
        placeholder: Work,
      },
      // {
      //   name: "Vị trí và chức vụ hiện tại",
      //   type: "input",
      //   placeholder: Location,
      // },
    ];
  } else {
    ContactDashboard = [
      {
        name: "Năm sinh",
        type: "input",
        placeholder: YearOfBirth,
      },
      {
        name: "Ngày gia nhập ngành",
        type: "input",
        placeholder: StartJob,
      },

      // {
      //   name: "Vị trí và chức vụ hiện tại",
      //   type: "input",
      //   placeholder: Location,
      // },
    ];
  }

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
        newData = { username: Data };
      } else if (idx === 1) {
        newData = { academic: Data };
      } else if (idx === 2) {
        newData = { work: Data };
      } else if (idx === 3) {
        newData = { yearOfBirth: Data };
      } else if (idx === 4) {
        newData = { startJob: Data };
      }

      updateDocument("website", "Information", newData).then(() => {
        notification["success"]({
          message: "Thành công !",
          description: `
          Thông tin đã được CẬP NHẬT !`,
        });
        setIsRefetch("new Slide");
      });
    }
  };

  return (
    <div className="bg-[#353535] text-white  rounded-xl shadow-xl">
      <div className="p-4  ">
        <h3 className="text-[25px] text-center ">Thông tin cá nhân</h3>
        <div className="flex flex-col gap-3 mt-5">
          {ContactDashboard.map((items, idx) => {
            let Type = items.type;
            return (
              <>
                <label>{items.name}</label>
                <div className="flex gap-5 ">
                  {Type && (
                    <div onClick={() => setSelected(idx)} className="w-full">
                      <Type
                        placeholder={items.placeholder}
                        type="text"
                        className="px-4 py-2 text-black outline-none rounded-2xl bg-gray-300 w-full "
                        onChange={(e) => setData(e.target.value)}
                      />
                    </div>
                  )}
                  <div>
                    {isSelected === idx ? (
                      <>
                        {type.type === "persona" ? (
                          <button
                            className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 py-2 rounded-xl w-[95px]"
                            onClick={() => HandleUpdate(idx)}
                          >
                            Cập nhật
                          </button>
                        ) : (
                          <button
                            className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 py-2 rounded-xl w-[95px]"
                            onClick={() => HandleUpdate(idx + 3)}
                          >
                            Cập nhật
                          </button>
                        )}
                      </>
                    ) : (
                      <button className="text-white bg-gray-400 px-3 py-2 rounded-xl cursor-default w-[95px]">
                        Cập nhật
                      </button>
                    )}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubSection;
