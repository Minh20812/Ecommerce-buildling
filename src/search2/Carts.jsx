import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProduct from "./CardProduct";

const Carts = () => {
  const CartProducts = useSelector((state) => state.cart.CartArr);
  const dispatch = useDispatch();

  const totalPrice = CartProducts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="px-6 mt-[88px]">
        <h2 className="text-xl font-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-20 px-6 ">
        {CartProducts.map((item) => (
          <div key={item.id}>
            <CardProduct
              images={item.images}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              item={item}
              showDeleteButton={true}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carts;
