import slugify from "slugify";
import booksData from "../books";
import memberData from "../members";
import {
  CREATE_MEMBER,
  DELETE_BOOK,
  UPDATE_BOOK,
  DELETE_MEMBER,
  UPDATE_MEMBER,
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
    case UPDATE_BOOK:
      const { updatedBook } = action.payload;
      updatedBook.slug = slugify(updatedBook.title);
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === updatedBook.id ? updatedBook : book
        ),
      };
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
    default:
      return state;
  }
};
export default reducer;
