import React from "react";

const ChosenOne = (props) => {
  if (!props.chooseOne) {
    return (
      <div className="bg-success d-flex flex-row align-items-center justify-content-center px-2 mb-3">
        <p className="m-3 text-white">Please Choose 2 Books At least.</p>
      </div>
    );
  } else {
    const { name, image } = props.chooseOne;
    return (
      <div className="bg-success d-flex flex-row align-items-center justify-content-center px-2 mb-3">
        <img src={image} height="50px" alt="" />
        <p className="m-3 text-white">{name}</p>
      </div>
    );
  }
};

export default ChosenOne;
