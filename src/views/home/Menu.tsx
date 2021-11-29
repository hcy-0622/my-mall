import { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid } from 'antd-mobile'
import { getMenus, Menu } from '@/api'

export default memo(function HomeMenu() {
  const [menus, setMenus] = useState<Menu[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    getMenus().then((res) => {
      setMenus(res.data)
    })
  }, [])

  return (
    <Grid columns={4}>
      {menus.map((m) => (
        <Grid.Item key={m.id}>
          <div
            className="flex flex-col items-center p-12px"
            onClick={() => {
              navigate(m.url)
            }}>
            <img className="w-66px h-66px" src={m.pic} alt={m.title} />
            <span className="text-12px text-gray-500 mt-8px">{m.title}</span>
          </div>
        </Grid.Item>
      ))}
    </Grid>
  )
})
