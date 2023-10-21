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
      <p className="text-sm font-medium sm:text-sm md:text-sm lg:text-sm xl:text-sm">{placeholder}</p>
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
