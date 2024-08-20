import React, { useState, useEffect } from "react";
import CardProduct from "./CardProduct";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-20 px-6 mt-[88px]">
        {data.map((item) => (
          <CardProduct
            key={item.id}
            images={item.images}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            item={item}
            showDeleteButton={false} // Assuming you don't want to show delete button on Home page
          />
        ))}
      </div>
    </>
  );
};

export default Home;
