import React from 'react'
import { RouteConfigComponentProps } from 'react-router-config'

export default React.memo(function Product({ match }: RouteConfigComponentProps<{ id: string }>) {
  return <div>{match.params.id}</div>
})
