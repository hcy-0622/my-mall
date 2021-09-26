/*
(
   id                   '主键'
   title                '标题'
   note                 '备注'
   pic                  '图片地址'
   url                  '链接地址',
   type                 '轮播类型：0->PC首页轮播；1->mobile首页轮播'
   status               '上下线状态：0->下线；1->上线'
   sort                 '排序'
);
* */
module.exports = (req, res) => {
  return res.json([
    {
      id: 1,
      title: '橘朵胶笔',
      note: '橘朵胶笔备注',
      pic: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/161560/8/7754/43095/6036449dE1934d6f8/2f7fdfb0bfd15833.jpg!q70.jpg',
      url: 'http://www.qq.com',
      type: 1,
      status: 1,
      sort: 2,
    },
    {
      id: 2,
      title: '猫狗好货你值得拥有',
      note: '猫狗好货你值得拥有备注',
      pic: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/163592/18/10710/177388/604577afEb55688b7/b49e7accb0da0857.jpg!q70.jpg',
      url: 'http://www.baidu.com',
      type: 1,
      status: 1,
      sort: 1,
    },
    {
      id: 3,
      title: '年货换新季',
      note: '年货换新季备注',
      pic: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/155446/18/19339/236827/603d25d5Ee7bb8481/86754c3de1a8d9e9.jpg!cr_1125x445_0_171!q70.jpg',
      url: 'http://www.taobao.com',
      type: 1,
      status: 1,
      sort: 0,
    },
  ])
}
