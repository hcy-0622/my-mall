/*
(
   id                   '主键',
   name                 '商品名称',
   pic                  '主图',
   price                '销售价', // 例如: 6666
   sale                 '销量',
   note                 '备注',

   sort                 '排序',
   publish_status       '上架状态：0->下架；1->上架',
   new_status           '新品状态:0->不是新品；1->新品',
   recommand_status     '推荐状态；0->不推荐；1->推荐',
   verify_status        '审核状态：0->未审核；1->审核通过',
);
* */
module.exports = (req, res) => {
  return res.json([
    // https://item.m.jd.com/product/100016034372.html?pps=reclike.FO4O605:FOFO00496B92443O13O6:FOFO0FF0416O440012FO3O643O7FFF5021813FO7O17496B92441BDDB9B4A9E76E9B
    {
      id: 1,
      name: 'Apple iPhone 12 Pro Max (A2412) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
      pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/122505/19/15070/68848/5f861494Ebe330db5/24bc162f493ec940.jpg!q80.dpg.webp',
      price: 8888, // 例如: 6666
      sale: 1263,
      note: '备注',

      sort: 1,
      publish_status: 1,
      new_status: 1,
      recommand_status: 1,
      verify_status: 1,
    },
    // https://item.m.jd.com/product/48405406831.html?pps=reclike.FO4O605:FOFO00452FE46F3O13O6:FOFO0FF0416O44O4FO3O643O7FFF5021813FO8OB452FE46F12D6B9B4A5D56B9C
    {
      id: 2,
      name: 'LazyDiary 懒人沙发多档调节单人沙发椅折叠床上小沙发靠背椅飘窗椅卧室阳台客厅沙发 蓝色',
      pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/97329/18/16468/120378/5e7c91b0Eebe4cd2d/064919ca4898e0a8.jpg!q80.dpg.webp',
      price: 198, // 例如: 6666
      sale: 1699,
      note: '备注',

      sort: 1,
      publish_status: 1,
      new_status: 1,
      recommand_status: 1,
      verify_status: 1,
    },
    // https://item.m.jd.com/product/100009069453.html?pps=reclike.FO4O605:FOFO0049014B8D3O13O6:FOFO0FF0416O823O7FO3O643O7FFF5021813FO7O1749014B8D192EB9B4BA551F33
    {
      id: 3,
      name: '海尔（Haier）桶式吸尘器 15L大容量干湿吹家用强劲大吸力吸尘器HZ-T615',
      pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/152279/39/15610/110617/600e32e0E9d316e34/210224ca8a147eb6.jpg!q80.dpg.webp',
      price: 249, // 例如: 6666
      sale: 429,
      note: '备注',

      sort: 1,
      publish_status: 1,
      new_status: 1,
      recommand_status: 1,
      verify_status: 1,
    },
    // https://item.m.jd.com/product/68750304837.html?pps=reclike.FO4O605:FOFO3O1D666453O13O6:FOFO0FF0416O84OCFO3O643O7FFF5021813FO7O1001D66645195EB9B4BF481F69
    {
      id: 4,
      name: 'TAYAYO空气加湿器 家用静音卧室客厅办公室桌面大容量上加水婴儿孕妇陶瓷加湿器香薰花瓶古风摆件 皇帝黄',
      pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/156522/30/7548/234590/600e2c8fEd4de5604/f427165914e36ad5.jpg!q80.dpg.webp',
      price: 388, // 例如: 6666
      sale: 1134,
      note: '备注',

      sort: 1,
      publish_status: 1,
      new_status: 1,
      recommand_status: 1,
      verify_status: 1,
    },
    // https://item.m.jd.com/product/10020386777515.html?pps=reclike.FO4O605:FOFO3OD9829AB3O13O6:FOFO0FF0416O44OEFO3O643O7FFF5021813FO6O91D0D9829AB1B75B9B4C2A331F2
    {
      id: 5,
      name: '杨妮2020秋冬季新款女装韩版宽松针织开衫中长款秋冬长袖外搭毛衣外套GT-BF19-8771 灰色 均码',
      pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/139126/40/5447/221213/5f364998E4dcb10e3/0164aa6ed655d2b7.jpg!q80.dpg.webp',
      price: 85, // 例如: 6666
      sale: 3699,
      note: '备注',

      sort: 1,
      publish_status: 1,
      new_status: 1,
      recommand_status: 1,
      verify_status: 1,
    },
    // https://item.m.jd.com/product/72349332405.html?pps=reclike.FO4O605:FOFO00D85B33B53O13O6:FOFO0FF0416O43O1FO4O643O7FFF5021813FO7O10D85B33B519DAB9B4C4F7D926
    {
      id: 6,
      name: '全新款酷睿i7八代独显MX250 16G运行15.6英寸笔记本电脑轻薄全高清窄边框商务办公学生游戏本 【入门版N4100】8G+128G固态',
      pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/92896/29/15137/131377/5e6ef9c3Ed4402777/e8eb7a3f14b5ac26.jpg!q80.dpg.webp',
      price: 2288, // 例如: 6666
      sale: 651,
      note: '备注',

      sort: 1,
      publish_status: 1,
      new_status: 1,
      recommand_status: 1,
      verify_status: 1,
    },
    // https://item.m.jd.com/product/45545024982.html?pps=reclike.FO4O605:FOFO009AB1EDD63O13O6:FOFO0FF0416O43O18FO3O643O7FFF5021813FO8OA9AB1EDD61430B9B4C8113B23
    {
      id: 7,
      name: '森泰冠林床 实木床架子床现代简约1.8米1.5米单双人床橡胶木简欧田园储物气压高箱抽屉床 婚床 单床 颜色备注 1.5*2框架 可选1.5*1.9',
      pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t10126/188/2945468334/233331/32af9135/5cdc5326N9dafd9a0.jpg!q80.dpg.webp',
      price: 1499, // 例如: 6666
      sale: 23,
      note: '备注',

      sort: 1,
      publish_status: 1,
      new_status: 1,
      recommand_status: 1,
      verify_status: 1,
    },
    // https://item.m.jd.com/product/10024053289566.html?pps=reclike.FO4O605:FOFO00E822B25E3O13O6:FOFO0FF0416O43OA9FO3O643O7FFF5021813FO6O91DE822B25E1BE9B9B4CDF45FF1
    {
      id: 8,
      name: '星司南 加湿取暖器暖风机家用办公室加湿器上加水静音香薰小型速热电暖气一体机 红色',
      pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/149930/39/13800/303735/5faa3337E366b865e/1be1ab364c308a5e.jpg!q80.dpg.webp',
      price: 8888, // 例如: 6666
      sale: 1263,
      note: '备注',

      sort: 1,
      publish_status: 1,
      new_status: 1,
      recommand_status: 1,
      verify_status: 1,
    },
  ])
}
