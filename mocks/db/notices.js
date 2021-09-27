/*
(
   id                   '主键',
   title                '内容',
   note                 '备注',
   url                  '链接地址',
   type                 '通知类型：0->PC；1->mobile',
   status               '上下线状态：0->下线；1->上线',
   sort                 '排序',
);
* */
module.exports = (req, res) => {
  return res.json([
    {
      id: 1,
      title: 'Apple iPhone 12 (A2404) 128GB 白色 支持移动联通电信5G 双卡双待手机',
      note: '通知备注',
      url: 'http://www.jd.com',
      type: 1,
      status: 1,
      sort: 0,
    },
    {
      id: 2,
      title: '摩托罗拉 edge s pro 旗舰骁龙870 1亿像素 50X潜望式变焦 10亿色144Hz臻彩屏 轻薄5G手机 8GB+128GB 静夜思',
      note: '通知备注',
      url: 'http://www.baidu.com',
      type: 1,
      status: 1,
      sort: 2,
    },
    {
      id: 3,
      title: '索尼（SONY）Xperia 1 III 智能5G手机 21:9 4K HDR OLED屏 120Hz 骁龙888 微单技术 12GB+256GB夜烟黑',
      note: '通知备注',
      url: 'http://www.taobao.com',
      type: 1,
      status: 1,
      sort: 3,
    },
  ])
}
