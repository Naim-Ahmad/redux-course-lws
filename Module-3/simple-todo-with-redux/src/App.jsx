
import Filter from './components/Filter'
import Header from './components/Header'
import Navbar from './components/Navbar'
import TodoLIsts from './components/TodoLIsts'

function App() {


  return (
    <>
      <div
        className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
        {/* <!-- navbar --> */}
        <Navbar />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">

          <Header />
          <hr className="mt-4" />

          {/* <!-- todo list --> */}
          <TodoLIsts />

          <hr className="mt-4" />

          {/* <!-- footer --> */}
          <Filter />
        </div>
      </div>

    </>
  )
}

export default App
