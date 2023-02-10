import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import Book from "../components/ui/Book";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";
// import React, { useEffect, useState } from "react";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id); //=== is evaluate data and type of data so adding + infront of "book.id" & "id" will convert it to number
  
  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsOnCart() {
    return cart.find(book => book.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    salePrice={book.salePrice}
                    originalPrice={book.originalPrice}
                  />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary--para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quia eos obcaecati dolore atque! Corporis perferendis odit
                    sapiente, in nostrum itaque, aperiam eius sit quis deleniti
                    molestiae inventore minima laboriosam temporibus.
                  </p>
                  <p className="book__summary-- para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quia eos obcaecati dolore atque! Corporis perferendis odit
                    sapiente, in nostrum itaque, aperiam eius sit quis deleniti
                    molestiae inventore minima laboriosam temporibus.
                  </p>
                </div>
                {bookExistsOnCart() ? (
                  <Link to={`/cart`} className="book__link">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="books__container">
            <div className="row">
              <div className="book__selected--top">
                <h2 className="book__selected--title-top">Recommended Books</h2>
              </div>
              <div className="books">
                {books
                  .filter((book) => book.rating === 5 && +book.id !== +id)
                  .slice(0, 4)
                  .map((book) => (
                    <Book book={book} key={book.id} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
