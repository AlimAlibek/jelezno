

import { createBrowserRouter } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import List from './pages/List/';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Dashboard
    },
    {
        path: '/list',
        Component: List
    }
])
