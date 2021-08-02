import useCounter from '@/store/useCounter'
import { Button } from 'antd-mobile'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Category: React.FC = React.memo(() => {
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
      <NavLink to="/home">跳转</NavLink>
    </div>
  )
})

export default Category
