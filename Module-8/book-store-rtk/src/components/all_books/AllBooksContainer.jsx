import AllBooks from './AllBooks'
import FilterButtons from './FilterButtons'

export default function AllBooksContainer() {

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <FilterButtons />
        </div>

        <AllBooks/>
      </div>
    </main>
  )
}