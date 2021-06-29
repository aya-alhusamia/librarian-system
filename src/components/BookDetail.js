import { DetailWrapper } from "../style";
import { useParams, Redirect } from "react-router-dom";
import DeleteButton from "./buttons/DeleteButton";
import { useSelector } from "react-redux";
import members from "../members";
import { Link } from "react-router-dom";
import { useState } from "react";
const BookDetail = (props) => {
  const [esraa, setEsraa] = useState(true);
  const books = useSelector((state) => state.books);
  const booksSlug = useParams().booksSlug;
  const book = books.find((book) => book.slug === booksSlug);
  if (!book) return <Redirect to="/" />;
  const membersList = (id) => {
    let membersTest = members.filter((member) => member.id === id);
    console.log(membersTest, "TT");
    return membersTest[0];
  };
  const availableMember = members.filter((member) => {
    if (member.membership === "gold") {
      if (member.currentlyBorrowedBooks.length < 3) {
        return member;
      }
    } else if (member.membership === "silver") {
      if (member.currentlyBorrowedBooks.length < 2) {
        return member;
      }
    } else if (member.membership === "platinum") {
      if (member.currentlyBorrowedBooks.length < 5) {
        return member;
      }
    }
  });
  console.log(members);
  const handeChange = () => {
    setEsraa(!true);
  };
  // setEsraa(membersList);
  return (
    <div className="memeber">
      <h1>{book.title}</h1>
      <img className="img-member" src={book.image} alt={book.title} />
      <p>{book.author}</p>
      {book.available ? (
        <ul className="det">
          {availableMember.map((member) => (
            <div>
              <li>{member.firstName}</li>
              <button onClick={handeChange}>Barrow</button>
            </div>
          ))}
        </ul>
      ) : (
        <ul className="det">
          {book?.borrowedBy?.map((member) => (
            <li>
              <Link to={`/members/${membersList(member).slug}`} key={member}>
                {membersList(member)?.firstName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookDetail;
