import React, { useEffect, useState } from 'react'
import { Swiper } from 'antd-mobile'
import { MessageFill } from 'antd-mobile-icons'
import { getNotices, Notice } from '@/api'

export default React.memo(function Notice() {
  const [notices, setNotices] = useState<Notice[]>([])

  useEffect(() => {
    getNotices().then((res) => {
      setNotices(res.data)
    })
  }, [])

  return (
    <div className="flex justify-between items-center px-20px py-10px">
      <MessageFill className="flex-shrink-0 mr-20px text-28px relative -top-2px" />
      <Swiper autoplay indicator={() => null}>
        {notices.map((n) => (
          <Swiper.Item key={n.id}>
            <p className="whitespace-nowrap overflow-ellipsis overflow-hidden text-[#666]">{n.title}</p>
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  )
})
