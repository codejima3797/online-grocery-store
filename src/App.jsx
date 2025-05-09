import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ScrollToTop from './components/ScrollToTop';
import Home from "./pages/home";
import New from "./pages/new"
import Popular from "./pages/popular";
import Sale from "./pages/sale";
import DeliBakery from "./pages/deli-bakery";
import Aisles from "./pages/aisles";
import Search from "./pages/search";
import Shopping from "./pages/shopping";
import About from "./pages/about";
import FAQ from "./pages/faq";
import Checkout from "./pages/checkout";
import Cart from "./pages/cart";
import ItemDetails from "./pages/item-details";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/new" element={<New />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/deli-bakery" element={<DeliBakery />} />
          <Route path="/aisles" element={<Aisles />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/item-details/:section/:id" element={<ItemDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
