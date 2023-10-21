import { Button } from "antd";
import React from "react";

const CustomButton = ({ title, backgroundColor, htmlType, onClick }) => {
  return (
    <Button
      className="text-md font-medium sm:text-sm md:text-sm lg:text-md xl:text-lg"
      style={{
        backgroundColor: backgroundColor,
        color: "#fff",
        width: "100%",
        height: "5%",
      }}
      htmlType={htmlType}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
