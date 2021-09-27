import React from 'react'

import Header from './Header'
import Banner from './Banner'
import Notice from './Notice'
import Menu from './Menu'
import Products from './Products'

export default React.memo(function Home() {
  return (
    <div className="pt-90px">
      <Header />
      <Banner />
      <Notice />
      <Menu />
      <Products />
    </div>
  )
})
