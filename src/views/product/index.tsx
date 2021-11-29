import { memo } from 'react'
import { useParams } from 'react-router-dom'

export default memo(function Product() {
  const params = useParams<'id'>()

  return <div>{params.id}</div>
})
