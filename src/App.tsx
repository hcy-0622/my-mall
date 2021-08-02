import React, { useState } from 'react'
import { Button } from 'antd-mobile'

import './App.styl'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="test"></div>
      <Button type="primary">123456</Button>
    </div>
  )
}

export default App
