import React from "react";
import { BsCartCheck } from "react-icons/bs";

const Pin = ({ pin, addToCart }) => {
  const { name, price, img } = pin;
  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg w-[300px] h-[225px]" src={img} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Price: {price}
          </p>
          <button
            onClick={() => addToCart(pin)}
            className=" flex w-full justify-center text-xl items-center py-2 px-3 font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to Cart{" "}
            <span className="ml-2">
              <BsCartCheck fontSize={18}></BsCartCheck>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pin;
