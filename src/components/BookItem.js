import { Books } from "../style";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { switchBook, updateBook } from "../store/actions";
const BookItem = (props) => {
  console.log(props, "props.....");
  // const booksB = useSelector((state) => state.books);
  // const [ava, setAva] = useState(true);
  // const dispatch = useDispatch();
  // let books = booksB.filter((book) => book.available == props.available);

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <Link to={`/books/${props.book.slug}`}>
            <img src={props.book.image} />
          </Link>
        </div>
        <div className="card-back">
          <strong>Book Title:</strong>
          <Link to={`/books/${props.book.slug}`}>
            <h1>{props.book.title} </h1>
          </Link>
          <p>
            {" "}
            <strong>Author Name :</strong> {props.book.author}
          </p>
          <button>{props.book.available ? "Available" : "Unavailable"}</button>
        </div>
      </div>
    </div>
  );
};
export default BookItem;
{
  /* <div>
      <p>{props.movie.watched ? "" : props.movie.name}</p>
      <span>
        {props.movie.watched ? (
          ""
        ) : (
          <button onClick={handleSwitch} className="btn btn-success">
            {"watch"}
          </button>
        )}
      </span>
      <span>
        {props.movie.watched ? (
          ""
        ) : (
          <button onClick={handleDelete} className="btn btn-danger">
            {"Delete"}
          </button>
        )}
      </span>
    </div>
  ); */
}
