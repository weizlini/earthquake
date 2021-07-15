import loader from "../assets/rings.svg";
import React from "react";
const Loader = () => {
  return (
    <img
      src={loader}
      style={{ width: 200, height: 200, justifySelf: "center" }}
    />
  );
};
export default Loader;
