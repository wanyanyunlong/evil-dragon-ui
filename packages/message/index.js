// 为组件提供 install 方法，供组件对外按需引入
import message  from './src/message'

message.install = function (Vue) {
  Vue.component(message.name, message )
}

export default message 