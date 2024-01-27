import { added } from "../actions";

const addBook = (bookInfo) => async (dispatch) => {
  const response = await fetch("http://localhost:9000/books", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookInfo),
  });
  const book = await response.json();

  dispatch(added(book));
};

export default addBook;
