import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value.toLowerCase());
  };

  return (
    <div className=" w-full gap-4 h-10 border-none rounded-xl py-0 px-[15px] shadow-md bg-white flex items-center">
      <div className="">
        <FaSearch id="search-icon" />
      </div>
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className=" bg-transparent border-none h-full text-xl w-full ml[5px] focus:outline-none"
      />
    </div>
  );
};
