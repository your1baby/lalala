<template>
  <div>
    <!-- 顶部个人信息框 -->
    <div class="ainfo"> 
      <img class="xx" src="../assets/me/x.png" alt="">
      <div class="meimg">
        <img src="../assets/me/toux.jpg" alt="">
        <p>冰糖雪梨
          <span>♀</span>
        </p> 
      </div>
      <p class="qm">个性签名性签名性签名性签名性签名性签名性签名性签名性签名性签名性签名性签名</p>
      <div>
         >
      </div>
    </div>
    <!-- 订单信息 -->
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
     padding-bottom: 3rem;
   }
   .meimg img{
     border-radius: 50%;
     width: 3.6rem;
   }

/* 签名 */
    .qm{
      color: #fff;
      text-align: center;
      font-size: 14px;
      width: 70%;
      margin: 0 auto;
      overflow: hidden;
    }
</style>