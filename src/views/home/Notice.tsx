import { memo, useEffect, useState } from 'react'
import { Swiper } from 'antd-mobile'
import { MessageFill } from 'antd-mobile-icons'
import { getNotices, Notice } from '@/api'

export default memo(function HomeNotice() {
  const [notices, setNotices] = useState<Notice[]>([])

  useEffect(() => {
    getNotices().then((res) => {
      setNotices(res.data)
    })
  }, [])

  return (
    <div className="flex items-center px-20px py-10px overflow-hidden">
      <MessageFill className="flex-shrink-0 mr-20px text-28px relative -top-2px" />
      {notices.length !== 0 && (
        <Swiper className="flex-auto" autoplay indicator={() => null}>
          {notices.map((n) => (
            <Swiper.Item key={n.id}>
              <p className="whitespace-nowrap overflow-ellipsis overflow-hidden text-gray-500 pr-40px">{n.title}</p>
            </Swiper.Item>
          ))}
        </Swiper>
      )}
    </div>
  )
})
