import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavbarTest = ({ setResultsFromNavbar }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          const results = data.products.filter((product) => {
            return (
              product &&
              product.title &&
              product.title.toLowerCase().includes(query.toLowerCase())
            );
          });
          setResultsFromNavbar(results);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [query, setResultsFromNavbar]);

  const handleInputChange = (value) => {
    setQuery(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <nav className="flex justify-between px-40">
      <input
        type="text"
        value={query}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search products..."
      />
      <ul className="flex gap-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/carts">Carts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarTest;
