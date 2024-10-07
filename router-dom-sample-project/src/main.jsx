import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='github' element={<Github />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
