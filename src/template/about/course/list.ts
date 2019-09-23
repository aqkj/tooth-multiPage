/**
 * 发展历程
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/09/09 17:15:20
 */
import 'reset-css'
import '@/styles/main.less'
import '@/styles/subnav.less'
import '@/styles/course.less'
const $: any = (window as any).jQuery
$('.l-course__timerange').slide({
  mainCell: '.l-course__timerange__list',
  effect: 'left',
  vis: 5,
  scroll: 1,
  autoPage: true,
  switchLoad: '_src'
})
const items: any = $('.l-course__timerange__item')
if (items.length) {
  changeTimeItem(items.eq(0))
}
function changeTimeItem(item: any): void {
  item.addClass('l-course__timerange__item--active')
  item.siblings().removeClass('l-course__timerange__item--active')
  const year: string = item.data('title')
  const content: string = item.data('content')
  $('.l-course__content__year').html(`${year}<span>年</span>`)
  $('.l-course__content__main').html(content)
}
items.on('click', function(this: any, e: any): void {
  // console.log($(this))
  changeTimeItem($(this))
})
