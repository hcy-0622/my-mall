import React from 'react'

import Header from './Header'
import Banner from './Banner'
import Notice from './Notice'
import Menu from './Menu'

export default React.memo(function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Notice />
      <Menu />
    </div>
  )
})
