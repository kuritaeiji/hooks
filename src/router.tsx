import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage'

export default createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/ripple_button'
      }
    ]
  }
])
