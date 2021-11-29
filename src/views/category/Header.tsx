import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar, Search } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'

export default memo(function CategoryHeader() {
  const navigate = useNavigate()

  return (
    <NavBar
      className="fixed top-0 left-0 z-10 bg-white w-full"
      back={null}
      left={
        <LeftOutline
          className="text-32px"
          onClick={() => {
            navigate(-1)
          }}
        />
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
