import { Link } from "react-router-dom";

const MemberItem = (props) => {
  const member = props.member;
  return (
    <div>
      <Link to={`/members/${member.slug}`}>
        {" "}
        <img alt={member.firstName} src={member.img} />
      </Link>
      <p>
        {member.firstName} {member.lastName}
      </p>
    </div>
  );
};

export default MemberItem;
