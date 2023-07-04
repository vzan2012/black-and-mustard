import React from "react";

const TextArea = (props) => {
  const { rows, cols, children, resize, spanLabel } = props;
  return (
    <>
      <span>{spanLabel}</span>
      <textarea rows={rows} cols={cols} name={props.name}>
        {children}
      </textarea>
    </>
  );
};

export default TextArea;
