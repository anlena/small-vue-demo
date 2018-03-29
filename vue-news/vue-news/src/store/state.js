// 相当于数据库，定义了应用数据的数据结构及初始状态

export default{
  isFirstLoad:true,   //第一次进入主页
  ids:[],             // 当前新闻数组id
  stories:[],         //当前新闻数组
  homepageDate:0,     //首页当前日期
  date:0,             //详情页日期字符串
  dateStr:0           //详情页日期
}