import React from 'react'

import Header from './Header'
import Banner from './Banner'
import Notice from './Notice'

export default React.memo(function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Notice />
    </div>
  )
})
