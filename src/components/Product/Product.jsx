import React from "react";
import { Button, Result } from "antd";
const Product = () => {
  return (
    <div>
      <Result
        status="403"
        title="Xin lỗi vì sự bất tiện này"
        subTitle="Trang này đang bị khóa để chỉnh sửa"
        extra={<Button type="primary ">Back Home</Button>}
      />
    </div>
  );
};

export default Product;
