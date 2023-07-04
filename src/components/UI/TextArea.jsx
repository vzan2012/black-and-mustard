import React from "react";

const TextArea = (props, ref) => {
  const { rows, cols, children, spanLabel } = props;
  return (
    <>
      <span>{spanLabel}</span>
      <textarea rows={rows} cols={cols} name={props.name} ref={ref}>
        {children}
      </textarea>
    </>
  );
};

const forwardedRefTextArea = React.forwardRef(TextArea);

export default forwardedRefTextArea;
