<template>
  <div id="app">

    <br /> <br />
    多选： <ed-select v-model="value1" :dataList="list0" :props="{label: 'name',value: 'id'}" multiple  collapse-tags filterable clearable reserve-keyword placeholder="媒体账号" ></ed-select>{{value1}}
    <br /> <br />
    单选： <ed-select v-model="value2" :dataList="list"  filterable clearable placeholder="媒体账号" ></ed-select>{{value2}}
    <br /> <br />
    多选组： <ed-select v-model="value4" :dataList="list1" multiple  collapse-tags filterable clearable reserve-keyword placeholder="媒体账号" ></ed-select>{{value4}}
    <br /> <br />
    单选组： <ed-select v-model="value5" :dataList="list1" filterable clearable placeholder="媒体账号" ></ed-select>{{value5}}
    <br /> <br />
    原始：<el-select v-model="value3" @change="v3Change">
      <el-option v-for="(item,index) in list0" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
    </el-select>
    <HelloWorld msg="Welcome to Your Vue.js App" />


    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="1080">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="1280">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="500">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  data() {
    return {
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
      list0: [{
        id: '选项1',
        name: '黄金糕',
      }, {
        id: '选项2',
        name: '双皮奶'
      }, {
        id: '选项3',
        name: '蚵仔煎',
        disabled: true,
      }, {
        id: '选项4',
        name: '龙须面'
      }, {
        id: '选项5',
        name: '北京烤鸭'
      }],
      list: [{
        value: '选项1',
        label: '黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎',
        disabled: true,
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      list1: [{
        value: '选项1',
        label: '黄金糕',
        children: [
          {
            value: '选项12',
            label: '双皮奶1'
          }, {
            value: '选项13',
            label: '蚵仔煎1',
            disabled: true,
          }, {
            value: '选项14',
            label: '龙须面1'
          }, {
            value: '选项15',
            label: '北京烤鸭1'
          }
        ]
      }, {
        value: '选项2',
        label: '双皮奶',
        children: [
          {
            value: '选项22',
            label: '双皮奶2'
          }, {
            value: '选项2222222223',
            label: '蚵仔煎222222',
            disabled: true,
          }, {
            value: '选项24',
            label: '龙须面2'
          }, {
            value: '选项25',
            label: '北京烤鸭2'
          }
        ]
      }, {
        value: '选项3',
        label: '蚵仔煎',
        disabled: true,
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value1: [],
      value2: "",
      value3: "",

      value4: [],
      value5: "",
    }
  },
  methods: {
    v3Change(e, v) {
      console.log(e)
      console.log(v)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scoped  lang="scss" >
// 滚动条的宽度
  // /deep/ .el-table__body-wrapper::-webkit-scrollbar {
  //   width: 6px; // 横向滚动条
  //   height:10px; // 纵向滚动条 必写
  // }
  // // 滚动条的滑块
  // /deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
  //   background-color: #ddd;
  //   border-radius: 5px;
  // }
</style>
