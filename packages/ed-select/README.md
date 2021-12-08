# evil-dragon-ui

## 示例
```
<ed-select v-model="value" :dataList="list"></ed-select>
```

### select属性
```
参数	                说明	                                                            类型	    可选值	            默认值
value / v-model	        绑定值	                                                            boolean / string / number	—	—
multiple	            是否多选	                                                        boolean	—	false
disabled	            是否禁用	                                                        boolean	—	false
size	                输入框尺寸	                                                        string	medium/small/mini	—
clearable	            是否可以清空选项	                                                boolean	—	false
collapse-tags	        多选时是否将选中值按文字的形式展示	                                    boolean	—	false
multiple-limit	        多选时用户最多可以选择的项目数，为 0 则不限制	                          number	—	0
placeholder	            占位符	                                                            string	—	请选择
filterable	            是否可搜索	                                                        boolean	—	false
popper-class	        Select 下拉框的类名	                                                 string	—	—
reserve-keyword	        多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词	                boolean	—	false
popper-append-to-body	是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为      false	boolean	-	true
```

### option属性
```
参数	                说明	                                                            类型	    可选值	            默认值
disabled	            是否禁用	                                                        boolean	—	false
```

### porps属性
```
参数	                说明	                                                            类型	    可选值	            默认值
value	                选项的值	                                                       string/number/object	—	—
label	                选项的标签，若不设置则默认与 value 相同	                                string/number	—	—
children                层级分组时填写                                                          Array       
disabled	            是否禁用	                                                        boolean	—	false
```

### 事件
```
事件名称	        说明	                            回调参数
change	        选中值发生变化时触发	                目前的选中值
visible-change	下拉框出现/隐藏时触发	                出现则为 true，隐藏则为 false
clear	        可清空的单选模式下用户点击清空按钮时触发	—
```

### 
```

```

### 
