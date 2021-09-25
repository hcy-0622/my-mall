import React from 'react'
import { Button } from 'antd-mobile'
import { getUser } from '@/api'

const Cart: React.FC = React.memo(function Cart() {
  const click = () => {
    getUser().then((result) => {
      console.log(result.data)
    })
  }

  return (
    <div>
      <Button onClick={click}>123</Button>
    </div>
  )
})

export default Cart
