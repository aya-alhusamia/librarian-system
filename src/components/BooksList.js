import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Components
import BookItem from "./BookItem";
import SearchBar from "./SearchBar";
import { AiFillRead } from "react-icons/ai";

import { List } from "../style";
//Data
// import books from "../prducts";
const BooksList = ({ props }) => {
  const books = useSelector((state) => state.books);
  const [query, setQuery] = useState("");
  let filterdBook = books.filter((book) => {
    // console.log(
    //   book.genre.map((v) => v.toLowerCase().includes(query.toLowerCase())),
    //   "test......"
    // );

    return (
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.genre.toString().toLowerCase().includes(query.toLowerCase())
    );
  });
  let bookList = filterdBook.map((book) => (
    <BookItem book={book} key={book.id} />
  ));
  return (
    <div>
      <div className="add">
        <SearchBar setQuery={setQuery} />
        <div className="icn">
          <Link to="/books/forms">
            <AiFillRead />
          </Link>
        </div>
      </div>
      <section className="cards">{bookList}</section>
    </div>
  );
};
export default BooksList;
