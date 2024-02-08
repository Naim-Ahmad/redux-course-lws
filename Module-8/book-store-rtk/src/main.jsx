import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Add from './components/add/Add.jsx'
import AllBooksContainer from './components/all_books/AllBooksContainer.jsx'
import Edit from './components/edit/Edit.jsx'
import './index.css'
import store from './redux/app/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AllBooksContainer />,
      },
      {
        path: "/addBook",
        element: <Add />,
      },
      {
        path: "/edit/:bookId",
        element: <Edit />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
