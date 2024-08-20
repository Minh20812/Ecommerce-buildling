import React from "react";
import ResultChoice from "./ResultChoice";

const ResultsSearchList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <ResultChoice result={result.title} key={id} />;
      })}
    </div>
  );
};

export default ResultsSearchList;
