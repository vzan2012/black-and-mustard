import React from "react";

const LinkItem = ({ id, title, url, target = "_self" }) => {
  return (
    <li key={id}>
      <a href={url} target={target} title={title}>
        {title}
      </a>
    </li>
  );
};

export default LinkItem;
