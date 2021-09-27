import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import { RouteConfig } from 'react-router-config'

const Home = lazy(() => import('../views/home'))
const Category = lazy(() => import('../views/category'))
const Cart = lazy(() => import('../views/cart'))
const Me = lazy(() => import('../views/me'))
const Product = lazy(() => import('../views/product'))
const Search = lazy(() => import('../views/search'))
const Login = lazy(() => import('../views/login'))

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
    path: '/product/:id',
    component: Product,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    exact: true,
    render: HomeRedirect,
  },
]

export default routes
