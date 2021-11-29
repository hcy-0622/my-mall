import { lazy } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'

const Home = lazy(() => import('../views/home'))
const Category = lazy(() => import('../views/category'))
const Cart = lazy(() => import('../views/cart'))
const Me = lazy(() => import('../views/me'))
const Product = lazy(() => import('../views/product'))
const Search = lazy(() => import('../views/search'))
const Login = lazy(() => import('../views/login'))

export default function useRouter() {
  const element = useRoutes([
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/category',
      element: <Category />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
    {
      path: '/me',
      element: <Me />,
    },
    {
      path: '/product/:id',
      element: <Product />,
    },
    {
      path: '/search',
      element: <Search />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <Navigate to="/home" replace />,
    },
  ])

  return element
}
