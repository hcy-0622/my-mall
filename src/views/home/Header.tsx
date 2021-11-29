import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar, Search } from 'antd-mobile'
import { UnorderedListOutline } from 'antd-mobile-icons'

export default memo(function HomeHeader() {
  const navigate = useNavigate()

  return (
    <NavBar
      className="fixed top-0 left-0 z-10 bg-red-500 w-full text-white"
      back={null}
      left={
        <UnorderedListOutline
          className="text-32px"
          onClick={() => {
            navigate('/category')
          }}
        />
      }
      right={
        <span
          className="text-16px"
          onClick={() => {
            navigate('/login')
          }}>
          登录
        </span>
      }>
      <Search
        placeholder="寻找宝贝..."
        onFocus={() => {
          navigate('/search')
        }}
      />
    </NavBar>
  )
})
