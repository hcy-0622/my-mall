import { memo, Suspense, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useRouter } from './router'
import Footer from './components/footer'
import useTabbar from './store/tabbar'

export default memo(function App() {
  const element = useRouter()
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
      <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
      <Footer />
    </div>
  )
})
