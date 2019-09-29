<template style="background:#f0f0f0">
  <div class="masbody">
    <!-- 顶部个人信息框 -->
    <div class="ainfo"> 
      <img class="xx" src="../assets/me/x.png" alt="">
      <div class="meimg">
        <img src="../assets/me/toux.jpg" alt="">
        <p>冰糖雪梨
          <span>♀</span>
        </p> 
      </div>
      <p class="qm">个性签名性签名性签名性签名</p>
      <div class="ainfo-bottom">
        <!-- 底部的左边 -->
        <div class="ainfo-b-l">
          <div class="bl-1">
            <p>0</p>
              <p>关注</p>
          </div>
          <div>
            |
          </div>
          <div class="bl-2">
            <p>0</p>
              <p>粉丝</p>
          </div>
        </div>
         <div class="ainfo-b-r">
           <p><img class="bjimg" src="../assets/me/bj.png" alt="">编辑资料</p>
         </div>
      </div>

    </div>

    <!-- 订单信息 -->
    <div class="order">
      <ul class="order-info order-info-1">
        <li>
          <img src="../assets/me/d.png" alt="">
          <p>

          <router-link to="/dingdan">我的订单</router-link>
          </p>
        </li>
        <li>
          <img src="../assets/me/cart.png" alt="">
          <p>
          <router-link to="/cart">购物车</router-link>
          </p>
        </li>
        <li class="border-r0">
          <img src="../assets/me/yhj.png" alt="">
          <p>
          <router-link to="/cart">我的优惠卷</router-link>
          </p>
        </li>
      </ul>
      <ul class="order-info">
        <li>
          <img src="../assets/me/xh.png" alt="">
          <p>
          <router-link to="/cart">喜欢的好物</router-link>
          </p>
        </li>
        <li>
          <img src="../assets/me/yhj.png" alt="">
          <p>
          <router-link to="/cart">设计师入驻</router-link>
          </p>
        </li>
        <li class="border-r0"></li>
      </ul>
    </div>

    <!-- 表格 -->
     <div class="message-wrap">
          <div>
            <mt-cell
              title="新手帮助"
              to="//localhost:8080/#/dingdan"
              is-link
              value="">
               <img slot="icon" src="../assets/me/bangzu.png" width="24" height="24">
            </mt-cell>
          </div>

          <div>
            <mt-cell
              title="意见反馈"
              to="//localhost:8080/#/cart"
              is-link
              value="">
               <img slot="icon" src="../assets/me/yijian.png" width="24" height="24">
            </mt-cell>
          </div>

          <div>
            <mt-cell
              title="设置"
              to="//localhost:8080/#/cart"
              is-link
              value="">
               <img slot="icon" src="../assets/me/shezhi.png" width="24" height="24">
            </mt-cell>
          </div>

            
            
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
.masbody{
    background-color: #f0f0f0;
    /* padding-bottom: 100px; */
    /* position: fixed; */
    /* width: 100%; */
}
.mint-tab-container-item {
    position: fixed !important;
    background: #f0f0f0 !important;
    height: 100% !important;
    width: 100% !important;
}
   .ainfo{
     background:#212121 ;
     position: relative;
   }
   .xx{
     position: absolute;
     width: 1.8rem;
     right: 1rem;
     top: .9rem;

   }
   .meimg{
     text-align: center;
     color:#fff;
     font-weight: bold;
     padding-top: .9rem;
     padding-bottom: 2.7rem;
   }
   .meimg img{
     border-radius: 50%;
     width: 4rem;
   }

/* 签名 */
    .qm{
      color: #fff;
      text-align: center;
      font-size: 16px;
      width: 70%;
      margin: 0 auto;
      overflow: hidden;
    }
    /* 头部的底部 */
    .ainfo-bottom{
      display: flex;
      justify-content: space-between;
      padding-top:25px;
      padding-bottom:15px;
    }
     .ainfo-bottom .ainfo-b-l{
       display: flex;
       text-align: center;
       color:#959998;
     }
     .ainfo-bottom .ainfo-b-r{
       color:#959998;
       margin-right:5px;

     }
     .ainfo-bottom .ainfo-b-r p{
       line-height: 39px;
     }
     .bl-1{
       width: 50px;
     }
     .bl-2{
       width: 50px;

     }
     /* 编辑 */
     .bjimg{
       width: 14px;
     }
    
    /* 我的订单部分 */
    .order{
      background: #fff;
      margin-top:30px;
    }
     .order .order-info{
       display: flex;
     }
     .order .order-info li{
       width: 33%;
     } 
     .order .order-info img{
       width:30px;
     }
     .order-info li{
       border-bottom: 1px solid #E5E5E5;
       border-right: 1px solid #E5E5E5;
       height: 80px;
       text-align: center;
       /* line-height: 80px; */
       padding-top: 20px;
       /* padding-bottom: 20px; */
       /* box-sizing: border-box; */
     }
     .order-info li p a{
       color: #060606;

     }
     .border-r0{
       border-right: 0!important;
     }
  /* 文字单元格 */
  .message-wrap{
    margin-top: 20px;
  }
</style>