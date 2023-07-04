import React from "react";

const TextField = (props, ref) => {
  const { spanLabel, type } = props;
  return (
    <>
      <span>{spanLabel}</span>
      <input type={type} ref={ref} />
    </>
  );
};

// Forwarded Ref
const forwardedRef = React.forwardRef(TextField);

export default forwardedRef;
