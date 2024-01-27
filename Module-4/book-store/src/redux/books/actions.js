import { ADDED, EDIT, EDITED, LOADED, REMOVED } from "./actionType";

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};

export const added = (bookInfo) => {
  return {
    type: ADDED,
    payload: bookInfo,
  };
};

export const removed = (bookId) => {
  return {
    type: REMOVED,
    payload: bookId,
  };
};

export const editBook = (bookId) => {
  return {
    type: EDIT,
    payload: bookId,
  };
};

export const edited = (updatedBook) => {
  return {
    type: EDITED,
    payload: updatedBook,
  };
};
