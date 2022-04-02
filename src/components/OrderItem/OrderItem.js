import React from "react";

const OrderItem = ({ order }) => {
  const { name, img } = order;

  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-300 w-[80%] p-3 my-3 flex justify-start rounded-lg items-center">
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
