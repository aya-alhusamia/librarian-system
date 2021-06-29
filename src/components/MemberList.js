import members from "../members";
import { useState } from "react";
import { Link } from "react-router-dom";
import MemberItem from "./MemberItem";
import MemberSearchBar from "./MemberSearchBar";
import { useSelector } from "react-redux";
import { FaMale } from "react-icons/fa";
const MemberList = () => {
  const [query, setQuery] = useState("");
  const members = useSelector((state) => state.members);
  const membersList = members
    .filter(
      (member) =>
        member.firstName.toLowerCase().includes(query.toLowerCase()) ||
        member.lastName.toLowerCase().includes(query.toLowerCase())
    )
    .map((member) => <MemberItem member={member} key={member.id} />);

  return (
    <div>
      <div className="add">
        <MemberSearchBar setQuery={setQuery} />

        <div className="icn">
          <Link to="/members/forms">
            <FaMale />
          </Link>
        </div>
      </div>

      <section className="cards">{membersList}</section>
    </div>
  );
};

export default MemberList;
