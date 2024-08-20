import React from "react";

const ResultChoice = ({ result }) => {
  return (
    <div
      className=" cursor-pointer hover:bg-slate-500"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};

export default ResultChoice;
