import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const CartProducts = useSelector((state) => state.cart.CartArr);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [dataFilter, setDataFilter] = useState([]);
  const [hidden, setHidden] = useState(true);

  const handleInputChange = (value) => {
    setQuery(value);
    setHidden(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${query}`);
      setHidden(true);
    }
  };

  useEffect(() => {
    if (query) {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
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
          console.error("Error fetching data:", error);
        });
    }
  }, [query]);

  return (
    <>
      <div className=" flex h-[88px] bg-white items-center xl:px-40 px-4 justify-between font-sf-pro fixed top-0 left-0 right-0 z-50">
        <div className=" left-0">
          <input
            type="text"
            className=" border-black border-collapse"
            placeholder="Search"
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {!hidden && <SearchFilter dataTakeFromNavbar={dataFilter} />}
        </div>
        <ul className=" flex gap-2 right-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/carts">Carts {CartProducts.length}</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
