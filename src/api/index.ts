import { StatusType } from '@/types'
import http from './http'

export interface Banner {
  id: number //'主键',
  title: string //'标题',
  note: string //'备注',
  pic: string //'图片地址',
  url: string //'链接地址',
  type: StatusType //'轮播类型：0->PC首页轮播；1->mobile首页轮播',
  status: StatusType //'上下线状态：0->下线；1->上线',
  sort: number //'排序',
}
export const getBanners = () => http.get<Banner[]>('/api/v1/banners')

export interface Notice {
  id: number //'主键',
  title: string //'标题',
  note: string //'备注',
  url: string //'链接地址',
  type: StatusType //'轮播类型：0->PC；1->mobile',
  status: StatusType //'上下线状态：0->下线；1->上线',
  sort: number //'排序',
}
export const getNotices = () => http.get<Notice[]>('/api/v1/notices')
