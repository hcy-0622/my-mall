import React, { Suspense } from 'react'
import { renderRoutes } from 'react-router-config'

import routes from './router'
import Footer from './components/footer'

export default React.memo(function App() {
  return (
    <div className="pb-[100px] box-border">
      <Suspense fallback={<div>Loading...</div>}>{renderRoutes(routes)}</Suspense>
      <Footer />
    </div>
  )
})
