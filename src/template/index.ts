/**
 * 首页
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/09/04 14:51:14
 */
import 'reset-css'
import '@/styles/main.less'
import '@/styles/index.less'
// 获取导航元素
const navItem: HTMLElement = document.querySelector('.c-nav__item') as HTMLElement
navItem.classList.add('c-nav__item--active')
const jQuery: any = (window as any).jQuery
const wow: any = new (window as any).WOW(
  {
    boxClass: 'wow',      // 默认属性名
    animateClass: 'animated', // 默认触发的动画类(包含在animate css中)
    offset: 0,          // 为所有添加wow的元素设置 data-wow-delay属性 的默认值
    mobile: true,       // 是否在移动设备中开启动画
    live: true        // 持续监测页面中是否插入新的wow元素
  }
)
wow.init()
jQuery('.l-partner__content').slide({
  mainCell: '.l-partner__list',
  effect: 'leftLoop',
  vis: 5,
  scroll: 2,
  autoPage: true,
  switchLoad: '_src'
})
jQuery('.l-qualification__main').slide({
  mainCell: '.l-qualification__list',
  autoPlay: true,
  effect: 'leftMarquee',
  vis: 7,
  interTime: 50,
  trigger: 'click'
})
