import React from "react";

const MemberSearchBar = (props) => {
  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Search by member name"
          onChange={(event) => props.setQuery(event.target.value)}
        />
      </form>
    </div>
  );
};

export default MemberSearchBar;
