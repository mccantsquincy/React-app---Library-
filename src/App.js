import "./index.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data.js";
import BookInfo from "./pages/BookInfo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import React, { useEffect, useState } from "react";

function App({ addToCart }) {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book])
  }

  useEffect(() => {
     console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route  path="/" exact component={Home} />
        <Route  path="/books" exact render={() => <Books books={books} />} /> 
        <Route  path="/books/:id"  render={() => <BookInfo books={books} addToCart={addToCart}/>} />
        <Route  path="/cart"  render={() => <Cart books={books} cart={cart} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
