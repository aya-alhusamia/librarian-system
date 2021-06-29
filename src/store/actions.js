export const DELETE_BOOK = " DELETE_BOOK";

export const deleteBook = (bookId) => {
  return {
    type: DELETE_BOOK,
    payload: {
      bookId: bookId,
    },
  };
};

export const CREATE_BOOK = " CREATE_BOOK";

export const createBook = (newBook) => {
  return {
    type: CREATE_BOOK,
    payload: {
      newBook: newBook,
    },
  };
};

export const UPDATE_BOOK = " UPDATE_BOOK";

export const updateBook = (updatedBook) => {
  return {
    type: UPDATE_BOOK,
    payload: {
      updatedBook: updatedBook,
    },
  };
};
///////////////////////////////////////////////
export const DELETE_MEMBER = " DELETE_MEMBER";

export const deleteMember = (memberId) => {
  return {
    type: DELETE_MEMBER,
    payload: {
      memberId: memberId,
    },
  };
};

export const CREATE_MEMBER = " CREATE_MEMBER";

export const createMember = (newMember) => {
  return {
    type: CREATE_MEMBER,
    payload: {
      newMember: newMember,
    },
  };
};

export const UPDATE_MEMBER = "UPDATE_MEMBER";

export const updateMember = (updatedMember) => {
  return {
    type: UPDATE_MEMBER,
    payload: {
      updatedMember: updatedMember,
    },
  };
};
export const AVAILABLE_BOOK = "AVAILABLE_BOOK";
export const switchBook = (book) => {
  return {
    type: AVAILABLE_BOOK,
    payload: {
      book: book,
    },
  };
};
export const UNAVAILABLE_BOOK = "UNAVAILABLE_BOOK";
export const switchToUnAvailableBook = (book) => {
  return {
    type: UNAVAILABLE_BOOK,
    payload: {
      book: book,
    },
  };
};
