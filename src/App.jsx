import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from "./pages/home";
import New from "./pages/new"
import Popular from "./pages/popular";
import Sale from "./pages/sale";
import DeliBakery from "./pages/deli-bakery";
import Aisles from "./pages/aisles";
import Search from "./pages/search";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/deli-bakery" element={<DeliBakery />} />
          <Route path="/aisles" element={<Aisles />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
