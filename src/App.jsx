import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ClerkProvider } from '@clerk/clerk-react';
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

// Replace this with your actual publishable key from Clerk
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

console.log('Clerk Key:', clerkPubKey); // Debug log

if (!clerkPubKey) {
  console.error("Missing Clerk publishable key. Please add REACT_APP_CLERK_PUBLISHABLE_KEY to your .env file");
}

function App() {
  if (!clerkPubKey) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '1rem',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1>Configuration Error</h1>
        <p>Please add your Clerk publishable key to the .env file:</p>
        <code>REACT_APP_CLERK_PUBLISHABLE_KEY=your_publishable_key_here</code>
        <p>You can get your publishable key from the Clerk dashboard.</p>
        <p>Current key value: {clerkPubKey || 'undefined'}</p>
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
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
    </ClerkProvider>
  );
}

export default App;
