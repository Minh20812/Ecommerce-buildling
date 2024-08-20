import React from "react";

const SearchFilter = ({ dataTakeFromNavbar }) => {
  return (
    <div className=" fixed top-6 z-50 bg-slate-600 text-white mt-[44px]">
      {dataTakeFromNavbar.map((results, id) => {
        return (
          <div
            key={id}
            onClick={() => {
              alert(`You selected ${results.title}`);
            }}
            className=" cursor-pointer"
          >
            {results.title}
          </div>
        );
      })}
    </div>
  );
};

export default SearchFilter;
