import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import Explore from '../pages/Explore'
import Notifications from '../pages/Notifications'
import ErrorPage from '../pages/ErrorPage'
import MainLayout from '../layouts/main/MainLayout'
import Profile from '../pages/Profile'
import Messages from '../pages/Messages'
import Bookmarks from '../pages/Bookmarks'
import Lists from '../pages/Lists'
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "explore",
                element: <Explore />,
            },
            {
                path: "notifications",
                element: <Notifications />,
            },
            {
                path: "/:slug",
                element: <Profile />,
            },
            {
                path: "messages",
                element: <Messages />,
            },
            {
                path: "grok",
                element: 'grok',
            },
            {
                path: "communities",
                element: 'communities',
            },
            {
                path: "premium",
                element: 'premium',
            },
            {
                path: "profile",
                element: 'profile',
            },
            {
                path: "more",
                element: 'more',
            },
            {
                path: "bookmarks",
                element: <Bookmarks />,
            },
            {
                path: "lists",
                element: <Lists />,
            },
        ]
    },

])

export default router