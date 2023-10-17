import { Button } from "antd";
import React from "react";

const CustomButton = ({ title, backgroundColor, htmlType, onClick }) => {
  return (
    <Button
      style={{
        backgroundColor: backgroundColor,
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
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
