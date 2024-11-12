import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Explore from '../pages/Explore'
import Notifications from '../pages/Notifications'
import ErrorPage from '../pages/ErrorPage'
import MainLayout from '../layouts/main/MainLayout'
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
                path: "messages",
                element: 'messages',
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
        ]
    },

])

export default router