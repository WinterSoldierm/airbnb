import React from "react";

const Image = ({ src, ...rest }) => {
  src =
    src && src.includes("http://")
      ? src
      : "http://localhost:4000/uploads/" + src;

  return (
    <div>
      <img {...rest} src={src} alt="Image" />
    </div>
  );
};

export default Image;
