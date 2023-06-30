import React from "react";

const Select = ({ id, name, items }) => {
  return (
    <select id={id} name={name}>
      {items.map((item, index) => (
        <option key={++index} value={++index}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
