import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import { Button, Result } from "antd";
const Job = () => {
  return (
    <div>
      <div className="d:block p:hidden">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
      <div className="d:hidden p:block">
        <Result
          status="403"
          title="Xin lỗi vì sự bất tiện này"
          subTitle="Trang này trên thiết bị di dộng đang tạm khóa trên để chỉnh sửa, Vui lòng dùng desktop/laptop để truy cập trang này "
          extra={<Button type="primary ">Back Home</Button>}
        />
      </div>
    </div>
  );
};

export default Job;
