<template>
  <el-input v-model="inputValue" :placeholder="placeholder" :clearable="clearable" :disabled="disabled" :size="size" @change="change" @blur="blur" @input="input" @focus="focus" @clear="clear"></el-input>
</template>

<script>
import {Input} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
Vue.use(Input);
export default {
  name: "ed-input",
  props: {
    placeholder: {
      type: String,
      default: "请填写"
    },
    clearable: {//是否清空
      type: Boolean,
      default: false
    },
    disabled: {//是否禁用
      type: Boolean,
      default: false
    },
    size: {//样式大小 medium /small /mini
      type: String,
      default: ""
    },
    value: {//值
      required: true
    }

  },
  data() {
    return {
      inputValue: "",//值
    }
  },
  watch: {
  },
  mounted() {
    this.init()
  },

  computed: {
    selectModel: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    init() {

    },
    change(val) {
        this.$emit('change', val || "")
    },
    blur(val) {
        this.$emit('blur', val || "")
    },
    focus(val) {
        this.$emit('focus', val || "")
    },
    input(val) {
        this.$emit('input', val || "")
    },
    clear() {
      this.$emit('clear')
    },
  }
}
</script>
