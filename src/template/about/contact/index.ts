/**
 * 联系我们
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/09/10 11:46:46
 */
import 'reset-css'
import '@/styles/main.less'
import '@/styles/subnav.less'
import '@/styles/contact.less'

/**
 * 生成地图
 */
function generateMap(): void {
  const BMap: any = (window as any).BMap
  const map: any = new BMap.Map('map')
  const point: any = new BMap.Point(116.417854, 39.921988)
  const marker: any = new BMap.Marker(point) // 创建标注
  map.addOverlay(marker) // 将标注添加到地图中
  map.centerAndZoom(point, 15)
  const opts: any = {
    width : 200,     // 信息窗口宽度
    height: 100,     // 信息窗口高度
    title : '海底捞王府井店', // 信息窗口标题
    enableMessage: true, // 设置允许信息窗发送短息
    message: '亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~'
  }
  const infoWindow: any = new BMap.InfoWindow('地址：北京市东城区王府井大街88号乐天银泰百货八层', opts)  // 创建信息窗口对象 
  map.openInfoWindow(infoWindow, point)
}
generateMap()

