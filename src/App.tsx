import React, { Suspense, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './router'
import Footer from './components/footer'
import useTabbar from './store/tabbar'

export default React.memo(function App() {
  const location = useLocation()
  const { setActiveKey, setHidden } = useTabbar()

  useEffect(() => {
    const key = location.pathname.substring(1)
    if (key === 'home' || key === 'category' || key === 'cart' || key === 'me') {
      setActiveKey(key)
      setHidden(false)
    } else {
      setHidden(true)
    }
  }, [location.pathname, setActiveKey, setHidden])

  return (
    <div className="pb-100px box-border">
      <Suspense fallback={<div>Loading...</div>}>{renderRoutes(routes)}</Suspense>
      <Footer />
    </div>
  )
})
