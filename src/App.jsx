import TopHeader from "./components/header/TopHeader";
import BotHeader from "./components/header/BotHeader";
import Home from "./page/Home/Home";

import ProductDetails from "./page/prodectDetails/ProductDetails";
import SearchResult from "./page/prodectDetails/SearchResult";
import { Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Cart from "./page/cart/Cart.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/Categores/CategoryPage.jsx";

import Favorites from "./page/Favorites.jsx";
import About from "./page/About/About.jsx";
import Accessories from "./page/Accessories/Accessories.jsx";
import Blog from "./page/Blog/Blog.jsx";
import Contact from "./page/Contact/Contact.jsx";

function App() {



  return (
    <>
      <header>
        <TopHeader />
        <BotHeader />
      </header>

      <Toaster position="bottom-right" toastOptions={
        {
          style: {
            background: '#e9e9e9',
            borderRadius: '5px',
            padding: '14px',
          }
        }
      } />



      <ScrollToTop />

      <AnimatePresence  mode="wait">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/search" element={<SearchResult />} />

        <Route path="/about" element={<About />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      </AnimatePresence>
    
    </>
  );
}

export default App;