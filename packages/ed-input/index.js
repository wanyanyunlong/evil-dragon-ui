// 为组件提供 install 方法，供组件对外按需引入
import edInput  from './src/ed-input'

edInput.install = function (Vue) {
  Vue.component(edInput.name, edInput )
}

export default edInput 