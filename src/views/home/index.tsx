import { memo } from 'react'

import HomeHeader from './Header'
import HomeBanner from './Banner'
import HomeNotice from './Notice'
import HomeMenu from './Menu'
import HomeProducts from './Products'

export default memo(function Home() {
  return (
    <div className="pt-90px">
      <HomeHeader />
      <HomeBanner />
      <HomeNotice />
      <HomeMenu />
      <HomeProducts />
    </div>
  )
})
