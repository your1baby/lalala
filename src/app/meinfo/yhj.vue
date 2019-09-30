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
          <div class="coupon">
            <div class="c-price">¥ 10</div>
            <ul class="c-text">
              <li>
                <p>新用户红包</p>
                <p>满149使用</p>
                <p>使用期限2019-09-28 10:57至</p>
                <p>2019-10-13 10:57</p>
              </li>
            </ul>
          </div>
          <div class="coupon">
            <div class="c-price">¥ 10</div>
            <ul class="c-text">
              <li>
                <p>新用户红包</p>
                <p>满149使用</p>
                <p>使用期限2019-09-28 10:57至</p>
                <p>2019-10-13 10:57</p>
              </li>
            </ul>
          </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

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
    border-right: 2px  dashed  #ddd;
    text-align: center;
    width: 30%;
    /* line-height: 100%; */
    /* height: 100%; */
    vertical-align:middle;
  }
  .coupon .c-text{
    width: 70%;
  }
</style>