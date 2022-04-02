import React from "react";

const ChosenOne = (props) => {
  console.log(props);
  if (!props.chooseOne) {
    return (
      <div className="bg-success d-flex flex-row align-items-center justify-content-center px-2 mb-3">
        <p className="m-3 text-white bg-red-500 p-2 rounded-xl">
          Please Choose 2 Nose pin At least.
        </p>
      </div>
    );
  } else {
    const { name, img } = props.chooseOne;
    return (
      <div className="flex justify-center my-3">
        <div className="bg-pink-500 w-[80%] flex flex-row items-center rounded-lg justify-around p-2 mb-3">
          <img src={img} className="w-20" alt="" />
          <p className="m-3 text-xl font-bold text-white">{name}</p>
        </div>
      </div>
    );
  }
};

export default ChosenOne;
