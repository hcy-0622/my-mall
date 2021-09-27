import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from 'antd-mobile'
import { getMenus, Menu } from '@/api'

export default React.memo(function Menu() {
  const [menus, setMenus] = useState<Menu[]>([])
  const history = useHistory()

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
              history.push(m.url)
            }}>
            <img className="w-66px h-66px" src={m.pic} alt={m.title} />
            <span className="text-12px text-[#666] mt-8px">{m.title}</span>
          </div>
        </Grid.Item>
      ))}
    </Grid>
  )
})
