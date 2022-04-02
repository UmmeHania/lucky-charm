import React from "react";
import { BsTrash } from "react-icons/bs";

const OrderItem = ({ order }) => {
  const { name, img } = order;
  const clicked = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <div className="d-flex justify-content-start m-3">
        <img src={img} height="50px" alt="" />
        <p className="m-3">{name}</p>
        <button onClick={clicked} className="btn btn-outline-danger border-0">
          <BsTrash></BsTrash>
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
