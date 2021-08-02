import React from 'react'
import useCounter from '@/store/useCounter'
import { Button } from 'antd-mobile'
import { NavLink } from 'react-router-dom'

const Home: React.FC = React.memo(() => {
  const counter = useCounter()
  return (
    <div>
      <p>{counter.count}</p>
      <Button type="primary" onClick={counter.increment}>
        增加
      </Button>
      <Button type="warning" onClick={counter.decrement}>
        减少
      </Button>
      <NavLink to="/category">跳转</NavLink>
    </div>
  )
})

export default Home
