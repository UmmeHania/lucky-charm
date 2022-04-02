import React from "react";
import { BsTrash } from "react-icons/bs";

const OrderItem = ({ order }) => {
  const { name, img } = order;
  const clicked = () => {
    console.log("Clicked");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-300 w-[500px] p-3 my-3 flex justify-center items-center">
        <img src={img} className="h-28" alt="" />
        <p className="m-3">{name}</p>
        <button
          onClick={clicked}
          className="btn btn-outline-danger border-0"
        ></button>
      </div>
    </div>
  );
};

export default OrderItem;
