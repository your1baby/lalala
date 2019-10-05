<template>
  <div>
     <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab1">
        专题
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        设计师
        </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <guang></guang>
        </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
       <!-- 引入 '我的' 子组件 -->
        <me></me>
        </mt-tab-container-item>
      </mt-tab-container>
        
      <!-- </mt-tab-container> -->
      <!--4:tabbar列表-->
      <!--为每个按钮绑定点击事件-->
      <!--当前按钮isSelect:true-->
      <!--其它按钮isSelect:false-->
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="tab1" @click.native="changeState(0)">
         <!-- <tabbaricon
          :selectedImage="require('../assets/icon/iconfont-index-active.png')"
          :normalImage="require('../assets/icon/iconfont-index.png')"
          :focused="currentIndex[0].isSelect"> -->
         <!-- <tabbaricon>
          <img  src="../assets/icon/iconfont-index-active.png">
         </tabbaricon> -->
         专题   
        </mt-tab-item>
        <mt-tab-item id="tab2" @click.native="changeState(1)">
         <!-- <tabbaricon
         :selectedImage="require('../assets/icon/iconfont-index-active.png')"
          :normalImage="require('../assets/icon/iconfont-index.png')"
         :focused="currentIndex[1].isSelect"> -->
         <!-- </tabbaricon> -->
         设计师
        </mt-tab-item>
        <mt-tab-item id="tab3" @click.native="changeState(2)">
          <!-- <tabbaricon
          :selectedImage="require('../assets/icon/iconfont-index-active.png')"
          :normalImage="require('../assets/icon/iconfont-index.png')"
          :focused="currentIndex[2].isSelect">
          </tabbaricon> -->
          逛
        </mt-tab-item>
        <mt-tab-item id="tab4" @click.native="changeState(3)">
          <!-- <tabbaricon
           :selectedImage="require('../assets/icon/iconfont-index-active.png')"
          :normalImage="require('../assets/icon/iconfont-index.png')"
           :focused="currentIndex[3].isSelect"
          ></tabbaricon> -->
          我的
        </mt-tab-item>
      </mt-tabbar>


  </div>
</template>

<script>
// import 
//负责引入Me子组件 
import  Me from "./mes"
import  guang from "./guang"
export default {
  data(){
    return{
         //面板中显示子组件id
      active:"tab1",
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ]
    }
  },
   methods: {
    mysearch(){console.log("搜索");},
    myadd(){console.log("+")},
    changeState(n){
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
       //2:判断如果循环下标与n相等 20
       if(n==i){
        //3:当前下标元素true 10:22
        this.currentIndex[i].isSelect=true;
       }else{
        //4:其它元素修改false
        this.currentIndex[i].isSelect=false;
       }
       
      }

    }
  },
  components:{
    // "titlebar":TitleBar,
    // "messagelist":MessageList,
    // "tabbaricon":TabBarIcon
    "me":Me,
    "guang":guang
  },
}
</script>

<style scoped>

   /* 覆盖原组件中的样式tabbar按钮中文字颜色 */
/* (1)默认文字颜色 */
.mint-tabbar > .mint-tab-item{
  color: #999;
}
/* (2)选中文字颜色 */
.mint-tabbar > .mint-tab-item.is-selected {
    background-color: transparent;/*背景透明*/
    color: #45c018;/*文字颜色*/
}
.mint-tab-container-item {
    position: fixed !important;
    background: #f0f0f0 !important;
    height: 100% !important;
    width: 100% !important;
}
</style>