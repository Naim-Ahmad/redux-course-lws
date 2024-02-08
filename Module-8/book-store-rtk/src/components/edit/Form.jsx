import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateBookMutation } from "../../redux/features/api/apiSlice";

export default function Form({ book }) {
  const { name, author, thumbnail, price, rating, featured, id } = book;

  const [updateBook, { isSuccess }] = useUpdateBookMutation()
  const navigate = useNavigate()

  const handleSubmit = e => {
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
      price: Number(price),
      rating: Number(rating),
      featured
    }
    updateBook({bookId: id, data:bookInfo})
  }

  useEffect(() => {
    if (isSuccess) {
      navigate('/')
    }
  }, [isSuccess])

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="space-y-2">
        <label htmlFor="lws-bookName">Book Name</label>
        <input defaultValue={name} required className="text-input" type="text" id="lws-bookName" name="name" />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-author">Author</label>
        <input defaultValue={author} required className="text-input" type="text" id="lws-author" name="author" />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-thumbnail">Image Url</label>
        <input defaultValue={thumbnail} required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label htmlFor="lws-price">Price</label>
          <input defaultValue={price} required className="text-input" type="number" id="lws-price" name="price" />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-rating">Rating</label>
          <input defaultValue={rating} required className="text-input" type="number" id="lws-rating" name="rating" min="1"
            max="5" />
        </div>
      </div>

      <div className="flex items-center">
        <input defaultChecked={featured} id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" />
        <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
      </div>

      <button type="submit" className="submit" id="lws-submit">Edit Book</button>
    </form>
  )
}