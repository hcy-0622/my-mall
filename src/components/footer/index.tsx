import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TabBar } from 'antd-mobile'

import { AppOutline, AppstoreOutline, StarOutline, UserOutline } from 'antd-mobile-icons'

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
const Footer: React.FC = () => {
  const history = useHistory()
  const [activeKey, setActiveKey] = useState('home')

  const tabBarChange = (key: string) => {
    setActiveKey(key)
    history.push(key)
  }

  useEffect(() => {
    setActiveKey(history.location.pathname.substr(1))
    // history.listen((location) => {
    //   setActiveKey(location.pathname.substr(1))
    // })
  }, [history])

  return (
    <TabBar className="w-full fixed bottom-0 bg-white" activeKey={activeKey} onChange={tabBarChange}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default Footer
