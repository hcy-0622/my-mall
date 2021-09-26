import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, Search } from 'antd-mobile'
import { UnorderedListOutline } from 'antd-mobile-icons'

export default React.memo(function Header() {
  const history = useHistory()

  return (
    <NavBar
      back={null}
      left={
        <UnorderedListOutline
          className="text-32px"
          onClick={() => {
            history.push('/category')
          }}
        />
      }
      right={
        <span
          className="text-16px"
          onClick={() => {
            history.push('/login')
          }}>
          登录
        </span>
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
