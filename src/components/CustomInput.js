import { Input } from "antd";
import React from "react";

const CustomInput = ({ placeholder, prefix, value, onChange, type, style }) => {
  return (
    <div style={style}>
      <p
        style={{ fontWeight: '600', fontSize: 16}}
      >{placeholder}</p>
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
