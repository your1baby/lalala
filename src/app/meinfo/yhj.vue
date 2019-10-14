<template>
  <div class="yhjbody">
      <!-- 头部导航栏 -->
          <mt-header title="我的优惠券">
            <router-link to="/" slot="left">
              <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button  slot="right">使用规则</mt-button>
          </mt-header>

          <!-- 优惠券兑换 -->
          <div class="dh">
            <input placeholder="请输入兑换码" type="text">
            <button>兑换</button>
          </div>

          <!-- 优惠券卷样式 -->
          <div class="coupon" v-for="(item,i) of coupon" :key="i">
            <div class="c-price">¥ {{item.price}}</div>
            <ul class="c-text">
              <li>
                <p class="c-text1">{{item.title}}</p>
                <p class="c-text2">{{item.tb}}</p>
                <p class="c-text2">{{item.datanew}}</p>
                <p class="c-text2">{{item.data}}</p>
              </li>
            </ul>
          </div>
          
        <!-- 底部样式 -->
        <div class="yhjbottomm">
          <p>没有更多可用的卷了</p>
          <button>查看过期的卷</button>
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        coupon:[
          {
          price:10,
          title:'新用户红包',
          tb:"满149使用",
          datanew:"使用期限2019-09-28 10:57至",
          data:'2019-10-13 10:57'
          },
          {
          price:10,
          title:'新用户红包',
          tb:"满149使用",
          datanew:"使用期限2019-09-28 10:57至",
          data:'2019-10-13 10:57'
          },
          {
          price:10,
          title:'新用户红包',
          tb:"满149使用",
          datanew:"使用期限2019-09-28 10:57至",
          data:'2019-10-13 10:57'
          },
          {
          price:10,
          title:'新用户红包',
          tb:"满149使用",
          datanew:"使用期限2019-09-28 10:57至",
          data:'2019-10-13 10:57'
          },
          {
          price:10,
          title:'新用户红包',
          tb:"满149使用",
          datanew:"使用期限2019-09-28 10:57至",
          data:'2019-10-13 10:57'
          },
          
          {
          price:10,
          title:'新用户红包',
          tb:"满149使用",
          datanew:"使用期限2019-09-28 10:57至",
          data:'2019-10-13 10:57'
          },
        ]
    }
  }
}
</script>

<style scoped>
 *{
   padding: 0;
   margin: 0;
 }
 .yhjbody{

   background:#f0f0f0;
 }
  /* 顶部导航栏重写样式 */
  .mint-header{
    background-color:#212121!important; 
    font-size: 18px !important;
    height: 52px !important;
  }
  /* 兑换优惠券 */
  .dh{
    background:#fff;
   display: flex;
   justify-content: space-between;
   width: 100%;
   height: 85px;
   padding-left:10px;
   padding-right: 10px;
   margin-bottom: 0px;
   box-sizing: border-box;
  }
  .dh input{
    width: 68%;
   margin-top:20px;
   border:1px solid #ddd;
   border-radius: 5px;
   padding-left:5px;
    margin-bottom:20px;
  }
  .dh button{
    width: 28%;
    margin-top:20px;
    margin-bottom:20px;
      background: #D3A61F;
      color: #fff;
    border:0;
    border-radius: 5px;
  }

  /* 用户的优惠卷 */
  .coupon{
   margin: 20px;
   border:1px solid #ddd;
   display: flex;
   background: #fff; 
  }
  .coupon .c-price{
    border-right: 1px  dashed  #ddd;
    text-align: center;
    width: 30%;
    /* line-height: 100%; */
    /* height: 100%; */
    vertical-align:middle;
    font-size: 30px;
    margin-top:20px;
    padding-top:8px;
    margin-bottom:20px;
  }
  .coupon .c-text{
    width: 70%;
    padding-left: 20px;
    padding-top:10px;
    padding-bottom: 8px;
  }
  .coupon  .c-text1{
    padding-bottom: 5px;
    font-weight: 500;
  }
  .coupon  .c-text2{
    color:#b3aaaa;
    font-size: 14px;
    font-weight: 200;
  }
  /* 最底部样式 */
  .yhjbottomm{
    margin: 0 auto;
    text-align: center;
    padding-bottom: 20px;
    color: #888;
  }
  .yhjbottomm p{
    padding-bottom:10px;
    
  }
  .yhjbottomm button{
    background: #fff;
    border-radius: 8px;
    padding: 5px  10px;
    border: 1px solid #ddd;
  }
</style>