import React from "react";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../redux/slice/cartSlice";

const CardProduct = ({
  images,
  title,
  price,
  quantity,
  item,
  showDeleteButton,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <img className="h-52 w-52" src={images[0]} alt="anh" />
      <div className=" text-center">
        <h3 className=" font-bold text-xl">{title}</h3>
        <p className=" text-red-400 font-bold">{price}</p>
        <p className=" text-green-600 font-bold">{quantity}</p>
        <button
          className=" border bg-teal-400 mb-3 p-2 rounded"
          onClick={() => dispatch(addProduct(item))}
        >
          Add
        </button>
        {showDeleteButton && (
          <button
            className="border bg-teal-400 mb-3 p-2 rounded"
            onClick={() => dispatch(deleteProduct(item))}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
