import React, { useEffect, useState } from "react";
import OrderList from "../OrderList/OrderList,";
import Pin from "../Pin/Pin";
import "./Shop.css";

const Shop = () => {
  const [shop, setShop] = useState([]);
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    fetch("nosepins.json")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);

  const addToCart = (pin) => {
    let newOrder = [...orders, pin];
    const exists = orders.find((product) => product.id === pin.id);
    if (exists) {
      newOrder = [...orders];
    } else if (newOrder.length <= 4) {
      setOrder(newOrder);
    } else if (newOrder.length > 4) {
      alert("Please Choose Only 4 Nose Pins");
    }
  };

  return (
    <div className="pins-container">
      <div className="pin-container">
        {shop.map((pin) => (
          <Pin pin={pin} key={pin.id} addToCart={addToCart}></Pin>
        ))}
      </div>
      <div>
        <OrderList orders={orders}></OrderList>
      </div>
    </div>
  );
};

export default Shop;
