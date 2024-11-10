import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Explore from '../pages/Explore'
import Notifications from '../pages/Notifications'
import ErrorPage from '../pages/ErrorPage'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />

    },
    {
        path: "/explore",
        element: <Explore />,
    },
    {
        path: "/notifications",
        element: <Notifications />
    },
])

export default router