import React from 'react'

import Header from './Header'
import Banner from './Banner'

export default React.memo(function Home() {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  )
})
