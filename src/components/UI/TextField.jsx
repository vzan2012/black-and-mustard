import React from "react";

const TextField = (props) => {
  const { spanLabel, type } = props;
  return (
    <>
      <span>{spanLabel}</span>
      <input type={type} />
    </>
  );
};

export default TextField;
