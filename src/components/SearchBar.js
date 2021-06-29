import { SearchBarStyled } from "../style";
const SearchBar = (props) => {
  return (
    <section className="search">
      <form>
        <input
          className="form-control"
          onChange={(event) => props.setQuery(event.target.value)}
          placeholder="Search for a book name"
        />
      </form>
    </section>
  );
};

export default SearchBar;
