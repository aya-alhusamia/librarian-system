import { Link } from "react-router-dom";

const MemberItem = (props) => {
  const member = props.member;
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <Link to={`/members/${member.slug}`}>
            {" "}
            <img alt={member.firstName} src={member.img} />
          </Link>
        </div>
        <div className="card-back">
          <strong>Member Name: </strong>
          <Link to={`/members/${member.slug}`}>
            <h1>
              {member.firstName} {member.lastName}
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberItem;
