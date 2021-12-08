// 为组件提供 install 方法，供组件对外按需引入
import edSelect  from './src/ed-select'

edSelect.install = function (Vue) {
  Vue.component(edSelect.name, edSelect )
}

export default edSelect 