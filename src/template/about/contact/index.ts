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
  const addressEl: HTMLInputElement = (document.getElementById('address') as HTMLInputElement)
  const BMap: any = (window as any).BMap
  const map: any = new BMap.Map('map')
  const point: any = new BMap.Point(113.369549, 40.105669)
  const marker: any = new BMap.Marker(point) // 创建标注
  map.addOverlay(marker) // 将标注添加到地图中
  map.centerAndZoom(point, 15)
  const opts: any = {
    width : 200,     // 信息窗口宽度
    height: 100,     // 信息窗口高度
    title : '大同腾屹医疗器械有限公司', // 信息窗口标题
    enableMessage: true, // 设置允许信息窗发送短息
    message: addressEl.value
  }
  const infoWindow: any = new BMap.InfoWindow(addressEl.value, opts)// 创建信息窗口对象
  map.openInfoWindow(infoWindow, point)
}
generateMap()

