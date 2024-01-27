import { useDispatch, useSelector } from "react-redux";
import { editBook } from "../redux/books/actions";
import addBook from '../redux/books/thunks/addBook';
import updateBook from '../redux/books/thunks/updateBook';

export default function AddBookForm() {

  const dispatch = useDispatch()

  const books = useSelector(state=> state.books)
  const book = books.find(book=> book.isEdit)
  // console.log(Object.keys(book).join(','))

  const handleAddBook = e => {
    e.preventDefault()
    const name = e.target.name.value;
    const author = e.target.author.value;
    const thumbnail = e.target.thumbnail.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const featured = e.target.featured.checked;

    const bookInfo = {
      name,
      author,
      thumbnail,
      price,
      rating,
      featured
    }
    // console.log(bookInfo)
    if(book){
      dispatch(updateBook(book.id, bookInfo))
      dispatch(editBook(book.id))
    }else{
      dispatch(addBook(bookInfo))
    }
    e.target.reset()
  }

  return (
    <div>
        <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <form onSubmit={handleAddBook} className="book-form">
            <div className="space-y-2">
              <label htmlFor="name">Book Name</label>
              <input defaultValue={book ? book.name: ''} required className="text-input" type="text" id="input-Bookname" name="name" />
            </div>

            <div className="space-y-2">
              <label htmlFor="category">Author</label>
              <input defaultValue={book ? book.author: ''} required className="text-input" type="text" id="input-Bookauthor" name="author" />
            </div>

            <div className="space-y-2">
              <label htmlFor="image">Image Url</label>
              <input defaultValue={book ? book.thumbnail: ''} required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="price">Price</label>
                <input defaultValue={book ? book.price: ''} required className="text-input" type="number" id="input-Bookprice" name="price" />
              </div>

              <div className="space-y-2">
                <label htmlFor="quantity">Rating</label>
                <input defaultValue={book ? book.rating: ''} required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
              </div>
            </div>

            <div className="flex items-center">
              <input defaultChecked={book ? book.featured : false} id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />
              <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button type="submit" className="submit" id="submit">{book ? "Update Book": "Add Book"}</button>
          </form>
        </div>
      </div>
  )
}