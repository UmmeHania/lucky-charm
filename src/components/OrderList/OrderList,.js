import React, { useState } from "react";
// import "./OrderList.css";
import OrderItem from "../OrderItem/OrderItem";
import ChosenOne from "../ChosenOne/ChosenOne";

const OrderList = ({ orders }) => {
  const [orderRemove, setOrdersRemove] = useState([]);
  const [chooseOne, setChooseOne] = useState([]);
  const [display, setDisplay] = useState("d-none");

  const removeItem = () => {
    orders.length = orderRemove;
    setOrdersRemove([]);
    setDisplay("d-none");
  };

  const chooseOneItem = (orders) => {
    if (orders) {
      const randomIndex = Math.floor(Math.random() * orders.length);
      setChooseOne(orders[randomIndex]);
    } else {
      alert("Please Select Some Pins");
    }
  };

  return (
    <div className="cart-container text-center">
      <h3 className="pb-3 text-2xl font-semibold">
        Choose Your Favorite Nose Pins:
      </h3>
      <div className="d-flex flex-column align-content-around flex-wrap">
        {orders.map((order) => (
          <OrderItem order={order} key={order.id}></OrderItem>
        ))}
      </div>
      <div className="d-flex flex-column w-75 mx-auto">
        <button
          onClick={() => {
            chooseOneItem(orders);
            setDisplay("d-block");
          }}
          type="button"
          className="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Confused! Let Me Choose 1
        </button>
        <div className={display}>
          <ChosenOne chooseOne={chooseOne}></ChosenOne>
        </div>
        <button
          onClick={removeItem}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default OrderList;
