import React from "react";
import { BsTrash } from "react-icons/bs";

const OrderItem = ({ order }) => {
  const { name, img } = order;
  const clicked = () => {
    console.log("Clicked");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-300 w-[80%] p-3 my-3 flex justify-start items-center">
        <div>
          <img src={img} className="w-20" alt="" />
        </div>
        <div>
          <p className="m-3">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
