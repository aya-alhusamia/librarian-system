import slugify from "slugify";
import booksData from "../books";
import memberData from "../members";
import {
  CREATE_MEMBER,
  DELETE_BOOK,
  UPDATE_BOOK,
  DELETE_MEMBER,
  UPDATE_MEMBER,
  AVAILABLE_BOOK,
  UNAVAILABLE_BOOK,
} from "./actions";
import { CREATE_BOOK } from "./actions";

const initialState = {
  books: booksData,
  members: memberData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BOOK:
      const booksToKeep = state.books.filter(
        (book) => book.id !== action.payload.bookId
      );
      return {
        ...state,
        books: booksToKeep,
      };
    case CREATE_BOOK:
      const { newBook } = action.payload;
      newBook.id = state.books[state.books.length - 1].id + 1;
      newBook.slug = slugify(newBook.title);
      return {
        ...state,
        books: [...state.books, newBook],
      };
    case UPDATE_BOOK: {
      const { updatedBook } = action.payload.book;
      updatedBook.id = !updatedBook.id;
      let newBooks = state.books.map((book) =>
        book.id != action.payload.id ? book : updatedBook
      );
      return { ...state, books: newBooks };
    }
    case CREATE_MEMBER:
      const { newMember } = action.payload;
      newMember.id = state.members[state.members.length - 1].id + 1;
      newMember.slug = slugify(newMember.firstName);
      return {
        ...state.members,
        members: [...state.members, newMember],
      };
    case DELETE_MEMBER:
      const membersToKeep = state.members.filter(
        (member) => member.id !== action.payload.memberId
      );
      return {
        ...state.members,
        members: membersToKeep,
      };
    case UPDATE_MEMBER:
      const { updatedMember } = action.payload;
      updatedMember.slug = slugify(updatedMember.title);
      return {
        ...state,
        members: state.members.map((member) =>
          member.id === updatedMember.id ? updatedMember : member
        ),
      };
    // case AVAILABLE_BOOK:
    //   const switchBook = state.books.filter(
    //     (book) => book.id === action.payload.book.id
    //   );

    //   switchBook[switchBook.length - 1].available = false;

    //   return {
    //     ...state,
    //     books: state.books.map((book) =>
    //       book.available === action.payload.book.available
    //         ? action.payload.book
    //         : book
    //     ),
    //   };
    // case UNAVAILABLE_BOOK:
    //   const switchToUnAvailableBook = state.books.filter(
    //     (book) => book.id === action.payload.book.id
    //   );
    //   switchToUnAvailableBook[
    //     switchToUnAvailableBook.length - 1
    //   ].available = true;
    //   return {
    //     ...state,
    //     books: state.books.map((book) =>
    //       book.available === action.payload.book.available
    //         ? action.payload.book
    //         : book
    //     ),
    //   };

    default:
      return state;
  }
};
export default reducer;
