import http from './http'
import { StatusType } from '@/types'

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

export interface Menu {
  id: number //'主键',
  title: string //'标题',
  note: string //'备注',
  pic: string //'图片地址',
  url: string //'链接地址',
  type: StatusType //'轮播类型：0->PC；1->mobile',
  status: StatusType //'上下线状态：0->下线；1->上线',
  sort: number //'排序',
}
export const getMenus = () => http.get<Menu[]>('/api/v1/menus')

export interface Product {
  id: number // '主键'
  name: string //'商品名称',
  pic: string //'主图',
  price: number //'销售价',
  sale: number //'销量',
  note: string //'备注',

  sort: number //'排序',
  publish_status: StatusType //'上架状态：0->下架；1->上架',
  new_status: StatusType //'新品状态:0->不是新品；1->新品',
  recommand_status: StatusType //'推荐状态；0->不推荐；1->推荐',
  verify_status: StatusType //'审核状态：0->未审核；1->审核通过',
}
export const getProducts = () => http.get<Product[]>('/api/v1/products')

export interface Category {
  id: number //'主键',
  parent_id: number //'上级分类的编号：0表示一级分类',
  name: string //'名称',
  icon: string //'图标',
  description: string //'描述',
  level: StatusType //'分类级别：0->1级；1->2级',
  show_status: StatusType //'显示状态：0->不显示；1->显示',
  sort: number //'排序'
  children: Category[] // '子分类'
}
export const getCategories = () => http.get<Category[]>('/api/v1/categories')
