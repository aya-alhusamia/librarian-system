import { Redirect, useParams } from "react-router-dom";
import books from "../books";

const MembersDetail = (props) => {
  const membersSlug = useParams().membersSlug;

  const member = props.members.find((member) => member.slug === membersSlug);
  if (!member) return <Redirect to={`/members/${props.member?.slug}`} />;
  const booksList = (id) => {
    let test = books.filter((book) => book.id === id);
    return test[0];
  };

  console.log(booksList[0]);
  return (
    <div className="memeber">
      <h2>
        {" "}
        {member.firstName} {member.lastName}
      </h2>
      <img className="img-member" src={member.img} alt={member.firstName} />
      <ul className="det">
        {member?.currentlyBorrowedBooks?.map((book) => (
          <strong>
            <li key={book}>{booksList(book)?.title}</li>
          </strong>
        ))}
      </ul>
      <p className="ship">{member.membership}</p>
    </div>
  );
};

export default MembersDetail;
