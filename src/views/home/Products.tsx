import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getProducts, Product } from '@/api'
import style from './Products.module.css'

export default React.memo(function HomeProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const history = useHistory()

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data)
    })
  }, [])

  return (
    <div className="flex justify-between flex-wrap p-20px">
      {products.map((p) => {
        return (
          <div
            key={p.id}
            className="w-345px bg-white mb-20px rounded-20px overflow-hidden"
            onClick={() => {
              history.push(`/product/${p.id}`)
            }}>
            <img className="w-full" src={p.pic} alt="" />
            <div className="text-14px text-gray-500 px-8px m-20px">
              <p className={style.title}>{p.name}</p>
              <div className="flex justify-between mt-20px">
                <span className="text-red-500">￥{p.price}</span>
                <span>{p.sale}人已购买</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
})
