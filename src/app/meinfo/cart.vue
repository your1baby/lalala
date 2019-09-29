<template>
  <div>
    <!-- 头部导航栏 -->
    <mt-header title="购物车">
            <router-link to="/" slot="left">
              <mt-button icon="back"></mt-button>
            </router-link>
            <!-- <mt-button  slot="right">退货换货</mt-button> -->
          </mt-header>

          <!-- 没有添加内容的时候的样式 -->
          <div class="cartnone">
            <img src="../../assets/me/cart2.png" alt="">
            <p>您的购物车空空哒</p>
            <p>去<router-link class="guang" to="/app">逛逛</router-link></p>
          </div>
  </div>
</template>

<style scoped>
    /* 顶部导航栏重写样式 */
  .mint-header{
    background-color:#212121!important; 
    font-size: 18px !important;
    height: 52px !important;
  }
/* 没有添加购物车的时候的样式 */
.cartnone{
   text-align: center;
  margin-top: 8rem;
}
 .cartnone p{
   color: #7C7C7B
 }
 .cartnone p .guang{
   color: #D0A225;
 }
</style>