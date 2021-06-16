import { DetailWrapper } from "../style";
import { useParams, Redirect } from "react-router-dom";
import DeleteButton from "./buttons/DeleteButton";
import { useSelector } from "react-redux";
import members from "../members";
import { Link } from "react-router-dom";
import { useState } from "react";
const BookDetail = (props) => {
  const [esraa, setEsraa] = useState("");
  const books = useSelector((state) => state.books);
  const booksSlug = useParams().booksSlug;
  const book = books.find((book) => book.slug === booksSlug);
  if (!book) return <Redirect to="/" />;
  const membersList = (id) => {
    let membersTest = members.filter((member) => member.id === id);
    console.log(membersTest, "TT");
    return membersTest[0];
  };
  // setEsraa(membersList);
  return (
    <DetailWrapper>
      <h1>{book.title}</h1>
      <img src={book.image} alt={book.title} />
      <p>{book.author}</p>
      <button onClick={() => props.setBook(null)}>Back</button>
      <p>
        {book.borrowedBy.map((member) => (
          <Link to={`/members/${membersList(member).slug}`} key={member}>
            {membersList(member)?.firstName}
          </Link>
        ))}
      </p>
      <DeleteButton
        // deletebook={props.deletebook}
        bookID={book.id}
      ></DeleteButton>
      {/* <Link to={`/books/${book.slug}/edit`}>
        <button>edit</button>
      </Link> */}
    </DetailWrapper>
  );
};

export default BookDetail;
