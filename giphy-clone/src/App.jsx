import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout'
import Home from './pages/Home';
import Category from './pages/Category';
import Search from './pages/Search';
import GifPage from './pages/GifPage';
import Favorites from './pages/Favorites';

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,

      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/:category',
          element: <Category />
        },
        {
          path: '/search/:query',
          element: <Search />
        },
        {
          path: '/:type/:slug',
          element: <GifPage />
        },
        {
          path: '/favorites',
          element: <Favorites />
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
