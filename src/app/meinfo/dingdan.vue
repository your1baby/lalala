<template>
  <div>      
    <!-- 头部导航栏 -->
          <mt-header title="订单">
            <router-link to="/" slot="left">
              <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button  slot="right">退货换货</mt-button>
          </mt-header>
    <!-- 主体内容 -->
      <div>
        <!-- <ul>
          <li>全部</li>
          <li>待付款</li>
          <li>待发货</li>
          <li>待收货</li>
          <li>待评价</li>
        </ul> -->
         <mt-navbar v-model="selected">
          <mt-tab-item id="1">全部</mt-tab-item>
          <mt-tab-item id="2">待付款</mt-tab-item>
          <mt-tab-item id="3">待发货</mt-tab-item>
          <mt-tab-item id="4">待收货</mt-tab-item>
          <mt-tab-item id="5">待评价</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">

          <mt-tab-container-item id="1">
             <div class="nodd">  
               <img src="../../assets/dingdan/dd.png" alt="">
               <p>您还没有相关订单</p>
             </div>
          </mt-tab-container-item>

          <mt-tab-container-item id="2">
            <div class="nodd">  
               <img src="../../assets/dingdan/dd.png" alt="">
               <p>您还没有相关订单</p>
             </div>
          </mt-tab-container-item>

          <mt-tab-container-item id="3">
            <div class="nodd">  
               <img src="../../assets/dingdan/dd.png" alt="">
               <p>您还没有相关订单</p>
             </div>
          </mt-tab-container-item>

          <mt-tab-container-item id="4">
            <div class="nodd">  
               <img src="../../assets/dingdan/dd.png" alt="">
               <p>您还没有相关订单</p>
             </div>
          </mt-tab-container-item>
          
          <mt-tab-container-item id="5">
            <div class="nodd">  
               <img src="../../assets/dingdan/dd.png" alt="">
               <p>您还没有相关订单</p>
             </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      selected:'1'
    }
  }
}
</script>

<style scoped>
  .mint-cell-allow-right::after{
   border:none !important;
  }
  /* 顶部导航栏重写样式 */
  .mint-header{
    background-color:#24242b !important; 
    font-size: 16px !important;
    height: 52px !important;
  }
  .mint-navbar{
    border-bottom: 1px solid #ddd;
  }
  /* 顶部navbar选中样式重写 */
 .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #dda118 !important;
    color: #dda118 !important;
    margin-bottom: 5px;
}
.nodd{
  text-align: center;
  margin-top: 8rem;
}
.nodd p{
  color:#787171;
}
</style>