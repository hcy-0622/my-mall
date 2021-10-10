import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, Search } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'

export default React.memo(function CategoryHeader() {
  const history = useHistory()

  return (
    <NavBar
      className="fixed top-0 left-0 z-10 bg-white w-full"
      back={null}
      left={
        <LeftOutline
          className="text-32px"
          onClick={() => {
            history.goBack()
          }}
        />
      }>
      <Search
        placeholder="寻找宝贝..."
        onFocus={() => {
          history.push('/search')
        }}
      />
    </NavBar>
  )
})
