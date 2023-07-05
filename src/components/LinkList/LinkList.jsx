import React from "react";

const LinkList = ({ title, children }) => {
  return (
    <div className="linklist">
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  );
};

export default LinkList;
