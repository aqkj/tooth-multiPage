/**
 * 案例页面
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/09/19 09:34:04
 */
import 'reset-css'
import '@/styles/main.less'
import '@/styles/case.less'

// (window as any).$('#masonry').masonry({
//   // options...
//   itemSelector: '.l-case__item'
//   // columnWidth: 130,
//   // gutter: 20
// })
const $grid: any = (window as any).$('#masonry').imagesLoaded(() => {
  $grid.masonry({
    // options...
    itemSelector: '.l-case__item'
    // columnWidth: 130,
    // gutter: 20
  })
})
