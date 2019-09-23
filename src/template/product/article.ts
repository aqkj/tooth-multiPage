/**
 * 产品详情
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/09/10 20:06:36
 */
import 'reset-css'
import '@/styles/main.less'
import '@/styles/leftnav.less'
import '@/styles/product.less'
const $: any = (window as any).jQuery
$('.l-product__imgs').slide({
  // titCell: '.hd ul',
  mainCell: '.l-product__imgs__list',
  autoPage: true,
  effect: 'leftLoop',
  autoPlay: true,
  vis: 1
})
// 获取分类id
const typeid: number = Number($('#typeid').val())
const children: any = $('.l-leftnav__item__children__item[data-id="' + typeid + '"]')
$('.l-leftnav__list .l-leftnav__item[data-id="' + typeid + '"]').addClass('l-leftnav__item--active')
if (children.length) {
  children.addClass('l-leftnav__item__children__item--active')
  children.parent().parent().addClass('l-leftnav__item--active')
}
