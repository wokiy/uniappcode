# uniappcode day1

### 环境搭建 
1. 编译器插件安装 
2. 编译器真机调试和小程序开发者工具调试
3. 全局样式倒入
4. 底部导航开发
5. 顶部导航开发


### 全局样式 common/ animate.css icons.css common.css uni.css 

1. uni.css uniapp官方组件库 shttps://hellouniapp.dcloud.net.cn/  【兼容好 更新快 同步更新】
2. animate.css 动画库
3. common.css 自己封装的css模块 公共样式 
4. icon.js图标库

#### animate.css 

```
    //动画设置
    view class='animated fadein'
```

#### icon.css 

自己上阿里图标库下载自己喜欢的项目图标。 【下载本地后-》 获取源码中的 iconfont.css文件 、「删除文件中引用外部文件的代码」】

```
    //图标设置
    <view class="iconfont icon-wode"> </view>
    
```

### 项目开始前设置全局样式

1. 页面高度 （为了设置 scroll-view）
2. 默认字体 
3. 行高 
4. 背景色

### 底部导航设置


### ui库封装

1. 颜色
2. 布局
3. 边框
4. 内边距
5. 外边距
6. 字体大小
7. 行高
8. flex布局

### 首页开发
1. 配置顶部导航条
2. 编写首页轮播图
3. 封装首页分类组件
4. 全局分割线组件封装
5. 首页三图组件开发
6. 多类型卡片基础组件封装
7. 每日精选卡片组件
