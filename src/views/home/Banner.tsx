import React, { useEffect, useState } from 'react'
import { Swiper } from 'antd-mobile'
import { Banner, getBanners } from '@/api'

export default React.memo(function Banner() {
  const [banners, setBanners] = useState<Banner[]>([])

  useEffect(() => {
    getBanners().then((res) => {
      setBanners(res.data)
    })
  }, [])

  return (
    <>
      {banners.length !== 0 && (
        <Swiper autoplay indicatorProps={{ style: { '--active-color': '#F23030' } }}>
          {banners.map((b) => (
            <Swiper.Item key={b.id}>
              <a className="inline-block w-full h-auto" href={b.url}>
                <img
                  className="w-full align-top"
                  src={b.pic}
                  alt={b.title}
                  // onLoad={() => {
                  //   window.dispatchEvent(new Event('resize'))
                  // }}
                />
              </a>
            </Swiper.Item>
          ))}
        </Swiper>
      )}
    </>
  )
})
