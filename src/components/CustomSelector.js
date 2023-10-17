import { Select } from "antd";
import React from "react";

const CustomSelector = ({
  placeholder,
  defaultValue,
  value,
  style,
  onChange,
  options,
}) => {
  return (
    <div style={style}>
      <p style={{ fontWeight: "600", fontSize: 16 }}>{placeholder}</p>
      <Select
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        options={options}
        style={{ width: "100%"}}
      />
    </div>
  );
};

export default CustomSelector;
