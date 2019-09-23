/**
 * 产品页面
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/09/06 15:42:39
 */
import 'reset-css'
import '@/styles/main.less'
import '@/styles/leftnav.less'
import '@/styles/product.less'
const $: any = (window as any).jQuery
// 获取分类id
const typeid: number = Number($('#typeid').val())
const children: any = $('.l-leftnav__item__children__item[data-id="' + typeid + '"]')
$('.l-leftnav__list .l-leftnav__item[data-id="' + typeid + '"]').addClass('l-leftnav__item--active')
if (children.length) {
  children.addClass('l-leftnav__item__children__item--active')
  children.parent().parent().addClass('l-leftnav__item--active')
}
