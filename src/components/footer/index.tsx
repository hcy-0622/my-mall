import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import { AppOutline, AppstoreOutline, StarOutline, UserOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import useTabbar from '@/store/tabbar'

const tabs = [
  {
    key: 'home',
    title: '首页',
    icon: <AppOutline />,
    // badge: '',
  },
  {
    key: 'category',
    title: '分类',
    icon: <AppstoreOutline />,
    // badge: '5',
  },
  {
    key: 'cart',
    title: '购物车',
    icon: <StarOutline />,
    // badge: '99+',
  },
  {
    key: 'me',
    title: '个人',
    icon: <UserOutline />,
  },
]
export default memo(function Footer() {
  const navigate = useNavigate()
  const { activeKey, hidden } = useTabbar()

  return (
    <TabBar
      className={classNames('w-full fixed bottom-0 bg-white', {
        hidden: hidden,
      })}
      activeKey={activeKey}
      onChange={(key) => {
        navigate(key)
      }}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
})
