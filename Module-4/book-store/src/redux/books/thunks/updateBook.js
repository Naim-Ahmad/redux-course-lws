import { edited } from "../actions";

const updateBook = (bookId, bookInfo) => async (dispatch) => {
  const response = await fetch(`http://localhost:9000/books/${bookId}`, {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookInfo),
  });
  const updatedBook = await response.json();

  dispatch(edited(updatedBook));
};

export default updateBook;
