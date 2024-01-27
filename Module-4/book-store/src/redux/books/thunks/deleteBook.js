import { removed } from "../actions";

const deleteBook = (bookId) => async (dispatch) => {
  const response = await fetch(`http://localhost:9000/books/${bookId}`, {
    method: "delete",
  });
  await response.json();

  console.log(bookId);

  dispatch(removed(bookId));
};

export default deleteBook;
