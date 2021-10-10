import React, { useEffect, useState } from 'react'
import { Tabs, Grid } from 'antd-mobile'
import { Category, getCategories } from '@/api'
import style from './Content.module.css'

export default React.memo(function CategoryContent() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data)
    })
  }, [])

  return (
    <Tabs className={`${style.tabs}`}>
      {categories.map((c) => (
        <Tabs.TabPane key={c.id} title={c.name}>
          <Grid columns={4}>
            {c.children
              ? c.children.map((child) => (
                  <Grid.Item key={child.id}>
                    <div
                      className="flex flex-col items-center p-12px"
                      onClick={() => {
                        // history.push(child.url)
                      }}>
                      <img className="w-66px h-66px" src={child.icon} alt={child.name} />
                      <span className="text-12px text-gray-500 mt-8px">{child.name}</span>
                    </div>
                  </Grid.Item>
                ))
              : null}
          </Grid>
        </Tabs.TabPane>
      ))}
    </Tabs>
  )
})
