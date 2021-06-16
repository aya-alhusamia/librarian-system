import { Books } from "../style";
import { Link } from "react-router-dom";
const BookItem = (props) => {
  console.log(props, "props.....");
  return (
    <Books>
      <Link to={`/books/${props.book.slug}`}>
        <img src={props.book.image} />
      </Link>
      <Link to={`/books/${props.book.slug}`}>
        <p>{props.book.title} </p>
      </Link>
    </Books>
  );
};
export default BookItem;
