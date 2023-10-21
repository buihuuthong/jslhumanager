import { Input } from "antd";
import React from "react";

const CustomInput = ({ placeholder, prefix, value, onChange, type, style }) => {
  return (
    <div style={style}>
      <p className="text-sm font-medium sm:text-sm md:text-sm lg:text-sm xl:text-sm">
        {placeholder}
      </p>
      <Input
        prefix={prefix}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default CustomInput;
