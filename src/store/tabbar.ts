import { useState } from 'react'
import { createModel } from 'hox'

export default createModel(function useTabbar() {
  const [activeKey, setActiveKey] = useState('home')
  const [hidden, setHidden] = useState(false)

  return {
    activeKey,
    setActiveKey,
    hidden,
    setHidden,
  }
})
