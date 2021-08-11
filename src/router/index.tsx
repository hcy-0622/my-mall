import React from 'react'
import { Redirect } from 'react-router-dom'
import { RouteConfig } from 'react-router-config'

const Home = React.lazy(() => import('../views/home'))
const Category = React.lazy(() => import('../views/category'))
const Cart = React.lazy(() => import('../views/cart'))
const Me = React.lazy(() => import('../views/me'))

const HomeRedirect = () => <Redirect to="/home" />
const routes: RouteConfig[] = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/me',
    component: Me,
  },
  {
    path: '/',
    exact: true,
    render: HomeRedirect,
  },
]

export default routes
