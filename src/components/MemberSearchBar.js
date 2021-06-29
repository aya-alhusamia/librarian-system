import React from "react";

const MemberSearchBar = (props) => {
  return (
    <section className="search">
      <form>
        <input
          className="form-control"
          type="search"
          placeholder="Search by member name"
          onChange={(event) => props.setQuery(event.target.value)}
        />
      </form>
    </section>
  );
};

export default MemberSearchBar;
