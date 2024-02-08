import { useParams } from 'react-router-dom';
import { useGetBookQuery } from '../../redux/features/api/apiSlice';
import Error from '../ui/Error';
import Form from './Form';

export default function Edit() {

  const {bookId} = useParams()

  const {data:book , isLoading, isError, error} = useGetBookQuery(bookId)

  let content = null;

  if(isLoading) {
    content = <div>Loading...</div>
  }

  if(!isLoading && isError){
    content = <Error message={error.message}/>
  }

  if(!isLoading && !isError && !book.id){
    content = <div> No Content here</div>
  }

  if(!isLoading && !isError && book.id){
    content = <Form book={book}/>
  }

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
    </main>
  )
}