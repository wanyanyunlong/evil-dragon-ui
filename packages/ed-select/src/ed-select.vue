<template>
  <el-select v-model="selectModel" :filterable="filterable" :clearable="clearable" :reserve-keyword="reserveKeyword" :multiple="multiple" :collapse-tags="collapseTags" :placeholder="placeholder" :size="size"
    :multiple-limit="multipleLimit" :disabled="disabled" @change="changeSelectsite" :filter-method="filterChecksite" :popper-append-to-body="popperAppendToBody" :popper-class="popperClass" @visible-change="visibleChange"
    @clear="clear">
    <el-checkbox v-if="multiple" v-model="checkedSite" :indeterminate="indeterminate" @change="selectAllsite" style="margin-left: 20px;margin-bottom: 2px;padding:5px 0px">全选</el-checkbox>
    <template v-if="optionGroup">
      <el-option-group v-for="(group,index) in select_selectData" :key="group[props.value]+'_'+index" :label="group[props.label]">
        <template v-if="group[props.children] && group[props.children].length>0">
          <el-option v-for="(item,indexs) in group[props.children]" :key="item[props.value]+'_'+indexs" :label="item[props.label]" :value="item[props.value]" :disabled="item[props.disabled]">
            <span style="float: left;margin-left:10px;">{{ item[props.label] }}</span>
            <span style="float: right;opacity: 0.7; font-size: 10px;margin-left:30px;margin-right:15px">{{ item[props.value] }}</span>
          </el-option>
        </template>
      </el-option-group>
    </template>
    <template v-else>
      <el-option v-for="(item,index) in select_selectData" :key="item[props.value]+'_'+index" :label="item[props.label]" :value="item[props.value]" :disabled="item[props.disabled]">
        <span style="float: left">{{ item[props.label] }}</span>
        <span style="float: right;opacity: 0.7; font-size: 10px;margin-left:30px;margin-right:15px">{{ item[props.value] }}</span>
      </el-option>
    </template>
  </el-select>
</template>

