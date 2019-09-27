<template>
      <!-- 我的页面 -->
  <div>
    <div class="body wrap"> 

      <div class="user-wrap">  

          <!-- 个人信息 -->
        <div class="myinfo">
          <div class="myTimg">
            <img src="../assets/me/toux.jpg" alt="" >

          </div>
          <p class="myname">想去菌a6nttq</p>
        </div>

        <!-- 表格 -->
        <div class="message-wrap">
          <div>
            <mt-cell
              title="订单"
              to="//github.com"
              is-link
              value="0">
            </mt-cell>
          </div>

          <div>
            <mt-cell
              title="我的优惠券"
              to="//github.com"
              is-link
              value="">
            </mt-cell>
          </div>

          <div>
            <mt-cell
              title="我的地址"
              to="//github.com"
              is-link
              value="">
            </mt-cell>
          </div>
            
            
        </div>
        <!-- 表格2 -->
        <div class="message-wrap message-wrap2">
          <div>
            <mt-cell
              title="客服/意见反馈"
              to="//github.com"
              is-link
              value="">
            </mt-cell>
          </div>

          <div>
            <mt-cell
              title="绑定已有的想去账号"
              to="//github.com"
              is-link
              value="">
            </mt-cell>
          </div>

          <div>
            <mt-cell
              title="下载想去App"
              to="//github.com"
              is-link
              value="">
            </mt-cell>
          </div>
            
            
        </div>
         
         <!-- 微信二维码 -->
         <div class="ma">
            <img src="../assets/me/weixin.png" alt="">
         </div>
         <!-- 文字 -->
        <div class="mytext">
          <p>关注微信号：beansyxj </p>
          <p>更多惊喜等着你</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
}
</script>

<style scoped>
 *{
   padding: 0;
   margin: 0;
 }
 .body{
       background-color: #f0f0f0;
 }
 .wrap{
   /* width: 7.1rem; */
    margin: 0 auto;
    padding-bottom: 1rem;
    overflow: hidden;
 }
 .user-wrap{
   width: 100%;
 }
   .myinfo{
    min-height: 1.8rem;
    height: 7rem;
    text-align: center;
    padding-top: 1.5rem;
   }
   /* 头像 */
   .myinfo .myTimg{
    /* width: 1.2rem;
    height: 1.2rem; */
    width: 60px;
    height: 60px;
    position: relative;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
   }
   .myTimg img{
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    width: 100%;
    height: 100%;
   }
   /* 名称 */
   .myname{
      padding-top:2px;
   }
   /* 表格1 */
   .message-wrap{
    width: 90%;
    border: 1px solid #ddd;
    margin: 0 auto;
    background: #f0f0f0;
    border-radius: 5px;
    margin-bottom: .8rem;
   }
   /* 表格边框重新 */
   .mint-cell:last-child{
     background-size: 0% 1px
   }
   /* 微信 */
  .ma{
    width: 100%;
    height: 20%;
    text-align: center;
    /* padding-top:1.3rem; */
  }
  .ma img{
    width: 34%;
  }
  /* 文字 */
  .mytext{
    width: 100%;
    text-align: center;
        font-size: 12px;
    /* line-height: 12px; */
    color: #484848;
  }
  .mytext p{
    padding: top 5px;
  }
</style>
