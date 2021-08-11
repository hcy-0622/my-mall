import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './router'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>{renderRoutes(routes)}</Suspense>
    </BrowserRouter>
  )
}

export default React.memo(App)
