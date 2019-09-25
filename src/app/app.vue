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
        逛
        </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        我的
        </mt-tab-container-item>
      </mt-tab-container>
        
      <!-- </mt-tab-container> -->
      <!--4:tabbar列表-->
      <!--为每个按钮绑定点击事件-->
      <!--当前按钮isSelect:true-->
      <!--其它按钮isSelect:false-->
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="tab1" @click.native="changeState(0)">
         <tabbaricon
          :selectedImage="require('../assets/icon/iconfont-index-active.png')"
          :normalImage="require('../assets/icon/iconfont-index.png')"
          :focused="currentIndex[0].isSelect">
         </tabbaricon>
         专题   
        </mt-tab-item>
        <mt-tab-item id="tab2" @click.native="changeState(1)">
         <tabbaricon
         :selectedImage="require('../assets/icon/iconfont-index-active.png')"
          :normalImage="require('../assets/icon/iconfont-index.png')"
         :focused="currentIndex[1].isSelect">
         </tabbaricon>
         设计师
        </mt-tab-item>
        <mt-tab-item id="tab3" @click.native="changeState(2)">
          <tabbaricon
          :selectedImage="require('../assets/icon/iconfont-index-active.png')"
          :normalImage="require('../assets/icon/iconfont-index.png')"
          :focused="currentIndex[2].isSelect">
          </tabbaricon>
          逛
        </mt-tab-item>
        <mt-tab-item id="tab4" @click.native="changeState(3)">
          <tabbaricon
           :selectedImage="require('../assets/icon/iconfont-index-active.png')"
          :normalImage="require('../assets/icon/iconfont-index.png')"
           :focused="currentIndex[3].isSelect"
          ></tabbaricon>
          我的
        </mt-tab-item>
      </mt-tabbar>


  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>
  
</style>