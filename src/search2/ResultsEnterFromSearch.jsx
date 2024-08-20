import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CardProduct from "./CardProduct";

const ResultsEnterFromSearch = () => {
  const location = useLocation();
  const [error, setError] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q");
    if (query) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setDataFilter(
            data.products.filter((item) => {
              return (
                item &&
                item.title &&
                item.title.toLowerCase().includes(query.toLowerCase())
              );
            })
          );
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setError("Failed to fetch search results. Please try again later.");
        });
    }
  }, [location.search]);

  const handleClick = (id) => {
    navigate(`/add-product?k=${id}`);
  };

  return (
    <>
      <div>
        <h1 className="  mt-[88px]">Results Enter From Search</h1>
        {error ? (
          <p>{error}</p>
        ) : dataFilter.length > 0 ? (
          <ul className=" grid grid-cols-4 gap-20 px-6">
            {dataFilter.map((item) => (
              <li className="py-3" key={item.id}>
                <CardProduct
                  images={item.images}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  item={item}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  );
};

export default ResultsEnterFromSearch;
