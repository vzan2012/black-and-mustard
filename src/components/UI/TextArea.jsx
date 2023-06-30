import React from "react";

const TextArea = (props) => {
  const { rows, cols, children } = props;
  return (
    <textarea rows={rows} cols={cols} name={props.name}>
      {children}
    </textarea>
  );
};

export default TextArea;
