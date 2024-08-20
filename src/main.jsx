// import Navbar from "./components/Navbar";
// import SearchResults from "./components/SearchResults";
// import HomePage from "./components/HomePage"; // example home page
// import About from "./search/About";
// import Contact from "./search/Contact";
// import Home from "./search/Home";
// import Results from "./search/Results";
// import Carts from "./productsCart/Carts";
import React from "react";
import ReactDOM from "react-dom/client";
import AppTest from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./search2/Home";
import About from "./search2/About";
import Login from "./search2/Login";
import Carts from "./search2/Carts";
import ResultsEnterFromSearch from "./search2/ResultsEnterFromSearch";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<AppTest />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/search" element={<ResultsEnterFromSearch />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);

/*  <Router>
      <Routes>
        <Route path="/" element={<AppTest />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Results />} />
          <Route path="/carts" element={<Carts />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>*/

/* <div>
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/results" element={<SearchResults />} />
    {/* Add other routes here
  </Routes>
</Router>
</div> */
