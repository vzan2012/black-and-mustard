import React from "react";

const TextArea = (props) => {
  const { rows, cols, children, resize } = props;
  return (
    <textarea rows={rows} cols={cols} name={props.name}>
      {children}
    </textarea>
  );
};

export default TextArea;