<script>
import {Select,Option,Checkbox,OptionGroup} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
Vue.use(Select).use(Option).use(OptionGroup).use(Checkbox);
export default {
  name: "ed-select",
  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    reserveKeyword: {//是否在筛选选择后删除筛选文本
      type: Boolean,
      default: false
    },
    clearable: {//是否清空
      type: Boolean,
      default: false
    },
    popperClass: {//下拉框类名
      type: String,
      default: ""
    },
    popperAppendToBody: {//是否将弹出框插入至 body 元素
      type: Boolean,
      default: true
    },
    disabled: {//是否禁用
      type: Boolean,
      default: false
    },
    filterable: {//是否搜索
      type: Boolean,
      default: false
    },
    multipleLimit: {//多选时用户最多可以选择的项目数，为 0 则不限制
      type: Number,
      default: 0
    },
    multiple: {//是否多选
      type: Boolean,
      default: false
    },
    collapseTags: {//是否累加显示
      type: Boolean,
      default: false
    },
    size: {//样式大小 medium /small /mini
      type: String,
      default: ""
    },
    props: {
      type: Object,
      default: function () {
        return {
          label: "label",
          value: "value",
          children: "children",
          disabled: "disabled"
        }

      }
    },
    dataList: {//列表
      type: Array,
      required: true
    },
    value: {//值
      required: true
    }

  },
  data() {
    return {
      optionGroup: false,//是否分组显示
      select_selectData: [],  //   截取后显示数据
      default_selectData: [],   //默认原始数据
      checkedSite: false,//全选框值
      indeterminate: false,//全选框状态
      selectValue: this.multiple ? [] : "",//选中值
    }
  },
  watch: {
    dataList(val) {
      this.default_selectData = JSON.parse(JSON.stringify(val))
      this.init()
    },
  },
  mounted() {
    this.default_selectData = JSON.parse(JSON.stringify(this.dataList))
    this.init()
  },

  computed: {
    selectModel: {
      get() {
        if (this.multiple) {
          this.selectValue = [...this.value]
          return [...this.value]
        } else {
          this.selectValue = this.value
          return this.value
        }
      },
      set(val) {
        if (this.multiple) {
          this.$emit('input', [...val])
        } else {
          this.$emit('input', val)
        }
      }
    }
  },
  methods: {
    init() {

      for (let i = this.default_selectData.length - 1; i >= 0; i--) {
        const cachedOption = this.default_selectData[i];
        if (cachedOption[this.props.children] && cachedOption[this.props.children].length > 0) {
          this.optionGroup = true
          break;
        }
      }

      if (this.optionGroup) {
        this.select_selectData = [];
        var nums = 0
        var default_selectData = JSON.parse(JSON.stringify(this.default_selectData))
        for (var i = 0; i < default_selectData.length; i++) {
          if (default_selectData[i][this.props.children] && default_selectData[i][this.props.children].length.length > 0) {
            nums += default_selectData[i][this.props.children].length
            this.select_selectData.push(default_selectData[i])
            if (nums > 500) {
              break
            }
          }
        }

        if (nums <= 500) {
          this.select_selectData = JSON.parse(JSON.stringify(this.default_selectData))
        }

      } else {
        if (this.default_selectData.length > 200) {
          this.select_selectData = JSON.parse(JSON.stringify(this.default_selectData)).slice(0, 200)
        } else {
          this.select_selectData = JSON.parse(JSON.stringify(this.default_selectData))
        }
      }
    },
    //全选
    selectAllsite() {
      this.selectModel = [];
      this.selectValue = [];
      if (this.checkedSite == true) {
        this.select_selectData.map((item) => {
          if (this.optionGroup) {
            if (item[this.props.children]) {
              item[this.props.children].forEach((chitem) => {
                this.selectModel.push(chitem[this.props.value]);
                this.selectValue.push(chitem[this.props.value]);
              })
            }
          } else {
            this.selectModel.push(item[this.props.value]);
            this.selectValue.push(item[this.props.value]);
          }
        });
      } else {
        this.selectModel = [];
        this.selectValue = [];
      }
      this.changeSelectsite(this.selectValue)
    },

    getOption(value) {
      let option;
      for (let i = this.default_selectData.length - 1; i >= 0; i--) {
        const cachedOption = this.default_selectData[i];
        if (!this.optionGroup) {
          const isEqual = cachedOption[this.props.value] === value;
          if (isEqual) {
            option = cachedOption;
            break;
          }
        } else {
          if (cachedOption[this.props.children]) {
            for (let j = cachedOption[this.props.children].length - 1; j >= 0; j--) {
              const cachedOptionChind = cachedOption[this.props.children][j];
              const isEqualChind = cachedOptionChind[this.props.value] === value;
              if (isEqualChind) {
                option = cachedOptionChind;
                break;
              }
            }
          }

        }
      }
      if (option) return option;
    },
    //选择
    changeSelectsite(val) {
      if (this.multiple) {
        this.selectModel = val || [];
        this.selectValue = val || [];
        this.$emit('change', val || [])
        this.checkBoxState()
      } else {
        this.selectModel = this.getOption(val) ? this.getOption(val)[this.props.value] || "" : "";
        this.selectValue = this.getOption(val) ? this.getOption(val)[this.props.value] || "" : "";
        this.$emit('change', this.getOption(val) ? this.getOption(val)[this.props.value] || "" : "")
      }

    },
    clear() {
      this.$emit('clear')
    },
    // 重置下拉
    visibleChange(val) {
      this.$emit('visible-change', val)
      if (val) {
        this.init()
      }
      this.checkBoxState()
    },
    checkBoxState() {
      if (this.optionGroup) {
        var num = 0;
        this.select_selectData.map((item) => {
          if (item[this.props.children]) {
            item[this.props.children].map((chitem) => {
              num++
            })
          }
        });
        if (this.selectValue.length == 0) {
          this.init()
          this.indeterminate = false;
          this.checkedSite = false;
        } else if (this.selectValue.length === num) {
          this.checkedSite = true;
          this.indeterminate = false;
        } else {
          this.indeterminate = true;
          this.checkedSite = false;
        }
      } else {
        if (this.selectValue.length == 0) {
          this.init()
          this.indeterminate = false;
          this.checkedSite = false;
        } else if (this.selectValue.length === this.select_selectData.length) {
          this.checkedSite = true;
          this.indeterminate = false;
        } else {
          this.indeterminate = true;
          this.checkedSite = false;
        }
      }

    },
    //模糊搜索
    filterChecksite(currentValsite) {
      this.select_selectData = [];
      this.$nextTick(() => {
        if (currentValsite.length > 0) {
          let arr = [];
          if (this.optionGroup) {
            JSON.parse(JSON.stringify(this.default_selectData)).forEach(citem => {
              let zarr = []
              if (citem[this.props.children] && citem[this.props.children].length > 0) {
                citem[this.props.children].forEach(item => {
                  if (this.selectValue.length > 0) {
                    for (var i = 0; i < this.selectValue.length; i++) {
                      if (String(item[this.props.value]).toLowerCase().indexOf(currentValsite.toLowerCase()) > -1 || String(item[this.props.label]).toLowerCase().indexOf(currentValsite.toLowerCase()) > -1) {
                        zarr.push(item)
                        break;
                      }
                    }
                  } else {
                    if (String(item[this.props.value]).toLowerCase().indexOf(currentValsite.toLowerCase()) > -1 || String(item[this.props.label]).toLowerCase().indexOf(currentValsite.toLowerCase()) > -1) {
                      zarr.push(item)
                    }
                  }
                })
                citem[this.props.children] = zarr
              }

              if (zarr.length > 0) {
                arr.push(citem)
              }
            })
            this.select_selectData = arr
          } else {
            this.selectValue.map((row) => {
              arr.push(...this.default_selectData.filter((item) => item[this.props.value] == row));
            });
            var currentValsitearr = currentValsite.split(" ");
            this.select_selectData = this.default_selectData.filter((item) => {
              let count = 0
              currentValsitearr.forEach(v => {
                if (String(item[this.props.label]).toLowerCase().indexOf(v.toLowerCase()) > -1 || String(item[this.props.value]).toLowerCase().indexOf(v.toLowerCase()) > -1) {
                  count++
                }
              })
              if (count == currentValsitearr.length) {
                return true
              } else {
                return false
              }
            });
            this.select_selectData.push(...arr);
            this.select_selectData = Array.from(new Set(this.select_selectData));
          }
        } else {
          this.init()
          this.checkBoxState()
        }
      })

    },
  }
}
</script>
