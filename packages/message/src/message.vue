<template>
  <div class="ed-message">
    <div class="ed-message-text">{{ message }}</div>
    <div class="ed-message-img" v-if="showImg">
      <img v-if="url&&url.length > 0" :src="url" />
      <img v-else src="./st.png" />
    </div>
  </div>
</template>

<script>
// props: {
//     // 基础的类型检查 (`null` 和 `undefined` 值会通过任何类型验证)
//     propA: Number,
//     // 多个可能的类型
//     propB: [String, Number],
//     // 必填的字符串
//     propC: {
//       type: String,
//       required: true
//     },
//     // 带有默认值的数字
//     propD: {
//       type: Number,
//       default: 100
//     },
//     // 带有默认值的对象
//     propE: {
//       type: Object,
//       // 对象或数组的默认值必须从一个工厂函数返回
//       default() {
//         return { message: 'hello' }
//       }
//     },
//     // 自定义验证函数
//     propF: {
//       validator(value) {
//         // 这个值必须与下列字符串中的其中一个相匹配
//         return ['success', 'warning', 'danger'].includes(value)
//       }
//     },
//     // 具有默认值的函数
//     propG: {
//       type: Function,
//       // 与对象或数组的默认值不同，这不是一个工厂函数——这是一个用作默认值的函数
//       default() {
//         return 'Default function'
//       }
//     }
//   }

export default {
  name: 'ed-message',    // 申明组件的 name属性
  props: {
    message: {//必填字符串
      type: String,
      required: true
    },
    url: String,
    showImg: {//带默认值
      type: Boolean,
      default: true
    },
  }


}
</script>
<style scoped scss='less'>
.ed-message {
  width: 100%;
  /* height: 300px; */
}
.ed-message-text {
  font-size: 30px;
  color: #ff0000;
}
.ed-message-img {
}
img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>