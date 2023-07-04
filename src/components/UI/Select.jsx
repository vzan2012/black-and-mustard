import React from "react";

const Select = ({ id, name, items, spanLabel }) => {
  return (
    <>
      <span>{spanLabel}</span>
      <select id={id} name={name}>
        {items.map((item, index) => (
          <option key={++index} value={++index}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
