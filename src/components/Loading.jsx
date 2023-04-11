import React, { useState } from "react";
import ReactLoading from "react-loading";
const Loading = ({ type }) => {
  return (
    <div>
      <ReactLoading type={type} color="#fff" height={"20%"} width={"20%"} />
    </div>
  );
};

export default Loading;
