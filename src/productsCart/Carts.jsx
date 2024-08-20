import { useEffect, useState } from "react";
import { PRODUCTS } from "./products";
/*useEffect và useState là hai hooks được sử dụng để quản lý trạng thái và tác động phụ trong component.
PRODUCTS là một mảng các sản phẩm được nhập từ một tệp khác.*/
const fromLocalStorage = JSON.parse(localStorage.getItem("products"));
/*fromLocalStorage lấy dữ liệu giỏ hàng từ LocalStorage và chuyển đổi nó từ chuỗi JSON sang đối tượng JavaScript.*/
const Carts = () => {
  if (!localStorage.getItem("products")) {
    localStorage.setItem(
      "products",
      JSON.stringify({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 })
    );
  }
  /*Nếu chưa có dữ liệu giỏ hàng trong LocalStorage, tạo một đối tượng mặc định với tất cả các sản phẩm có số lượng là 0.*/
  const [cartItems, setCartItems] = useState(fromLocalStorage);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartItems));
  }, [cartItems]);
  /*useEffect này sẽ cập nhật LocalStorage mỗi khi trạng thái giỏ hàng (cartItems) thay đổi.*/
  const addToCart = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: cartItems[id] + 1 }));
  };
  const subFromCart = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: cartItems[id] - 1 }));
  };
  const removeFromCart = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: (cartItems[id] = 0) }));
  };
  /*addToCart: Tăng số lượng sản phẩm có ID tương ứng.
    subFromCart: Giảm số lượng sản phẩm có ID tương ứng.
    removeFromCart: Đặt số lượng sản phẩm có ID tương ứng về 0.*/
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(key));
        totalAmount += Math.floor(cartItems[key] * itemInfo.price);
      }
    }

    return totalAmount;
  };
  /*getTotalAmount tính tổng số tiền của tất cả các sản phẩm trong giỏ hàng có số lượng lớn hơn 0.*/
  return (
    <div className="cart-items flex flex-wrap justify-center gap-20 pr-96 p-10">
      {/* <-------------------------------- Products -----------------------------------> */}
      {PRODUCTS.map((product) => (
        <div key={product.id} className="relative">
          <img
            className="w-40 h-40"
            alt={product.productName}
            src={product.productImage}
          />
          <div>
            <p>{product.productName}</p>
            <p>${product.price}</p>
            <button
              onClick={() => {
                addToCart(product.id);
              }}
              className="border-2 drop-shadow-2xl p-2 rounded hover:bg-green-300"
            >
              Add to Cart{" "}
            </button>
            {cartItems[product.id] > 0 && (
              <div className="bg-orange-500 text-white font-bold p-4 drop-shadow-2xl rounded-full flex items-center justify-center h-5 w-5 absolute top-10 right-32">
                {cartItems[product.id]}
              </div>
            )}
          </div>
        </div>
      ))}
      {/* <-------------------------------- CART -----------------------------------> */}
      <div
        className={
          "fixed p-4 right-0 top-10 bg-blue-100 w-80 h-screen overflow-y-scroll"
        }
      >
        <h1 className="text-white font-bold text-2xl">Your Cart</h1>
        <p className="text-3xl font-bold">Total: ${getTotalAmount()}</p>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <div key={product.id} className="">
                <div className="product-container flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      className="w-20 h-20 my-4 mb-0"
                      alt={product.productName}
                      src={product.productImage}
                    />
                    X{" "}
                    <p className="text-2xl font-bold pl-2">
                      {cartItems[product.id]}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 font-bold">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-500 bg-red-200 hover:bg-red-500 hover:text-white p-2 rounded"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="text-green-500 hover:bg-green-500 hover:text-green-700 p-2 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => subFromCart(product.id)}
                      className=" text-red-500 hover:bg-red-500 hover:text-red-700 p-2 rounded"
                    >
                      -
                    </button>
                  </div>
                </div>

                <div className="product-details flex items-center space-x-4 italic">
                  <p>{product.productName}</p>
                  <p>-</p>
                  <p>${product.price}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Carts;
