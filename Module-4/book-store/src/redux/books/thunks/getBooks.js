import { loaded } from "../actions";

const getBooks = async (dispatch) => {
  const response = await fetch("http://localhost:9000/books");
  const books = await response.json();

  dispatch(loaded(books));
};

export default getBooks;
