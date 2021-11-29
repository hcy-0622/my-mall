import { memo } from 'react'
import CategoryHeader from './Header'
import CategoryContent from './Content'

export default memo(function Category() {
  return (
    <div className="pt-90px">
      <CategoryHeader />
      <CategoryContent />
    </div>
  )
})
