import http from './http'

export interface Banner {
  id: number //'主键',
  title: string //'标题',
  note: string //'备注',
  pic: string //'图片地址',
  url: string //'链接地址',
  type: 0 | 1 //'轮播类型：0->PC首页轮播；1->mobile首页轮播',
  status: 0 | 1 //'上下线状态：0->下线；1->上线',
  sort: number //'排序',
}
export const getBanners = () => http.get<Banner[]>('/api/v1/banners')
