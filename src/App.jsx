// import { useState } from "react";

// import "./App.css";
// import { SearchBar } from "./components/SearchBar";
// import { SearchResultsList } from "./components/SearchResultsList";

// function App() {
//   const [results, setResults] = useState([]);

//   return (
//     <div className="App">
//       <div className="search-bar-container">
//         <SearchBar setResults={setResults} />
//         {results && results.length > 0 && (
//           <SearchResultsList results={results} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import SearchResults from "./components/SearchResults";
// import HomePage from "./components/HomePage"; // example home page

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/results" element={<SearchResults />} />
//         {/* Add other routes here */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

/*
import React, { useState } from "react";
import NavbarTest from "./search/NavbarTest";
import { Outlet } from "react-router-dom";
import ResultsSearchList from "./search/ResultsSearchList";

const AppTest = () => {
  const [results, setResults] = useState([]);

  console.log(results.length > 0 ? results : "No results");

  return (
    <>
      <div className=" pb-10">
        <NavbarTest setResultsFromNavbar={setResults} />
        {results && results.length > 0 && (
          <ResultsSearchList results={results} />
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AppTest; */

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./search2/Navbar";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
