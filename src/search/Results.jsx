import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserDetail from "./UserDetail";

const Results = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q");
    if (query) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data); // Log dữ liệu trả về từ API để kiểm tra cấu trúc
          // Kiểm tra xem data.products có tồn tại và là một mảng
          if (Array.isArray(data.products)) {
            const filteredResults = data.products.filter((product) => {
              return (
                product &&
                product.title &&
                product.title.toLowerCase().includes(query.toLowerCase())
              );
            });
            setResults(filteredResults);
          } else {
            throw new Error("Invalid data format: 'products' is not an array");
          }
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setError("Failed to fetch search results. Please try again later.");
        });
    }
  }, [location.search]);

  return (
    <div>
      <h1>Search Results</h1>
      {error ? (
        <p>{error}</p>
      ) : results.length > 0 ? (
        <ul>
          {results.map((user) => (
            <UserDetail key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Results;
