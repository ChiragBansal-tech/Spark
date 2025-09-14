import React from 'react'
import { Routes } from './RouteVariable'
import Dashboard from '../pages/Dashboard'
import { Navigate } from 'react-router-dom'

const routes = [
    {
        path: "/",
        element: <Navigate to={Routes.DASHBOARD} replace />
    },
    {
        path: Routes.DASHBOARD,
        element: <Dashboard />
    }
]

export default routes
