// components/SearchResults.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q");
    if (query) {
      fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setResults(data))
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
          {results.map((result) => (
            <React.Fragment key={result.id}>
              <li>
                {`[Name:`} {`${result.name}]`}
              </li>
              <li> {result.username}</li>
              <li> {result.email}</li>
              <li> {result.address.street}</li>
              <li> {result.address.suite}</li>
              <li> {result.address.city}</li>
              <li> {result.address.city}</li>
              <li> {result.address.zipcode}</li>
              <li> {result.address.geo.lat}</li>
              <li> {result.address.geo.lng}</li>
            </React.Fragment>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
