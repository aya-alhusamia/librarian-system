import { Redirect, useParams } from "react-router-dom";
import books from "../books";

const MembersDetail = (props) => {
  const membersSlug = useParams().membersSlug;

  const member = props.members.find((member) => member.slug === membersSlug);
  if (!member) return <Redirect to="/*" />;
  const booksList = (id) => {
    let test = books.filter((book) => book.id === id);
    return test[0];
  };

  console.log(booksList[0]);
  return (
    <div>
      <h2>
        {" "}
        {member.firstName} {member.lastName}
      </h2>
      <img src={member.img} alt={member.firstName} />
      <p>
        {member.currentlyBorrowedBooks.map((book) => (
          <div key={book}>{booksList(book)?.title}</div>
        ))}
      </p>
      <p>{member.membership}</p>
    </div>
  );
};

export default MembersDetail;
